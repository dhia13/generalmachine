import { useContext } from "react";
import { State } from "@/context/context";
import SocialLinks from "./SocialLinks";
import SideNavMenuList from "./SideNavMenuList";

const SideMenu = () => {
  const { showRightMenu } = useContext(State);

  return (
    <div
      className={`w-[100%] md:w-[50%] xl:w-[25%] h-[100%]  bg-[#9A1A65] dark:bg-[#691243] absolute top-[50%] ${
        !showRightMenu ? "right-[-100%]" : "right-0"
      } z-40 translate-y-[-50%] rounded-tl-3xl rounded-bl-3xl flex-col flex justify-start items-center ease transform duration-700 transition-all`}
    >
      <SideNavMenuList />
      <div className="absolute bottom-4 w-full">
        <SocialLinks />
      </div>
    </div>
  );
};

export default SideMenu;
