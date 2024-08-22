export default eventHandler(async (event) => {
	const db = useDatabase()
	await db.sql`CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        first_name TEXT,
        middle_name TEXT,
        last_name TEXT,
        email TEXT,
        password TEXT
    )`

	return 'Nitro Server Success'
})
