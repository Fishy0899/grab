import { FunctionComponent } from "react";

export type ContributionsType = {
  className?: string;
};

const Contributions: FunctionComponent<ContributionsType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[840px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-left text-21xl text-darkslategray font-grab-community-solid-en ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[7.5px] max-w-full">
        <div className="w-[522px] flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[310.2px] w-[508.8px] absolute !m-[0] top-[-217.6px] right-[-181.8px] z-[3]"
            loading="lazy"
            alt=""
            src="/layer-5.svg"
          />
          <div className="flex-1 relative leading-[55px] font-medium inline-block max-w-full z-[4]">
            Every $0.10 you contribute to Grab rides or orders goes towards
            projects that help Mother Nature
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[94px] pr-5">
          <div className="h-[194.6px] w-[259.1px] relative">
            <img
              className="absolute top-[152.5px] left-[206.5px] w-[52.6px] h-[42.1px] z-[3]"
              loading="lazy"
              alt=""
              src="/layer-3.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-[246.4px] h-44 z-[4]"
              alt=""
              src="/layer-4.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[338px] pr-5">
          <div className="w-[297.5px] flex flex-row items-start justify-start">
            <div className="w-[297.5px] flex flex-col items-start justify-start pt-[24.9px] px-0 pb-0 box-border">
              <div className="self-stretch flex flex-row items-start justify-between pt-[0.8px] px-px pb-[1.8px] relative gap-5">
                <div className="flex flex-col items-start justify-start pt-[23.4px] px-0 pb-0">
                  <div className="w-1 h-[0.7px] relative">
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full z-[3]"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="absolute top-[0.7px] left-[4px] w-0 h-0 z-[3]"
                      loading="lazy"
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                </div>
                <img
                  className="h-0 w-[1.2px] relative z-[3]"
                  loading="lazy"
                  alt=""
                  src="/vector-2.svg"
                />
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[4]"
                  alt=""
                  src="/group.svg"
                />
              </div>
            </div>
            <div className="relative leading-[55px] font-medium z-[5] ml-[-294.7px]">
              Got 2 minutes?
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full">
          <div className="w-[409px] relative leading-[49px] font-medium inline-block shrink-0 max-w-full z-[3]">
            Swipe to check the projects that you’ll be supporting.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
