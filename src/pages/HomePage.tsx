import React from "react";
import Cards from "../components/Cards";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import { useAppContext } from "../AppContext";

const HomePage: React.FC = () => {
    const {totalItems, itemsPerPage} = useAppContext()
    console.log(totalItems)
    return (
        <>
            <Search />
            <Cards />
            <Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} />
        </>
    );
};

export default HomePage
