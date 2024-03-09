import { useContext, useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import { State } from "@/context/context";
function DarkModeToggle({ bg, extraStyles }) {
  const { setDarkThemeEnabled, darkThemeEnabled } = useContext(State);
  function toggleDarkMode() {
    setDarkThemeEnabled(!darkThemeEnabled);
  }
  return (
    <button
      className={`p-2  ${
        bg || extraStyles ? "rounded-full" : "rounded-md"
      }  text-black dark:text-white ${
        extraStyles ? extraStyles : "bg-gray-200 dark:bg-gray-800"
      }`}
      onClick={toggleDarkMode}
    >
      {darkThemeEnabled ? <CiDark /> : <MdOutlineLightMode />}
    </button>
  );
}

export default DarkModeToggle;
