import React from 'react';

const StatusBar = (props) => {
    return (
        <div id="WeatherStatus">
            {props.code <= 522 
            ? <div>
                Oh! &#128563; It's going to rain today. Don't forget your umbrella! &#9748;
            </div>
            : null
            }

            {props.code <= 623 && props.code>=600 
            ? <div>
                Brr! &#129398; It's going to snow today. Don't forget a cozy scarf! &#127784;&#65039;
            </div>
            : null
            }

            {props.code <= 751 && props.code>=700 
            ? <div>
                Hey! &#9888;&#65039; It's going to be misty/foggy today. Drive safe! &#128663;
            </div>
            : null
            }

            {props.code <= 804 && props.code>=801 
            ? <div>
                Hmm... &#129300; It might be cloudy today but don't let that get you gloomy &#x1F60A;
            </div>
            : null
            }

            {props.code == 800
            ? <div>
                Oh yay &#9728;&#65039; It's going to be sunny out today, make the most of it! &#x1F60E;
            </div>
            : null
            }


        </div>
    );
};

export default StatusBar;