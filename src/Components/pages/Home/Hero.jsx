import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";

const Hero = ({ scrollProducts }) => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <main className="h-full flex justify-center items-center mx-auto max-w-[1400px] lg:w-full w-full ">
      <div className="container mx-8 lg:flex justify-center items-center h-full flex-col-reverse lg:flex-row">
        <div className=" lg:text-left h-1/2 md:w-full  w-full justify-center items-start flex flex-col">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            General Machines
          </h1>
          <h2 className="text-2xl lg:text-2xl mt-6 font-semibold">
            {t("HeroParagraph")}
          </h2>
          <div className="flex justify-start items-center my-8">
            <button
              onClick={scrollProducts}
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              {t("BrowseProducts")}
            </button>
            <button
              onClick={() => router.push("/Contact")}
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              {t("ContactUs")}
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-1/2">
          <img src="/images/logo.png" className="h-[90%]" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
