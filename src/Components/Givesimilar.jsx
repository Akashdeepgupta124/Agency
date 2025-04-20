import Giveback from "./Giveback";

function Givesimilar() {
  const similarData = [
    {
      title: "HOW WE GIVE BACK",
      description:
        "We give back by pouring passion into every project, uplifting brands with purpose, and empowering ideas that spark change. Our mission is to create meaningful work that inspires growth, connection, and authenticity—because giving back means building something greater than ourselves, every single day.",
    },
  ];

  return (
    <>
      {similarData.map((similar, index) => (
        <Giveback
          key={index}
          title={similar.title}
          description={similar.description}
        />
      ))}
   <div className="mt-20 mb-20 flex items-center justify-center">
  <h1 className="text-[6rem] sm:text-[10rem] md:text-[13.8rem] font-normal tracking-tight leading-none sm:text-left md:text-left lg:text-center">
    <span className="block sm:inline">{` TALK `}</span>
    <span className="block sm:inline">{` TO `}</span>
    <span className="block sm:inline">{` US `}</span>
  </h1>
</div>

    </>
  );
}

export default Givesimilar;
