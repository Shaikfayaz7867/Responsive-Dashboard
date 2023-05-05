import LoginForm from "../components/LoginForm";

const IPhone1313Pro1 = () => {
  return (
    <div className="relative bg-white w-full h-[844px] overflow-hidden text-left text-17xl text-black font-montserrat">
      <h4 className="m-0 absolute top-[132px] left-[25px] text-[inherit] font-bold font-inherit">
        Sign In
      </h4>
      <h5 className="m-0 absolute top-[191px] left-[25px] text-[16px] font-normal font-lato">
        Sign in to your account
      </h5>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[227px] left-[6px] w-[180px] h-[30px]">
        <div className="absolute top-[0px] left-[0px] w-[180px] h-[30px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white" />
        </div>
        <div className="absolute top-[8px] left-[43px] text-xs font-montserrat text-secondary-text text-center">
          Sign in with Google
        </div>
        <img
          className="absolute top-[8px] left-[19px] w-3.5 h-3.5 overflow-hidden"
          alt=""
          src="/googleicon-1.svg"
        />
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[226px] left-[186px] w-[180px] h-[30px]">
        <div className="absolute top-[0px] left-[0px] w-[180px] h-[30px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white" />
        </div>
        <div className="absolute top-[8px] left-[46px] text-xs font-montserrat text-secondary-text text-center">
          Sign in with Apple
        </div>
        <img
          className="absolute top-[7px] left-[24px] w-[11.5px] h-3.5 overflow-hidden"
          alt=""
          src="/apple-1.svg"
        />
      </button>
      <LoginForm />
      <header className="absolute top-[0px] left-[0px] bg-black w-[390px] h-[91px] sm:w-[420px]" />
      <h2 className="m-0 absolute top-[22px] left-[121px] text-[38.34px] font-bold font-inherit text-white sm:w-[151px] sm:h-[54px] sm:max-w-[120px] sm:max-h-[16px]">
        Board.
      </h2>
    </div>
  );
};

export default IPhone1313Pro1;
