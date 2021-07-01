import { useState, useEffect } from "react";
import Weatherbit from "../API/Weatherbit";

export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (cityName, stateName) => {
        try {
            const response = await Weatherbit.get('/current', {
                params: {
                    key: '263e615e957346f1a1b57c8c24e16b6d',
                    city: cityName,
                    state: stateName,
                    units: 'I'
                }
            });
            setResults(response.data.data[0])

        } catch (e) {
            setErrorMessage("Something went wrong!");
        }
    };

    useEffect(() => {
        searchApi("Dallas", "TX");
    }, []);
    //console.log("RESULTS", results);
    
    return [searchApi, results, errorMessage];
};

