import React , {useEffect , useState, useRef} from 'react'
import Clock from './Clock'
import Loading from './Loading';
import Lower from './Lower'
import Upper from './Upper'


export default function WeatherInfo() {

const inputRef= useRef();

const [weather,setWeather]= useState({});
const [main,setMain]= useState({});
const [wind,setWind]= useState({});

const [inputValue ,setInputValue]= useState("tehran");

const [load,setLoad]=useState(true);

useEffect(()=>{

  setLoad(true);

  inputRef.current.focus();

  let response;
  let firstRequest = new XMLHttpRequest;
  firstRequest.open('GET',
 `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=df43957eadf16c0fcd9137202efe720f`)
  
  firstRequest.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
      
      response=JSON.parse(this.response);
      
      setWeather(response.weather[0]);
      setMain(response.main);
      setWind(response.wind);
      setLoad(false)
    }
   
  }
  firstRequest.send();

},[inputValue])


  return (
    <div className="widget"> 
    <label>ENTER CITY : </label>
    <input ref={inputRef} type="text"  value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}  />
    {(load)?<Loading/> :<><Clock />
    <Upper />
    <Lower  weather={weather} main={main} wind={wind} /> </>}
  </div>
  )
}
