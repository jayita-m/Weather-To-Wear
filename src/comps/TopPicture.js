import React, { useState } from 'react';
import GoogleVisionAI from './GoogleVisionAI';
import useFirestore from '../hooks/useFirestore';

var rNum = 0;

const TopPicture = (dbName) => {

    const { docs } = useFirestore(dbName.dbName);

    const prepareForLaunch = (docs) => {
        rNum = ranNum(docs);
        return docs[rNum].url;
    }

    return (
        <div>
            {docs[1]!=undefined
            ? <div>
                    <img className="outfitPic" src={prepareForLaunch(docs)} height="200" width="200"></img>
                    <GoogleVisionAI docs={docs} rNum={rNum}/>
                </div>
            : <div> {console.log("UNDEFINED BRO")} </div>
            }
        </div>
    );
};

const ranNum = (docs) => {
    const num = Math.floor(Math.random() * (docs.length));
    return num;
}

//<img className="outfitPic" src={docs[`${ranNum(docs)}`].url} height="200" width="200"></img>
//IDEA: Create a separate component for google vision api, pass in rNum and docs 

export default TopPicture;