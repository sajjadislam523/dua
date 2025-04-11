"use client";
import { CiSearch } from "react-icons/ci";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Categories = ({ selectedCategory, setSelectedCategory }) => {
    const { data, error } = useSWR("/api/categories", fetcher);

    if (error) return <div>Error loading categories</div>;
    if (!data) return <div>Loading categories...</div>;
    const categories = data.categories || [];

    return (
        <div className="h-full w-full rounded-xl overflow-y-auto mt-5 mr-5">
            <h1 className="bg-[#1FA45B] font-bold text-white py-3 text-center rounded-t-xl">
                Categories
            </h1>

            <div className="p-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search by Categories"
                        // value={searchText}
                        // onChange={(e) => setSearchText(e.target.value)}
                        className="w-full p-2 pl-10 border border-gray-300 rounded-md text-sm focus:outline-none"
                    />
                    <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                </div>
            </div>

            <ul>
                {categories.map((cat) => (
                    <li
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.cat_id)}
                        className={`p-2 cursor-pointer rounded hover:bg-gray-200 hover:text-black ${
                            selectedCategory === cat.cat_id
                                ? "bg-gray-300 text-black"
                                : ""
                        }`}
                    >
                        <div>{cat.cat_name_en}</div>
                        <div className="text-sm text-gray-500">
                            {cat.cat_name_bn}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
