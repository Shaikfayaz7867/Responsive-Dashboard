import RevenueContainer from "../components/RevenueContainer";
import TransactionContainer from "../components/TransactionContainer";
import TotalUsersContainer from "../components/TotalUsersContainer";
import TotalLikesContainer from "../components/TotalLikesContainer";
import TopProductsCard from "../components/TopProductsCard";

const IPhone1313Pro2 = () => {
  return (
    <div className="relative bg-whitesmoke w-full h-[844px] overflow-hidden text-left text-xs text-icon font-lato">
      <div className="absolute top-[0px] left-[0px] bg-black w-[390px] h-[63px]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1.18%] left-[5.13%] text-17xl font-bold font-montserrat text-white text-left inline-block">
        Board.
      </button>
      <img
        className="absolute h-[3%] w-[7.69%] top-[2.37%] right-[4.87%] bottom-[94.63%] left-[87.44%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/-icon-hamburger-menu1.svg"
      />
      <a
        className="[text-decoration:none] absolute top-[67.54%] left-[76.92%] text-sm font-montserrat text-white"
        href="http://"
        target="_blank"
      >
        Contact Us
      </a>
      <RevenueContainer
        dimensions="/vector9.svg"
        propTop="108px"
        propLeft="39px"
      />
      <TransactionContainer propTop="108px" propLeft="215px" />
      <TotalUsersContainer
        productDimensions="/vector10.svg"
        propTop="223px"
        propLeft="215px"
      />
      <TotalLikesContainer
        productId="/vector11.svg"
        propTop="222px"
        propLeft="39px"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[344px] left-[85px] w-[236px] h-14">
        <div className="absolute top-[0px] left-[0px] w-[236px] h-14">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[20px] bg-mistyrose" />
        </div>
        <div className="absolute top-[20px] left-[92px] text-sm font-lato text-black text-left inline-block w-[86px] h-[25px]">
          Activities
        </div>
      </button>
      <TopProductsCard />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[620px] left-[24px] text-lg font-bold font-montserrat text-black text-left inline-block">
        Today’s schedule
      </button>
      <div className="absolute top-[658px] left-[24px] w-[251px] h-[66px]">
        <b className="absolute top-[3px] left-[15px] text-sm text-dimgray">
          Meeting with suppliers from Kuta Bali
        </b>
        <div className="absolute top-[25px] left-[15px]">14.00-15.00</div>
        <div className="absolute top-[44px] left-[15px]">{`at Sunset Road, Kuta, Bali `}</div>
        <div className="absolute top-[-2.5px] left-[-2.5px] box-border w-[5px] h-[71px] border-r-[5px] border-solid border-light-green" />
      </div>
      <div className="absolute top-[740px] left-[24px] w-[227px] h-[66px]">
        <b className="absolute top-[3px] left-[15px] text-sm text-dimgray">
          Check operation at Giga Factory 1
        </b>
        <div className="absolute top-[25px] left-[15px]">18.00-20.00</div>
        <div className="absolute top-[44px] left-[15px]">{`at Central Jakarta `}</div>
        <div className="absolute top-[-2.5px] left-[-2.5px] box-border w-[5px] h-[71px] border-r-[5px] border-solid border-cornflowerblue" />
      </div>
    </div>
  );
};

export default IPhone1313Pro2;
