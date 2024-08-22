export default defineEventHandler((event) => {
	event.context.allowedOrigins = ['localhost:3000', 'localhost:3001', '127.0.0.1']

	const ipAddress = event.node.req.headers['x-forwarded-for']

	//if (!event.context.allowedOrigins.includes(ipAddress)) {
	//	throw createError({
	//		message: 'Request not allowed',
	//	})
	//}
})
