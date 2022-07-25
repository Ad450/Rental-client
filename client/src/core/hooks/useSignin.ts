import { useState } from "react";

type signinType = {
  isSignin: boolean;
  onSigninClicked: () => void;
};

export type useSigninType = signinType;

export function useSignin<T extends signinType>(): T {
  const [isSignin, setIsSignin] = useState(false);

  const onSigninClicked = () => {
    setIsSignin(!isSignin);
    console.log(isSignin);
  };

  return { isSignin, onSigninClicked } as any;
}
