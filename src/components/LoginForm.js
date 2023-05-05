import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const onButtonPrimaryClick = useCallback(() => {
    navigate("/iphone-13-13-pro-2");
  }, [navigate]);

  return (
    <div className="absolute top-[274px] left-[19px] w-[353px] h-[326.99px] text-left text-[14.67px] text-black font-lato">
      <div className="absolute top-[0px] left-[0px] w-[353px] h-[290.65px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[18.34px] bg-white" />
      </div>
      <input
        className="[border:none] bg-field-color-darker absolute h-[11.22%] w-[84.42%] top-[41.5%] right-[7.79%] bottom-[47.28%] left-[7.79%] rounded-[9.17px]"
        type="password"
        placeholder="password"
      />
      <input
        className="[border:none] bg-field-color-darker absolute h-[11.22%] w-[84.42%] top-[17.95%] right-[7.53%] bottom-[70.84%] left-[8.05%] rounded-[9.17px]"
        type="email"
        placeholder="Emal"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[226.47px] left-[27.51px] w-[297.99px] h-[36.68px]">
        <div className="absolute top-[0px] left-[0px] w-[297.99px] h-[36.68px]">
          <div
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[9.17px] bg-black cursor-pointer"
            onClick={onButtonPrimaryClick}
          />
        </div>
        <p className="m-0 absolute top-[8.25px] left-[103.22px] text-[14.67px] font-bold font-montserrat text-white text-center inline-block w-[93.49px] h-[19.91px]">
          Sign In
        </p>
      </button>
      <label className="absolute top-[27.51px] left-[27.51px]">
        Email address
      </label>
      <label className="absolute top-[109.11px] left-[27.51px]">Password</label>
      <a
        className="[text-decoration:none] absolute top-[190.71px] left-[28.42px] text-link"
        href="http://"
        target="_blank"
      >
        Forgot password?
      </a>
      <a
        className="[text-decoration:none] absolute top-[308.99px] left-[56.85px] text-center text-secondary-text"
        href="http://"
        target="_blank"
      >
        <span>{`Don’t have an account? `}</span>
        <span className="text-link">Register here</span>
      </a>
    </div>
  );
};

export default LoginForm;
