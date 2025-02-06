import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);

  const pauseTimer = () => setIsRunning(false);

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-4xl font-bold mb-4">
        {String(Math.floor(time / 60)).padStart(2, '0')}:
        {String(time % 60).padStart(2, '0')}
      </div>
      <div className="space-x-4">
        <button onClick={startTimer} className="bg-green-500 text-white px-4 py-2 rounded">
          Start
        </button>
        <button onClick={pauseTimer} className="bg-yellow-500 text-white px-4 py-2 rounded">
          Pause
        </button>
        <button onClick={resetTimer} className="bg-red-500 text-white px-4 py-2 rounded">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
