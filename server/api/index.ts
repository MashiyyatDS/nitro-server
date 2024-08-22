export default defineEventHandler(async (event) => {
	const db = useDatabase()

	await db.sql`INSERT 
	INTO users (first_name, middle_name, last_name, email, password)
	VALUES('Mashiyyat', 'Villasenor', 'Delos Santos', 'delossantos.mash@gmail.com', 'password')`

	return 'Success'
})
