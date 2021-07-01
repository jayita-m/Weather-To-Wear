import React from 'react';

const CurrentWeather = (results) => {

    const getImageString = (icon) => {
        const iconCode = icon;
        return `https://www.weatherbit.io/static/img/icons/${iconCode}.png`
    }

    return (
        <div className="curWeath">
            <div className="cardTitle">CURRENTLY</div>
            <div className="locationTag">in {results.results.city_name}, {results.results.state_code}</div>

            <div className="parentTemp">
            <div className="tempTag"><span className="numTag">{results.results.temp}</span><br/><span className="descTag">TEMP</span></div>
            <div className="tempTag"><span className="numTag">{results.results.app_temp}</span><br/><span className="descTag">APP TEMP</span></div>
            <div className="tempTag"><span className="numTag">{Math.round(results.results.uv*100)/100}</span><br/><span className="descTag">UV INDEX</span></div>
            </div>

            <div className="windTag">Wind-Speed: <b>{results.results.wind_spd}</b> mph | Cloud Coverage: <b>{results.results.clouds}%</b></div>

            {results.results.weather!=undefined 
            ? <div className="parentWeather">
                <img src={getImageString(results.results.weather.icon)} height="100" width="100"></img> <br/>
                {results.results.weather.description} with <b>{results.results.rh}%</b> humidity<br/>
            </div> 
            : null}
        </div>

    );
    
}

export default CurrentWeather;