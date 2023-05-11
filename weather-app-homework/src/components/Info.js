import React, { useEffect, useState } from "react";
import { MainContext, useContext } from "../context/Context";
function Info() {

  const{info}=useContext(MainContext)
console.log(info);

  return <div>{info.map((item, index)=>(
    <div key={index} className={`infoDiv ${index === 0 &&  "border"}`}>
      
      <div className="dateDiv">{`${item.date.slice(8)} / ${item.date.slice(5,7)} / ${item.date.slice(0,4)}`}</div>
      <img src={item.day.condition.icon}/>
      <div className="tempDiv">{Math.round(item.day.maxtemp_c)}°C / {Math.round(item.day.mintemp_c)}°C</div><br/>
    </div>
  ))}</div>;
}

export default Info;
