export default defineEventHandler(async (event) => {
	const userId = getRouterParam(event, 'id')

	const db = useDatabase()

	const { rows: users } = await db.sql`SELECT * FROM users WHERE id = ${userId}`

	const [user] = users

	if (user) {
		return user
	} else {
		throw createError({
			statusMessage: 'User not found',
		})
	}
})
