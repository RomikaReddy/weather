import React, { useState } from "react";
import search from '../Assets/search.png';
import clear  from '../Assets/clear.png';
import cloud from '../Assets/cloud.png';
import drizzle from '../Assets/drizzle.png';
import humidity from'../Assets/humidity.png';
import wind from '../Assets/wind.png';
import rain from '../Assets/rain.png';
import snow from '../Assets/snow.png';
import { AiFillStepForward } from 'react-icons/ai';
import Addlocation from "./addlocation";
import {BsClipboard2DataFill} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export{}
const Weather = () => {

  const navigate=useNavigate();
  let api_key = "aad849d5829fc98bd221b8069576fceb";
  const [wicon, setWicon] = useState(clear);
  const [searchedLocations, setSearchedLocations] = useState([]);

  const searchfunc = async () => {
    const element = document.getElementsByClassName(
      "cityinput"
    ) as HTMLCollectionOf<HTMLInputElement>;
    if (element && element[0] && element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metrics&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-per");
    const wind = document.getElementsByClassName("wind-rate");
    const temp = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    const mintemp=document.getElementsByClassName("temp-min");
    const maxtemp=document.getElementsByClassName("temp-max");  

    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = data.wind.speed + "m/s";
    temp[0].innerHTML = (data.main.temp - 273.15).toFixed(2) + "<span style='color: GrayText;'>°C</span>";
    location[0].innerHTML = data.name;
 
    maxtemp[0].innerHTML=(data.main.temp_max-273.15).toFixed(2);  
    mintemp[0].innerHTML=(data.main.temp_min-273.15).toFixed(2)+"<span style='color:black;'>/</span>";

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "o1n") {
      setWicon(clear);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "o2n"
    ) {
      setWicon(cloud);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "o3n"
    ) {
      setWicon(drizzle);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "o4n"
    ) {
      setWicon(drizzle);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "o9n"
    ) {
      setWicon(rain);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWicon(rain);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWicon(snow);
    } else {
      setWicon(clear);
    }
  };
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityinput" placeholder="search"></input>
        <div
          className="search-icon"
          onClick={() => {
            searchfunc();
          }}
        >
          <img src={search} alt="search" ></img>
          
          
        </div>
        <div className="add-icon">
          <button className="nextpageicon"
         onClick={()=>{
          const element = document.getElementsByClassName(
            "cityinput"
          ) as HTMLCollectionOf<HTMLInputElement>;
          const cityName = element[0].value;
          navigate(`/add?city=${cityName}`);
          // navigate("/add");

        }} ><AiFillStepForward />

        </button>
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" style={{width:'80px'}}></img>
        
      </div>
      <div className="weather-temp">24<span style={{color:"GrayText"}}>°C</span>
      </div>
      <div className="temp-max">32.73</div>
      <div className="temp-min" >29.54/</div>
      <div className="weather-location">Chennai</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity} alt="wuinngdg" className="icon"></img>
          <div className="data">
            <div className="humidity-per">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind} alt="tegehh" className="iconwind"></img>
          <div className="data">
            <div className="wind-rate">18</div>
            <div className="text">Wind</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;