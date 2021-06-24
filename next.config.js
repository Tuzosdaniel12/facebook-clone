module.exports = {
	reactStrictMode: true,
	images: {
		domains: [
			"links.papareact.com",
			"platform-lookaside.fbsbx.com",
			"firebasestorage.googleapis.com",
			"1000logos.net"
		]
	},
	env: {
		API_KEY: process.env.API_KEY,
		AUTH_DOMAIN: process.env.AUTH_DOMAIN,
		PROJECT_ID: process.env.PROJECT_ID,
		STORAGE_BUCKET: process.env.STORAGE_BUCKET,
		MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
		APP_ID: process.env.APP_ID
	}
};
