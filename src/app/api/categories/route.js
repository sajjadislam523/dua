import { openDB } from "@/lib/db";

export default async function handler(req, res) {
    try {
        const db = await openDB();
        const categories = await db.all("SELECT * FROM category");
        res.status(200).json(categories);
    } catch (err) {
        console.error("Error fetching categories:", err);
        res.status(500).json({ error: "Failed to fetch categories" });
    }
}
