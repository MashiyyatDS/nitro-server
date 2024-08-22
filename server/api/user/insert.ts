import { uuid } from 'uuidv4'

export default defineEventHandler(async (event) => {
	const db = useDatabase()

	const userId = uuid()

	const { first_name, middle_name, last_name, email, password } = await readBody(event)

	try {
		await db.sql`INSERT INTO users (id, first_name, middle_name, last_name, email, password) VALUES(${userId}, ${first_name}, ${middle_name}, ${last_name}, ${email}, ${password})`

		const { rows: user } = await db.sql`SELECT * FROM users WHERE id = ${userId}`

		return user[0]
	} catch (error) {
		return 'Something went wrong...'
	}
})
