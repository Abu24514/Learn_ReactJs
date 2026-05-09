import { useState } from "react";
/* best practice of useState */
const App = () => {
  const [num, setNum] = useState(0);

  const increaseNum = () => {
    setNum(num + 1);
  };
  const decreaseNum = () => {
   if(num>0){
     setNum(num - 1);
   }
  };
  const jumpNum = () => {
    setNum(num + 5);
  };
  const reset = ()=>{
    setNum(0);
  }
  return (
    <>
      <div className="main">
        <div className="card">
          <h1>{num}</h1>
          <div className="butn">
            <button id="btn" className="incr" onClick={increaseNum}>
              Increase
            </button>
            <button id="btn" className="decr" onClick={decreaseNum}>
              Decrease
            </button>
            <button id="btn" className="jump" onClick={jumpNum}>
              JumpBy5
            </button>
            <button className="reset" onClick={reset}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
