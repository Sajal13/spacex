import axios from "axios";


const url = 'https://api.spacexdata.com/v3/launches'
export const fetchData = async () => {
    try {
        const response = await axios.get(`${url}`)
        const data = await response.data
        return data;
    } catch (error) {
        throw new Error("Error fetching data");
    }
};
