import app from "../..";
import User from "../../db/schema/user/userSchema";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";

// create

const createUser = async (
  req: Request & {
    body: {
      username: string;
      password: string;
      email: string;
    };
  },
  res: Response
) => {
  const { username, password, email } = req.body;
  try {
    // check if user already exists
    let existingUser = await User.findOne({ username });
    if (existingUser) {
      res
        .status(400)
        .json({ msg: `User with username ${username} already exists.` });
    }

    existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ msg: `User with email ${email} already exists.` });
    }

    // create user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({ username, password: hashedPassword, email });

    await user.save();
    res.status(200).json({
      msg: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};
// read

const loginUser = async (
  req: Request & {
    body: {
      username: string;
      password: string;
      email: string;
    };
  },
  res: Response
) => {
  const { username, password, email } = req.body;

  try {
    const existingUser =
      (await User.findOne({ username })) || (await User.findOne({ email }));

    if (!existingUser) {
      res.status(401).json({
        msg: "Invalid Credentials",
      });
    }
    const passwordCorrect = bcrypt.compare(
      password,
      existingUser?.password || ""
    );
    if (!passwordCorrect) {
      res.status(401).json({
        msg: "Invalid Credentials",
      });
    }

    res.status(200).json({
      user: { username: existingUser?.username, email: existingUser?.email },
    });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};

// update

// delete

// setup routes
const setupUserRoutes = () => {
  app.post("/api/user/create", createUser);
  app.post("/api/user/login", loginUser);
};

export default setupUserRoutes;
