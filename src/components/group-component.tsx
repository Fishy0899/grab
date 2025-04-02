import { FunctionComponent } from "react";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-full h-[1009.1px] relative max-w-full text-left text-21xl text-darkslategray font-grab-community-solid-en ${className}`}
    >
      <img
        className="absolute h-[17.44%] w-[28.65%] top-[59.24%] right-[32.34%] bottom-[23.32%] left-[39.01%] max-w-full overflow-hidden max-h-full"
        alt=""
      />
      <img
        className="absolute h-[30.74%] w-[59.16%] top-[15.1%] right-[17.12%] bottom-[54.16%] left-[23.72%] max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
      />
      <img
        className="absolute h-[2.65%] w-[34.59%] top-[81.76%] right-[14.45%] bottom-[15.6%] left-[50.95%] max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
      />
      <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start pt-0 px-0 pb-[69.7px] text-43xl">
        <h3 className="m-0 w-[860px] relative text-inherit leading-[70px] font-extrabold font-[inherit] inline-block shrink-0 z-[2]">
          When you opt in to our Green Programme
        </h3>
      </div>
      <div className="absolute top-[370px] left-[0px] w-[522px] flex flex-col items-end justify-start max-w-full">
        <div className="self-stretch relative leading-[55px] font-medium">{`Every $0.10 you contribute `}</div>
        <div className="self-stretch relative leading-[55px] font-medium">{`to Grab rides or orders `}</div>
        <div className="self-stretch relative leading-[55px] font-medium">{`goes towards projects `}</div>
        <div className="self-stretch relative leading-[55px] font-medium">
          that help Mother Nature
        </div>
      </div>
      <div className="absolute top-[750.3px] left-[0px] w-[847px] flex flex-row items-start justify-end max-w-full">
        <div className="flex flex-col items-start justify-start gap-[7.3px]">
          <div className="w-[260.6px] flex flex-row items-start justify-center py-0 px-5 box-border">
            <img
              className="h-[42.1px] w-[52.6px] relative"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[3px]">
            <div className="w-[286px] relative leading-[55px] font-medium inline-block z-[1]">
              Got 2 minutes?
            </div>
          </div>
          <div className="w-[409px] relative leading-[49px] font-medium inline-block z-[unset]">
            Swipe to check the projects that you’ll be supporting.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
