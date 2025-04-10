"use client";
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

    const duas = data.duas || [];

    return (
        <main className="flex-1 p-4 overflow-auto">
            {duas.length === 0 && <p>No duas available for this category.</p>}
            {duas.map((dua) => {
                console.log(dua.dua_id);

                return (
                    <div
                        key={dua.dua_id}
                        className="mb-4 p-4 rounded-lg shadow flex flex-col space-y-2"
                    >
                        <h3 className="text-lg font-semibold">
                            {dua.dua_name_en || "Untitled Dua"}
                        </h3>
                        {dua.dua_arabic && (
                            <p className="text-gray-800 text-xl font-serif">
                                {dua.dua_arabic}
                            </p>
                        )}
                        {dua.translation_en && (
                            <p className="text-gray-600">
                                {dua.translation_en}
                            </p>
                        )}
                        {dua.reference_en && (
                            <p className="text-gray-500 italic">
                                Reference: {dua.reference_en}
                            </p>
                        )}
                        {/* You can display more fields as needed */}
                    </div>
                );
            })}
        </main>
    );
};

export default MainContent;
