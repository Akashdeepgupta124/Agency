const Giveback = ({ title, description }) => (
  <div>
   <div className='Servicecontainer flex flex-col  px-[19rem] py-10 '>
            
            <p className='mb-5'>{title}</p>
        <div className='servicetext w-full'>
            <h1 className='text text-4xl leading-[1.4] tracking-tight'>{description}</h1>
        </div>
        </div>
        
  </div>
);

export default Giveback;
