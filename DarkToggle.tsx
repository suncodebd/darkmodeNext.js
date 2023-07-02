"use client";
import { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex items-end">
      <button
        className="mr-2 transition-transform duration-300 ease-in bg-slate-700 dark: rounded-full w-12 h-6 flex items-center justify-between p-1"
        onClick={toggleDarkMode}
      >
        <div
          className={`bg-white dark:bg-yellow-300 rounded-full w-4 h-4 transform transition-transform duration-300 ease-in ${
            darkMode ? "translate-x-6" : ""
          }`}
        />
      </button>
      {darkMode ? (
        <BsSunFill className="text-2xl text-yellow-300 " />
      ) : (
        <MdDarkMode className="text-2xl  " />
      )}
    </div>
  );
};

export default DarkModeToggle;
