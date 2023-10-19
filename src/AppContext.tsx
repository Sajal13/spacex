import React, { createContext, useState, useContext, ReactNode } from "react";

interface AppContextProps {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    totalItems: number;
    setTotalItems: React.Dispatch<React.SetStateAction<number>>;
    itemsPerPage: number;
    setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;

}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [totalItems, setTotalItems] = useState<number>(0);
    const [itemsPerPage, setItemsPerPage] = useState<number>(9);

    return (
        <AppContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                totalItems,
                setTotalItems,
                itemsPerPage,
                setItemsPerPage,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
