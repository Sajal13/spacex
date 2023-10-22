import React from "react";
import { BsSearch } from "react-icons/bs";
import { useAppContext } from "../AppContext";
import AppSelectInput from "./AppSelectInput";
import { launchStatusOptions, launchDateOptions } from "../lib/constant";

const Filter: React.FC = () => {
    const {
        searchQuery,
        setSearchQuery,
        isChecked,
        setIsChecked,
        launchStatus,
        setLaunchStatus,
        launchDate,
        setLaunchDate,
    } = useAppContext();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked((prev) => !prev);
    };
    const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLaunchStatus(e.target.value);
    };
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLaunchDate(e.target.value);
    };
    return (
        <div className="row">
            <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-5 d-flex align-items-center mt-md-4 mt-lg-0 ">
                <div className="input-group ">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleChange}
                    />
                    <span className="btn btn-primary">
                        <i className="">
                            <BsSearch />
                        </i>
                    </span>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-9  mb-4 mb-lg-5 text-md-end">
                <div className="mb-3">
                    <input
                        type="checkbox"
                        name="upcomint"
                        id="upcoming"
                        className="form-check-input me-2"
                        checked={isChecked}
                        onChange={handleCheckChange}
                    />
                    <label className="form-check-label">
                        Show upcoming only
                    </label>
                </div>
                <div className="d-md-flex justify-content-md-end mb-5 mb-md-0">
                    <div className="mb-3 mb-lg-5 me-md-4">
                        <div>
                            <AppSelectInput
                                options={launchStatusOptions}
                                selectedValue={launchStatus}
                                handleSelectItemChange={handleStatusChange}
                            />
                        </div>
                    </div>
                    <div>
                        <AppSelectInput
                            options={launchDateOptions}
                            selectedValue={launchDate}
                            handleSelectItemChange={handleDateChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;
