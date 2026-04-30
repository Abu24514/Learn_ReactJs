
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {    
  return (
    <div className='h-[90vh] py-5 flex items-center gap-5 justify-between'>
        <LeftContent/>
        <RightContent users ={props.users}/>
    </div>
  )
}

export default Page1Content