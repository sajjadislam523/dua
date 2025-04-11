"use client";

import Categories from "@/app/components/Categories";
import MainContent from "@/app/components/MainContent";
import Navbar from "@/app/components/Navbar";
import Settings from "@/app/components/Settings";
import Sidebar from "@/app/components/Sidebar";
import { useState } from "react";

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <div className="flex p-4 gap-2 bg-gray-100 ">
            <div>
                <Sidebar />
            </div>
            <div className="flex flex-col flex-1">
                <Navbar />
                <div className=" flex-1 grid grid-cols-8 gap-2 h-full w-full">
                    <div className="col-span-2 h-full">
                        <Categories
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                    </div>
                    <div className="col-span-4 h-full">
                        <MainContent selectedCategory={selectedCategory} />
                    </div>
                    <div className="col-span-2 h-full">
                        <Settings />
                    </div>
                </div>
            </div>
        </div>
    );
}
