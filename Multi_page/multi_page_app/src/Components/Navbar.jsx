import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-blue-200 p-6 flex flex-row  justify-between">
      
      <div> <h2 className="text-2xl">Multi-Page-App</h2></div>
     
     <div>
      <ul className="flex justify-end gap-x-5  ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
      </div>
    </div>
  );
}

export default Navbar;
