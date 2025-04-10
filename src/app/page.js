"use client";

import { useEffect, useState } from "react";

export default function Home() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const res = await fetch("/api/categories");
                if (!res.ok) {
                    throw new Error("Failed to fetch categories");
                }
                const data = await res.json();
                setCategories(data);
            } catch (err) {
                console.error("Error fetching categories:", err);
            }
        }

        fetchCategories();
    }, []);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1>Heres the main file</h1>

            <h2>Here are all of the categories of the collection</h2>
            <ul>
                {categories.map((cat) => (
                    <li key={cat.id}>
                        {cat.cat_name_en} - {cat.cat_id}
                    </li>
                ))}
            </ul>
        </div>
    );
}
