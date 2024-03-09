import { useEffect } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "@/context/context";
import styled from "styled-components";
const SecondaryMenu = ({
  secondaryMenuTransition,
  setSecondaryMenuTransition,
}) => {
  const { page, subPage, setSubPage } = useContext(State);
  const menuTransition = useTransition(secondaryMenuTransition, {
    from: { left: "-100%", opacity: 0 },
    enter: { left: "0", opacity: 1 },
    leave: { top: "-100%", opacity: 0 },
  });

  useEffect(() => {
    if (
      page === "agency" ||
      page === "servicies" ||
      page === "events" ||
      page === "achivments"
    ) {
      setSecondaryMenuTransition(true);
    } else {
      setSecondaryMenuTransition(false);
    }
  }, [page]);

  return (
    <>
      {menuTransition(
        (style, item) =>
          item && (
            <animated.nav
              style={style}
              className="absolute w-[100%] h-[60px] font-Signika font-light bg-white dark:bg-black"
            >
              <SNav
                className={`w-full h-[60px] absolute ${
                  page === "agency" ? "left-0" : "left-[-100%]"
                } flex justify-start items-center gap-6 pl-5 md:pl-10 ease transform duration-500 transition-all overflow-x-auto`}
              >
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "vision"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("vision")}
                >
                  Vision
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "engagment"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("engagment")}
                >
                  Engagement
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "communication"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("communication")}
                >
                  Communication
                </p>
                <p
                  className={`cursor-pointer font-semibold mr-2 ${
                    subPage === "b2b"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("b2b")}
                >
                  B2B
                </p>
              </SNav>
              <SNav
                className={`w-full h-[60px] absolute ${
                  page === "servicies" ? "left-0" : "left-[-100%]"
                } flex justify-start items-center  gap-6  ease pl-5 md:pl-10 transform duration-500 transition-all overflow-x-auto`}
              >
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "consulting"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("consulting")}
                >
                  Consulting
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "identity"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("identity")}
                >
                  Identity
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "graphics"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("graphics")}
                >
                  Graphics
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "digital"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("digital")}
                >
                  Digital
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "video"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("video")}
                >
                  Video
                </p>
                <p
                  className={`cursor-pointer font-semibold mr-4 ${
                    subPage === "events"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("events")}
                >
                  Events
                </p>
              </SNav>
              <SNav
                className={`w-full h-[60px] absolute ${
                  page === "events" ? "left-0" : "left-[-100%]"
                } flex justify-start items-center  gap-6  ease pl-5 md:pl-10 transform duration-500 transition-all overflow-x-auto`}
              >
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "seer"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("seer")}
                >
                  SEER
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "eic"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("eic")}
                >
                  EIC
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "niae"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("niae")}
                >
                  NIAE
                </p>
              </SNav>
              <SNav
                className={`w-full h-[60px] absolute ${
                  page === "achivments" ? "left-0" : "left-[-100%]"
                } flex justify-start items-center  gap-6  ease pl-5 md:pl-10 transform duration-500 transition-all overflow-x-auto whitespace-nowrap`}
              >
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "seer18"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("seer18")}
                >
                  SEER 18
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "seer19"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("seer19")}
                >
                  SEER 19
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "seer20"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("seer20")}
                >
                  SEER 20
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "seer21"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("seer21")}
                >
                  SEER 21
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "seer22"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("seer22")}
                >
                  SEER 22
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "seer23"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("seer23")}
                >
                  SEER 23
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "eva"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("eva")}
                >
                  EVA
                </p>
                <p
                  className={`cursor-pointer font-semibold mr-4 ${
                    subPage === "stands"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("stands")}
                >
                  Stands
                </p>
              </SNav>
            </animated.nav>
          )
      )}
    </>
  );
};

export default SecondaryMenu;
const SNav = styled.nav`
  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #c084fc;
  }
`;
