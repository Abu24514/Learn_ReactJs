import React, { useEffect, useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)
  useEffect(() => {
    console.log("num increase...");
  }, [num])
  return (

    <div>
      <h1> num : {num}</h1>
      <h2> num2 : {num2}</h2>
      <button onClick={() => { setNum(num + 1) }}>click</button>
      <button onClick={() => [
        setNum2(num2 - 1)
      ]}>second</button>
    </div>
  )
}

export default App