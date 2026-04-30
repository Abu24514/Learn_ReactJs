import RightCard from "./RightCard";

const RightContent = (props) => {
  console.log(props);
  
  return (
  <div id="right" className='h-full w-2/3 flex flex-nowrap overflow-x-auto gap-2 py-2 px-2 '>
     {props.users.map(function(elem , idx){
      return<RightCard key={idx} id={idx} img={elem.img}
      tag = {elem.tag}/>
     })}
    </div>
  )
}

export default RightContent;