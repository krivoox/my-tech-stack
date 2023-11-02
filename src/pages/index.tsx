/* eslint-disable @next/next/no-img-element */
import Navbar from '~/components/navbar';

export default function Home() {
  return (
    <div>
      <Navbar />

      <header>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
            <div className="flex flex-col">
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                The Website You Want Without The Dev Time.
              </h1>
              <p className="mb-6 max-w-lg text-sm text-[#636262] sm:text-xl md:mb-10 lg:mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus
              </p>

              <form
                name="email-form"
                method="get"
                className="relative mb-5 w-full max-w-xl pb-8 md:mb-6 lg:mb-4 lg:max-w-[80%]"
              >
                <input
                  type="email"
                  className="h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-[#333333]"
                  placeholder="Enter your email"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="relative right-0 top-[5px] w-full cursor-pointer rounded-md bg-black px-6 py-2 text-center font-semibold text-white sm:absolute sm:right-[5px] sm:w-auto"
                />
              </form>

              <div className="grid w-full max-w-2xl grid-flow-row grid-cols-3 gap-4">
                <div>
                  <h3 className="text-2xl font-bold md:text-3xl">10K+</h3>
                  <p className="text-sm text-[#636262]">Customers</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold md:text-3xl">200K+</h3>
                  <p className="text-sm text-[#636262]">Emails</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold md:text-3xl">500+</h3>
                  <p className="text-sm text-[#636262]">Projects</p>
                </div>
              </div>
            </div>

            <img
              src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a940836e6cf8d_Group%2047854%20(2).svg"
              alt=""
              className="inline-block h-full w-full max-w-[640px]"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
