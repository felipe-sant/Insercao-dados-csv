import { Pool } from "pg"

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "root",
    port: 5432,
    ssl: false
})

async function query(sql: string, params?: any[]) {
    try {
        const res = await pool.query(sql, params)
        switch (res.command) {
            case "INSERT":
                return res.rows[0]
            case "SELECT":
                return res.rows
            case "UPDATE":
                return { rowcount: res.rowCount }
            case "DELETE":
                return { rowcount: res.rowCount }
            default:
                return { sql }
        }
    } catch (e: any) {
        return { error: e.message }
    }
}

export default query