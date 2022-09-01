import React, { createContext, useCallback, useContext, useState } from "react";

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

/* método usado na aula 5.1 pra corrigir erro da atualização da versão */
interface IDrawerProps {
    children: React.ReactNode;
}

export const AppDrawerProvider: React.FC<IDrawerProps> = ({ children }) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);


    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
            {children}
        </DrawerContext.Provider>
    );
}