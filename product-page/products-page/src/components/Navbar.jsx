import React from "react";
import { productsNav } from "../data.jsx";

function Navbar() {
  return (
    <div className="bg-blue-300 flex flex-row justify-between  p-3 ">
      <h2 className="text-2xl text-semibold ">Products_Page</h2>
      <div className="flex  flex-row gap-5">
      {
        productsNav.map(navLink => (
            <a key={navLink.id}>{navLink.name}</a>
        )) }
        </div>
    </div>
  );
}

export default Navbar;
