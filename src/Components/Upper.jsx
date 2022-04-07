import React ,{useState,useEffect} from 'react'

export default function Upper({cityName}) {

const [date,setDate]=useState(new Date());

useEffect(()=>{
  setInterval(()=>{setDate(new Date())},1000)
})

  return (
    <div className="upper">
      <div className="date">{cityName}</div>
      <div className="year">{date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear()}</div>
      <div className="place update">{date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds()}</div>
    </div>
  )
}
