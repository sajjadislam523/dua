"use client";
import icon1 from "@/assets/icons/icon_1.png";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Categories = ({ selectedCategory, setSelectedCategory }) => {
    const { data, error } = useSWR("/api/categories", fetcher);

    if (error) return <div>Error loading categories</div>;

    // If data hasn't loaded, data will be undefined
    const categories = data?.categories || [];

    return (
        <div className="h-screen w-full rounded-xl overflow-y-auto bg-white">
            <h1 className="bg-[#1FA45B] font-bold text-white py-3 text-center rounded-t-xl">
                Categories
            </h1>

            <div className="p-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search by Categories"
                        className="w-full p-2 pl-10 border border-gray-300 rounded-md text-sm focus:outline-none text-gray-700"
                    />
                    <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                </div>
            </div>

            <div className="px-4 pb-4">
                {/* If data is not loaded yet, show the spinner inside this section */}
                {!data ? (
                    <div className="flex justify-center items-center h-24">
                        <svg
                            className="animate-spin h-6 w-6 text-[#1FA45B]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8H4z"
                            ></path>
                        </svg>
                        <span className="ml-2 text-sm text-gray-600 font-inter">
                            Loading categories...
                        </span>
                    </div>
                ) : (
                    <ul>
                        {categories.map((cat) => (
                            <li
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.cat_id)}
                                className={`p-2 cursor-pointer rounded flex items-center gap-2 ${
                                    selectedCategory === cat.cat_id
                                        ? "bg-[#E8F0F5] text-[#1FA45B]"
                                        : "text-gray-700 hover:bg-gray-100"
                                }`}
                            >
                                <div>
                                    <Image
                                        src={icon1}
                                        alt="This is a category image"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className="font-inter">
                                        {cat.cat_name_en}
                                    </span>
                                    <span className="text-sm text-gray-600 font-poppins">
                                        Subcategory: {cat.no_of_subcat}
                                    </span>
                                </div>
                                <div className="flex flex-col items-center justify-center ml-auto border-l pl-4 border-[#E2E2E2]">
                                    <span className="font-inter font-bold text-[#393939]">
                                        {cat.no_of_dua}
                                    </span>
                                    <span className="text-sm text-[#7E7E7E] font-poppins">
                                        Duas
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Categories;
