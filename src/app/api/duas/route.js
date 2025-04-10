import { openDB } from "@/lib/db";

export default async function handler(req, res) {
    const { cat_id, subcat_id } = req.query;
    try {
        const db = await openDB();
        let query = "SELECT * From dua";
        const conditions = [];
        const params = [];

        if (cat_id) {
            conditions.push("cat_id = ?");
            params.push(cat_id);
        }

        if (subcat_id) {
            conditions.push("subcat_id = ?");
            params.push(subcat_id);
        }

        if (conditions.length > 0) {
            query += "WHERE" + conditions.join("AND");
        }

        const duas = await db.all(query, params);
        res.status(200).json(duas);
    } catch (err) {
        console.error("Error fetching duas:", err);
        res.status(500).json({ error: "Failed to fetch duas" });
    }
}
