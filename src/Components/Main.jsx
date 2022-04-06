import React ,{useState} from 'react'
import WeatherInfo from './WeatherInfo'

export default function Main() {

const [inputValue ,setInputValue]= useState("");

  return (
<>

    <input type="text"  value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}  placeholder="inter city"  />
    <WeatherInfo inputValue={inputValue} />
</>
  )
}
