import { useMemo } from "react";

const TransactionContainer = ({ propTop, propLeft }) => {
  const totalTransactionsStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <button
      className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[99px] left-[206px] w-[151px] h-[82px]"
      style={totalTransactionsStyle}
    >
      <div className="absolute top-[0px] left-[0px] w-[151px] h-[82px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[13.84px] bg-oldlace" />
      </div>
      <div className="absolute top-[30.75px] left-[17.15px] text-[9.69px] font-lato text-black text-left inline-block w-[86.07px] h-[11.85px]">
        Total Transactions
      </div>
      <b className="absolute top-[45.78px] left-[17.15px] text-[16.61px] inline-block font-open-sans text-black text-left w-[44.58px] h-[22.71px]">
        1,520
      </b>
    </button>
  );
};

export default TransactionContainer;
