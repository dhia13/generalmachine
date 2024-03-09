import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
export const State = createContext(null);
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

// Import your translations
import translationEN from "@/context/locales/en.json";
import translationFR from "@/context/locales/fr.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      fr: {
        translation: translationFR,
      },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });
function Context({ children }) {
  const router = useRouter();
  function removeFirstLetter(str) {
    let newStr = str.slice(1);
    return newStr.toLowerCase();
  }
  const [preferedLanguage, setPreferedLanguage] = useState("en");
  const [showRightMenu, setShowRightMenu] = useState(false);
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(null);
  useEffect(() => {
    sessionStorage.setItem("showRightMenu", showRightMenu);
  }, [showRightMenu]);
  // controlling page url and state
  const [page, setPage] = useState();
  useEffect(() => {
    if (removeFirstLetter(router.pathname)) {
      setPage(removeFirstLetter(router.pathname));
    } else {
      setPage("home");
    }
  }, [router]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDarkThemeEnabled =
        localStorage.getItem("darkThemeEnabled") === "true";
      setDarkThemeEnabled(isDarkThemeEnabled);
      if (isDarkThemeEnabled) {
        document.documentElement.classList.add("dark");
      }
      const preferedLanguage = localStorage.getItem("preferedLanguage")
        ? localStorage.getItem("preferedLanguage")
        : navigator.language && navigator.language.includes("fr")
        ? "fr"
        : "en";
      setPreferedLanguage(preferedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkThemeEnabled", darkThemeEnabled);
    if (darkThemeEnabled) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkThemeEnabled]);
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        en: {
          translation: translationEN,
        },
        fr: {
          translation: translationFR,
        },
      },
      lng: preferedLanguage || "en", // Use preferedLanguage if available, otherwise fallback to "en"
      fallbackLng: "en", // Fallback language
      interpolation: {
        escapeValue: false, // React already does escaping
      },
    });
  useEffect(() => {
    // Prevent flickering on language change
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  console.log({ showRightMenu, page, preferedLanguage, darkThemeEnabled });
  useEffect(() => {
    localStorage.setItem("preferedLanguage", preferedLanguage);
  }, [preferedLanguage]);
  const [subPage, setSubPage] = useState(
    typeof window !== "undefined" && sessionStorage.getItem("setSubPage")
      ? sessionStorage.getItem("setSubPage")
      : page === "agency"
      ? "vision"
      : page === "servicies"
      ? "consulting"
      : page === "events"
      ? "seer"
      : page === "achivments"
      ? "seer18"
      : ""
  );
  return (
    <State.Provider
      value={{
        page,
        setPage,
        subPage,
        setSubPage,
        showRightMenu,
        setShowRightMenu,
        preferedLanguage,
        setPreferedLanguage,
        setDarkThemeEnabled,
        darkThemeEnabled,
      }}
    >
      {children}
    </State.Provider>
  );
}
export default Context;
