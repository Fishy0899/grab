import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`relative w-full flex flex-col items-start justify-start gap-[70px] text-left text-xl text-darkslategray font-grab-community-solid-en ${className}`}
    >
      <div className="w-[358.2px] h-[62px] relative font-extrabold inline-block z-[2]">
        When you opt in to our Green Programme
      </div>
      <div className="flex flex-row items-start justify-start relative text-base">
        <img
          className="w-[177.5px] absolute !m-[0] right-[-54.9px] bottom-[-112px] max-h-full"
          loading="lazy"
          alt=""
        />
        <div className="h-[47px] w-[200.1px] flex flex-col items-end justify-start z-[1]">
          <div className="self-stretch relative font-medium">{`Every $0.10 you contribute `}</div>
          <div className="self-stretch relative font-medium">{`to Grab rides or orders `}</div>
          <div className="self-stretch relative font-medium">{`goes towards projects `}</div>
          <div className="self-stretch relative font-medium">
            that help Mother Nature
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
