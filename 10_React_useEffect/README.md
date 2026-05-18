
# What is `useEffect`?

Simple definition:

> Component render hone ke baad jo extra kaam karna hota hai uske liye `useEffect` use karte hain.

---

# What are Side Effects?

Side effects wo operations hote hain jo directly UI render nahi karte.

Examples:

* API calls
* Data fetching
* Timers
* Event listeners
* LocalStorage
* Document title update
* Authentication checks

---

# Basic Syntax

```jsx
useEffect(() => {

  // code

}, []);
```

---

# Syntax Breakdown

```jsx
useEffect(() => {

  // effect code

}, [dependency]);
```

| Part        | Meaning                  |
| ----------- | ------------------------ |
| `useEffect` | React Hook               |
| `()=>{}`    | Function jo execute hoga |
| `[]`        | Dependency array         |

---

# 1. Run Only Once

```jsx
import { useEffect } from "react";

function App() {

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return <h1>Hello</h1>;
}
```

## Explanation

* Empty dependency array `[]`
* Effect sirf first render pe chalega

## Mostly Used For

* API fetch
* Initial setup
* Authentication check

---

# 2. Run When Dependency Changes

```jsx
import { useEffect, useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count Changed");
  }, [count]);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}
```

## Explanation

* Effect tab chalega jab `count` change hoga

## Mostly Used For

* Search feature
* Filters
* API refetch
* Dynamic UI updates

---

# 3. Run On Every Render

```jsx
useEffect(() => {
  console.log("Every Render");
});
```

## Explanation

* Dependency array nahi diya
* Har render pe chalega

## Mostly Avoid

Kyuki unnecessary renders aur performance issues ho sakte hain.

---

# Cleanup Function

Cleanup function memory leaks avoid karne ke liye use hota hai.

---

# Timer Example

```jsx
import { useEffect } from "react";

function App() {

  useEffect(() => {

    const timer = setInterval(() => {
      console.log("Running");
    }, 1000);

    return () => {
      clearInterval(timer);
    };

  }, []);

  return <h1>Timer</h1>;
}
```

## Cleanup Kab Chalta Hai?

* Component unmount hone pe
* Effect dubara run hone se pehle

---

# Real World Example: API Fetch

```jsx
import { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));

  }, []);

  return (
    <>
      {
        users.map((user) => (
          <h1 key={user.id}>{user.name}</h1>
        ))
      }
    </>
  );
}
```

---

# Real World Example: Dynamic Title

```jsx
import { useEffect, useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}
```

---

# Flow of `useEffect`

```txt
Component Render
      ↓
useEffect Run
      ↓
State Update
      ↓
Re-render
```

---

# Dependency Array Summary

| Syntax        | Meaning                |
| ------------- | ---------------------- |
| `[]`          | Run once               |
| `[value]`     | Run when value changes |
| No dependency | Run every render       |

---

# Common Mistakes

# 1. Infinite Loop

❌ Wrong

```jsx
useEffect(() => {
  setCount(count + 1);
});
```

## Problem

Har render pe state update ho raha hai.

---

# Correct Way

```jsx
useEffect(() => {
  setCount(count + 1);
}, []);
```

---

# 2. Missing Dependency

❌ Wrong

```jsx
useEffect(() => {
  console.log(count);
}, []);
```

## Problem

Updated value track nahi hogi.

---

# Correct

```jsx
useEffect(() => {
  console.log(count);
}, [count]);
```

---

# Important Rules

## Rule 1

Hooks top level pe use karo.

❌ Wrong

```jsx
if(true){
  useEffect(() => {});
}
```

---

## Rule 2

Hooks sirf:

* Functional Components
* Custom Hooks

ke andar use karo.

---

# Most Common Use Cases

| Use Case       | Example            |
| -------------- | ------------------ |
| API Call       | Fetch backend data |
| Timer          | Countdown          |
| Event Listener | Resize event       |
| LocalStorage   | Save data          |
| Dynamic Title  | Browser tab title  |
| Authentication | User login check   |

---

# Interview Questions

## Q1. `useEffect` kab run hota hai?

Answer:

> Render hone ke baad.

---

## Q2. Empty dependency array ka kya meaning hai?

Answer:

> Effect sirf first render pe chalega.

---

## Q3. Cleanup function ka use kya hai?

Answer:

> Memory leaks avoid karne ke liye.

---

# Golden Rule

> Rendering ke baad koi extra kaam karna ho to `useEffect` use karo.
