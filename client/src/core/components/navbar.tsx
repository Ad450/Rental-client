import React from "react";
import { StyledButton } from "./styles/app_styles";
import { useSignin, useSigninType } from '../hooks/useSignin';
import { Signin } from './signin';
import { useCloseSignin } from '../hooks/useCloseSignin';

export default function Navbar(){
  const {isSignin, onSigninClicked} = useSignin<useSigninType>();
  useCloseSignin();

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
            
            <li className="px-2">Login</li>
           
            <StyledButton backgroundColor="white" color="grey" paddingX="25px" paddingY="10px" borderRadius="10px" onClick={(e)=> onSigninClicked()}>SignIn</StyledButton>
            {isSignin? <Signin /> : <div></div>}
          </ul>
        </div>
      </div>
    );
}


