import React, { useEffect, useState } from "react";
import { useAppContext } from "../AppContext";
import { fetchData } from "../lib/api";
import Loading from "./Loading";
import Error from "./Error";

const Cards: React.FC = () => {
    const {
        searchQuery,
        currentPage,
        itemsPerPage,
        setTotalItems,
        isChecked,
        launchStatus,
        launchDate,
    } = useAppContext();
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
        let isSuccess: any;
        if (launchStatus === "2") {
            isSuccess = true;
        } else if (launchStatus === "3") {
            isSuccess = false;
        } else {
            isSuccess = "";
        }

        const filtered = data.filter((item) => {
            const date = new Date(item.launch_date_utc);
            const lastWeek = new Date();
            lastWeek.setDate(lastWeek.getDate() - 7);
            const lastMonth = new Date();
            lastMonth.setMonth(lastMonth.getMonth() - 1);
            const lastYear = new Date();
            lastYear.setFullYear(lastYear.getFullYear() - 1);

            let matchesSearch = item.rocket.rocket_name
                .toLowerCase()
                .includes(searchQuery.toLowerCase());

            if (isSuccess === true) {
                matchesSearch = matchesSearch && item.launch_success === true;
            }
            if (isSuccess === false) {
                matchesSearch = matchesSearch && item.launch_success === false;
            }
            if (launchDate == "2" && lastWeek <= date) {
                matchesSearch =
                    matchesSearch &&
                    item.launch_date_utc >= new Date(lastWeek).toISOString();
            }
            if (launchDate === "3" && lastMonth <= date) {
                matchesSearch =
                    matchesSearch &&
                    item.launch_date_utc >= new Date(lastMonth).toISOString();
            }
            if (launchDate === "4" && lastYear <= date) {
                matchesSearch =
                    matchesSearch &&
                    item.launch_date_utc >= new Date(lastMonth).toISOString();
            }
            if (isChecked === true) {
                matchesSearch = matchesSearch && item.upcoming == true;
            }
            return matchesSearch;
        });
        setFilteredData(filtered);
        setTotalItems(filtered.length);
    }, [searchQuery, data, launchStatus, launchDate, isChecked]);

    const genrateDate = (launch_date_ute: any) => {
        const launchDate = new Date(launch_date_ute);
        const MONTHS_NAME = [
            "Jan",
            "Fab",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        const day = launchDate.getDate();
        const month = launchDate.getMonth();
        const fullYear = launchDate.getFullYear();

        return `${day} ${MONTHS_NAME[month - 1]}, ${fullYear}`;
    };

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
        <div className="row g-4">
            {rocketItems.map((item,index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                    <div className="card text-center">
                        <div className="card-header">
                            <img
                                src={item.links.mission_patch}
                                alt=""
                                className="card-img-top"
                            />
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Launch Date: {genrateDate(item.launch_date_utc)}
                            </p>
                            <h4 className="card-title h4">
                                {item.mission_name}
                            </h4>
                            <p className="card-text">
                                {item.rocket.rocket_name}
                            </p>
                        </div>
                        <div className="card-footer">
                            <p className="card-text">Launch Status:</p>
                            <a
                                href="#"
                                className={`btn ${
                                    item.launch_success === true
                                        ? "btn-success"
                                        : "btn-danger"
                                }`}
                            >
                                {item.launch_success === true
                                    ? "Success"
                                    : "Failed"}
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
