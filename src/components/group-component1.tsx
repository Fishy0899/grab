import { FunctionComponent } from "react";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-full h-[1009.1px] relative flex flex-col items-end justify-start max-w-full z-[1] text-left text-43xl text-darkslategray font-grab-community-solid-en ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[230px] shrink-0 max-w-full z-[1]">
        <div className="flex flex-row items-start justify-start">
          <h3 className="m-0 w-[860px] relative text-inherit leading-[70px] font-extrabold font-[inherit] inline-block shrink-0 z-[2]">
            When you opt in to our Green Programme
          </h3>
        </div>
        <div className="flex flex-col items-end justify-start gap-[210px] max-w-full text-21xl">
          <div className="w-[847px] flex flex-row items-start justify-start max-w-full">
            <div className="w-[522px] flex flex-col items-end justify-start max-w-full">
              <div className="self-stretch relative leading-[55px] font-medium">{`Every $0.10 you contribute `}</div>
              <div className="self-stretch relative leading-[55px] font-medium">{`to Grab rides or orders `}</div>
              <div className="self-stretch relative leading-[55px] font-medium">{`goes towards projects `}</div>
              <div className="self-stretch relative leading-[55px] font-medium">
                that help Mother Nature
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="w-[409px] flex flex-col items-start justify-start gap-[7px]">
              <div className="w-[297.5px] h-[55px] flex flex-row items-start justify-start">
                <div className="w-[297.5px] flex flex-col items-center justify-start relative">
                  <img
                    className="w-full h-[48.55%] absolute !m-[0] top-[45.45%] right-[1.01%] bottom-[6%] left-[-1.01%] max-w-full overflow-hidden max-h-full z-[0]"
                    loading="lazy"
                    alt=""
                  />
                  <div className="self-stretch relative leading-[55px] font-medium z-[1]">
                    Got 2 minutes?
                  </div>
                </div>
              </div>
              <div className="self-stretch relative leading-[49px] font-medium">
                Swipe to check the projects that you’ll be supporting.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[803px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-856.7px] relative">
        <img
          className="w-[508.8px] relative max-h-full shrink-0"
          loading="lazy"
          alt=""
        />
      </div>
    </div>
  );
};

export default GroupComponent1;
