import { ReactNode, ReactElement } from 'react';
import { AuthContext, useAuthContext } from "../hooks/useAuthContext";

export function AuthProvider(children: ReactNode | any){
    const value = useAuthContext();

    return <AuthContext.Provider value ={value}>
        <>{children} </>
       </AuthContext.Provider>
}
