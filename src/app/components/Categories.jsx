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
        <div className="h-full w-full rounded-xl overflow-y-auto bg-white">
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
                        className="w-full p-2 pl-10 border border-gray-300 rounded-md text-sm focus:outline-none text-gray-700"
                    />
                    <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                </div>
            </div>

            <div className="px-4 pb-4">
                <ul>
                    {categories.map((cat) => (
                        <li
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.cat_id)}
                            className={`p-2 cursor-pointer rounded flex items-center gap-2  ${
                                selectedCategory === cat.cat_id
                                    ? "bg-[#E8F0F5] text-[#1FA45B]"
                                    : "text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            <div className="flex items-start flex-col ">
                                <span className=" font-inter">
                                    {cat.cat_name_en}{" "}
                                </span>
                                <span className="text-gray-600 text-sm font-poppins">
                                    Subcategory: {cat.no_of_subcat}
                                </span>
                            </div>
                            <div className="flex flex-col items-center justify-center ml-auto border-l pl-4 border-[#E2E2E2]">
                                <span className="font-inter font-bold text-[#393939]">
                                    {cat.no_of_dua}
                                </span>
                                <span className="text-[#7E7E7E] font-poppins text-sm">
                                    Duas
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Categories;
