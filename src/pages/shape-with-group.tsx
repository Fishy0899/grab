import { FunctionComponent } from "react";

const ShapeWithGroup: FunctionComponent = () => {
  return (
    <div className="w-full h-[778px] relative leading-[normal] tracking-[normal]">
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
      />
      <img
        className="absolute h-[16.04%] w-[43.66%] top-[33.25%] right-[28.17%] bottom-[50.71%] left-[28.17%] max-w-full overflow-hidden max-h-full z-[1]"
        loading="lazy"
        alt=""
      />
      <img
        className="absolute h-[15.45%] w-[62.23%] top-[5.14%] right-[27.34%] bottom-[79.41%] left-[10.43%] max-w-full overflow-hidden max-h-full z-[1]"
        alt=""
      />
      <img
        className="absolute h-[41.68%] w-[73.69%] top-[52.38%] right-[15.94%] bottom-[5.94%] left-[10.37%] max-w-full overflow-hidden max-h-full z-[1]"
        alt=""
      />
    </div>
  );
};

export default ShapeWithGroup;
