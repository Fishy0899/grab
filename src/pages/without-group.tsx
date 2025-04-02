import { FunctionComponent } from "react";
import Contributions from "../components/contributions";

const WithoutGroup: FunctionComponent = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start pt-[110px] pb-36 pl-[110px] pr-[109px] box-border gap-[230px] leading-[normal] tracking-[normal] text-left text-[85px] text-darkslategray font-grab-community-solid-en">
      <main className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/layer-1.svg"
        />
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
          alt=""
          src="/layer-12@2x.png"
        />
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
          alt=""
          src="/layer-11.svg"
        />
      </main>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[78px] box-border max-w-full">
        <h1 className="m-0 flex-1 relative text-inherit leading-[95px] font-extrabold font-[inherit] inline-block max-w-full z-[3]">
          Turn your small change into big changes for the planet
        </h1>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full text-43xl">
        <div className="flex-1 flex flex-col items-start justify-start gap-[63.9px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[22px] box-border max-w-full">
            <img
              className="h-[385.1px] w-[471.6px] relative shrink-0 max-w-full z-[3]"
              loading="lazy"
              alt=""
              src="/layer-2.svg"
            />
          </div>
          <h3 className="m-0 relative text-inherit leading-[70px] font-extrabold font-[inherit] shrink-0 z-[3]">
            When you opt in to our Green Programme
          </h3>
        </div>
      </div>
      <Contributions />
    </div>
  );
};

export default WithoutGroup;
