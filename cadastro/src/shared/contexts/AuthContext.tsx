import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { authService } from "../services/api/auth/AuthService";


interface IAuthContextData {
    logout: () => void;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<string | void>
}

const AuthContext = createContext({} as IAuthContextData);

const LOCAL_STORAGE_KEY = 'APP_ACCESS_TOKEN';

interface IAuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {

    const [accesToken, setAccesToken] = useState<string>();

    useEffect(() => {
        const accesToken = localStorage.getItem(LOCAL_STORAGE_KEY);

        if (accesToken) {
            setAccesToken(JSON.parse(accesToken));
        } else {
            setAccesToken(undefined);
        }
    }, []);

    // salvando no local storage
    const handleLogin = useCallback(async (email: string, password: string) => {
        const result = await authService.auth(email, password);
        if (result instanceof Error) {
            return result.message;
        } else {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(result.accessToken));
            setAccesToken(result.accessToken);
        }
    }, []);

    //removendo do local storage
    const handleLogout = useCallback(() => {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        setAccesToken(undefined);
    }, []);

    const isAuthenticated = useMemo(() => !!accesToken, [accesToken]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login: handleLogin, logout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
}
