'use client'

import moment from 'moment';
import 'moment/locale/ko';
import React, { useState } from "react";
import Moment from "react-moment";
import { useInterval } from "use-interval";

const Timer = () => {
  const [nowTime, setNowTime] = useState(Date.now())

  const [hours, setHours] = useState("00")
  const [minutes, setMinutes] = useState("00")
  const [seconds, setSeconds] = useState("00")

  useInterval(() => {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")
    setHours(`${hours}`)
    setMinutes(`${minutes}`)
    setSeconds(`${seconds}`)
    setNowTime(Date.now())
  }, 1000)

  return (
    <div className="py-6 flex flex-col border-[1px] border-gray-700 w-full rounded-lg mt-4 items-center justify-center">
      <div className="flex text-lg font-medium mb-4">
        테일즈위버 시간
      </div>
      <div className="flex font-medium">
        {/* {time} */}
        <span className={`mr-2`}>{hours}</span>:
        <span className={`mx-2`}>{minutes}</span>:
        <span className={`${parseInt(seconds) >= 50 ? "text-red-500" : ""} ml-2`}>{seconds}</span>
        {moment().format("a")}
      </div>
    </div>
  );
}

export default Timer;