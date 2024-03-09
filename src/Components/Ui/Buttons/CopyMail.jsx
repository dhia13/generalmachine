import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { CgCopy } from "react-icons/cg";

const CopyMail = ({ mail }) => {
  const [copy, setCopy] = useState(false);
  const { t } = useTranslation();

  const handleCopy = () => {
    navigator.clipboard.writeText(mail);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };
  return (
    <div className="flex justify-center items-center sm:gap-2 gap-1  mb-2 relative">
      <p className="dark:text-white text-black">{mail}</p>
      <div className="w-[30px] h-[30px] relative flex justify-center items-center">
        <CgCopy onClick={() => handleCopy()} className="cursor-pointer" />
        <div
          className={`${
            copy ? "absolute" : "hidden"
          } top-0 left-[28px]   text-white text-xs 
            bg-gray-400 whitespace-nowrap	 rounded-md px-2 py-1   mt-1`}
        >
          {t("EmailCopied")}
        </div>
      </div>
    </div>
  );
};

export default CopyMail;
