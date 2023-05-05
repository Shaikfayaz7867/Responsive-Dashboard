import { useMemo } from "react";

const RevenueContainer = ({ dimensions, propTop, propLeft }) => {
  const totalRevenuesStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <button
      className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[99px] left-[30px] w-[151.05px] h-[82px]"
      style={totalRevenuesStyle}
    >
      <div className="absolute top-[0px] left-[0px] w-[151.05px] h-[82px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[13.67px] bg-honeydew" />
      </div>
      <div className="absolute top-[30.75px] left-[17.08px] text-[9.57px] font-lato text-black text-left inline-block w-[84.73px]">
        Total Revenues
      </div>
      <b className="absolute top-[45.78px] left-[17.08px] text-base-4 inline-block font-open-sans text-black text-left w-[84.73px]">
        $2,129,430
      </b>
      <img
        className="absolute h-1/5 w-[11.94%] top-[16.67%] right-[11.6%] bottom-[63.33%] left-[76.45%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={dimensions}
      />
    </button>
  );
};

export default RevenueContainer;
