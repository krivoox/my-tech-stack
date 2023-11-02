import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const Login = () => {
  const { data: session } = useSession();
  return (
    <>
      <section>
        {/* <!-- Container --> */}
        <div className="mx-auto w-full max-w-3xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Component --> */}
          <div className="mx-auto max-w-xl bg-[#f2f2f7] px-8 py-12 text-center">
            {/* <!-- Title --> */}
            <h2 className="text-3xl font-bold md:text-5xl">
              Start 14-day free trial
            </h2>
            <p className="mx-auto my-5 max-w-md text-sm text-[#636262] sm:text-base lg:mb-8">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut
              aliquam,purus sit amet luctus magna fringilla urna
            </p>
            <div className="mx-auto w-full max-w-[400px]">
              <a
                href="#"
                className="flex w-full max-w-full justify-center rounded-md bg-black py-3 text-white"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947090e6cf87_GoogleLogo.svg"
                  alt=""
                  className="mr-4 inline-block"
                />
                {/* <p className="text-sm sm:text-base">Sign up with Discord</p> */}
                <button onClick={() => signIn()}>Sign up with Discord</button>
              </a>
              {/* <!-- Divider --> */}
              <div className="mb-14 mt-14 flex w-full justify-around">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a948ef4e6cf94_Line%203.svg"
                  alt=""
                  className="inline-block"
                />
                <p className="text-sm text-[#636262]">or sign up with email</p>
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a948ef4e6cf94_Line%203.svg"
                  alt=""
                  className="inline-block"
                />
              </div>
              {/* <!-- Form --> */}
              <div className="mx-auto mb-4 max-w-[400px] pb-4">
                <form name="wf-form-password" method="get">
                  <div className="relative">
                    <img
                      alt=""
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9455fae6cf89_EnvelopeSimple.svg"
                      className="absolute left-[5%] top-[26%] inline-block"
                    />
                    <input
                      type="email"
                      className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]"
                      placeholder="Email Address"
                      required={true}
                    />
                  </div>
                  <div className="relative mb-4">
                    <img
                      alt=""
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a946794e6cf8a_Lock-2.svg"
                      className="absolute left-[5%] top-[26%] inline-block"
                    />
                    <input
                      type="password"
                      className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]"
                      placeholder="Password (min 8 characters)"
                      required={true}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Sign Up"
                    className="mt-4 inline-block w-full cursor-pointer items-center rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
                  />
                </form>
              </div>
              <p className="text-sm text-[#636262]">
                Already have an account?{' '}
                <a href="#" className="font-bold text-[#0b0b1f]">
                  Login now
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
