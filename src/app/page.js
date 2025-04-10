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
        <div className="flex h-screen ">
            <div>
                <Sidebar />
            </div>
            <div className="flex flex-col">
                <Navbar />
                <div className="flex flex-1">
                    <Categories
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                    <MainContent selectedCategory={selectedCategory} />
                </div>
            </div>
            <div>
                <Settings />
            </div>
        </div>
    );
}
