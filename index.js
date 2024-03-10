const { default : makeWAsocket, makeWASocket, DisconnectReason,useMultiFileAuthState, fetchLatestBaileysVersion, delay, makeInMemoryStore,downloadContentFromMessage } = require('@whiskeysockets/baileys')
const { Boom } = require('@hapi/boom')
const P = require('pino')
const fs = require("fs")
const util = require("util")
const clui = require("clui")
const ms = require("ms")

/////qr con número 
const NodeCache = require('node-cache');
const readline = require("readline");
///////
const speed = require("performance-now")
const fetch = require("node-fetch")
const axios = require("axios")
const webp = require("node-webpmux")
const chalk = require("chalk")
const cfonts = require('cfonts')
const moment = require("moment-timezone")
const ffmpeg = require("fluent-ffmpeg")
const acrcloud = require("acrcloud")
const { exec, spawn, execSync } = require("child_process")

const { getBuffer, generateMessageTag, tempRuntime, clockString, color, fetchJson, getGroupAdmins, getRandom, parseMention, getExtension, banner, uncache, nocache, isFiltered, addFilter } = require('./archivos/herramientas')

///welcome
const welkom = JSON.parse(fs.readFileSync('./archivos/welkom.json'))

///togif 
const { convertSticker } = require("./archivos/swm.js")

///antilink 
const antilink = JSON.parse(fs.readFileSync('./archivos/funciones/antilink.json'))

////antilinkaudio
const antilinkaudio = JSON.parse(fs.readFileSync('./archivos/funciones/antilinkaudio.json'))

 /////antilinkvideo
const antilinkvideo = JSON.parse(fs.readFileSync('./archivos/funciones/antilinkvideo.json'))

//////antilinkimagen
const antilinkimagen = JSON.parse(fs.readFileSync('./archivos/funciones/antilinkimagen.json'))

//////antilinksticker
const antilinksticker = JSON.parse(fs.readFileSync('./archivos/funciones/antilinksticker.json'))

//////antilinkdocumento
const antilinkdocumento = JSON.parse(fs.readFileSync('./archivos/funciones/antilinkdocumento.json'))


const varping = speed()
const ping = speed() - varping
const timestamp = speed()
const latensi = speed() - timestamp
const clc = require("cli-color");
const nomebot = "Gaza Bot 5.0" // Cambiar nombre del Bot
const numerodono = "*+50664570362*"

///multiprefijo
const prefixo = ["?", "!", "$", "/", "#", "."]


/////qr con número 
const usePairingCode = process.argv.includes('--use-pairing-code')
    const msgRetryCounterCache = new NodeCache();

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
//////inicio de consola
async function connectToWhatsApp() {

        const { state, saveCreds } = await useMultiFileAuthState('./qr_code')
        const { version } = await fetchLatestBaileysVersion();
        const question = (text) => new Promise((resolve) => rl.question(text, resolve));
        const store = makeInMemoryStore({
            logger: P().child({
                level: 'debug',
                stream: 'store'
            })
        })


        const client = makeWASocket({
            version,
            logger: P({ level: "silent" }),
            usePairingCode,
            mobile: false,
            browser: ["FireFox (linux)"],
            auth: state,
            msgRetryCounterCache,
            defaultQueryTimeoutMs: undefined,
            getMessage: async (key) => {
                if (store) {
                    const msg = await store.loadMessage(key.remoteJid, key.id)
                    return msg.message || undefined
                } return {
                    conversation: "bot"
                }
            },
            patchMessageBeforeSending: (message) => {
                const requiresPatch = !!(message.buttonsMessage || message.listMessage);
                if (requiresPatch) {
                    message = {
                        viewOnceMessage: {
                            message: {
                                messageContextInfo: {
                                    deviceListMetadataVersion: 2,
                                    deviceListMetadata: {},
                                }, ...message
                            }
                        }
                    }
                }
                return message;
            }
        });

        function limparNumero(entrada) {
            const numeros = entrada.replace(/\D/g, '');
            const numeroLimpo = numeros.replace(/^(\d{2})(9)?(\d{8,9})$/, '$1$3');
            return numeroLimpo;
        }

        if (!client.authState.creds.registered) {
            const phoneNumber = await question(`\nDigite su número de WhatsApp:\nEx: ("+506-6457-0398")\n `);
            const numeroLimpo = limparNumero(phoneNumber);
            const code = await client.requestPairingCode(numeroLimpo);
            console.log(`Su código de conexión es: \n\n${code}\n~>`);
            console.log(`Abra su WhatsApp, vaya en ("Dispositivos Vinculados > Conectar un nuevo dispositivo > Conectar usando Número.")`)
        } else {
            console.log('conectando...')
        }

        console.log('[Gaza Bot 5.0]')
        store.bind(client.ev)

        client.ev.on("creds.update", saveCreds)
        store.bind(client.ev)
        client.ev.on("chats.set", () => {
            console.log("Tem conversas", store.chats.all())
        })
        client.ev.on("contacts.set", () => {
            console.log("Tem contatos", Object.values(store.contacts))
        })

        client.ev.on("connection.update", (update) => {
            const { connection, lastDisconnect } = update
            if (connection === "close") {
                const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
                console.log("Conexión fallida debido a", lastDisconnect.error, "Intentando reconectar...", shouldReconnect);
                if (shouldReconnect) {
                    connectToWhatsApp()
                }

            } else if (connection === "open") {
                console.log(chalk.keyword("green")("Conectado con Exito!"));
            }
        })

////add/remove

client.ev.on("group-participants.update", async (anu) => {
if(!welkom.includes(anu.id)) return 
try {
const datosgp = await client.groupMetadata(anu.id)

if(anu.action == 'add') {
const numerodep = anu.participants[0]

const soldado8 = fs.readFileSync('./Archivos/Fotos/lucifer.jpg')

const soldado7 = `

𝗯𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼 𝗮𝗹 𝗴𝗿𝘂𝗽𝗼  

${numerodep}

𝗽𝗲𝗾𝘂𝗲ñ𝗼 𝗻𝗮𝘇𝗶 𝗲𝗻 𝗽𝗼𝘁𝗲𝗻𝗰𝗶𝗮 

💂‍♂️💂‍♂️💂‍♂️🎖️🎖️🎖️💂‍♂️💂‍♂️💂‍♂️

`
client.sendMessage(anu.id,{image : soldado8, caption : soldado7})
}

if (anu.action == 'remove') {
const numerodep2 = anu.participants[0]

const soldado9 = fs.readFileSync('./Archivos/Fotos/lucifer.jpg')


const soldado10 = `

𝗔𝗗𝗜𝗢𝗦 𝗤𝗨𝗘 𝗧𝗘 𝗩𝗔𝗬𝗔 𝗕𝗜𝗘𝗡 𝗘𝗡 𝗧𝗨 𝗖𝗔𝗠𝗜𝗡𝗢 𝗙𝗨𝗘𝗥𝗔 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢 😇

${numerodep2}

𝗦𝗘 𝗧𝗥𝗔𝗡𝗦𝗟𝗔𝗗𝗢 𝗔𝗟 𝗝𝗨𝗗𝗜𝗢 𝗔𝗟 𝗖𝗔𝗠𝗣𝗢

💂‍♂️💂‍♂️💂‍♂️🎖️🎖️🎖️💂‍♂️💂‍♂️💂‍♂️

`
client.sendMessage(anu.id,{image : soldado9, caption : soldado10})
}
} catch (e) {
console.log('error: %s', color(e, "red"))
}
})

//////

 client.ev.on('messages.upsert', async m => {
 try {
 const info = m.messages[0]
 if (!info.message) return 
 if (info.key && info.key.remoteJid == "status@broadcast") return
 const altpdf = Object.keys(info.message)
 const type = altpdf[0] == "senderKeyDistributionMessage" ? altpdf[1] == "messageContextInfo" ? altpdf[2] : altpdf[1] : altpdf[0]
const content = JSON.stringify(info.message)
const from = info.key.remoteJid
 var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''

const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

const reply = (text) => {
          client.sendMessage(from, { text: text }, { quoted: info })
        }

//figu
client.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    client.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await client.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }
    client.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    client.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 


client.sendTextWithMentions = async (jid, text, quoted, options = {}) => client.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })


// CONSTANTES IS  
 const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant : info.key.remoteJid
const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''

//////antilink
 const isAntiLink = isGroup ? antilink.includes(from) : false

////antilinkaudio
const isAntiLinkAudio = isGroup ? antilinkaudio.includes(from) : false

/////antilinkvideo
const isAntiLinkVideo = isGroup ? antilinkvideo.includes(from) : false

////antilinkimagen
const isAntiLinkImagen = isGroup ? antilinkimagen.includes(from) : false

////antilinksticker
const isAntiLinkSticker = isGroup ? antilinksticker.includes(from) : false

////antilinkdocumento
const isAntiLinkDocumento = isGroup ? antilinkdocumento.includes(from) : false


const groupMembers = isGroup ? groupMetadata.participants : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const nome = info.pushName ? info.pushName : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const isCmd = body.startsWith(prefixo)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null 
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? client.sendMessage(from, {text: teks.trim(), mentions: memberr}) : client.sendMessage(from, {text: teks.trim(), mentions: memberr})}
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).Mimetype || ""
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
const pushname = info.pushName ? info.pushName : ''
const isBot = info.key.fromMe ? true : false
const isOwner = numerodono.includes(sender)
const BotNumber = client.user.id.split(':')[0]+'@s.whatsapp.net'
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isBotGroupAdmins = groupAdmins.includes(BotNumber) || false
const isUrl = (url) => { return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi')) }
const deviceType = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IPhone' : 'WhatsApp web'
const options = { timeZone: 'America/Costa_Rica', hour12: false }
const data = new Date().toLocaleDateString('CR', { ...options, day: '2-digit', month: '2-digit', year: '2-digit' })
const hora = new Date().toLocaleTimeString('CR', options) 
 
 const { TelegraPh } = require("./archivos/telegraPh.js")

const iswelkom = isGroup ? welkom.includes(from) : false

const webp_mp4 = require("./archivos/webp_mp4.js");

const {videoToWebp,imageToWebp,writeExifImg,writeExifVid} = require('./archivos/stickersss.js')
function isDoubleByte(str) {
for (let i = 0, n = str.length; i < n; i++) {
if (str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}


 // CONSTANTES NUEVAS
 
 const enviar = (text) => {
client.sendMessage(from, {text: text}, {quoted: info})}

//figu
const enviarfiguimg = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifImg(buff, options)
} else {
 buffer = await imageToWebp(buff)
}

await client.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }
 
 const enviarfiguvid = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifVid(buff, options)
} else {
 buffer = await videoToWebp(buff)
}

