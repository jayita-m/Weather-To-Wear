import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const GoogleVisionAI = (props) => {

    const randomNumber = props.rNum;

    const [ logo, setLogo ] = useState(null);

    const submitToGoogle = async () => {
        try {
          let body = JSON.stringify({
            requests: [
              {
                features: [
                  { type: "LOGO_DETECTION", maxResults: 5 }
                ],
                image: {
                  source: {
                    imageUri: props.docs[`${randomNumber}`].url
                    //imageUri: props.docs[0].url
                  }
                }
              }
            ]
          });
          let response = await fetch(
            "https://vision.googleapis.com/v1/images:annotate?key=" + "AIzaSyDj9r9mq5kJL0n4XLNSqbGP-MKPNv3iMMc",
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              method: "POST",
              body: body
            }
          );
          let responseJson = await response.json();
          if (responseJson.responses[0].logoAnnotations == undefined) {
            setLogo(null);
            return false;
          } else {
            const logoName = responseJson.responses[0].logoAnnotations[0].description;
            setLogo(logoName);
            return true;
          }
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div>
            {submitToGoogle() && console.log("LOGO", logo)}
            {logo!=null && <div className="logoName">{logo}!</div>}
            {logo!=null && <div><a href={`https://twitter.com/intent/tweet?text=[TEST TWEET] Hey guys, guess what! I'm wearing ${logo} today. Feeling awesome :)`} target="_blank"><div className="tweetButton"><FontAwesomeIcon className="iconFA" icon={faTwitter} /></div></a></div>}
            {logo!=null && <div><a href={`https://${logo}.com`} target="_blank"><div className="shopButton"><FontAwesomeIcon className="iconFA" icon={faShoppingCart} /></div></a></div>}
        </div>
    );
};

export default GoogleVisionAI;