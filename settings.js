const fs = require('fs')

global.creator = 'Apxxx.com'// yourname
global.MONGO_DB_URI = "mongodb+srv://apxxx:apxxx123@cluster0.yh2drud.mongodb.net/?retryWrites=true&w=majority" //database mongodb 
global.ACTIVATION_TOKEN_SECRET = "fdawxcwmzqobdhim" //isi apa aja bebas
global.your_email = "apxxxbusines@gmail.com" //email
global.email_password = "fdawxcwmzqobdhim" //application password email
global.limitCount = 1000
global.YUOR_PORT = 3000
global.loghandler = {
	noapikey:{
		status: 403,
        message: 'Input parameter apikey',
        creator: `${creator}`,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        creator: `${creator}`
    },
    apikey: {
    	status: 403,
    	message: 'Forbiden, Invalid apikey',
    	creator: `${creator}`
    },
    noturl: {
    	status: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	creator: `${creator}`,
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
