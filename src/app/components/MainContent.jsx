"use client";
import allah_traced from "@/assets/icons/allah_1_(Traced).png";
import { mergeDuas } from "@/lib/mergeDuas";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const MainContent = ({ selectedCategory }) => {
    const { data, error } = useSWR(
        selectedCategory ? `/api/duas?cat_id=${selectedCategory}` : null,
        fetcher
    );

    if (!selectedCategory) {
        return (
            <div className="flex-1 p-4 text-black font-poppins items-center justify-center flex flex-col h-screen bg-white rounded-xl">
                <p>Please select a category to view content.</p>
            </div>
        );
    }

    if (error)
        return (
            <div className="flex-1 p-4 text-red-500 flex items-center justify-center h-screen">
                Error loading content
            </div>
        );

    if (!data)
        return (
            <div className="flex-1 p-4 flex items-center justify-center h-screen bg-white rounded-xl">
                <svg
                    className="animate-spin h-10 w-10 text-[#1FA45B]"
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
                <p className="ml-3 text-lg text-gray-600">Loading content...</p>
            </div>
        );

    const rawDuas = data.duas || [];
    const mergedDuas = mergeDuas(rawDuas);

    return (
        <main className="w-full overflow-auto text-black rounded-lg px-2 h-screen">
            {mergedDuas.length === 0 && (
                <p>No duas available for this category.</p>
            )}
            {mergedDuas.map((dua) => (
                <div
                    key={dua.dua_id} // Ensure dua_id is unique after merging duplicates
                    className="mb-4 p-4 rounded-lg shadow flex flex-col space-y-2 bg-white"
                >
                    <h3 className="text-lg font-inter font-semibold text-[#1FA45B] flex items-center gap-2">
                        <span>
                            <Image src={allah_traced} alt="Allah traced Icon" />
                        </span>{" "}
                        {dua.dua_name_en || "Untitled Dua"}
                    </h3>
                    {/* Display top_en if present */}
                    {dua.top_en && (
                        <p className="text-base font-medium mb-2">
                            {dua.top_en}
                        </p>
                    )}

                    {/* Display Arabic text with RTL styling */}
                    {dua.dua_arabic && (
                        <p
                            className=" text-2xl font-serif text-right mb-2"
                            dir="rtl"
                        >
                            {dua.dua_arabic}
                        </p>
                    )}

                    {/* Display Transliteration */}
                    {dua.transliteration_en && (
                        <p className="text-base italic mb-2">
                            <span className="font-semibold mr-2">
                                Transliteration:
                            </span>
                            {dua.transliteration_en}
                        </p>
                    )}

                    {/* Display Translation */}
                    {dua.translation_en && (
                        <p className=" mb-2">
                            <span className="font-semibold mr-2">
                                Translation:
                            </span>
                            {dua.translation_en}
                        </p>
                    )}

                    {/* Display Reference (using either reference_en or refference_en) */}
                    {(dua.reference_en || dua.refference_en) && (
                        <p className="text-sm text-gray-500 italic">
                            Reference: {dua.reference_en || dua.refference_en}
                        </p>
                    )}

                    {/* If there's audio for the dua */}
                    {dua.audio && (
                        <audio controls preload="metadata" className="mt-2">
                            <source src={dua.audio} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    )}
                </div>
            ))}
        </main>
    );
};

export default MainContent;
