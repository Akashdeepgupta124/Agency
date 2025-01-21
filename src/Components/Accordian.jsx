import { useState } from "react"



function Accordian({qna}) {
    
     
    const [show, setshow] = useState(false)
    return (
        <>
        <div className="accordion border-b border-black p-4 m-4 px-6 sm:px-12 lg:px-[19rem] py-10 relative">
  <h3 className="text-lg sm:text-xl md:text-2xl">
    {qna.question}  
    <span 
      className="absolute top-0 right-0 cursor-pointer text-lg sm:text-xl"
      onClick={() => setshow(!show)} 
    >
      {show ? "-" : "+"}
    </span>
  </h3>
  {show ? <p className="mt-2">{qna.answer}</p> : ""}
</div>

        </>
    )
}

export default Accordian
