
import Accordian from './Accordian'
import data from '../data.json'



function Faqs() {
    console.log(data.faqs)
    return (
        <>
        <div>
        
       {data.faqs.map((obj, index) =>{
        return <Accordian qna = {obj}/>
       })}
        
        </div>
        <div className=' flex flex-col space-y-5 px-[19rem] py-10'>
            <p className='w-[30%]'>
            Got a project in mind?
            Drop us a line at hello@thirtysixstudio.com or use the form below.
            </p>
            <p className='w-[40%]'>
            Not sure what you need? We’re here to help you define the undefined. Let’s explore all creative and technical possibilities together through one of our tailored labs, 
            where we champion future-forward thinking within an ethical framework.
            </p>
        </div>
        </>
    )
}

export default Faqs
