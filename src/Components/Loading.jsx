import React from 'react'
import loading from './../assets/image/loading.gif'
import './Loading.css'
export default function () {
  return (
    <div className='loading'>
  <img src={loading}  alt="loadinng..." />
    </div>
  )
}