import React from "react";
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
        setIsChecked(prev => !prev);
    };
    const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLaunchStatus(e.target.value)
    };
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLaunchDate(e.target.value);
    };
    return (
        <div className="mb-3">
            <div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleChange}
                />
            </div>
            <div>
                <div>
                    <input
                        type="checkbox"
                        name="upcomint"
                        id="upcoming"
                        checked={isChecked}
                        onChange={handleCheckChange}
                    />
                    <label htmlFor="upcoming">Show upcoming only</label>
                </div>
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
    );
};

export default Filter;
