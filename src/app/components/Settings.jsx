"use client";

import ellipse1 from "@/assets/icons/Ellipse_1.png";
import ellipse2 from "@/assets/icons/Ellipse_2.png";
import ellipse3 from "@/assets/icons/Ellipse_3.png";
import ellipse4 from "@/assets/icons/Ellipse_4.png";
import Image from "next/image";
import { useState } from "react";

const Settings = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <div className="flex flex-col items-center h-screen bg-gray-100 dark:bg-gray-800 rounded-3xl w-full">
            <h1 className="font-inter font-bold mt-4 mb-6 dark:text-white">
                Settings
            </h1>
            <div className="w-full px-4 space-y-2">
                {/* Language Settings */}
                <div className="group">
                    <div
                        className="flex items-center space-x-3 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-all"
                        onClick={() =>
                            setActiveIndex(activeIndex === 1 ? null : 1)
                        }
                    >
                        <Image
                            src={ellipse1}
                            alt="Language Settings"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                            Language Settings
                        </span>
                    </div>
                </div>

                {/* Sponsored Settings */}
                <div className="group">
                    <div
                        className="flex items-center space-x-3 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-all"
                        onClick={() =>
                            setActiveIndex(activeIndex === 2 ? null : 2)
                        }
                    >
                        <Image
                            src={ellipse2}
                            alt="Sponsored Settings"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                            Sponsored Settings
                        </span>
                    </div>
                </div>

                {/* Start Settings */}
                <div className="group">
                    <div
                        className="flex items-center space-x-3 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-all"
                        onClick={() =>
                            setActiveIndex(activeIndex === 3 ? null : 3)
                        }
                    >
                        <Image
                            src={ellipse3}
                            alt="Start Settings"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                            Start Settings
                        </span>
                    </div>
                </div>

                {/* Appearance Settings with Dropdown */}
                <div className="group">
                    <div
                        className="flex items-center justify-between space-x-3 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-all"
                        onClick={() =>
                            setActiveIndex(activeIndex === 4 ? null : 4)
                        }
                    >
                        <div className="flex items-center space-x-3">
                            <Image
                                src={ellipse4}
                                alt="Appearance Settings"
                                width={24}
                                height={24}
                                className="object-contain"
                            />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                Appearance Settings
                            </span>
                        </div>
                        <span
                            className={`transform transition-transform ${
                                activeIndex === 4 ? "rotate-180" : ""
                            } dark:text-white`}
                        >
                            &#9660;
                        </span>
                    </div>

                    {activeIndex === 4 && (
                        <div className="ml-8 mt-2">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-inter text-gray-600 dark:text-gray-300">
                                    Theme
                                </span>
                                <button
                                    onClick={toggleTheme}
                                    className={`w-10 h-5 rounded-full p-1 transition-colors ${
                                        theme === "dark"
                                            ? "bg-blue-500"
                                            : "bg-gray-300"
                                    }`}
                                >
                                    <div
                                        className={`bg-white w-3 h-3 rounded-full transform transition-transform ${
                                            theme === "dark"
                                                ? "translate-x-5"
                                                : "translate-x-0"
                                        }`}
                                    />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Settings;
