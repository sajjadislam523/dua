"use client";

import ellipse1 from "@/assets/icons/Ellipse_1.png";
import ellipse2 from "@/assets/icons/Ellipse_2.png";
import ellipse3 from "@/assets/icons/Ellipse_3.png";
import Image from "next/image";
import { useState } from "react";

const Settings = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const settings = [
        { id: 1, label: "Language Settings", icon: ellipse1 },
        { id: 2, label: "Sponsored Settings", icon: ellipse2 },
        { id: 3, label: "Start Settings", icon: ellipse3 },
        {
            id: 4,
            label: "Appearance Settings",
            icon: ellipse3,
            isDropdown: true,
        },
    ];

    return (
        <div className="flex flex-col items-center h-screen bg-white text-black rounded-3xl w-full p-6">
            <h1 className="font-inter font-bold text-2xl mb-6">Settings</h1>
            <div className="w-full space-y-3">
                {settings.map((setting) => (
                    <div key={setting.id} className="group">
                        <div
                            className="flex items-center justify-between p-3 bg-gray-100 hover:bg-gray-200 rounded-xl cursor-pointer transition-all"
                            onClick={() =>
                                setActiveIndex(
                                    activeIndex === setting.id
                                        ? null
                                        : setting.id
                                )
                            }
                        >
                            <div className="flex items-center space-x-3">
                                <Image
                                    src={setting.icon}
                                    alt={`${setting.label} Icon`}
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                                <span className="text-sm font-medium font-inter">
                                    {setting.label}
                                </span>
                            </div>
                            {setting.isDropdown && (
                                <span
                                    className={`transform transition-transform ${
                                        activeIndex === setting.id
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                >
                                    &#9660;
                                </span>
                            )}
                        </div>
                        {setting.isDropdown && activeIndex === setting.id && (
                            <div className="ml-10 mt-2 text-sm text-gray-600">
                                <p className="italic">
                                    Additional appearance options can go here.
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Settings;