await client.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }
 
 const getFileBuffer = async (mediakey, MediaType) => { 
const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}



/////////

const enviartexto = (texto) => {
client.sendMessage(from,{ text : texto }, {quoted : doc})
} 


const enviarimagen = (imagen) => {
client.sendMessage(from,{ image : imagen }, {quoted : doc})
} 

const enviarimagencap = (imagen,caption) => {
client.sendMessage(from,{ image : imagen , caption : caption}, {quoted : doc})
} 

const enviarvideos = (videos) => {
client.sendMessage(from,{ video : videos }, {quoted : doc})
} 

const enviarvideoscap = (videos,caption) => {
client.sendMessage(from,{ video : videos , caption : caption }, {quoted : doc})
} 

const enviarmusica = (audios) => {
client.sendMessage(from,{ audio : audios }, {quoted : doc})
} 

const enviarstickers = (sticker) => {
client.sendMessage(from,{ sticker : sticker }, {quoted : doc})
} 

const enviardocumentos = (documento) => {
 client.sendMessage(from,{document : documento },{quoted : info})
 }

const text = args.join(' ')

// VERIFICACIONES 

const live = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {}}} 
const imgm = {key : {participant : '0@s.whatsapp.net'},message: {imageMessage: {}}}
const vid = {key : {participant : '0@s.whatsapp.net'},message: {videoMessage: {}}}
const contato = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}
const doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage:{}}}

//if(budy == `${prefixo}`) {
//enviar('')}

//=====\\


 // CONSTANTES IFF 
 const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage") 
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")



 
 // RESPUESTAS AUTOMATICAS
 const respuesta = {
espere: " *💫  Querido Usuario , espere un momento Porfavor* ",
registros: ` *💫  Hola ${pushname}*, *registrese Porfavor*: ${prefixo}rg nombre/edad`,
rg: " *💫  Querido Usuario , usted ya se encuentra registrado, no haga spam porfavor* ",
premium: " *💫  Querido Usuario , para poder usar este comando debes comprar la versión premiun* ",
bot: " *💫  Querido Usuario , este comando es exclusivo solo para el Bot* ",
dono: " *💫  Querido Usuario , este comando está bloqueado y solo puede ser usado por Steve Chaves* ",
grupo: " *💫  Querido Usuario , este comando es solo para grupos* ",
privado: " *💫  Querido Usuario , este comando es solo para chats Privados* ",
admin: " *💫  Querido Usuario , este comando es solo para Administradores* ",
botadmin: " *💫  Querido Usuario , Para usar este comando el bot debe ser Administrador* ",
error: " *💫  Querido Usuario , intentelo nuevamente, si el error persiste comuniquese con Steve Chaves* ",
link : " *💫  Querido Usuario , Porfavor coloque un Link* ",
nombre: " *💫  Querido Usuario , Porfavor indiqueme que debo buscar*",
gif: " *💫  Querido Usuario , remarque un Sticker en Movimiento Porfavor*",
especial : "*💫  Querido Usuario , está Prohibido escribir emojis o caracteres especiales*"
}
 
// MENSAJES EN CONSOLA 
 
// ❗𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙿𝚅❗
if (!isGroup && isCmd) console.log( '\n  ╭══════⊷ ', color('[ ❗️] 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗗𝗘 𝗖𝗛𝗔𝗧 𝗣𝗩 [ ❗️]','red'), '━━━━━━━━━━━━➪','\n',
color(' ➽ 𝐍𝐈𝐂𝐊 :','yellow'),color(pushname,'cyan'),'\n',
color(' ➽ 𝐂𝚯𝐌𝜟𝐍𝐃𝚯 :','yellow'),color(comando,'cyan'),'\n',
color(' ➽ 𝐇𝚯𝐑𝜟 :','yellow'),color(hora,'cyan'),'\n',
color(' ➽ 𝐃𝜟𝐓𝜟 :','yellow'),color(data,'cyan'),'\n',color(' ╰━━━━━━━━━━⊷ ','white'),color ('[ ❗️] 𝗚𝗔𝗭𝗔 𝗕𝗢𝗧 𝟱.𝟬 [ ❗️] ','red'), '━━━━━━━━━━━━➪')

// ❗𝙿𝚅❗
if (!isCmd && !isGroup) console.log( '\n  ╭══════⊷ ', color('[ ❗️] 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗨𝗦𝗔𝗗𝗢 𝗘𝗡 𝗖𝗛𝗔𝗧 𝗣𝗩 [ ❗️]','red'), '━━━━━━━━━━━━➪','\n',
color(' ➽ 𝐍𝐈𝐂𝐊 :','yellow'),color(pushname,'cyan'),'\n',
color(' ➽ 𝐌𝜮𝐍𝐒𝐆 :','yellow'),color(budy,'cyan'),'\n',
color(' ➽ 𝐇𝚯𝐑𝜟 :','yellow'),color(hora,'cyan'),'\n',
color(' ➽ 𝐃𝜟𝐓𝜟 :','yellow'),color(data,'cyan'),'\n',color(' ╰━━━━━━━━━━⊷ ','white'),color ('[ ❗️] 𝗚𝗔𝗭𝗔 𝗕𝗢𝗧 𝟱.𝟬 [ ❗️] ','red'), '━━━━━━━━━━━━➪')

