import React from "react";
import { useTranslation } from "react-i18next";

import { useRouter } from "next/router";
import { useContext } from "react";
import { State } from "@/context/context";

const SideNavMenuList = () => {
  const router = useRouter();
  const { page, setPage, setShowRightMenu } = useContext(State);
  const { t } = useTranslation();
  const MenuList = [
    {
      route: "",
      page: "home",
      placeHolder: "Home",
    },
    {
      route: "Products",
      page: "products",
      placeHolder: "Products",
    },
    {
      route: "About",
      page: "about",
      placeHolder: "about",
    },
    {
      route: "Contact",
      page: "contact",
      placeHolder: "Contact Us",
    },
  ];
  return (
    <div className="w-full flex justify-center items-center gap-4 flex-col mt-[100px] text-2xl font-semibold font-Signika uppercase text-white">
      {MenuList.map((i, index) => (
        <p
          key={index}
          className={`my-4 cursor-pointer hover:text-[#691243] ${
            page === i.page ? "text-purple-400" : "text-white"
          }`}
          onClick={() => {
            setPage(i.page);
            router.push(`/${i.route}`);
            setShowRightMenu(false);
          }}
        >
          {t(`${i.placeHolder}`)}
        </p>
      ))}
    </div>
  );
};

export default SideNavMenuList;
