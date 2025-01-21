const Giveback = ({ title, description }) => {
  return(
  <div className="w-full">
  <div className="Servicecontainer flex flex-col px-4 sm:px-8 md:px-[10rem] lg:px-[19rem] py-10">
    
    <p className="mb-5 text-center sm:text-left">{title}</p>
    
    <div className="servicetext w-full">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[1.4] leading-[1.4] tracking-tight text-center sm:text-left">
        {description}
      </h1>
    </div>
  </div>
</div>
  )
};

export default Giveback;