// ❗𝙲𝙾𝙼𝙰𝙽𝙳𝙾  𝙶𝚁𝚄𝙿𝙾❗
if (isCmd && isGroup) console.log( '\n  ╭══════⊷ ', color('[ ❗️] 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗨𝗦𝗔𝗗𝗢 𝗘𝗡 𝗚𝗥𝗨𝗣𝗢 [ ❗️]','red'), '━━━━━━━━━━━━➪','\n',
color(' ➽ 𝐆𝐑𝐔𝐏𝚯 :','yellow'),color(groupName,'cyan'),'\n',
color(' ➽ 𝐍𝐈𝐂𝐊 :','yellow'),color(pushname,'cyan'),'\n',
color(' ➽ 𝐂𝚯𝐌𝜟𝐍𝐃𝚯 :','yellow'),color(comando,'cyan'),'\n',
color(' ➽ 𝐇𝚯𝐑𝜟 :','yellow'),color(hora,'cyan'),'\n',
color(' ➽ 𝐃𝜟𝐓𝜟 :','yellow'),color(data,'cyan'),'\n',color(' ╰━━━━━━━━━━⊷ ','white'),color ('[ ❗️] 𝗚𝗔𝗭𝗔 𝗕𝗢𝗧 𝟱.𝟬 [ ❗️] ','red'), '━━━━━━━━━━━━➪')

// ❗𝙼𝙴𝙽𝚂𝙰 𝙶𝚁𝚄𝙿𝙾❗
if (!isCmd && isGroup) console.log( '\n  ╭══════⊷ ', color('[ ❗️] 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗗𝗘 𝗚𝗥𝗨𝗣𝗢 [ ❗️]','red'), '━━━━━━━━━━━━➪','\n',
color(' ➽ 𝐆𝐑𝐔𝐏𝚯 :','yellow'),color(groupName,'cyan'),'\n',
color(' ➽ 𝐍𝐈𝐂𝐊 :','yellow'),color(pushname,'cyan'),'\n',
color(' ➽ 𝐌𝜮𝐍𝐒𝐆 :','yellow'),color(budy,'cyan'),'\n',
color(' ➽ 𝐇𝚯𝐑𝜟 :','yellow'),color(hora,'cyan'),'\n',
color(' ➽ 𝐃𝜟𝐓𝜟 :','yellow'),color(data,'cyan'),'\n',color(' ╰━━━━━━━━━━⊷ ','white'),color ('[ ❗️] 𝗚𝗔𝗭𝗔 𝗕𝗢𝗧 𝟱.𝟬 [ ❗️] ','red'), '━━━━━━━━━━━━➪')

/////// sin prefijo
 const removeAccents = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const prefixes = prefixo ? prefixo.map(prefix => prefix.toLowerCase()) : [];

const lowerBudy = budy.toLowerCase();

const hasPrefix = prefixes.some(prefix => lowerBudy.startsWith(prefix));
const commandArgs = hasPrefix ? lowerBudy.slice(prefixes.find(prefix => lowerBudy.startsWith(prefix)).length).trim().split(' ') : lowerBudy.trim().split(' ');

const isCommand = removeAccents(commandArgs[0])

switch(isCommand) {
	                
case 'holaenchino' : 
enviartexto('*Que tal, en que andas mi compa?*🦁') 
break

///creador
case 'patron7':
case 'creador7':
   await enviar(`𝐇𝐨𝐥𝐚 *${pushname}* 𝐞𝐬𝐭𝐨𝐲 𝐞𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐞𝐥 𝐧𝐮𝐦𝐞𝐫𝐨 𝐝𝐞 𝐦𝐢 𝐜𝐫𝐞𝐚𝐝𝐨𝐫 ...`)
   await delay(1000)
     client.sendMessage(from, {
       displayName: "meu-dono",
       contacts: {
         contacts: [{
           vcard: "BEGIN:VCARD\n" +
                  "VERSION:3.0\n" +
                  "FN:𝐃𝐞𝐫𝐞𝐤 𝐒𝐭𝐞𝐯𝐞 👤\n" +
                  "ORG:𝐋𝐢𝐛𝐞𝐫𝐭𝐲\n" +
                  "TEL;waid=𝟓𝟎𝟔𝟔𝟒𝟓𝟕𝟎𝟑𝟔𝟐:+𝟓𝟎𝟔 𝟔𝟒𝟓𝟕-𝟎𝟑𝟔𝟐\n" +
                  "END:VCARD"                  
         }]
       }
     })    
    break

//case 'foto' :
const gotu = fs.readFileSync('./archivos/fotos/lucifer.jpg')
enviarimagen(gotu) 
break

//case 'fotoleg' :
const gotu2 = fs.readFileSync('./archivos/fotos/lucifer.jpg') 
const dws = '*Suscribete a Steve*'
enviarimagencap(gotu2,dws) 
break 

//case 'video' :
const gotu4 = fs.readFileSync('./archivos/fotos/leetmego.mp4') 
const dws2 = 'Suscribete a Steve'
enviarvideoscap(gotu4,dws2) 
break 

//case 'djfearlesswartime' :
const gotu8 = fs.readFileSync('./archivos/fotos/wartime.mp3')
client.sendMessage(from,{audio: fs.readFileSync('./archivos/fotos/wartime.mp3'),mimetype: 'audio/mpeg'},{quoted : doc})
break

//case 'descargarbot' : 
const soldado5 = fs.readFileSync('./Archivos/Fotos/anita-bot.zip')
enviardocumentos(soldado5)
break 

//case 'descargarbot2' :
client.sendMessage(from,{ document :fs.readFileSync('./Archivos/Fotos/anita-bot.zip') , mimetype: 'application/octet-stream'},{quoted : doc})
break

//case 'audio' :
const gotu6 = fs.readFileSync('./archivos/fotos/supadups.mp3')
client.sendMessage(from,{audio : gotu6,mimetype: 'audio/mp4', ptt: true},{quoted : doc})
break

//case 'audio2' :
client.sendMessage(from,{audio: fs.readFileSync('./archivos/fotos/supadups.mp3'),mimetype: 'audio/mpeg'},{quoted : doc})
break

//case 'stickerofc' :
const gotu7 = fs.readFileSync('./archivos/fotos/colochos.webp')
enviarstickers(gotu7) 
break 

//case 'video2' :
const gotu5 = fs.readFileSync('./archivos/fotos/leetmego.mp4') 
enviarvideos(gotu5) 
break 

case 'aleatorio7' :
const ale = ['😎','🤡','🧟‍♀️','🧠','🪖','💂‍♂️','🎖️','😏']
const ale2 = Math.floor(Math.random()*ale.length)
const ale3 = ale[ale2]
enviartexto(ale3)
break 


////hidetag
case 'hidetag7' :
case 'Hidetag7' :
case 'HIDETAG7' :
case 'mensaje7' :
case 'Mensaje7' :
case 'MENSAJE7' :
if(!isGroup) return enviartexto (respuesta.grupos)
if(!isGroupAdmins) return enviartexto ("*Lo siento, pero no eres administrador*")
			var group = await client.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: q,
			contextInfo: { mentionedJid: mem },
			quoted: m
			}
			client.sendMessage(from, optionshidetag, text)
			break


////revivir

