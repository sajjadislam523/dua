import { openDB } from "@/lib/db";

export default async function handler(req, res) {
    const { cat_id } = req.query;
    // console.log("cat_id", cat_id);
    try {
        const db = await openDB();
        let query = "SELECT * FROM subcategories";
        const params = [];
        if (cat_id) {
            query += "WHERE cat_id = ?";
            params.push(cat_id);
        }
        const subcategories = await db.all(query, params);
        res.status(200).json({ subcategories });
    } catch (err) {
        console.error("Error fetching subcategories:", error);
        res.status(500).json({ error: "Failed to fetch subcategories" });
    }
}
