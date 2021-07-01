//React
import React, { useState } from 'react';

//Hooks
import useResultsCurrent from '../hooks/useResultsCurrent';
import useResultsForecast from '../hooks/useResultsForecast';

//Components
import StatusBar from './StatusBar';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';
import Credits from './Credits';
import BuiltOutfit from './BuiltOutfit';

const ShowInfo = () => {

    //HOOKS
    const[searchApi, results, errorMessage] = useResultsCurrent();
    const[searchApiForecast, resultsForecast, errorMessageForecast] = useResultsForecast();


    //HELPER FUNCTIONS
    const processAPI = () => {
        searchApi(document.getElementById("city").value, document.getElementById("state").value);
        searchApiForecast(document.getElementById("city").value, document.getElementById("state").value);
    }


    //RETURN
    return (
        <div>
            <div className="SearchBar" >
            I'm currently in <input type="text" id="city" placeholder="Dallas"/><input type="text" id="state" placeholder="TX"/> 
            <input id="GetDressing" type="button" value="Change Location" onClick={processAPI} />
            </div>

            {resultsForecast.weather!=undefined ? <StatusBar code={resultsForecast.weather.code} /> : null}

            <div className="row">
                    <div className="column1">
                        <CurrentWeather results={results} /> <br/>
                        <ForecastWeather resultsForecast={resultsForecast}/> <br/>
                        <Credits />
                    </div>
                <div className="column2">
                    {resultsForecast.weather!=undefined ? <BuiltOutfit temp={resultsForecast.temp} /> : null}
                    <br/>
                    <br/>
                </div>
            </div>
            
        </div>
    );

}
export default ShowInfo;