case 'revivir7':
case 'fijarmsg7':
            if (!isGroup) return enviartexto('*COMANDO SOLO PARA GRUPO*')
            if (!isGroupAdmins) return enviartexto('*COMANDO SOLO PARA ADMIN*')
            if (!isBotGroupAdmins) return enviartexto("*BOT PRECISA SER ADMIN*")
            if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return enviartexto('*MARQUE UN MENSAJE PARA PODER FIJARLO*')
            response2 = await client.groupParticipantsUpdate(from, [menc_prt], "add")
            enviartexto('*HAZ FIJADO MENSAJE CON EXITO*')
            break

//"add/agregar"
case "agregar7" :
case "add7" :
if(args.length===0) return enviartexto ("*Por favor ingresar el número de la persona que deseas agregar al grupo* 🙃\n*Junto con su codigo de pais*")
if(!isGroupAdmins) return enviartexto ("*Lo siento, pero no eres administrador*")
if(!isBotGroupAdmins) return enviartexto (respuesta.botadmin)
let nuevonazi = info.quoted ? info.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await client.groupParticipantsUpdate(from, [nuevonazi] , "add")
break

//"ban/eliminar"
case "ban7" :
case "eliminar7" :
case "bam7" :
case "kick7" :
if(args.length===0) return enviartexto ("*Por favor ingresar el número de la persona que deseas eliminar del grupo* 😡\n*Junto con su codigo de pais*")
if(!isGroupAdmins) return enviartexto ("*Lo siento, pero no eres administrador*")
if(!isBotGroupAdmins) return enviartexto (respuesta.botadmin)
let chaonazi = info.quoted ? info.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await client.groupParticipantsUpdate(from, [chaonazi] , "remove")
break

// "welcome"

case 'welcome7' : 
case 'Welcome7':
case 'WELCOME7' : 
case 'bienvenida7' : 
case 'Bienvenida7' : 
case 'BIENVENIDA7' : 
if(args.length<1) return enviartexto ("*ESCRIBA 1 PARA ACTIVAR Y 0 PARA DESACTIVAR* \n*EJEMPLO* \n*PARA ACTIVAR:* *welcome 1* \n*PARA DESACTIVAR:* *welcome 0*")
if(!isGroupAdmins) return enviartexto ("*Lo siento, pero no eres administrador*")
if(!isBotGroupAdmins) return enviartexto (respuesta.botadmin) 
if(Number(args[0])===1) {
if(iswelkom) return enviartexto('*La bienvenida ya esta activa en este grupo*')
welkom.push(from)
fs.writeFileSync('./Archivos/welkom.json',JSON.stringify(welkom))
enviartexto('*Activado exitosamente*')
} else if (Number(args[0])===0) {
if (!iswelkom) return enviartexto('*La bienvenida no esta activada*')
const comandante1 = from
 processo = welkom.indexOf(comandante1)
while(processo>=0) {
welkom.splice(processo, 1)
 processo = welkom.indexOf(comandante1)
}
fs.writeFileSync('./Archivos/welkom.json',JSON.stringify(welkom))
enviartexto('*Desactivado exitosamente*')
} else {
enviartexto('*Ingrese 1 para activar y 0 para desactivar*')
}
break

/////////cambiarnombredegrupo

case 'nombregp7':
            {
              if (!isGroup) return enviartexto(resposta.grupo)
              if (!isGroupAdmins) return enviartexto(resposta.adm)
              if (!isBotGroupAdmins) return enviartexto(resposta.botadm)
              blat = args.join(" ")
              client.groupUpdateSubject(from, `${blat}`)
              client.sendMessage(from, { text: '*NOMBRE DEL GRUPO ALTERADO CON EXITO*' }, { quoted: info }).catch((err) => {
                enviartexto(`erro`);
              })
            }
            break

////////cambiardescripciondegrupo

          case 'descgp7':
          case 'descripcióngp7':
            if (!isGroup) return enviartexto(resposta.grupo)
            if (!isGroupAdmins) return enviartexto(resposta.adm)
            if (!isBotGroupAdmins) return enviartexto(resposta.botadm)
            blabla = args.join(" ")
            client.groupUpdateDescription(from, `${blabla}`)
            client.sendMessage(from, { text: '*Exito, altero la descripción del grupo*' }, { quoted: info })
            break


//"ANTILINK"

case 'antilink7':
case 'antilinkgp7':

if (args.length < 1) return enviar(`*digite 1 para activar y 0 para desactivar* `)
if (Number(args[0]) === 1) {
if (isAntiLink) return enviar('𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺 𝚈𝙰 𝙴𝚂𝚃𝙰 𝙰𝙲𝚃𝙸𝚅𝙾')
antilink.push(from)
fs.writeFileSync('./archivos/funciones/antilink.json', JSON.stringify(antilink))
enviar('  ● ️𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎, 𝐓𝐄𝐍𝐆𝐀𝐍 𝐂𝐔𝐈𝐃𝐀𝐃𝐎 𝐂𝐎𝐍 𝐌𝐀𝐍𝐃𝐀𝐑 𝐋𝐈𝐍𝐊, 𝐒𝐄 𝐋𝐄𝐒 𝐁𝐀𝐍𝐄𝐀𝐑𝐀 𝐃𝐄 𝐌𝐀𝐍𝐄𝐑𝐀 𝐀𝐔𝐓𝐎𝐌𝐀𝐓𝐈𝐂𝐀  ● ️️')
} else if (Number(args[0]) === 0) {
antilink.splice(from, 1)
fs.writeFileSync('./archivos/funciones/antilink.json', JSON.stringify(antilink))
enviar('  ● ️𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎, 𝐏𝐔𝐄𝐃𝐄𝐍 𝐌𝐀𝐍𝐃𝐀𝐑 𝐋𝐈𝐍𝐊 𝐒𝐈𝐍 𝐍𝐈𝐍𝐆𝐔𝐍 𝐏𝐑𝐎𝐁𝐋𝐄𝐌𝐀  ● ️')
} else {
enviar(`*digite 1 para activar y 0 para desactivar* `)
}
break

/////antilinkaudio

case 'antilinkaudio7':
case 'antilinkaudiogp7':

if (args.length < 1) return enviar(`*digite 1 para activar y 0 para desactivar* `)
if (Number(args[0]) === 1) {
if (isAntiLinkAudio) return enviar('𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺𝙰𝚄𝙳𝙸𝙾 𝚈𝙰 𝙴𝚂𝚃𝙰 𝙰𝙲𝚃𝙸𝚅𝙾')
antilink.push(from)
fs.writeFileSync('./archivos/funciones/antilinkaudio.json', JSON.stringify(antilinkaudio))
enviar('  ● ️𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊𝐀𝐔𝐃𝐈𝐎 𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎, 𝐓𝐄𝐍𝐆𝐀𝐍 𝐂𝐔𝐈𝐃𝐀𝐃𝐎 𝐂𝐎𝐍 𝐌𝐀𝐍𝐃𝐀𝐑 𝐀𝐔𝐃𝐈𝐎𝐒, 𝐒𝐄 𝐋𝐄𝐒 𝐁𝐀𝐍𝐄𝐀𝐑𝐀 𝐃𝐄 𝐌𝐀𝐍𝐄𝐑𝐀 𝐀𝐔𝐓𝐎𝐌𝐀𝐓𝐈𝐂𝐀  ● ️️')
} else if (Number(args[0]) === 0) {
antilink.splice(from, 1)
fs.writeFileSync('./archivos/funciones/antilinkaudio.json', JSON.stringify(antilinkaudio))
enviar('  ● ️𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊𝐀𝐔𝐃𝐈𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎, 𝐏𝐔𝐄𝐃𝐄𝐍 𝐌𝐀𝐍𝐃𝐀𝐑 𝐀𝐔𝐃𝐈𝐎𝐒 𝐒𝐈𝐍 𝐍𝐈𝐍𝐆𝐔𝐍 𝐏𝐑𝐎𝐁𝐋𝐄𝐌𝐀  ● ️')
} else {
enviar(`*digite 1 para activar y 0 para desactivar* `)
}
break

