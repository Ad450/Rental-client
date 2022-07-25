import { createContext, useContext } from "react";
type AuthState = {
  login: boolean;
  signin: boolean;
}

const authState :AuthState = {
  login : false,
  signin: false,
};
 export const AuthContext = createContext<AuthState>(authState);

export function useAuthContext(): AuthState {
  const value = useContext<AuthState>(AuthContext);
  return value;
}

