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
            <div className="flex-1 p-4">
                <p>Please select a category to view content.</p>
            </div>
        );
    }

    if (error) return <div className="flex-1 p-4">Error loading content</div>;
    if (!data) return <div className="flex-1 p-4">Loading content...</div>;

    const rawDuas = data.duas || [];
    const mergedDuas = mergeDuas(rawDuas);

    return (
        <main className="w-full p-4 overflow-auto bg-white dark:bg-gray-900 rounded-lg shadow-md h-full">
            {mergedDuas.length === 0 && (
                <p>No duas available for this category.</p>
            )}
            {mergedDuas.map((dua) => (
                <div
                    key={dua.dua_id} // Ensure dua_id is unique after merging duplicates
                    className="mb-4 p-4 rounded-lg shadow flex flex-col space-y-2"
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
