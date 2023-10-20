import React, { useState } from "react";
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
        <div className="row mb-3">
            <div className="col-3">
                <div className="input-group">
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
            <div className="col-9 text-end">
                <div className="">
                    <input
                        type="checkbox"
                        name="upcomint"
                        id="upcoming"
                        className="form-check-input"
                        checked={isChecked}
                        onChange={handleCheckChange}
                    />
                    <label className="form-check-label">
                        Show upcoming only
                    </label>
                </div>
                <div className="d-flex justify-content-end">
                    <div>
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
