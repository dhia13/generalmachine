import React from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useContext } from "react";
import { State } from "@/context/context";
import DarkModeToggle from "../Buttons/DarkToggleBtn";
import LanguageSelector from "../Buttons/LanguageSelector";
const TopNav = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const { showRightMenu, setShowRightMenu } = useContext(State);
  const genericHamburgerLine = `h-[2px] my-[4px] rounded-full bg-black dark:bg-white transition ease transform duration-300`;
  return (
    <nav
      className="top-0 absolute left-0 h-[80px] bg-white dark:bg-black w-full
       flex justify-center items-center border-b border-gray-400 dark:border-gray-700 dark:text-white text-black"
    >
      {/* logo */}
      <div className="flex justify-between items-center xl:max-w-[1376px] xl:w-[1376px] w-full mx-2 lg:mx-8">
        <div
          className="w-[80px] h-[80px] flex justify-center items-center"
          onClick={() => {
            {
              router.push("/");
            }
          }}
        >
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-[62px] h-[62px] cursor-pointer"
          />
        </div>
        {/* home contact burger */}
        <div className="h-full flex justify-center items-center gap-2  z-50 mx-1">
          <div className="hidden justify-center items-center mx-1 gap-2 md:flex">
            <button
              onClick={() => {
                router.push("/");
              }}
              className={`mx-4 font-Signika font-medium ${
                showRightMenu ? "opacity-0" : "opacity-1"
              }  cursor-pointer transition ease transform duration-300`}
            >
              {t("Home")}
            </button>
            <button
              onClick={() => {
                router.push("/Products");
              }}
              className={`mx-4 font-Signika font-medium ${
                showRightMenu ? "opacity-0" : "opacity-1"
              }  cursor-pointer transition ease transform duration-300`}
            >
              {t("Products")}
            </button>
            {/* <button
              onClick={() => {
                router.push("/Servicies");
              }}
              className={`mx-4 font-Signika font-medium ${
                showRightMenu ? "opacity-0" : "opacity-1"
              }  cursor-pointer transition ease transform duration-300`}
            >
              {t("Servicies")}
            </button> */}
            <button
              onClick={() => {
                router.push("/About");
              }}
              className={`mx-4 font-Signika font-medium ${
                showRightMenu ? "opacity-0" : "opacity-1"
              }  cursor-pointer transition ease transform duration-300`}
            >
              {t("About")}
            </button>
            <button
              onClick={() => {
                router.push("/Contact");
              }}
              className={`mx-4 font-Signika font-medium ${
                showRightMenu ? "opacity-0" : "opacity-1"
              } cursor-pointer transition ease transform duration-300`}
            >
              {t("Contact")}
            </button>
          </div>
          <DarkModeToggle />
          <LanguageSelector />
          <button
            className="flex flex-col h-12 w-12 justify-center items-center group lg:hidden"
            onClick={() => {
              setShowRightMenu(!showRightMenu);
            }}
          >
            <div
              className={`${genericHamburgerLine} w-6 ${
                showRightMenu
                  ? "rotate-45 translate-y-[10px]  opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                showRightMenu
                  ? "opacity-0 w-6"
                  : "opacity-50 group-hover:opacity-100 w-6"
              }`}
            />
            <div
              className={`${genericHamburgerLine} w-6 ${
                showRightMenu
                  ? "-rotate-45 -translate-y-[10px] opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100 w-6"
              }`}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
