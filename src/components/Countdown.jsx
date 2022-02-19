import { useEffect, useRef, useState } from 'react'

const Countdown = () => {

const [dayTime, setDayTime] = useState('00')
const [hourTime, setHourTime] = useState('00')
const [minuteTime, setMinuteTime] = useState('00')
const [secondTime, setSecondTime] = useState('00')

let interval = useRef();

const startTimer = () => {
    const countDownDate = new Date('September 20 2022 00:00:00').getTime();
    const second = 1000;
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    interval = setInterval(() => {
        const now = new Date().getTime();
        const gap = countDownDate - now;

        const displayDay = Math.floor(gap / day)
        const displayHour = Math.floor((gap % day) / hour)
        const displayMinute = Math.floor((gap %  hour) / minute)
        const displaySecond = Math.floor((gap % minute) / second)

        gap < 0 
            ? 
                clearInterval(interval.current)
            : 
                setDayTime(displayDay)
                setHourTime(displayHour)
                setMinuteTime(displayMinute)
                setSecondTime(displaySecond)
            
    }, 1000)
}

useEffect(() => {
    startTimer();
    return () => {
        clearInterval(interval.current)
    }
})

    return (
        <div>
            <div className="mt-10 px-5">
                <h2 className="font-semibold text-lightText text-center">We can't wait to show you what we've got prepared from you</h2>
            </div>
            <div className="mt-6 flex flex-col py-24">
                <div className="flex flex-row justify-evenly">
                    <div className=" flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-semibold">{dayTime}</h2>
                        <p className="text-xs text-lightText">Days</p>
                    </div>
                    <div className=" flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-semibold">{hourTime}</h2>
                        <p className="text-xs text-lightText">Hours</p>
                    </div>
                    <div className=" flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-semibold">{minuteTime}</h2>
                        <p className="text-xs text-lightText">Minutes</p>
                    </div>
                    <div className=" flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-semibold">{secondTime}</h2>
                        <p className="text-xs text-lightText">Seconds</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Countdown