/////antilinkvideo

case 'antilinkvideo7':
case 'antilinkvideogp7':

if (args.length < 1) return enviar(`*digite 1 para activar y 0 para desactivar* `)
if (Number(args[0]) === 1) {
if (isAntiLinkVideo) return enviar('𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺𝚅𝙸𝙳𝙴𝙾 𝚈𝙰 𝙴𝚂𝚃𝙰 𝙰𝙲𝚃𝙸𝚅𝙾')
antilink.push(from)
fs.writeFileSync('./archivos/funciones/antilinkvideo.json', JSON.stringify(antilinkvideo))
enviar('  ● ️𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊𝐕𝐈𝐃𝐄𝐎 𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎, 𝐓𝐄𝐍𝐆𝐀𝐍 𝐂𝐔𝐈𝐃𝐀𝐃𝐎 𝐂𝐎𝐍 𝐌𝐀𝐍𝐃𝐀𝐑 𝐕𝐈𝐃𝐄𝐎𝐒, 𝐒𝐄 𝐋𝐄𝐒 𝐁𝐀𝐍𝐄𝐀𝐑𝐀 𝐃𝐄 𝐌𝐀𝐍𝐄𝐑𝐀 𝐀𝐔𝐓𝐎𝐌𝐀𝐓𝐈𝐂𝐀  ● ️️')
} else if (Number(args[0]) === 0) {
antilink.splice(from, 1)
fs.writeFileSync('./archivos/funciones/antilinkvideo.json', JSON.stringify(antilinkvideo))
enviar('  ● ️𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊𝐕𝐈𝐃𝐄𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎, 𝐏𝐔𝐄𝐃𝐄𝐍 𝐌𝐀𝐍𝐃𝐀𝐑 𝐕𝐈𝐃𝐄𝐎𝐒 𝐒𝐈𝐍 𝐍𝐈𝐍𝐆𝐔𝐍 𝐏𝐑𝐎𝐁𝐋𝐄𝐌𝐀  ● ️')
} else {
enviar(`*digite 1 para activar y 0 para desactivar* `)
}
break

/////antilinkimagen

case 'antilinkimagen7':
case 'antilinkimagengp7':

if (args.length < 1) return enviar(`*digite 1 para activar y 0 para desactivar* `)
if (Number(args[0]) === 1) {
if (isAntiLinkImagen) return enviar('𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺𝙸𝙼𝙰𝙶𝙴𝙽 𝚈𝙰 𝙴𝚂𝚃𝙰 𝙰𝙲𝚃𝙸𝚅𝙾')
antilink.push(from)
fs.writeFileSync('./archivos/funciones/antilinkimagen.json', JSON.stringify(antilinkimagen))
enviar('  ● ️𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊𝐈𝐌𝐀𝐆𝐄𝐍 𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎, 𝐓𝐄𝐍𝐆𝐀𝐍 𝐂𝐔𝐈𝐃𝐀𝐃𝐎 𝐂𝐎𝐍 𝐌𝐀𝐍𝐃𝐀𝐑 𝐈𝐌𝐀𝐆𝐄𝐍𝐄𝐒, 𝐒𝐄 𝐋𝐄𝐒 𝐁𝐀𝐍𝐄𝐀𝐑𝐀 𝐃𝐄 𝐌𝐀𝐍𝐄𝐑𝐀 𝐀𝐔𝐓𝐎𝐌𝐀𝐓𝐈𝐂𝐀  ● ️️')
} else if (Number(args[0]) === 0) {
antilink.splice(from, 1)
fs.writeFileSync('./archivos/funciones/antilinkimagen.json', JSON.stringify(antilinkimagen))
enviar('  ● ️𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊𝐈𝐌𝐀𝐆𝐄𝐍 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎, 𝐏𝐔𝐄𝐃𝐄𝐍 𝐌𝐀𝐍𝐃𝐀𝐑 𝐕𝐈𝐃𝐄𝐎𝐒 𝐒𝐈𝐍 𝐍𝐈𝐍𝐆𝐔𝐍 𝐏𝐑𝐎𝐁𝐋𝐄𝐌𝐀  ● ️')
} else {
enviar(`*digite 1 para activar y 0 para desactivar* `)
}
break

/////antilinksticker

case 'antilinksticker7':
case 'antilinkstickergp7':

if (args.length < 1) return enviar(`*digite 1 para activar y 0 para desactivar* `)
if (Number(args[0]) === 1) {
if (isAntiLinkSticker) return enviar('𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚈𝙰 𝙴𝚂𝚃𝙰 𝙰𝙲𝚃𝙸𝚅𝙾')
antilink.push(from)
fs.writeFileSync('./archivos/funciones/antilinksticker.json', JSON.stringify(antilinksticker))
enviar('  ● ️𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎, 𝐓𝐄𝐍𝐆𝐀𝐍 𝐂𝐔𝐈𝐃𝐀𝐃𝐎 𝐂𝐎𝐍 𝐌𝐀𝐍𝐃𝐀𝐑 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒, 𝐒𝐄 𝐋𝐄𝐒 𝐁𝐀𝐍𝐄𝐀𝐑𝐀 𝐃𝐄 𝐌𝐀𝐍𝐄𝐑𝐀 𝐀𝐔𝐓𝐎𝐌𝐀𝐓𝐈𝐂𝐀  ● ️️')
} else if (Number(args[0]) === 0) {
antilink.splice(from, 1)
fs.writeFileSync('./archivos/funciones/antilinksticker.json', JSON.stringify(antilinksticker))
enviar('  ● ️𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎, 𝐏𝐔𝐄𝐃𝐄𝐍 𝐌𝐀𝐍𝐃𝐀𝐑 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐒𝐈𝐍 𝐍𝐈𝐍𝐆𝐔𝐍 𝐏𝐑𝐎𝐁𝐋𝐄𝐌𝐀  ● ️')
} else {
enviar(`*digite 1 para activar y 0 para desactivar* `)
}
break

/////antilinkdocumento

case 'antilinkdocumento7':
case 'antilinkdocumentogp7':

if (args.length < 1) return enviar(`*digite 1 para activar y 0 para desactivar* `)
if (Number(args[0]) === 1) {
if (isAntiLinkDocumento) return enviar('𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺𝙳𝙾𝙲𝚄𝙼𝙴𝙽𝚃𝙾 𝚈𝙰 𝙴𝚂𝚃𝙰 𝙰𝙲𝚃𝙸𝚅𝙾')
antilink.push(from)
fs.writeFileSync('./archivos/funciones/antilinkdocumento.json', JSON.stringify(antilinkdocumento))
enviar('  ● ️𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓𝐎 𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎, 𝐓𝐄𝐍𝐆𝐀𝐍 𝐂𝐔𝐈𝐃𝐀𝐃𝐎 𝐂𝐎𝐍 𝐌𝐀𝐍𝐃𝐀𝐑 𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓𝐎𝐒, 𝐒𝐄 𝐋𝐄𝐒 𝐁𝐀𝐍𝐄𝐀𝐑𝐀 𝐃𝐄 𝐌𝐀𝐍𝐄𝐑𝐀 𝐀𝐔𝐓𝐎𝐌𝐀𝐓𝐈𝐂𝐀  ● ️️')
} else if (Number(args[0]) === 0) {
antilink.splice(from, 1)
fs.writeFileSync('./archivos/funciones/antilinkdocumento.json', JSON.stringify(antilinkdocumento))
enviar('  ● ️𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊𝐈𝐌𝐀𝐆𝐄𝐍 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎, 𝐏𝐔𝐄𝐃𝐄𝐍 𝐌𝐀𝐍𝐃𝐀𝐑 𝐕𝐈𝐃𝐄𝐎𝐒 𝐒𝐈𝐍 𝐍𝐈𝐍𝐆𝐔𝐍 𝐏𝐑𝐎𝐁𝐋𝐄𝐌𝐀  ● ️')
} else {
enviar(`*digite 1 para activar y 0 para desactivar* `)
}
break


