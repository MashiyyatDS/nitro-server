export default defineEventHandler(async (event) => {
	const db = useDatabase()

	const { rows: users } = await db.sql`SELECT * FROM users`

	return users
})
