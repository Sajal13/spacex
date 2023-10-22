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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            if (launchDate === "2") {
                matchesSearch =
                    matchesSearch &&
                    item.launch_date_utc >= new Date(lastWeek).toISOString();
            }
            if (launchDate === "3") {
                matchesSearch =
                    matchesSearch &&
                    item.launch_date_utc >= new Date(lastMonth).toISOString();
            }
            if (launchDate === "4") {
                const newDate = new Date();
                const currenYear: any = newDate.getUTCFullYear().toString();
                const lastYearFromCurrentYear = currenYear - 1;
                console.log(lastYearFromCurrentYear);
                matchesSearch =
                    matchesSearch &&
                    item.launch_year === lastYearFromCurrentYear;
            }
            if (isChecked === true) {
                matchesSearch = matchesSearch && item.upcoming === true;
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
        <div className="row g-4 mb-5">
            {rocketItems &&
                rocketItems.map((item, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4">
                        <div className="card text-center custom-card">
                            <div className="card-header custom-card-header">
                                <img
                                    src={item.links.mission_patch}
                                    alt=""
                                    className="card-img-top custom-card-image-top"
                                />
                            </div>
                            <div className="card-body">
                                <p className="card-text custom-card-text fs-6 mb-2">
                                    Launch Date:{" "}
                                    <span className="custom-text">
                                        {genrateDate(item.launch_date_utc)}
                                    </span>
                                </p>
                                <h4 className="card-title h4">
                                    {item.mission_name}
                                </h4>
                                <p className="card-text fs-7">
                                    {item.rocket.rocket_name}
                                </p>
                            </div>
                            <div className="card-footer custom-card-footer">
                                <p className="custom-footer-text">
                                    Launch Status:
                                </p>
                                <button
                                    className={`btn ${
                                        item.launch_success === true
                                            ? "btn-success"
                                            : "btn-danger"
                                    }`}
                                >
                                    {item.launch_success === true
                                        ? "Success"
                                        : "Failed"}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            {rocketItems.length === 0 && (
                <div className="row custom-row">
                    <div className="col-12 text-center">
                        <p className="text-warning fs-4 fw-semibold">
                            No Rocket Data to Show
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cards;
