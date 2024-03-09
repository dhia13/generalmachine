import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { State } from "@/context/context";

import Image from "next/image";

function FlagIcon({ countryCode = "" }) {
  if (countryCode === "en") {
    countryCode = "gb";
  }

  return (
    <span
      className={`fi fis inline-block mr-2 fi-${countryCode}`}
      style={{
        width: $size,
        height: $size,
        fontSize: $size,
        borderRadius: "100%",
        border: "none",
        boxShadow: "inset 0 0 0 2px rgba(0, 0, 0, .06)",
        background: "white",
      }}
    />
  );
}

const LANGUAGE_SELECTOR_ID = "language-selector";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [languages, setLanguages] = useState([
    { key: "en", label: "English", name: "En" },
    { key: "fr", label: "Frensh", name: "Fr" },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const selectedLanguage = languages.find(
    (language) => language.key === i18n.language
  );
  const { setPreferedLanguage, preferedLanguage } = useContext(State);

  const handleLanguageChange = async (language) => {
    await i18n.changeLanguage(language.key);
    document.documentElement.lang = language.key; // Update lang attribute
    setPreferedLanguage(language.key);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleWindowClick = (event) => {
      const target = event.target.closest("button");
      if (target && target.id === LANGUAGE_SELECTOR_ID) {
        return;
      }
      setIsOpen(false);
    };
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  if (!selectedLanguage) {
    return null;
  }

  return (
    <>
      <div className="flex items-center z-40">
        <div className="relative inline-block text-left h-[32px]">
          <div className="h-full">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center cursor-pointer h-full justify-center w-[60px] ${
                isOpen ? "rounded-tl-md rounded-tr-md" : "rounded-md"
              } 
               gap-1 shadow-sm p-2 bg-gray-200 dark:bg-gray-800 text-sm font-medium text-black dark:text-white`}
              id={LANGUAGE_SELECTOR_ID}
            >
              <Image
                src={`/images/icons/${
                  selectedLanguage.key === "fr" ? "france" : "english"
                }.png`}
                width={16}
                height={16}
                alt="Picture of the author"
              />
              {/* <p className="mx-1">{selectedLanguage.name}</p> */}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {isOpen && (
            <div className="origin-top-right absolute overflow-hidden right-0 w-[170px] rounded-bl-md rounded-br-md rounded-tl-md shadow-lg z-50">
              <div className="flex justify-center items-center" role="none">
                {languages.map((language, index) => {
                  return (
                    <button
                      key={language.key}
                      onClick={() => handleLanguageChange(language)}
                      className={`${
                        selectedLanguage.key === language.key
                          ? " text-gray-900 dark:bg-gray-900 bg-gray-300 hover:bg-gray-100"
                          : "text-gray-700 hover:bg-gray-100 bg-gray-200 dark:bg-gray-800 "
                      }  px-4 py-2 text-sm flex justify-start items-center text-left gap-4 dark:hover:bg-gray-600   
                       h-full w-[85px] font-medium text-black dark:text-white
                      `}
                    >
                      <Image
                        src={`/images/${
                          language.key === "fr" ? "france" : "english"
                        }.png`}
                        width={16}
                        height={16}
                        alt="Picture of the author"
                      />
                      <span className="truncate">{language.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default LanguageSelector;
