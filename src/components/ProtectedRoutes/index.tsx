import React from "react";
import { useAuth } from "../../providers";
import { AuthStack } from "../../routes";
import { Intro } from "../../screens/Intro";
import { ActivityIndicator } from "react-native";

export const ProtectedRoute: React.FC = ({ children }) => {

    const { isSignIn, isFirst, init } = useAuth();

    console.log(isSignIn);
    console.log(isFirst);

    if (!init) return <ActivityIndicator color="red" size="large" style={{flex: 1}}/>

    return (
        <>
            {
                isFirst ? <Intro /> :
                    !isSignIn ? <AuthStack /> : children
            }
        </>
    )
}