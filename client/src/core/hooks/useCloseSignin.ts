import { useSignin, useSigninType } from "./useSignin";
import { useEffect } from "react";

type closeSigninType = {
  closeSignin: () => void;
};

export const useCloseSignin = (): closeSigninType => {
  const { isSignin, onSigninClicked } = useSignin<useSigninType>();

  console.log(isSignin);
  const closeSignin = () => {
    onSigninClicked();
    console.log(isSignin);
  };
  return { closeSignin };
};
