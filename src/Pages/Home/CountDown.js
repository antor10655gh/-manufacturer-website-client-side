import React, { useEffect, useRef, useState } from "react";
import backgroundImg from "../../images/bg-background.png";
import airFilterImg from "../../images/Chromium_Air_Filters.png";

const CountDown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = (countdownDate) => {
    const now = new Date().getTime();

    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24)) + 20;
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) + 15
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(interval.current);
    } else {
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    }
  };
  function saveInLocalStorage(time) {
    localStorage.setItem("timer", time);
  }

  function getTimeFromLocalStorage() {
    return localStorage.getItem("timer");
  }

  useEffect(() => {
    const localTimer = getTimeFromLocalStorage();

    if (localTimer) {
      interval.current = setInterval(() => {
        startTimer(+localTimer);
      }, 1000);
    } else {
      const countdownDate = new Date().getTime() + 14 * 24 * 60 * 1000;
      saveInLocalStorage(countdownDate);
      interval.current = setInterval(() => {
        startTimer(+countdownDate);
      }, 1000);
    }

    return () => clearInterval(interval.current);
  }, []);
  return (
    <div
      className="py-12 flex items-center"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="grid lg:grid-cols-2 gap-4">
        <div>
          <img className="lg:w-2/3 mx-auto" src={airFilterImg} alt="" />
        </div>
        <div className="flex flex-col justify-center">
          <header>
            <h1
              style={{
                fontFamily: "Poppins",
              }}
              className="text-white text-3xl lg:text-5xl text-center"
            >
              <span className="text-primary">SAVE</span> ON PERIPHERALS
            </h1>
            <h2 className="text-white lg:text-2xl text-center mt-5">
              Turbo Diesel Timing Belt (4WD,2WD/4WD){" "}
            </h2>
          </header>
          <div className="grid grid-flow-col lg:gap-5 place-content-center text-center auto-cols-max my-5">
            <div className="flex flex-col p-2 text-neutral-content">
              <span className="font-mono text-5xl text-primary">
                <span>{timerDays}</span>
              </span>
              DAYS
            </div>
            <div className="py-2">
              <span className="text-white text-5xl">:</span>
            </div>
            <div className="flex flex-col p-2 text-neutral-content">
              <span className=" font-mono text-5xl text-primary">
                <span> {timerHours}</span>
              </span>
              HOURS
            </div>
            <div className="py-2">
              <span className="text-white text-5xl">:</span>
            </div>
            <div className="flex flex-col p-2 text-neutral-content">
              <span className=" font-mono text-5xl text-primary">
                <span>{timerMinutes}</span>
              </span>
              MINS
            </div>
            <div className="py-2">
              <span className="text-white text-5xl">:</span>
            </div>
            <div className="flex flex-col p-2 text-neutral-content">
              <span className="font-mono text-5xl text-primary">
                <span>{timerSeconds}</span>
              </span>
              SEC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
