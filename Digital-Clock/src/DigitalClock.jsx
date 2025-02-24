import React,{useState, useEffect} from "react";

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    function formatTime(){
        let hour = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hour >= 12 ? "PM" : "AM";

        // hour = hour % 12 || 12;

        return `${padZero(hour)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(meridiem)}`;
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <>
            <div className="clock-continer">
                <div className="clock">
                    <span>{formatTime()}</span>
                </div>

            </div>
        </>
    )

}

export default DigitalClock;