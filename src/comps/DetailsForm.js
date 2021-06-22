import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';

const DetailsForm = (props) => {
    
    const [clothType, setClothType] = useState("");
    const [len, setLen] = useState("");

    const handleChangeClothes = (e) => {
        setClothType(e.target.value);
    }

    const handleChangeLen = (e) => {
        setLen(e.target.value);
    }

    const callBackMethod = () => {
        props.sendData(clothType, len);
    }

    console.log("CLOTH TYPE == " + clothType + " | LENGTH == " + len );
    return (
        <div className="formSpace">
        Type:
        <input type="radio" value="Top" name="cloth_type" onChange={handleChangeClothes}/> Top
        <input type="radio" value="Bottoms" name="cloth_type" onChange={handleChangeClothes}/> Bottoms
        <input type="radio" value="Shoes" name="cloth_type" onChange={handleChangeClothes}/> Shoes
        <br/>
        <br/>
        Length: 
        <input type="radio" value="Full" name="len_type" onChange={handleChangeLen}/> Full
        <input type="radio" value="Half" name="len_type" onChange={handleChangeLen}/> Half
        <br/>
        <br/>
        <input className="submitButton" type="button" value="Add To Closet" onClick={callBackMethod} />
        </div>
        
    )
}

export default DetailsForm;
