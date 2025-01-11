import { useState } from "react"



function Accordian({qna}) {
    
     
    const [show, setshow] = useState(false)
    return (
        <>
        <div className="accordian  border-b border-black p-4 m-4 px-[19rem] py-10 relative">
            <h3>{qna.question}  <span className="absolute left-[48rem] cursor-pointer " onClick={()=> setshow(!show)} > {show ? "-":"+"} </span></h3>
            {show ? <p>{qna.answer} </p> : ""} 
           
        </div>
        </>
    )
}

export default Accordian
