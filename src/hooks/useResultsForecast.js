import { useState, useEffect } from "react";
import Weatherbit from "../API/Weatherbit";

export default () => {

    const [resultsForecast, setResultsForecast] = useState([]);
    const [errorMessageForecast, setErrorMessageForecast] = useState("");

    const searchApiForecast = async (cityName, stateName) => {
        try {
            const response = await Weatherbit.get('/forecast/daily', {
                params: {
                    key: '263e615e957346f1a1b57c8c24e16b6d',
                    city: cityName,
                    state: stateName,
                    units: 'I',
                    days: 1,
                }
            });
            //console.log("RESPONSE FROM API", response.data.data[0]);
            setResultsForecast(response.data.data[0])

        } catch (e) {
            setErrorMessageForecast("Something went wrong!");
        }
    };

    useEffect(() => {
        searchApiForecast("Dallas", "TX");
    }, []);
    //console.log("RESULTS", results);
    
    return [searchApiForecast, resultsForecast, errorMessageForecast];
};

