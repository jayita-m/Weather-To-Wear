import React, { useState } from 'react';
import DetailsForm from './DetailsForm';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [fileImg, setFileImg] = useState(null);
  const [error, setError] = useState(null);
  const[cloth, setCloth] = useState("");
  const[len, setLen] = useState("");

  const[analyze, setAnalyze] = useState(false);
  
  const types = ['image/png', 'image/jpeg'];

  const getDatafromChild = (val1, val2) => {
    console.log("HERE --------> " + val1 + " AND HERE-------> " + val2);
    setCloth(val1);
    setLen(val2);
  }

  console.log("Cloth = " + cloth + " | Length = " + len);

  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setFileImg(URL.createObjectURL(selected));
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };


  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { !file &&  <div className="fillerText"><br/><br/><br/>Click the '+' above and start uploading!</div> }
        { file && <img src={fileImg} className="displayedImg"></img>}
        { file && <DetailsForm sendData={getDatafromChild}/>}

        { cloth && len && 
        <ProgressBar 
          file={file} setFile={setFile} 
          cloth={cloth} setCloth={setCloth}
          len={len} setLen={setLen}
        />}

      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </form>
  );
}

export default UploadForm;