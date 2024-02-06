import React, { createContext, useContext, useState } from "react";
import { BlockLike } from "typescript";


interface AuthProps {
    authState?: { token: string | null };
    onRegister?: (identificator: string, password: string) => Promise<any>;
    onLogin?: (identificator: string, password: string) => Promise<any>;
    onLogout?: () => Promise<any>;
}

const TOKEN_KEY = ''
export const API_URL = ''
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }: any) => {
    const [autState, setAutState] = useState<{
        token: string | null;
        authenticated: boolean | null;
    }>({
        token: null,
        authenticated: null
    })

    const value = {}
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}