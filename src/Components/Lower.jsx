import React , {useEffect} from 'react'

export default function Lower({weather,main,wind }) {


  return (
    <div className="lower">
        <ul className="infos">
          <li className="info temp">
            <h2 className="title">ICON</h2>
            <img  alt="" src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}/>
          </li>
          <li className="info weather">
            <h2 className="title">WEATHER</h2>
            
            <p className="des update">{weather.description}</p>
          </li>
          <li className="info wind">
            <h2 className="title">WIND</h2>
            <span >{wind.speed}<span id="myspan">km/s</span></span>
          </li>
          <li className="info humidity">
            <h2 className="title">HUMIDITY</h2>
            <span >{main.humidity}<span id="myid">%</span></span>
          </li>
        </ul>
    </div>
  )
} 
