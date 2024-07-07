import React, { useState, ChangeEvent, FormEvent } from "react";

interface LoginData {
  username: string;
  password: string;
}

interface SignupData {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}

const Login: React.FC = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    username: "",
    password: "",
  });

  const [signupData, setSignupData] = useState<SignupData>({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const [isSignup, setIsSignup] = useState(false);

  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add authentication logic for login
    console.log("Login:", loginData);
    // Reset login form after submission
    setLoginData({ username: "", password: "" });
  };

  const handleSignupSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add signup logic here (e.g., validation)
    console.log("Signup:", signupData);
    // Reset signup form after submission
    setSignupData({
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
    });
  };

  const toggleForm = () => {
    setIsSignup(!isSignup); // Toggle signup state
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-full max-w-md">
        <div className="mb-8">
          {isSignup ? (
            <form
              onSubmit={handleSignupSubmit}
              className="bg-gradient-to-b from-darkblue to-lightpurple shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <h2 className="text-2xl font-bold mb-4 text-center text-white">
                Sign Up
              </h2>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="signup-username"
                >
                  Username:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500"
                  id="signup-username"
                  type="text"
                  name="username"
                  value={signupData.username}
                  onChange={handleSignupChange}
                  placeholder="Username"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="signup-email"
                >
                  Email:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500"
                  id="signup-email"
                  type="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="signup-password"
                >
                  Password:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500"
                  id="signup-password"
                  type="password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  placeholder="Password"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="signup-confirm-password"
                >
                  Confirm Password:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500"
                  id="signup-confirm-password"
                  type="password"
                  name="confirmPassword"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  placeholder="Confirm Password"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          ) : (
            <form
              onSubmit={handleLoginSubmit}
              className="bg-gradient-to-b from-darkblue to-lightpurple shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <h2 className="text-2xl font-bold mb-4 text-center text-white">
                Login
              </h2>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="login-username"
                >
                  Username:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500"
                  id="login-username"
                  type="text"
                  name="username"
                  value={loginData.username}
                  onChange={handleLoginChange}
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="login-password"
                >
                  Password:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500"
                  id="login-password"
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          )}

          <div className="flex justify-center">
            <button
              className="text-blue-500 hover:text-blue-700 font-semibold focus:outline-none"
              onClick={toggleForm}
            >
              {isSignup
                ? "Already have an account? Login"
                : "Create an account"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
