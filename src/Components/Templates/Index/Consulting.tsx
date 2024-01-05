import { Link } from "react-router-dom";

const Consulting = () => {
  return (
    <div className="mt-32 px-4">
      <div className="relative pt-20">
        <div className="hidden sm:block" aria-hidden="true">
          <div className="absolute !inset-y-0 left-0 w-1/2 h-[335px] bg-stone-900 rounded-r-3xl"></div>
          <svg
            width="404"
            height="392"
            fill="none"
            className="absolute top-8 left-1/2 -ml-14"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                width="20"
                height="20"
                x="0"
                y="0"
                patternUnits="userSpaceOnUse"
              >
                <path
                  fill="currentColor"
                  d="M0 0H4V4H0z"
                  className="text-gray-200"
                ></path>
              </pattern>
            </defs>
            <path
              fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
              d="M0 0H404V392H0z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="container max-w-screen-2xl">
        <div className="relative rounded-3xl px-6 py-10 bg-stone-800 overflow-hidden shadow-xl sm:px-12 sm:py-16">
          <div
            className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid slice"
              viewBox="0 0 1463 360"
            >
              <path
                fill="currentColor"
                d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                className="text-stone-700 text-opacity-40"
              ></path>
              <path
                fill="currentColor"
                d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                className="text-stone-900 text-opacity-40"
              ></path>
            </svg>
          </div>
          <div className="relative sm:text-center flex flex-col gap-12 py-8">
            <h2 className="text-white font-IRANSans_Black text-5xl">
              با مشـــاوران مـــا در ارتبـــاط باشیــــد...
            </h2>{" "}
            <h3 className="text-white">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده
            </h3>
            <Link
              to="/contactus"
              className="text-2xl self-center font-bold bg-orange-200 w-60 rounded-full p-6 text-center shadow-md"
            >
              بیشتر بخوانید...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Consulting;
