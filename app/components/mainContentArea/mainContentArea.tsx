import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/";

const MainContentArea = () => {
  const [user, setUser] = useState(useSelector((state: RootState) => state));

  return (
    <div className="w-4/5 p-4">
      <h1>Main Content</h1>
      <p>This is the main content area.</p>
    </div>
  );
};

export default MainContentArea;
