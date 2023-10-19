import React, {useMemo} from "react";
import Cards from "../components/Cards";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <Filter />
            <Cards />
            <Pagination  />
        </>
    );
};

export default HomePage
