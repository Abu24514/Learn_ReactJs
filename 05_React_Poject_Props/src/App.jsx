
import Sections1 from './components/Sections1/Sections1'

const App = () => {
  const users = [
    {
      img:"https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag:"Satisfied"

    },
       {
      img:"https://images.unsplash.com/photo-1727268531066-1df9a7b21b3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      tag:"Underserved"

    },
       {
      img:"https://images.unsplash.com/photo-1651047641292-fd133547d688?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcyfHx8ZW58MHx8fHx8",
      tag:"Underbanked"

    },
    {
      img:"https://images.unsplash.com/photo-1610387879421-3839d64bcff4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
      tag:" Working"
    },
      {
      img:"https://images.unsplash.com/photo-1732210038531-9cefab37885a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag:" Non-Working"
    }
  ]
  return (
   <div>
     <Sections1 users={users}/>
   </div>
  )
}

export default App;