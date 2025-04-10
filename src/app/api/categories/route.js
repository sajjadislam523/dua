import { openDB } from "@/lib/db";

export async function GET(request) {
    try {
        const db = await openDB();
        const categories = await db.all(`SELECT * FROM category`);
        return new Response(JSON.stringify({ categories }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        console.error("Error fetching categories:", err);
        return new Response(
            JSON.stringify({ error: "Error fetching categories" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
