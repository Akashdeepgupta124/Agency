// SplitSection.jsx

const SplitSection = ({ title, description, isReversed }) => {
    return (
        <>
   <div className="w-full flex flex-col sm:flex-row items-center justify-center align-middle mb-20 px-4 sm:px-10 mt-20">
  <div className="w-full sm:w-[60%] mb-6 sm:mb-0">
    <h2 className="text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[9.125rem] tracking-tighter leading-tight">
      {title}
    </h2>
  </div>
  <div className="w-full sm:w-[30%]">
    <p className="text-lg sm:text-base">
      {description}
    </p>
  </div>
</div>
      <hr/>
      </>
    );
  };
  
  export default SplitSection;
  