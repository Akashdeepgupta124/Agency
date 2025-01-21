
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
        <div className='flex flex-col space-y-5 px-4 py-10 sm:px-8 md:px-[10rem] lg:px-[19rem]'>
    <p className='w-full sm:w-[80%] md:w-[30%] lg:w-[30%]'>
        Got a project in mind?
        Drop us a line at hello@thirtysixstudio.com or use the form below.
    </p>
    <p className='w-full sm:w-[80%] md:w-[40%] lg:w-[40%]'>
        Not sure what you need? We’re here to help you define the undefined. Let’s explore all creative and technical possibilities together through one of our tailored labs,
        where we champion future-forward thinking within an ethical framework.
    </p>
</div>


        </>
    )
}

export default Faqs
