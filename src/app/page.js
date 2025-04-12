"use client";

import Categories from "@/app/components/Categories";
import MainContent from "@/app/components/MainContent";
import Navbar from "@/app/components/Navbar";
import Settings from "@/app/components/Settings";
import Sidebar from "@/app/components/Sidebar";
import { useState } from "react";

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex p-4 gap-2 bg-gray-100 ">
            <div className="hidden lg:flex">
                <Sidebar />
            </div>
            <div className="flex flex-col flex-1">
                <Navbar onHamburgerClick={() => setSidebarOpen(!sidebarOpen)} />
                <div className=" flex-1 grid grid-cols-8 gap-2 h-full w-full">
                    <div
                        className={`lg:col-span-2 md:col-span-3 col-span-5 h-full left-0 z-50 fixed transform transition-transform duration-300 ${
                            sidebarOpen ? "translate-x-0" : "-translate-x-full"
                        } md:relative md:translate-x-0 md:flex`}
                    >
                        <Categories
                            selectedCategory={selectedCategory}
                            setSelectedCategory={(catId) => {
                                setSelectedCategory(catId);
                                setSidebarOpen(false);
                            }}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-5 col-span-8 h-full">
                        <MainContent selectedCategory={selectedCategory} />
                    </div>
                    <div className="col-span-2 h-full hidden lg:block">
                        <Settings />
                    </div>
                </div>
            </div>
        </div>
    );
}
