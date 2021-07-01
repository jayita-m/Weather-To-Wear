import React, { useState } from 'react';
import TopPicture from './TopPicture';
import BottomsPicture from './BottomsPicture';
import ShoesPicture from './ShoesPicture';

const BuiltOutfit = (props) => {

    const [random, setRandom] = useState(false);

    return (
        <div className="curWeath">
            <div className="outfitTitle">OUTFIT</div>
            <div className="locationTag">Your #OutfitOfTheDay</div>
            {
                props.temp >= 68 
                ? <div className="parentOutfit">
                <TopPicture dbName="TopHalf" />
                <BottomsPicture dbName="BottomsHalf" />
                <ShoesPicture dbName="ShoesHalf" />
                </div>
                : <div className="parentOutfit">
                <TopPicture dbName="TopFull"/>
                <BottomsPicture dbName="BottomsFull" />
                <ShoesPicture dbName="ShoesFull" />
                </div>
            }
            <br/>
            <div>
            <input id="randomButton" type="button" value="SHUFFLE" onClick={random==false ? () => setRandom(true) : setRandom(false)} /> <br/>
            </div>
        </div>
    );
}

/*

            */

//IDEAS: Create new component picture, pass in docs as a prop, extract id/url out of that 

export default BuiltOutfit;