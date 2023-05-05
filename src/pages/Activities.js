import ActivitiesSection from "../components/ActivitiesSection";
import RevenueContainer from "../components/RevenueContainer";
import TransactionContainer from "../components/TransactionContainer";
import TotalUsersContainer from "../components/TotalUsersContainer";
import TotalLikesContainer from "../components/TotalLikesContainer";

const Activities = () => {
  return (
    <div className="relative bg-whitesmoke w-full h-[844px] overflow-hidden text-left text-xs text-icon font-lato">
      <div className="absolute top-[0px] left-[0px] bg-black w-[390px] h-[63px]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1.18%] left-[3.08%] text-17xl font-bold font-montserrat text-white text-left inline-block">
        Board.
      </button>
      <img
        className="absolute h-[3%] w-[7.69%] top-[2.37%] right-[4.62%] bottom-[94.63%] left-[87.69%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/-icon-hamburger-menu.svg"
      />
      <ActivitiesSection />
      <RevenueContainer dimensions="/vector1.svg" />
      <TransactionContainer />
      <TotalUsersContainer productDimensions="/vector2.svg" />
      <TotalLikesContainer productId="/vector3.svg" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[547px] left-[27px] text-lg font-bold font-montserrat text-black text-left inline-block w-[213px]">
        Today’s schedule
      </button>
      <div className="absolute top-[585px] left-[27px] w-[330px] h-[66px]">
        <b className="absolute top-[3px] left-[19.72px] text-sm inline-block text-dimgray w-[310.28px]">
          Meeting with suppliers from Kuta Bali
        </b>
        <div className="absolute top-[25px] left-[19.72px] inline-block w-[86.77px]">
          14.00-15.00
        </div>
        <div className="absolute top-[44px] left-[19.72px] inline-block w-[177.49px]">{`at Sunset Road, Kuta, Bali `}</div>
        <div className="absolute top-[-2.5px] left-[-2.5px] box-border w-[5px] h-[71px] border-r-[5px] border-solid border-light-green" />
      </div>
      <div className="absolute top-[667px] left-[27px] w-[298.45px] h-[66px]">
        <b className="absolute top-[3px] left-[19.72px] text-sm inline-block text-dimgray w-[278.73px]">
          Check operation at Giga Factory 1
        </b>
        <div className="absolute top-[25px] left-[19.72px] inline-block w-[86.77px]">
          18.00-20.00
        </div>
        <div className="absolute top-[44px] left-[19.72px] inline-block w-[120.96px]">{`at Central Jakarta `}</div>
        <div className="absolute top-[-2.5px] left-[-2.5px] box-border w-[5px] h-[71px] border-r-[5px] border-solid border-cornflowerblue" />
      </div>
    </div>
  );
};

export default Activities;
