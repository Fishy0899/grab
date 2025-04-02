import { FunctionComponent } from "react";

const ShapeWithGroup1: FunctionComponent = () => {
  return (
    <div className="w-full h-[2400px] relative flex flex-col items-center justify-center py-[123px] px-5 box-border gap-[189px] leading-[normal] tracking-[normal]">
      <img
        className="w-full h-full absolute !m-[0] top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[0]"
        alt=""
      />
      <div className="w-[860px] flex flex-col items-start justify-start z-[1]">
        <img
          className="w-[672.2px] h-[370.7px] relative"
          loading="lazy"
          alt=""
        />
      </div>
      <img
        className="w-[471.6px] h-[385.1px] relative z-[2]"
        loading="lazy"
        alt=""
      />
      <div className="w-[860px] flex flex-row items-center justify-start z-[3]">
        <img
          className="h-[1000.3px] w-[795.7px] relative"
          loading="lazy"
          alt=""
        />
      </div>
    </div>
  );
};

export default ShapeWithGroup1;
