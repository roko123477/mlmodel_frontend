import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Show = () => {
  let [predcls, setPredcls] = useState("");
  let [prob, setProb] = useState([]);
  let [imglink, setImglink] = useState("");

  let location = useLocation();
  useEffect(()=>{
    console.log(location.state);
  setPredcls(location.state.pred_class);
  setProb(location.state.prediction[0]);
  setImglink(location.state.user_image);
  },[])
  

  return (
    <div>
      <h1>{predcls}</h1>
      <h2>{prob}</h2>
      <img src={imglink} alt="" srcset="" />
    </div>
  );
};

export default Show;
