type ValueType = {
  name: string;
  letter: string;
};

const values: ValueType[] = [
  {
    name: "Reliable",
    letter: "R",
  },
  {
    name: "Effective Communicator",
    letter: "E",
  },
  {
    name: "Detail Oriented",
    letter: "D",
  },
  {
    name: "Team Player Attitude",
    letter: "T",
  },
  {
    name: "World Class Customer Service",
    letter: "W",
  },
  {
    name: "Ongoing Problem Solver",
    letter: "O",
  },
];

const HomeRedValues = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-28">
        <div className="flex justify-between items-end mb-20">
          <h3 className="anton-regular text-white text-[64px] leading-[66px]">
            <span className="text-primary">RED</span> <br />
            VALUES
          </h3>
          <h2 className="gradient-stroke text-[128px] anton-regular leading-[120px]">
            RED VALUES
          </h2>
        </div>
        <div className="grid grid-cols-6  justify-between">
          {values.map((value, index) => (
            <div className="w-fit flex flex-col items-center group" key={index} >
              <div className="border-primary border p-3 bg-secondary w-fit mb-8 relative">
                <div className="p-4 bg-white">
                  <div className="bg-primary size-[130px] flex justify-center items-center">
                    <p className="w-fit anton-regular text-5xl text-white">
                      {value.letter}
                    </p>
                  </div>
                </div>
                <div className="size-3 rounded-full bg-primary absolute -top-[6px] group-hover:animate-dot-path"></div>
              </div>
              <p className="font-kindsans-medium text-white text-center w-[60%] flex justify-center">
                {value.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeRedValues;
