const App = () => {
  // Js logics---

// function without parameter
const handleClick = ()=>{
  alert("button click")
}  

// function with parameter
const handleWithParm = (msg)=>{
  alert(msg);
}  

  return (
    // <> </> ----> fragment
  <>
  <h1>Now you click this button</h1>
  <button onClick={handleClick}>Click</button>
  <button onClick={()=> handleWithParm("chhat gaye kale badal")}>ParamClick</button>

  </>
  )
}

export default App;

// A functions component will always return HTML
// we can not write anything after return 
// we can only return single data/entity /variable/value
// there must be single reutrn in a function and that must be the last statement.