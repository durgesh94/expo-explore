import React, { createContext, useContext } from "react";

export interface IUseAuth {

}

const AuthContext = createContext({});

export const useAuth = () => useContext<IUseAuth>(AuthContext as any);

export const AuthProvider: React.FC = ({ children }) => {

    return (
        <AuthContext.Provider value={{

        }}>
            {children}
        </AuthContext.Provider>
    )
}