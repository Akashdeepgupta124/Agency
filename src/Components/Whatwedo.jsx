import React from 'react'

function Whatwedo() {
    return (
      <>
        <div className="flex flex-col md:flex-row w-full mb-[10rem]">
              <div className="w-[90%] sm:w-[60%] md:w-[30%] px-5 sm:px-6 md:px-8 ml-[5%] sm:ml-[10%] md:ml-[25%]">
                <h2 className="title-section font-light">
                  <span className="nb">01 - WHAT WE DO</span>
                   </h2>
              </div>
              <div className="flex flex-col w-full sm:w-[50%] md:w-[30%] lg:w-[23%] px-4 sm:px-6">
                 <h2 className="subtitle mb-6 sm:mb-8 md:mb-10 text-3xl leading-[1.3] tracking-wide">
                      We aim to revolutionize digital production in the advertising space, bringing your ideas to life.
                   </h2>
                 <p className="paragraph text-sm font-light mb-5">
                   As a contemporary studio, we use cutting-edge design practices and the latest technologies to deliver seamless digital work.
                  </p>

                 <p className="paragraph text-sm font-light">
                    Our commitment to creativity, innovation, and simplicity, paired with our agile approach, ensures your journey with us is smooth and enjoyable from start to finish.
                   </p>
               </div>

             
            </div>

            <hr/>
</>
    )
}

export default Whatwedo
