import React, { createContext, useState, useContext, ReactNode } from "react";

interface AppContextProps {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    totalItems: number;
    setTotalItems: React.Dispatch<React.SetStateAction<number>>;
    itemsPerPage: number;
    setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
    isChecked: boolean;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
    launchStatus: string;
    setLaunchStatus: React.Dispatch<React.SetStateAction<string>>;
    launchDate: string;
    setLaunchDate: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [itemsPerPage, setItemsPerPage] = useState<number>(9);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [launchStatus, setLaunchStatus] = useState<string>('');
    const [launchDate, setLaunchDate] = useState<string>('')

    return (
        <AppContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                currentPage,
                setCurrentPage,
                totalItems,
                setTotalItems,
                itemsPerPage,
                setItemsPerPage,
                isChecked,
                setIsChecked,
                launchStatus,
                setLaunchStatus,
                launchDate,
                setLaunchDate
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
