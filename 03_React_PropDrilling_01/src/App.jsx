import Card from "./components/Card"

const App = () => {
  return (
     <div className="parent">
      <Card user= "Shayam" img="https://plus.unsplash.com/premium_photo-1705563088249-9d6bed8ee218?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"/>
      <Card user= "Rohan" img="https://plus.unsplash.com/premium_photo-1705019732183-80c19681fdba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"/>
      <Card user= "Salim" img="https://plus.unsplash.com/premium_photo-1675080431524-3e7c85323972?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"/>
      <Card user= "Alex" img="https://plus.unsplash.com/premium_photo-1726754578088-09fdfacbdaef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"/>
    </div>
  )
}

export default App