//////////MENU

case 'menu1' :
case 'MENU1':
case 'Menu1':
case 'HELP1':
case 'help1':
case 'Help1':
case 'comandos1':
case 'COMANDOS1':
case 'Comandos1':
case 'Bot1':
case 'BOT1':
case 'bot1':


const loading = [
  "[██▒▒▒▒▒▒▒▒] 20%",   
  "[███▒▒▒▒▒▒▒] 30%",   
  "[████▒▒▒▒▒▒] 40%",
  "[█████▒▒▒▒▒] 50%",
  "[██████▒▒▒▒] 60%",
  "[███████▒▒▒] 70%",
  "[████████▒▒] 80%",
  "[█████████▒] 90%",
  "[██████████] 100%",
  "⚡𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎 𝐌𝐄𝐍𝐔⚡"
  ]

const { key } = await client.sendMessage(from, { text: '[█▒▒▒▒▒▒▒▒▒] 10%'})
for (i of loading) {
 await client.sendMessage(from, { text: i, edit: key })
}


const gotu3 = fs.readFileSync('./archivos/audios/menuaudio.mp4')

const stev = `
cc.❥͓͓͓͓͓͓͓͓͓━━━━°❀•°.🍃≛֟🍃.°•❀°━━━━.cc
                  𝐆𝐀𝐙𝐀 𝐁𝐎𝐓[[✨]]
cc.●❯───ᷛ─ͬ─ͧ─ᷮ─ͦ─ͦ─ᷫ─ͥ─ͨ─ͥ─ͣ─ᷞ──❮●.cc
╧ֶָ֢᪱࣪࣪⬪⃘̸⃘𐇽᳝۫۫۫۫۫۬፝֯֟᷼⃝۫۫｡۫۫۫۬𝆺𝅥 𝆭❄️...𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍...☃️꦳❪⃝᩿ᮀᰰ ᭄ꫂꤪꤨ
 ꦳꦳⃝̫۫.•:｡✩⏜᷼꙰᷼ ꦼ 𝆺𝅥 𝆭  𝆺𝅥 𝆭 ⏝ꦼ  𝆺𝅥 𝆭  𝆺𝅥 𝆭 ⏜꦳꦳᷼⃝̫۫.•
┏│ ✫✫✫✫✫
┃│📱 𝐃𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐨 : ${deviceType}
┃│⏰ 𝐇𝐨𝐫𝐚 : ${hora}
┃│📆 𝐃𝐚𝐭𝐚 : ${data}
┃│👤 𝐔𝐬𝐮𝐚𝐫𝐢𝐨: ${pushname}
┃│🎭 𝐆𝐫𝐮𝐩𝐨: ${groupName}
┃│🤖 𝐁𝐨𝐭: ${nomebot}
┃│👾 𝐖𝐚.𝐦𝐞 : https://wa.me/50664570362
┗│ ✫✫✫✫✫
     𝆺𝅥 𝆭  ⏜᷼꙰᷼ ꦼ⏝ꦼ 𝆺𝅥 𝆭 ✨ ⏜᷼꙰᷼ ꦼ⏝ꦼ 𝆺𝅥 𝆭  
cc.❥͓͓͓͓͓͓͓͓͓━━━━°❀•°.🍃≛֟🍃.°•❀°━━━━.cc
                  𝐆𝐀𝐙𝐀 𝐁𝐎𝐓[[✨]]
cc.●❯───ᷛ─ͬ─ͧ─ᷮ─ͦ─ͦ─ᷫ─ͥ─ͨ─ͥ─ͣ─ᷞ──❮●.cc
╧ֶָ֢᪱࣪࣪⬪⃘̸⃘𐇽᳝۫۫۫۫۫۬፝֯֟᷼⃝۫۫۫۫۫۬𝆺𝅥 𝆭❄️...𝐌𝐄𝐍𝐔 𝐅𝐈𝐆𝐔𝐑𝐈𝐓𝐀𝐒...☃️꦳❪⃝᩿ᮀᰰ ᭄ꫂꤪꤨ
 ꦳꦳⃝̫۫.•:｡✩⏜᷼꙰᷼ ꦼ 𝆺𝅥 𝆭  𝆺𝅥 𝆭 ⏝ꦼ  𝆺𝅥 𝆭  𝆺𝅥 𝆭 ⏜꦳꦳᷼⃝̫۫.•
🍃➪ 𝐓𝐎𝐈𝐌𝐆 
🍃➪ 𝐓𝐎𝐆𝐈𝐅
🍃➪ 𝐒
🍃➪ 𝐒𝐓𝐈𝐂𝐊𝐄𝐑
🍃➪ 𝐅𝐈𝐆𝐔
🍃➪ 𝐑𝐎𝐁𝐀𝐑𝐆𝐈𝐅
🍃➪ 𝐑𝐎𝐁𝐀𝐑𝐒𝐓𝐈𝐂𝐊𝐄𝐑
🍃➪ 𝐑𝐄𝐍𝐎𝐌𝐁𝐑𝐀𝐑𝐒𝐓𝐈𝐂𝐊𝐄𝐑: 𝐓𝐄𝐗𝐓/𝐓𝐄𝐗𝐓
꦳꦳⃝̫۫.•:｡✩⏜᷼꙰᷼ ꦼ 𝆺𝅥 𝆭  𝆺𝅥 𝆭 ⏝ꦼ  𝆺𝅥 𝆭  𝆺𝅥 𝆭 ⏜꦳꦳᷼⃝̫۫.•
cc.❥͓͓͓͓͓͓͓͓͓━━━━°❀•°.🍃≛֟🍃.°•❀°━━━.cc
                  𝐆𝐀𝐙𝐀 𝐁𝐎𝐓[[✨]]
cc.●❯───ᷛ─ͬ─ͧ─ᷮ─ͦ─ͦ─ᷫ─ͥ─ͨ─ͥ─ͣ─ᷞ──❮●.cc
╧ֶָ֢᪱࣪࣪⬪⃘̸⃘𐇽᳝۫۫۫۫۫۬፝֯֟᷼⃝۫۫۫۫۫۬𝆺𝅥 𝆭❄️...   ⃝⃕𝐌𝐄𝐍𝐔 𝐀𝐍𝐓𝐈𝐒⃝⃕...☃️꦳❪⃝᩿ᮀᰰ ᭄ꫂꤪꤨ
 ꦳꦳⃝̫۫.•:｡✩⏜᷼꙰᷼ ꦼ 𝆺𝅥 𝆭  𝆺𝅥 𝆭 ⏝ꦼ  𝆺𝅥 𝆭  𝆺𝅥 𝆭 ⏜꦳꦳᷼⃝̫۫.•
🍃➪ 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝟏 / 𝟎
🍃➪ 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝟏 / 𝟎
🍃➪ 𝐀𝐍𝐓𝐈𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝟏 / 𝟎
🍃➪ 𝐀𝐍𝐓𝐈𝐈𝐌𝐀𝐆𝐄𝐍 𝟏 / 𝟎
🍃➪ 𝐀𝐍𝐓𝐈𝐀𝐔𝐃𝐈𝐎 𝟏 / 𝟎
🍃➪ 𝐀𝐍𝐓𝐈𝐕𝐈𝐃𝐄𝐎 𝟏 / 𝟎
🍃➪ 𝐀𝐍𝐓𝐈𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓𝐎 𝟏 / 𝟎
꦳꦳⃝̫۫.•:｡✩⏜᷼꙰᷼ ꦼ 𝆺𝅥 𝆭  𝆺𝅥 𝆭 ⏝ꦼ  𝆺𝅥 𝆭  𝆺𝅥 𝆭 ⏜꦳꦳᷼⃝̫۫.•`

