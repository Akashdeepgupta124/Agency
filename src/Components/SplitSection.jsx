// SplitSection.jsx

const SplitSection = ({ title, description, isReversed }) => {
    return (
        <>
      <div className="w-full flex items-center align-middle mb-20 px-10 mt-20  ">
        <div className="w-[60%]">
            <h2 className="text-[9.125rem] tracking-tighter leading-none">
                {title}
            </h2>
        </div>
        <div className="w-[30%]">
            <p>
                {description}
            </p>
        </div>
      </div>
      <hr/>
      </>
    );
  };
  
  export default SplitSection;
  