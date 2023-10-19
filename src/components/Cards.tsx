import React, { useEffect, useState } from "react";
import { useAppContext } from "../AppContext";
import { fetchData } from "../lib/api";
import Loading from "./Loading";
import Error from "./Error";

const Cards: React.FC = () => {
    const { searchQuery, currentPage, itemsPerPage, setTotalItems } =
        useAppContext();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<any[]>([]);
    const [filteredData, setFilteredData] = useState<any[]>([]);

    useEffect(() => {
        fetchData()
            .then((data) => {
                setData(data);
                setTotalItems(data.length);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const filtered = data.filter((item) =>
            item.mission_name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(filtered);
        setTotalItems(filtered.length);
    }, [searchQuery, data]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error message={error} />;
    }

    const index0fLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = index0fLastPost - itemsPerPage;
    const rocketItems = filteredData.slice(indexOfFirstPost, index0fLastPost);
    
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {rocketItems.map((item) => (
                <div key={item.flight_number} className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{item.mission_name}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
