import React from 'react';
import useFirestore from '../hooks/useFirestore';

const BottomsPicture = (dbName) => {

    const { docs } = useFirestore(dbName.dbName);

    return (
        <div>
            {docs[1]!=undefined
            ? <div>
                    <img className="outfitPic" src={docs[`${ranNum(docs)}`].url} height="200" width="200"></img>
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

export default BottomsPicture;