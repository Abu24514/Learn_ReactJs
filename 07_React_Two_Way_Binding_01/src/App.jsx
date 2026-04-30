import { useState } from 'react'

const App = () => {

  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState(18);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(fullname, age);
     const newuser = { fullname, age };
   console.log(newuser);

  }
  return (
    <>
      <div className='wrapper'>

        <h1 className='heading'>Simple Register</h1>
        <form onSubmit={submitHandler}>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            placeholder="full Name"
          />
          <input
            onChange={(e) => setAge(e.target.value)}
            value={age}
            type="number"
            placeholder="Age"
          />
          <button>Submit</button>
        </form>

      </div>

    </>
  )
}

export default App;