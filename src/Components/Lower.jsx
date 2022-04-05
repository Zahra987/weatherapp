import React from 'react'

export default function Lower() {
  return (
    <div className="lower">
    <ul className="infos">
      <li className="info temp">
        <h2 className="title">TEMPERATURE</h2>
        <span className='update'>Loading</span>
      </li>
      <li className="info weather">
        <h2 className="title">WEATHER</h2>
        <p className="main update">Loading</p>
        <p className="des update">Loading</p>
      </li>
      <li className="info wind">
        <h2 className="title">WIND</h2>
        <span className='update'>Loading</span>
      </li>
      <li className="info humidity">
        <h2 className="title">HUMIDITY</h2>
        <span className='update'>Loading</span>
      </li>
    </ul>
  </div>
  )
}
