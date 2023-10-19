import React from "react";

type Options = {
    label: string;
    values: number;
};

type Props = {
    options: Array<Options>;
    selectedValue: string;
    handleSelectItemChange: (e: any) => void;
};

const AppSelectInput = ({
    options,
    selectedValue,
    handleSelectItemChange,
}: Props) => {
    return (
        <>
            <select
                name="selectBox"
                id="selectBox"
                value={selectedValue}
                onChange={handleSelectItemChange}
            >
                {options.map((option) => (
                    <option key={option.values} value={option.values}>
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    );
};

export default AppSelectInput;
