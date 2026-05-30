import { useState } from "react"

function Counter() {
   const [count, setCount] = useState(0)

   const increment = () => {
    setCount(count + 1)
   }

   const decrement = () => {
    setCount(count - 1)
   }

   const reset = () => {
    setCount(0)
   }

   return(
      <>
        <div className="main">
      <h1>{count}</h1>
       <div className="button-div">
      <button id="plus" onClick={increment}>Increment</button>
      <button id="zero" onClick={reset}>reset</button>
      <button id="minus" onClick={decrement}>Decrement</button>
      </div>
     </div>
      </>
   )
}

export default Counter