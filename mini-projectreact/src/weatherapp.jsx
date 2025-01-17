import Searchbox from "./searchbox";
import Infobox from "./infobox.jsx"
import { useState } from "react";
export default function Weatherapp(){
    let [weatherinfo,setWeatherinfo]=useState(
        {
            city:"Mumbai",
            feelslike: 10.82,
            humidity: 100,
            maxtemp: 11.05,
            mintemp: 11.05,
            pressure: 1021,
            temp: 11.05,
            weather: "fog"
        }
    )
    let updateinfo=(newinfo)=>{
      setWeatherinfo(newinfo);
    }
    return (
        <div style={{textAlign:"center"}} >
            <h3>Weather App </h3>  
            <Searchbox updateinfo={updateinfo}/>
            <Infobox info={weatherinfo}/>
        </div>
    );
}