client.sendMessage(from,{ video : gotu3, caption : stev , gifPlayback: true} ,{ quoted : info})
break

//"info_grupo"

case 'infogrupo7' :
case 'Infogrupo7' :
case 'informacion7' :
case 'descripción7' :
case 'Descripción7' :
if(!isGroup) return enviartexto(respuesta.grupos)
const destev = client.sendMessage(from,{audio : fs.readFileSync("./archivos/audios/Las reglas del grupo.mp3"),mimetype: "audio/mp4", ppt : true },{quoted : info})

const destev2 = `
━┅┅┅┅┄┄┄⟞⟦✮⟧⟝┄┄┄┉┉┉┉━
𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎
${groupName}
━┅┅┅┅┄┄┄⟞⟦✮⟧⟝┄┄┄┉┉┉┉━
𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐂𝐈𝐎𝐍 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎
${groupDesc}
━┅┅┅┅┄┄┄⟞⟦✮⟧⟝┄┄┄┉┉┉┉━
`
enviartexto(destev2)
break 

////linkgrupo

case 'linkgrupo7' :
case 'Linkgrupo7' :
case 'LINKGRUPO7' :
case 'linkgp7' :
case 'Linkgp7' :
case 'LINKGP7' :
if(!isGroup) return enviartexto(respuesta.grupos)
if(!isBotGroupAdmins) return enviartexto (respuesta.botadmin) 
linkgc = await client.groupInviteCode(from)
enviartexto('https://chat.whatsapp.com/'+linkgc)
break


//"invocar o llamar miembros del grupo"

case 'tagall7':
          case 'marcar7': {
            if (!isGroup) return enviartexto(resposta.group)
            if (!isGroupAdmins) return enviartexto(resposta.adm)
            let metadata = await client.groupMetadata(from)
            let teks = `
  \n *${metadata.participants.length ? metadata.participants.length : "undefined"}* *participantes en el grupo*.
  \n ${args.join(" ") ? args.join(" ") : `━┅┅┅┅┅┅┄┄┄⟞⟦✮⟧⟝┄┄┄┉┉┉┉┉┉┉━
◦•●◉✯ 𝐈𝐍𝐕𝐎𝐂𝐀𝐍𝐃𝐎 𝐀𝐋 𝐆𝐑𝐔𝐏𝐎 ✯◉●•◦
━┅┅┅┅┅┅┄┄┄⟞⟦✮⟧⟝┄┄┄┉┉┉┉┉┉┉━`}*\n\n`
            for (let mem of participants) {
              teks += ` ⋆⃟ۣۜ᭪➣@${mem.id.split('@')[0]}\n`
            }
            client.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: live })
          }
            break

//figu
case 'figu': case 'figu2': case 'sticker':  case 's': case 'f': 
 if ((isMedia && !info.message.videoMessage || isQuotedImage)) {      
enviartexto("𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁𝙵𝙰𝚅𝙾𝚁, 𝙴𝚂𝚃𝙾𝚈 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 𝚂𝚄 𝚂𝚃𝙸𝙲𝙺𝙴𝚁")
var stream = await downloadContentFromMessage(info.message.imageMessage || info.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
    var buffer = Buffer.from([])
    for await(const chunk of stream) {
     buffer = Buffer.concat([buffer, chunk])
    }
    let ran = 'stickers.webp'
    fs.writeFileSync(`./${ran}`, buffer)
     ffmpeg(`./${ran}`)
     .on("error", console.error)
     .on("end", () => {
      exec(`webpmux -set exif ./dados/${ran} -o ./${ran}`, async (error) => {
      
       await enviarfiguimg(from, fs.readFileSync(`./${ran}`), info, {
 packname: `➪ 𝐆𝐀𝐙𝐀-𝐁𝐎𝐓`, author: `${pushname}`
 
})
				
        fs.unlinkSync(ran)
			       
       })
      })
	 .addOutputOptions([
       "-vcodec", 
 	   "libwebp", 
 	   "-vf", 
	"scale=512:512:force_original_aspect_ratio=decrease,fps=15, pad=512:512:(ow-iw)/2:(oh-ih)/2:color=green@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
	  ])
	 .toFormat('webp')
	 .save(`${ran}`)	 
    } else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) {
enviartexto("𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁𝙵𝙰𝚅𝙾𝚁, 𝙴𝚂𝚃𝙾𝚈 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 𝚂𝚄 𝚂𝚃𝙸𝙲𝙺𝙴𝚁")
const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage: info.message.videoMessage
rane = getRandom('.'+ await getExtension(encmedia.mimetype))
imgbuff = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, imgbuff)
const media = rane
ran = getRandom('.'+media.split('.')[1])
const upload = await TelegraPh(media)
await enviarfiguvid(from, util.format(upload), info, {
 packname: `➪ 𝐆𝐀𝐙𝐀-𝐁𝐎𝐓`, author: `${pushname}`
}) 
        fs.unlinkSync(ran)
}
          break

//////////STICKER'S_EDIT////////

case "robargif2":
if (!isQuotedSticker) return enviar('𝚁𝙴𝙼𝙰𝚁𝚀𝚄𝙴 𝚄𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙴𝙽 𝙼𝙾𝚅𝙸𝙼𝙸𝙴𝙽𝚃𝙾')  
namaPacksssob = q.substring(0, q.indexOf('/') - 0)
authorPacksssob = q.substring(q.lastIndexOf('/') + 1)
textopb = body.slice(7)
if (isDoubleByte(textopb)) return enviar('Está prohibido emojis o caracteres especiales')
enviar("🥵Robando Gif")
try {
bufffob = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
aaob = await webp_mp4(bufffob)
mp44ab = await getBuffer(aaob)
await enviarfiguvid(from,mp44ab, info, {
 packname: namaPacksssob, author: authorPacksssob
})
 } catch(e) {
console.log(e)
enviar("👷‍♂️ 𝐎𝐂𝐔𝐑𝐑𝐈𝐎 𝐔𝐍 𝐄𝐑𝐑𝐎𝐑 : 𝙳𝙴𝙱𝙴 𝚁𝙴𝙼𝙰𝚁𝙲𝙰𝚁 𝚄𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙴𝙽 𝙼𝙾𝚅𝙸𝙼𝙸𝙴𝙽𝚃𝙾")
}
break
case "robargif":
if (!isQuotedSticker) return enviar('𝚁𝙴𝙼𝙰𝚁𝚀𝚄𝙴 𝚄𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙴𝙽 𝙼𝙾𝚅𝙸𝙼𝙸𝙴𝙽𝚃𝙾')  
enviar("🥵Robando Gif")
try {
bufffob2 = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
aaob2 = await webp_mp4(bufffob2)
mp44ab2 = await getBuffer(aaob2)
await enviarfiguvid(from,mp44ab2, info, {
 packname: `➪ 𝐆𝐀𝐙𝐀-𝐁𝐎𝐓`, author: `${pushname}`
})
 } catch(e) {
console.log(e)
enviar("👷‍♂️ 𝐎𝐂𝐔𝐑𝐑𝐈𝐎 𝐔𝐍 𝐄𝐑𝐑𝐎𝐑 : 𝙳𝙴𝙱𝙴 𝚁𝙴𝙼𝙰𝚁𝙲𝙰𝚁 𝚄𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙴𝙽 𝙼𝙾𝚅𝙸𝙼𝙸𝙴𝙽𝚃𝙾")
}
break
case 'renombrarsticker': case 'robarsticker2': case "robarstickers2":
if (!isQuotedSticker) return enviar('𝚁𝙴𝙼𝙰𝚁𝚀𝚄𝙴 𝚄𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚂𝙸𝙽 𝙼𝙾𝚅𝙸𝙼𝙸𝙴𝙽𝚃𝙾')  
namaPackssib = q.substring(0, q.indexOf('/') - 0)
authorPackssib = q.substring(q.lastIndexOf('/') + 1)
textoio = body.slice(7)
if (isDoubleByte(textoio)) return enviar('Está prohibido emojis o caracteres especiales')
enviar("🥵Robando Stickers")
try {
stiker_wmio = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, "image")
await enviarfiguimg(from,stiker_wmio, info, {
 packname: namaPackssib, author: authorPackssib
})
 } catch(e) {
console.log(e)
enviar("👷‍♂️ 𝐎𝐂𝐔𝐑𝐑𝐈𝐎 𝐔𝐍 𝐄𝐑𝐑𝐎𝐑 : 𝙻𝙾𝚂 𝚅𝙸𝙳𝙴𝙾𝚂 𝙾 𝙶𝙸𝙵 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴𝙽 𝚁𝙾𝙱𝙰𝚁")
}
break
case 'renombrarsticker77': case 'robarsticker': case "robarstickers":
if (!isQuotedSticker) return enviar('𝚁𝙴𝙼𝙰𝚁𝚀𝚄𝙴 𝚄𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚂𝙸𝙽 𝙼𝙾𝚅𝙸𝙼𝙸𝙴𝙽𝚃𝙾')  
enviar("🥵Robando Stickers")
try {
stiker_wmio2 = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, "image")
await enviarfiguimg(from,stiker_wmio2, info, {
 packname: `➪ 𝐆𝐀𝐙𝐀-𝐁𝐎𝐓`, author: `${pushname}`
})
 } catch(e) {
console.log(e)
enviar("👷‍♂️ 𝐎𝐂𝐔𝐑𝐑𝐈𝐎 𝐔𝐍 𝐄𝐑𝐑𝐎𝐑 : 𝙻𝙾𝚂 𝚅𝙸𝙳𝙴𝙾𝚂 𝙾 𝙶𝙸𝙵 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴𝙽 𝚁𝙾𝙱𝙰𝚁")
}
break

