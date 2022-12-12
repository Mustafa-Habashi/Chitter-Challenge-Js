
import axios from "axios";

export const getData = async (setData, setErrorStatus) => {
    try {
        const response = await axios.get(`http://localhost:4000/allpeeps`);
        setData(response.data);
    }
    catch (error) {
        setErrorStatus(error.message);
    }
}