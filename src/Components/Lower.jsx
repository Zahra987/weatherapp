import React , {useEffect} from 'react'

export default function Lower({weather,main,wind }) {
useEffect(()=>{
  if(main.temp){
    main.humidity=main.humidity+"%";
    main.temp=main.temp+ "C";
    
  }
  
},[main])


  return (
    <div className="lower">
        <ul className="infos">
          <li className="info temp">
            <h2 className="title">ICON</h2>
            <img  alt="" src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}/>
          </li>
          <li className="info weather">
            <h2 className="title">TEMP , WEATHER</h2>
            <p className="main update">{main.temp}</p>
            <p className="des update">{weather.description}</p>
          </li>
          <li className="info wind">
            <h2 className="title">WIND</h2>
            <span >{wind.speed}</span>
          </li>
          <li className="info humidity">
            <h2 className="title">HUMIDITY</h2>
            <span >{main.humidity}</span>
          </li>
        </ul>
    </div>
  )
} 
