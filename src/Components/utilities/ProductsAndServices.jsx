import React from "react";
import { useTranslation } from "react-i18next";

const ProductsAndServices = () => {
  const { t } = useTranslation();
  return (
    <div className="w-1/2 h-full justify-around items-around flex-row mx-4 hidden lg:flex">
      <div className="w-1/2 h-full p-2 flex justify-start items-start flex-column">
        <div className="text-sm">
          <h6 className="text-black  font-medium mb-1">{t("Products")}</h6>
          <ul>
            <li className="mb-1">
              <a
                href="/"
                className="hover:text-gray-300   text-gray-700 dark:text-gray-400 duration-150 ease-in-out"
              >
                {t("Product1")}
              </a>
            </li>
            <li className="mb-1">
              <a
                href="/"
                className="hover:text-gray-300   text-gray-700 dark:text-gray-400 duration-150 ease-in-out"
              >
                {t("Product2")}
              </a>
            </li>
            <li className="mb-1">
              <a
                href="/"
                className="hover:text-gray-300   text-gray-700 dark:text-gray-400 duration-150 ease-in-out"
              >
                {t("Product3")}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-1/2 h-full p-2 flex justify-start items-start flex-column">
        <div className="text-sm">
          <h6 className="text-black  font-medium mb-1"> {t("Servicies")}</h6>
          <ul>
            <li className="mb-1">
              <a
                href="/"
                className="hover:text-gray-300   text-gray-700 dark:text-gray-400 duration-150 ease-in-out"
              >
                {t("Service1")}
              </a>
            </li>
            <li className="mb-1">
              <a
                href="/"
                className="hover:text-gray-300   text-gray-700 dark:text-gray-400 duration-150 ease-in-out"
              >
                {t("Service2")}
              </a>
            </li>
            <li className="mb-1">
              <a
                href="/"
                className="hover:text-gray-300   text-gray-700 dark:text-gray-400 duration-150 ease-in-out"
              >
                {t("Service2")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductsAndServices;
