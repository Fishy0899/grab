import { FunctionComponent } from "react";

const WithoutAutoLayout: FunctionComponent = () => {
  return (
    <div className="w-full h-[833px] relative flex flex-col items-center justify-start p-xl box-border gap-7 leading-[normal] tracking-[normal] text-left text-xl text-darkslategray font-grab-community-solid-en">
      <img
        className="w-full h-full absolute !m-[0] top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[0]"
        alt=""
      />
      <div className="self-stretch h-[247px] flex flex-col items-center justify-start gap-8 z-[1]">
        <div className="self-stretch flex flex-row items-center justify-center">
          <h3 className="m-0 flex-1 relative text-inherit font-extrabold font-[inherit]">
            Turn your small change into big changes for the planet
          </h3>
        </div>
        <div className="w-[157px] h-[129px] flex flex-col items-center justify-start">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
          />
        </div>
      </div>
      <div className="w-[346px] flex flex-col items-start justify-start gap-[70px] z-[2]">
        <h3 className="m-0 self-stretch h-[66px] relative text-inherit font-extrabold font-[inherit] inline-block">
          When you opt in to our Green Programme
        </h3>
        <div className="w-[221px] h-[100px] flex flex-row items-start justify-start text-sm">
          <div className="h-[100px] w-[221px] flex flex-col items-end justify-start">
            <div className="self-stretch relative font-medium">{`Every $0.10 you contribute `}</div>
            <div className="self-stretch relative font-medium">{`to Grab rides or orders `}</div>
            <div className="self-stretch relative font-medium">{`goes towards projects `}</div>
            <div className="self-stretch relative font-medium">
              that help Mother Nature
            </div>
          </div>
        </div>
      </div>
      <div className="w-[165px] flex flex-row items-start justify-start z-[1] text-sm">
        <div className="flex flex-row items-start justify-start">
          <div className="h-32 w-[165px] flex flex-col items-start justify-start gap-[7px]">
            <div className="w-32 h-[43px] flex flex-row items-start justify-start">
              <div className="h-[43px] w-32 flex flex-col items-center justify-start relative">
                <img
                  className="w-full h-[48.6%] absolute !m-[0] top-[45.35%] right-[1.02%] bottom-[6.05%] left-[-1.02%] max-w-full overflow-hidden max-h-full z-[0]"
                  loading="lazy"
                  alt=""
                />
                <div className="self-stretch relative leading-[55px] font-medium z-[1]">
                  Got 2 minutes?
                </div>
              </div>
            </div>
            <div className="self-stretch relative font-medium">
              Swipe to check the projects that you’ll be supporting.
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-[47.33%] absolute !m-[0] h-[26.79%] top-[42.14%] right-[31.33%] bottom-[31.07%] left-[21.33%] max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
      />
    </div>
  );
};

export default WithoutAutoLayout;
