import React, { useState, useEffect } from 'react';

const ForecastWeather = (resultsForecast) => {
    //console.log("FORECAST WEATHER", resultsForecast.resultsForecast.clouds);

    const getImageString = (icon) => {
        const iconCode = icon;
        return `https://www.weatherbit.io/static/img/icons/${iconCode}.png`
    }

    return (
        <div className="curWeath">
            <div className="cardTitle">FORECAST</div>
            <div className="locationTag">for CITY, STATE</div>


            <div className="parentTemp">
                <div className="tempTag"><span className="numTag">{resultsForecast.resultsForecast.temp}</span><br/><span className="descTag">AVG TEMP</span></div>
                <div className="tempTag"><span className="numTag">{resultsForecast.resultsForecast.max_temp}</span><br/><span className="descTag">MAX</span></div>
                <div className="tempTag"><span className="numTag">{resultsForecast.resultsForecast.min_temp}</span><br/><span className="descTag">MIN</span></div>
            </div>

            <div className="rainTag">Today's chances of rain are <b>{resultsForecast.resultsForecast.pop}%</b></div>

            {resultsForecast.resultsForecast.weather!=undefined 
            ? <div className="parentWeather">
                 <img src={getImageString(resultsForecast.resultsForecast.weather.icon)} height="100" width="100"></img> <br/>
                {resultsForecast.resultsForecast.weather.description} <br/>
            </div> 
            : null}
        </div>

    );
    
}

export default ForecastWeather;