import React ,{useState,useEffect} from 'react'

export default function Upper({cityName,country,main}) {

const [date,setDate]=useState(new Date());

useEffect(()=>{
  setInterval(()=>{setDate(new Date())},1000)
})

  return (
    <div className="upper">
      <div className="date">{cityName},{country}</div>
      <div className="year">{date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear()} ,{date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds()}</div>
      <div className="place update">{main.temp}</div>
    </div>
  )
}
