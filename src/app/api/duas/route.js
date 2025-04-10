import { openDB } from "@/lib/db";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const cat_id = searchParams.get("cat_id");
    const subcat_id = searchParams.get("subcat_id");
    try {
        const db = await openDB();
        let query = `SELECT * FROM dua`;
        const params = [];

        if (subcat_id) {
            query += ` WHERE subcat_id = ?`;
            params.push(subcat_id);
        } else if (cat_id) {
            query += ` WHERE cat_id = ?`;
            params.push(cat_id);
        }

        const duas = await db.all(query, params);
        return new Response(JSON.stringify({ duas }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        console.error("Error fetching duas:", err);
        return new Response(JSON.stringify({ error: "Error fetching duas" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