/////toimg

case 'toimg7':
if(!isQuotedSticker) return enviartexto('*Por favor, mencione un sticker para ejecutar el comando.*')
try {
enviartexto('*Aguarde, estoy convirtiendo una figura para un formato imagen.*')
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
client.sendMessage(from, {image: buff}, {quoted: info}).catch(e => {
console.log(e);
enviartexto('*Ocurrio un error no convirtió el sticker para imagen.*')
})
} catch {
enviartexto(mess.error())
}
break


///////togif
case 'togif7':
if(!isQuotedSticker) return enviartexto('*Marque una figura animada!*')
try {
if((isMedia && !info.message.videoMessage || isQuotedSticker) && !q.length <= 1) {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
enviar('*Aguarde, estoy convirtiendo una figura para un formato gif.*')
a = await webp_mp4(buff)
client.sendMessage(from, {video: {url: a}, gifPlayback: true, fileName: `stick.gif`}, {quoted: info}).catch(e => {
enviartexto("*Error al realizar el envio de sticker!*") 
})
DLT_FL(buff)
}
} catch {
enviartexto(mess.error())
}
break


//////robarsticker 
case 'renombrarsticker7':
          case 'robarsticker7':
            if (!isQuotedSticker) return enviar('Marque una figura...')
            encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
            var kls = q
            var pack = kls.split("/")[0];
            var author2 = kls.split("/")[1];
            bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
            var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
            var sti = new Buffer.from(mantap, 'base64');
            client.sendMessage(from, { sticker: sti, contextInfo: { externalAdReply: { title: `${pack}|${author2}`, body: "", previewType: "PHOTO", thumbnail: sti } } })
              .catch((err) => {
                enviar(`❎ Error intenta mas tarde`);
              })
            break


// COMANDOS SIN PREFIJO
default:

//Debajo del default
if (budy.includes(".com")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return 
var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
await mafuyu.groupParticipantsUpdate(from, [Kick], 'remove')
}
if (budy.includes("http://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return 
var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
await mafuyu.groupParticipantsUpdate(from, [Kick], 'remove')
}
//////antilinkaudio
if (isAntiLinkAudio && isBotGroupAdmins && type == 'audioMessage') {
if (isGroupAdmins) return client.sendMessage(from, { text: '*MENSAJE PROHIBIDO, PERO LA REALEZA ES ADMIN, POR LO QUE NO TE ELIMINARE*' }, { quoted: info })
await client.sendMessage(from, { text: '*MENSAJE PROHIBIDO, CASTIGO AL USUARIO*' }, { quoted: info })
setTimeout(async function () {
client.groupParticipantsUpdate(from, [sender], 'remove')
          }, 1000)
}

//////antilinkvideo
if (isAntiLinkVideo && isBotGroupAdmins && type == 'videoMessage') {
if (isGroupAdmins) return client.sendMessage(from, { text: '*MENSAJE PROHIBIDO, PERO LA REALEZA ES ADMIN, POR LO QUE NO TE ELIMINARE*' }, { quoted: info })
await client.sendMessage(from, { text: '*MENSAJE PROHIBIDO, CASTIGO AL USUARIO*' }, { quoted: info })
setTimeout(async function () {
client.groupParticipantsUpdate(from, [sender], 'remove')
          }, 1000)
}

//////antilinkimagen
if (isAntiLinkImagen && isBotGroupAdmins && type == 'imageMessage') {
if (isGroupAdmins) return client.sendMessage(from, { text: '*MENSAJE PROHIBIDO, PERO LA REALEZA ES ADMIN, POR LO QUE NO TE ELIMINARE*' }, { quoted: info })
await client.sendMessage(from, { text: '*MENSAJE PROHIBIDO, CASTIGO AL USUARIO*' }, { quoted: info })
setTimeout(async function () {
client.groupParticipantsUpdate(from, [sender], 'remove')
          }, 1000)
}

//////antilinksticker
if (isAntiLinkImagen && isBotGroupAdmins && type == 'stickerMessage') {
if (isGroupAdmins) return client.sendMessage(from, { text: '*MENSAJE PROHIBIDO, PERO LA REALEZA ES ADMIN, POR LO QUE NO TE ELIMINARE*' }, { quoted: info })
await client.sendMessage(from, { text: '*MENSAJE PROHIBIDO, CASTIGO AL USUARIO*' }, { quoted: info })
setTimeout(async function () {
client.groupParticipantsUpdate(from, [sender], 'remove')
          }, 1000)
}

//////antilinkdoc
if (isAntiLinkImagen && isBotGroupAdmins && type == 'documentMessage') {
if (isGroupAdmins) return client.sendMessage(from, { text: '*MENSAJE PROHIBIDO, PERO LA REALEZA ES ADMIN, POR LO QUE NO TE ELIMINARE*' }, { quoted: info })
await client.sendMessage(from, { text: '*MENSAJE PROHIBIDO, CASTIGO AL USUARIO*' }, { quoted: info })
setTimeout(async function () {
client.groupParticipantsUpdate(from, [sender], 'remove')
          }, 1000)
}


/////////////////


} 
 } catch (e) {
 e = String(e)
if (!e.includes("this.isZero") && !e.includes("Could not find MIME for Buffer <null>") && !e.includes("Cannot read property 'conversation' of null") && !e.includes("Cannot read property 'contextInfo' of undefined") && !e.includes("Cannot set property 'mtype' of undefined") && !e.includes("jid is not defined")) {
console.log('Error : %s', color(e, 'yellow'))
}
 
 
 }       
    })
}
// run in main file
connectToWhatsApp()






//gracias por la confianza
//solución de errores en restricciones hecho
//pequeño credito a Viviana la chica nazi