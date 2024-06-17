import  { useState } from "react";
import { Link } from "react-router-dom";



const ForgotPassword = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((visible) => !visible);
  };
  return (
    <>
       {/* <!-- Hire Us --> */}
       <div className=" grid h-screen max-w-[75rem] px-4 py-10 sm:px-6 lg:px-10 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">
              Hire us
            </h1>
            <p className="mt-1 md:text-lg text-gray-800 dark:text-neutral-200">
              We help brands and platforms turn big ideas into beautiful digital
              products and experiences.
            </p>
            <img
              src="https://empxtrack.com/wp-content/uploads/2021/04/Employee-Self-Service-Portal.png"
              alt="Employee Self Service"
            />
          </div>
          {/* <!-- End Col --> */}

          <div className="relative">
            {/* <!-- Card --> */}
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-neutral-700">
              <h2 className="text-2xl font-semibold text-blue-800 dark:text-neutral-200">
              Account recovery
              </h2>
              <h2 className="text-md font-semibold text-gray-800 dark:text-neutral-200">
              Enter the below details to receive OTP.
              </h2>
              <form>
                <div className="mt-6 grid gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-work-email-hire-us-1"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="hs-work-email-hire-us-1"
                      id="hs-work-email-hire-us-1"
                      autoComplete="email"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
                  {/* <div id="otp" className="flex flex-row justify-center text-center px-2 ">
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="first" maxLength="1" /> 
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="second" maxLength="1" /> 
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="third" maxLength="1" /> 
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxLength="1" />
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fifth" maxLength="1" /> 
            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxLength="1" />
                      </div> */}
                 
                 
                </div>
              </form>
              {/* <!-- End Grid --> */}

              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {/* <TbPasswordMobilePhone /> */}
                  Send OTP
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                  Don&apos;t have an account yet?
                  <Link
                    className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                   to={"/"}
                  >
                    Sign up here
                  </Link>
                </p>
              </div>
            </div>
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Hire Us --> */}
    </>
  );
};

export default ForgotPassword;
