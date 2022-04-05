import React from 'react'
import Clock from './Clock'
import Lower from './Lower'
import Upper from './Upper'


export default function WeatherInfo() {
  return (
    <div className="widget"> 
    <Clock/>
    <Upper/>
    <Lower/>
  </div>
  )
}
