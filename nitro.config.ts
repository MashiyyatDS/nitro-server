//https://nitro.unjs.io/config
export default defineNitroConfig({
	srcDir: 'server',
	experimental: {
		database: true,
	},
	preset: 'vercel',
})
