import React from "react";
import { AuthProvider } from "./providers";
import { HomeStack } from "./routes";
import { ProtectedRoute } from "./components/ProtectedRoutes";

export const Main: React.FC = () => {

    return (
        <AuthProvider>
            <ProtectedRoute>
                <HomeStack />
            </ProtectedRoute>
        </AuthProvider>
    )
}