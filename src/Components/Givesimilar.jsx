import Giveback from "./Giveback";

function Givesimilar() {
  const similarData = [
    {
      title: "HOW WE GIVE BACK",
      description:
        "At Thirtysix Studio, we recognize that our industry can perpetuate harm. We believe we have to try and reverse some of these imbalances. That’s why we’re launching SS36, our local social sustainability hub. Through SS36, we reinvest some of our revenue and expertise into the communities that shape the culture and trends our field so heavily relies on. Our main focus is on bridging gaps for those affected by systemic obstacles related to race, sexuality, wealth, and gender identity.",
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
