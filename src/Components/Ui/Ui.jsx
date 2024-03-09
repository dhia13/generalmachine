import { useState } from "react";
import SecondaryMenu from "./Navigation/SecondaryMenu";
import SideMenu from "./Navigation/SideMenu";
import TopNav from "./Navigation/TopNav";
import { useContext } from "react";
import { State } from "@/context/context";
import Loader from "./Loader";
import styled from "styled-components";

const Ui = ({ children }) => {
  const { showRightMenu, page, preferedLanguage, darkThemeEnabled } =
    useContext(State);
  const [secondaryMenuTransition, setSecondaryMenuTransition] = useState(false);
  if (darkThemeEnabled !== null && preferedLanguage !== null) {
    return (
      <div className="relative w-screen h-screen mx-auto dark:text-white text-black  ">
        {/* top navigation */}
        <TopNav setSecondaryMenuTransition={setSecondaryMenuTransition} />
        {/* side Nave showRightMenu */}
        <SideMenu
          setSecondaryMenuTransition={setSecondaryMenuTransition}
          secondaryMenuTransition={secondaryMenuTransition}
        />
        {/* main */}
        <Content
          className={` ${
            showRightMenu ? "md:w-[100%]" : "md:w-full"
          } h-[calc(100%-80px)] absolute w-full overflow-x-hidden top-[80px] left-0  ease transform duration-500 transition-all bg-white dark:bg-black`}
        >
          <SecondaryMenu
            secondaryMenuTransition={secondaryMenuTransition}
            setSecondaryMenuTransition={setSecondaryMenuTransition}
          />
          {children}
        </Content>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default Ui;
const Content = styled.main`
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 1px;
    height: 1px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c084fc;
  }
`;
