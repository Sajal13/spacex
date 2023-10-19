import {LaunchStatusOption ,LaunchDateOption} from './types'

export const launchStatusOptions: Array<LaunchStatusOption> = [
    {
        label: "By Launch Status",
        values: 1,
    },
    {
        label: "Successful",
        values: 2,
    },
    {
        label: "Unsuccessful",
        values: 3,
    },
];

export const launchDateOptions: Array<LaunchDateOption> = [
    {
        label: "By Launch Date",
        values: 1,
    },
    {
        label: "Last Week",
        values: 2,
    },
    {
        label: "Last Month",
        values: 3,
    },
    {
        label: "Last Year",
        values: 4,
    },
];
