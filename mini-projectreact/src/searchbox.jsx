import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css"
import { useState } from 'react';
import Infobox from "./infobox"
import Weatherapp from './weatherapp';
export default function Searchbox({updateinfo}){
        let [city,setCity]=useState("");
        let [err,seterr]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_key="ca37469409b81c5ad7253bee57e83bda";
    let getweatherinfo=async ()=>{
        try{
        let res=await fetch(`${API_URL}?q=${city}&appid=${API_key}&units=metric`);
       let jsonres= await res.json();
       console.log(jsonres);
       let result={
        city: city,
        temp:jsonres.main.temp,
        mintemp:jsonres.main.temp_min,
        maxtemp:jsonres.main.temp_max,
        humidity:jsonres.main.humidity,
        feelslike:jsonres.main.feels_like,
        pressure:jsonres.main.pressure,
        weather:jsonres.weather[0].description
       }
       console.log(result);
       return result;
    }catch(err){
      throw err;
    }
    }
    function change(event){
   setCity(event.target.value);
   seterr(false);
    }
    let sub=async (event)=>{
        event.preventDefault();
      try { console.log(city);
        setCity("");
       let newinfo=await getweatherinfo();
       seterr(false);
       updateinfo(newinfo);}
       catch(err){
        seterr(true);
       }
    }
    return (
        <div className='searchbox'>
            {/* <h3>Search for the Weather</h3> */}
            <form onSubmit={sub}>
            <TextField id="city" label="City name" variant="outlined" required value={city} onChange={change}/>
            <br /><br />
            <Button variant="contained" type='submit' className='btn'>Search</Button>
           
         {err && <p style={{color:"red"}}>No such place is there</p>} 
            </form>
            </div>
    );
}