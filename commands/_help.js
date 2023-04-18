/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md By Suhail Tech
 * @author : SuhailTech <https://www.youtube.com/c/SuhailTechInfo>
 * @description : Secktor Bot ,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "help",
            alias: ["menu"],
            desc: "Help list",
            category: "general",
            react: "👀",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('asia/karachi').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `*❒═━═「𝚁𝙰𝙸𝚉𝙴𝙻」═━═❒*
*⧉┆مرحبا ياصديقي ⤌⤈*    
*•| ⊱.⊰ |•*
*⧉┆انا بوت واتس اسمي*
•| ⊱𝑅𝐴𝐼𝑍𝐸𝐿_𝐵𝑂𝑇𖤊⊰ |•
•➥┆ اعمل في الخاص والقروبات
•➥┆ وظيفتي هي حماية قروبك
•➥┆ اكتب كلمه *.الاوامر* 
•➥┆ لمعرفة اوامـــــر البوت  
•➥┆ مميزات البوت كثيره جدا 
•➥┆ ويعمل بجودة فائقه وعاليه
*❒═━═「𝚁𝙰𝙸𝚉𝙴𝙻」═━═❒*
*✦┃الدعم:* 
*「   https://chat.whatsapp.com/EZe0MlgU0xo8GXtkCpqS0M  」*
*❒═━═「𝚁𝙰𝙸𝚉𝙴𝙻」═━═❒*
*⺀اوامر بوت رايزل⺀*
*❒═━═「𝚁𝙰𝙸𝚉𝙴𝙻」═━═❒*
*┇.ملصق┇↜⟬ لصناعة ملصق ⟭.*
*┇.اكس┇↜⟬ لعبة اكس او ⟭*
*┇.م3┇↜⟬ اوامر القروبات ⟭*
*┇.م4┇↜⟬ اوامر البحث والتنريل ⟭*
*┇.م5┇↜⟬ اوامر التحميل ⟭*
*┇.م6┇↜⟬ اوامر تغيير الصوت ⟭*
*┇.م7┇↜⟬ اوامر التسليه ⟭*
*┇.م8┇↜⟬ لعرض جميع الأوامر ⟭*
*❒═━═「𝚁𝙰𝙸𝚉𝙴𝙻」═━═❒*
「 .المميزات 」┆لعرض مميزات البوت
「 .المطور 」┆لعرض مطور البوت
「 .السورس 」┆لعرض المبرمج
*❒═━═「𝚁𝙰𝙸𝚉𝙴𝙻」═━═❒*
𝑅𝐴𝐼𝑍𝐸𝐿_𝐵𝑂𝑇𖤊`

                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str,
                    footer: tlang().footer,
                    headerType: 4,
                   
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "list",
            desc: "list menu",
            category: "general",
            react: "🥀"
        },
        async(Void, citel) => {
            const { commands } = require('../lib');
            let str = `
╭━━〘 ` + fancytext('SUHAIL-MD'[0], 58) + ` 〙━━──⊷`
            str += '' + `
┃ ⛥╭──────────────      
┃ ⛥│ User: ${citel.pushName}
┃ ⛥│ Theme: ${tlang().title}
┃ ⛥│ Prefix: ${prefix}
┃ ⛥│ Owner: ${Config.ownername}
┃ ⛥│ Commands: ${commands.length}
┃ ⛥│ Uptime: ${runtime(process.uptime())}
┃ ⛥│ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃ ⛥│ Ytube : youtube.com/c/SuhailTechInfo
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷\n` + ''
            str += `╭━━━━━━━━━━━────⊷\n`
            str += `┃ ⛥ ╭─────────────\n`
            for (let i = 0; i < commands.length; i++) {
             if(commands[i].pattern==undefined) continue
                str += `┃ ⛥ │ ➛ ${i+1}. ` + commands[i].pattern + '\n'
            }
            str += `┃ ⛥ ╰─────────────\n`
            str += `╰━━━━━━━━━━━───⊷\nsᴜʜᴀɪʟ ᴛᴇᴄʜ ɪɴғᴏ \n www.youtube.com/c/SuhailTechInfo`
            return Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str ,footer: tlang().footer, headerType: 4 })
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        desc: "To check ping",
        category: "general",
        react: "💜",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

Secktor.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    react: "✨",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*❌No Such commands.*");
        else arr.push(`*🍁Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return await citel.reply(arr.join('\n'));


})
