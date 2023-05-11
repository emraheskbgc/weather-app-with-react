import axios from "axios";
import React, { useState } from "react";
import { MainContext, useContext } from "../context/Context";

function Form() {
    const { setInfo, city, setCity} = useContext(MainContext)
   
    const handleChange= async () =>{
        const API_KEY="a609600f642748a299e183022230705"
        const baseURL =`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&lang=tr&days=7`;
        await axios(baseURL).then((res)=>setInfo(res.data.forecast.forecastday))
       
    }
  
  return <div>
    <h1 className="title">Hava Durumu</h1>
    <form onSubmit={(e) => {
        e.preventDefault();
        if (city!=="") {
            handleChange()
        }else{
            alert("Lütfen Şehir Adı Giriniz")
        }
        
    }}>
        <div>
            <input type="text" 
            placeholder="Şehir Giriniz"
            onChange={(e)=>setCity(e.target.value)}
            value={city}
            className="input" 
        
            />
            <button type="submit" className="btn">
                Ara
            </button>
            
        </div>
        
    </form>
    
  </div>;
}

export default Form;
