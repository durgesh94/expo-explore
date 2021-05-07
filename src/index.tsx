import React from 'react';
import { MyStack } from './navigations';
import { AuthProvider } from './providers/AuthProvider';
import { ThemeProvider } from './providers/ThemeProvider';

export interface SharedModuleProps {
    styles?: any;
}

export const SharedModule: React.FC<SharedModuleProps> = () => {
    return (
        <ThemeProvider>
            <AuthProvider>
                <MyStack />
            </AuthProvider>
        </ThemeProvider>
    );
}