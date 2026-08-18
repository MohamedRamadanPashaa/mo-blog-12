"use client";

import { useEffect, useState } from "react";
import Button from "../UiElements/Button";
import { handleTime } from "@/helpers/handleTime";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const start = () => {
    if (isRunning) return;

    setTime(0);
    setStartTime(Date.now());
    setElapsedTime(0);
    setIsRunning(true);
  };

  const pause = () => {
    const currentTime = Date.now() - startTime + elapsedTime;
    setElapsedTime(currentTime);
    setTime(currentTime);
    setIsRunning(false);
  };

  const resume = () => {
    setStartTime(Date.now());
    setIsRunning(true);
  };

  const reset = () => {
    setTime(0);
    setStartTime(null);
    setElapsedTime(0);
    setIsRunning(false);
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime(Date.now() - startTime + elapsedTime);
    }, 10);

    return () => clearInterval(interval);
  }, [isRunning, startTime, elapsedTime]);

  const { minutes, seconds, mill } = handleTime(time);

  return (
    <div>
      <p>
        {minutes}:{seconds}.{mill}
      </p>

      <div>
        {!isRunning && !elapsedTime ? (
          <Button success onClick={start} disabled={isRunning}>
            Start
          </Button>
        ) : (
          <Button outline onClick={resume} disabled={isRunning}>
            Resume
          </Button>
        )}

        <Button danger onClick={pause} disabled={!isRunning}>
          Pause
        </Button>

        <Button onClick={reset}>Reset</Button>
      </div>
    </div>
  );
}
