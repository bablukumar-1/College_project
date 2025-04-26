import React from 'react';

function Signup() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container flex-1 flex flex-col items-center max-w-lg mx-auto px-4 py-28">
        <div
          className="flex flex-col p-6 rounded-2xl shadow-md shadow-white"
          style={{
            backgroundImage: "url('https://img.freepik.com/free-photo/starry-night-sky_1048-11828.jpg')",
            backgroundSize: 'cover',
          }}
        >
          <h1 className="text-center text-5xl mb-6 text-neutral-200">Sign Up</h1>

          <form>
            <input
              id="name"
              type="text"
              className="w-auto mb-8 mt-6 mx-8 rounded-lg text-gray-200 placeholder-gray-200 border-gray-200 border-t-transparent bg-transparent focus:outline-none focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent"
              placeholder="Name"
            />

            <input
              id="email"
              type="email"
              className="w-auto mb-8 mt-6 mx-8 rounded-lg text-gray-200 placeholder-gray-200 border-gray-200 border-t-transparent bg-transparent focus:outline-none focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent"
              placeholder="Email"
            />

            <input
              id="password"
              type="password"
              className="w-auto mb-8 mt-6 mx-8 rounded-lg text-gray-200 placeholder-gray-200 border-gray-200 border-t-transparent bg-transparent focus:outline-none focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent"
              placeholder="Password"
            />

            <input
              id="confirmPassword"
              type="password"
              className="w-auto mb-8 mt-6 mx-8 rounded-lg text-gray-200 placeholder-gray-200 border-gray-200 border-t-transparent bg-transparent focus:outline-none focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              className="relative inline-flex items-center justify-center p-0.5 mb-8 mt-6 mx-8 overflow-hidden text-sm font-medium text-neutral-200 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white focus:outline-none"
            >
              <span className="relative text-lg w-full px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
                Create Account
              </span>
            </button>
          </form>

          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-8 bg-neutral-200 border-0" />
            <span className="absolute px-3 font-medium text-neutral-200 -translate-x-1/2 left-1/2 bg-black">or</span>
          </div>

          {/* Social Buttons */}
          <SocialButton
            bgColor="#3b5998"
            label="Sign up with Facebook"
            icon={
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                />
              </svg>
            }
          />

          <SocialButton
            bgColor="#fff"
            textColor="black"
            label="Sign up with 𝕏"
            icon={<img src="/landing_style/files/x.svg.png" alt="X" className="w-4 h-4 mr-2" />}
          />

          <SocialButton
            bgColor="#24292F"
            label="Sign up with Github"
            icon={
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                />
              </svg>
            }
          />

          <SocialButton
            bgColor="#4285F4"
            label="Sign up with Google"
            icon={
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                />
              </svg>
            }
          />

          <SocialButton
            bgColor="#000"
            label="Sign up with Apple"
            icon={
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
            }
          />

          <div className="text-center text-sm text-neutral-200 mt-4">
            By signing up, you agree to the{' '}
            <a className="border-b border-grey-dark text-neutral-200" href="#">
              Terms of Service
            </a>{' '}
            and{' '}
            <a className="border-b border-grey-dark text-neutral-200" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Social Button Component
const SocialButton = ({ bgColor, textColor = 'white', label, icon }) => (
  <button
    type="button"
    className={`text-${textColor} bg-[${bgColor}] hover:bg-[${bgColor}]/90 focus:ring-4 focus:outline-none focus:ring-[${bgColor}]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2`}
  >
    {icon}
    {label}
  </button>
);

export default Signup;
