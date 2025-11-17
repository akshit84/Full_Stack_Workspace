import { useState } from "react";

const UseState = () => {

  const [count, setCount] = useState(0)

  const increaseCounter = () => {
    setCount(count => Math.min(count + 1, 20))
  }

  // const decreaseCounter = () => {
  //   setCount(count => Math.max(count - 1, 0))

  // }

  const [inputValue, setInputValue] = useState("")
  console.log(inputValue);
  

  return (

    <>
      <h2>Counter</h2>
      <button
        onClick={increaseCounter}>Increase Counter:- {count}</button>
      <br />
      <br />
      <button
        onClick={() => setCount(count => Math.max(count - 1, 0))}>Decrease Counter:- {count}</button>
      <br />
      <br />

      <input type="text" placeholder="Type anything" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}/>
      <p>You typed: {inputValue} </p>

    </>
  )
}

export default UseState