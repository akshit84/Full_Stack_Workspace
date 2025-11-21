import { useState } from 'react'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'

function App() {
  const [startTime, setstartTime] = useState(null)
  const [now, setnow] = useState(null)
  const [elapsedTime, setelapsedTime] = useState(0)
  const intervalRef = useRef(null)

  function handleStart() {
    setelapsedTime(0);
    setstartTime(Date.now());
    setnow(Date.now());

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    intervalRef.current = setInterval(() => {
      setnow(Date.now());
    }, 10);
  }
  function handleStop() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;

      setstartTime(null);
      setnow(null);
      setelapsedTime(0);
    }
  }
  // let saveelapsedTime = 0
  function handlePause() {
    if (!startTime || !now) return;
    const saveelapsedTime = now - startTime

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setelapsedTime(saveelapsedTime);
  }

  function handleResume() {
    if (intervalRef.current) return;
    setstartTime(Date.now() - elapsedTime)
    setnow(Date.now());

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    intervalRef.current = setInterval(() => {
      setnow(Date.now());
    }, 10);
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  let secondPass = 0
  if (startTime != null && now != null) {
    secondPass = (now - startTime) / 1000;
  }

  return (
    <>
      <h2>Time passed: {secondPass.toFixed(3)}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <br />
      <br />
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleResume}>Resume</button>

    </>
  )
}

export default App
