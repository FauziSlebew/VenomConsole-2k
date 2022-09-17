const fs = require('fs')
const chalk = require('chalk')

	global.prefixo = '.' //=== ❗coloque o prefixo que você gosta ===//
	global.nomeBot = '𝙛𝙖𝙪𝙯𝙞𝙗𝙤𝙩𝙯' //=== ❗aki você pode mudar o nome do bot ===//
	global.numeroBot = '6287837703726' //=== ❗coloque o número do bot ===//
	global.ativado = '6287837703726' //=== ❗avisar toda vez que ligar o bot ===//
	global.nomeDono = 'Venom' //=== ❗coloque o seu nick ===//
	global.reagir1 = '🔥' //===❗ coloque o emoji que vc deseja ===//
	global.reagir2 = '❗' //===❗ coloque o emoji que vc deseja ===//
	global.reagir3 = '🤣' //===❗ coloque o emoji que vc deseja ===//
	global.reagir4 = '🤬' //===❗ coloque o emoji que vc deseja ===//
	global.numeroDono = '6287837703726' //=== ❗coloque seu número ===//
	
let salvedvenom = require.resolve(__filename)
fs.watchFile(salvedvenom, () => {
	fs.unwatchFile(salvedvenom)
	console.log(chalk.redBright(`'${__filename}' foi atualizado`))
	delete require.cache[salvedvenom]
	require(salvedvenom)
})
	
