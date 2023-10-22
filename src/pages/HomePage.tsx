import React, {useMemo} from "react";
import Cards from "../components/Cards";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <Filter />
            <Cards />
            <Pagination  />
            <Footer />
        </>
    );
};

export default HomePage
