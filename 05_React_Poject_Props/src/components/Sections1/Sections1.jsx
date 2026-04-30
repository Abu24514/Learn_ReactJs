
import Navbar from "./Navbar";
import Page1Content from "./Page1Content";

const Sections1 = (props) => { 
  return (
    <div className="py-4 px-8  h-screen w-full ">
        <Navbar/>
        <Page1Content users= {props.users}/>

    </div>
  )
}
export default Sections1;