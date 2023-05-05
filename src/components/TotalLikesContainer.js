import { useMemo } from "react";

const TotalLikesContainer = ({ productId, propTop, propLeft }) => {
  const totalLikesStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <button
      className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[213px] left-[30px] w-[155px] h-[84.14px]"
      style={totalLikesStyle}
    >
      <div className="absolute top-[0px] left-[0px] w-[155px] h-[84.14px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[14.02px] bg-mistyrose" />
      </div>
      <div className="absolute top-[31.55px] left-[17.68px] text-[9.82px] font-lato text-black text-left inline-block w-[56.8px]">
        Total Likes
      </div>
      <b className="absolute top-[46.98px] left-[17.94px] text-[16.83px] inline-block font-open-sans text-black text-left w-[45.76px]">
        9,721
      </b>
      <img
        className="absolute h-1/5 w-[10.54%] top-[16.67%] right-[11.56%] bottom-[63.33%] left-[77.9%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={productId}
      />
    </button>
  );
};

export default TotalLikesContainer;
