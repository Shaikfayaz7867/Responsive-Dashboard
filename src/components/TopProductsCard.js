const TopProductsCard = () => {
  return (
    <div className="absolute top-[440px] left-[72px] w-[290.56px] h-[144.25px] text-left text-3xs text-black font-montserrat">
      <div className="absolute top-[35px] left-[132px] w-[101.57px] h-[82.91px]">
        <img
          className="absolute top-[2.16px] left-[0px] w-[11.4px] h-[7.91px]"
          alt=""
          src="/ellipse-6.svg"
        />
        <img
          className="absolute top-[37px] left-[0px] w-[11.4px] h-[7.91px]"
          alt=""
          src="/ellipse-7.svg"
        />
        <img
          className="absolute top-[75px] left-[0px] w-[11.4px] h-[7.91px]"
          alt=""
          src="/ellipse-8.svg"
        />
        <a
          className="[text-decoration:none] absolute top-[0px] left-[21.77px] font-bold text-[inherit] inline-block w-[79.81px] h-[12.22px]"
          href="http://"
        >
          Basic Tees
        </a>
        <div className="absolute top-[15.81px] left-[21.77px] font-lato text-secondary-text inline-block w-[24.88px] h-[10.06px]">
          55%
        </div>
      </div>
      <a
        className="[text-decoration:none] absolute top-[0px] left-[196px] w-[70.93px] h-[10.78px] text-xs text-secondary-text"
        href="http://"
      >
        <div className="absolute top-[0px] left-[0px] inline-block w-[70.93px] h-[10.78px]">
          May - June 2021
        </div>
      </a>
      <img
        className="absolute h-[2.49%] w-[1.96%] top-[315.84%] right-[-24.78%] bottom-[-218.33%] left-[122.82%] max-w-full overflow-hidden max-h-full"
        alt=""
      />
      <div className="absolute top-[66px] left-[148px] w-[142px] h-8">
        <a
          className="[text-decoration:none] absolute top-[0px] left-[0px] font-bold text-[inherit] inline-block w-[142px] h-4"
          href="http://"
        >
          Custom Short Pants
        </a>
        <div className="absolute top-[18px] left-[4px] font-lato text-secondary-text inline-block w-[49px] h-3.5">
          31%
        </div>
      </div>
      <div className="absolute top-[108px] left-[148px] w-[78.24px] h-[34px]">
        <a
          className="[text-decoration:none] absolute top-[0px] left-[0px] font-bold text-[inherit] inline-block w-[78.24px] h-[21.25px]"
          href="http://"
        >
          Super Hoodies
        </a>
        <div className="absolute top-[17px] left-[6px] font-lato text-secondary-text inline-block w-[39px] h-[17px]">
          14%
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[11px] left-[0px] text-lg font-bold font-montserrat text-black text-left inline-block w-[138px] h-[15px]">
        Top products
      </button>
      <img
        className="absolute top-[47.94px] left-[14.88px] w-[97.99px] h-[96.31px]"
        alt=""
        src="/pie-chart.svg"
      />
    </div>
  );
};

export default TopProductsCard;
