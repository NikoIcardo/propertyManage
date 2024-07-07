import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/";
import Login from "../login/login";

const MainContentArea = () => {
  const [user, setUser] = useState(
    useSelector((state: RootState) => state.user)
  );

  return (
    <div className="w-4/5 p-4">{!user.username ? <Login /> : <div></div>}</div>
  );
};

export default MainContentArea;
