/* 
// Example 1: Rendering list using map()
const App = () => {

    // Array of profile objects
    const profile = [
        { name: "Rahul", age: 20 },
        { name: "Aman", age: 18 },
        { name: "Salim", age: 22 }
    ];

    // Loop through array and create list items
    const updateProfile = profile.map((profile, index) => {
        return (
            <li key={index}>
                <span>{profile.name}</span> - <small>{profile.age}</small>
            </li>
        )
    });

    // Render UI
    return (
        <div>
            <h1>Rendering.....</h1>
            <ul>{updateProfile}</ul>
        </div>
    );
};

export default App;
*/


// Import useState hook from React
import { useState } from "react";

const App = () => {

  // Create state variable "username" with default value "Ramesh"
  const [username, setUsername] = useState("Ramesh");

  // Function to update username
  const changeHandle = () => {
    setUsername("Manish"); // Update state
  };

  // Log current username in console
  console.log(username);

  return (
    <div>
        {/* Display heading */}
        <h1>Username</h1>

        {/* Display current username */}
        <h2>Name : {username}</h2>

        {/* Button to change username */}
        <button onClick={changeHandle}>
            Change the name
        </button>
    </div>
  );
};

// Export component
export default App;