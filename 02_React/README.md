## 🔹 Class 3: State, Conditional Rendering, Lists & Keys

### 1. State
**Theory:**  
State stores **dynamic data** in a component.

**Code Structure:**
```jsx
const [count, setCount] = useState(0);
```

### 2. Conditional Rendering
**Theory:**  
Render based on conditions.

**Code Structure:**
```jsx
{isLoggedIn ? <h1>Welcome</h1> : <h1>Please Log In</h1>}
```

### 3. Lists & Keys
**Theory:**  
Render multiple elements with `.map()`, keys identify elements.

**Code Structure:**
```jsx
const fruits = ['Apple', 'Banana'];
<ul>
  {fruits.map((fruit, index) => (
    <li key={index}>{fruit}</li>
  ))}
</ul>
```