import React from "react";

export default function Navbar(){
    return (
        <div className="flex items-baseline justify-between mt-2">
        <div className="text-lg text-black">
          <ul className="flex items-baseline">
            <img
              src="https://icon-library.com/images/transparent-house-icon/transparent-house-icon-13.jpg"
              alt=""
              className="w-4 '"
            />
            <h3>ProHouse</h3>
          </ul>
        </div>
        <div className="text-xs">
          <ul className="flex justify-between text-gray-800">
            <li className="mx-1">Home</li>
            <li className="mx-1">Listing</li>
            <li className="mx-1">Property</li>
            <li className="mx-1">Agents</li>
            <li className="mx-1">Blog</li>
          </ul>
        </div>
        <div className="text-xs">
          <ul className="flex items-baseline justify-between px-2 text-gray-800">
            <li>Contact</li>
            <li className="ml-2 rounded bg-white px-3 py-2 shadow-md">
              Signin
            </li>
          </ul>
        </div>
      </div>
    );
}
