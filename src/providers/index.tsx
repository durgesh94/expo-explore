import React, { useContext, createContext, useState, useEffect } from "react";
import { AsyncStorage, ActivityIndicator } from "react-native";

interface IAuth {
    isSignIn: boolean;
    isFirst: boolean;
    init: boolean;
    user: any;
    onLogin(): any;
    onLogout(): any;
    getStarted(): any;
}

const AuthContext = createContext({});
export const useAuth = () => useContext<IAuth>(AuthContext as any);

export const AuthProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState<any>(null);
    const [isFirst, setIsFirst] = useState(true);
    const [loading, setLoading] = useState(false);
    const [init, setInit] = useState(false);

    const getStarted = async () => {
        setIsFirst(false);
        await AsyncStorage.setItem('isFirst', "true");
    }

    const onLogin = async () => {
        await AsyncStorage.setItem('token', "Durgesh");
        setUser("Durgesh");
    }

    const onLogout = async () => {
        await AsyncStorage.removeItem('token');
        setUser(null);
    }

    useEffect(() => {
        setLoading(true);
        (async () => {
            await AsyncStorage.getItem('token').then(resp => {
                (resp === null) ? setUser(null) : setUser(resp);
            })
            await AsyncStorage.getItem('isFirst').then(resp => {
                (resp === null) ? setIsFirst(true) : setIsFirst(false)
                setInit(true);
            });
        })();
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{
            isSignIn: !!user,
            isFirst,
            init,
            user,
            onLogin,
            onLogout,
            getStarted
        }}>
            {children}
            {loading && <ActivityIndicator
                color="red"
                size="large"
            />}
        </AuthContext.Provider>
    )
}