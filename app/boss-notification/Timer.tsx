'use client'

import React, { useState } from "react";

const Timer = () => {
  const [time, setTime] = useState("00:00:00")
  const [hours, setHours] = useState("00")
  const [minutes, setMinutes] = useState("00")
  const [seconds, setSeconds] = useState("00")
  const [amPm, setAmPm] = useState("AM")


  Date.prototype.amPm = function () {
    let h = this.getHours() < 12 ? "오전" : "오후";
    return h;
  }

  const currentTimer = () => {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")
    const amPm = date.amPm()
    // setTime(`${hours}:${minutes}:${seconds}`)
    setAmPm(amPm)
    setHours(`${hours}`)
    setMinutes(`${minutes}`)
    setSeconds(`${seconds}`)
  }

  const startTimer = () => {
    setInterval(currentTimer, 1000)
  }

  startTimer()

  return (
    <div className="py-6 flex flex-col border-[1px] border-gray-700 w-full rounded-lg mt-4 items-center justify-center">
      <div className="flex text-lg font-medium mb-4">
        테일즈위버 시간
      </div>
      <div className="flex font-medium">
        {/* {time} */}
        <span className={`mr-2`}>{hours}</span>:
        <span className={`mx-2`}>{minutes}</span>:
        <span className={`${seconds >= 50 ? "text-red-500" : ""} ml-2`}>{seconds}</span>
        {<span className="ml-2 font-light text-lg">{amPm}</span>}
      </div>
    </div>
  );
}

export default Timer;