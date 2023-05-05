import { useMemo } from "react";

const TotalUsersContainer = ({ productDimensions, propTop, propLeft }) => {
  const totalUsersStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <button
      className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[214px] left-[206px] w-[151px] h-[82px]"
      style={totalUsersStyle}
    >
      <div className="absolute top-[0px] left-[0px] w-[151px] h-[82px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[12.33px] bg-lavender" />
      </div>
      <img
        className="absolute h-1/5 w-[16.65%] top-[16.67%] right-[11.39%] bottom-[63.33%] left-[71.95%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={productDimensions}
      />
      <div className="absolute top-[30.75px] left-[17.47px] text-[8.63px] font-lato text-black text-left inline-block w-[58.24px] h-[11.08px]">
        Total Users
      </div>
      <b className="absolute top-[45.78px] left-[17.47px] text-mini-8 inline-block font-open-sans text-black text-left w-[30.2px] h-[22.16px]">
        892
      </b>
    </button>
  );
};

export default TotalUsersContainer;
