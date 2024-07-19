const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global. SUHAIL_18_17_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgODEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU0LFxuICAgICAgICA2NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDkyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAwLFxuICAgICAgICA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTksXG4gICAgICAgIDkxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2LFxuICAgICAgICAzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1LFxuICAgICAgICA4OCxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTczLFxuICAgICAgICAxMzMsXG4gICAgICAgIDYxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDk0LFxuICAgICAgICA4NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDkxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3OSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDksXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODYsXG4gICAgICAgIDQyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDksXG4gICAgICAgIDY2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxODIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia2ZBZmRLaXRwMnI1T3FsMGdsZnhCbVdiUm9pNGJjNDU1NGlaVHU4c01aMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibXdFZDFHbnRSdmFGQkppRm4tSXBhd1wiLFxuICBcInBob25lSWRcIjogXCI2MjNkOTRiNS0zZTMzLTQ2NTctOWViMS1kMTRmM2JiMDg4OGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk0LFxuICAgICAgNjQsXG4gICAgICAxNjIsXG4gICAgICA4NCxcbiAgICAgIDIwNSxcbiAgICAgIDU2LFxuICAgICAgMTk4LFxuICAgICAgOTIsXG4gICAgICAxODgsXG4gICAgICAyMSxcbiAgICAgIDI3LFxuICAgICAgMjIzLFxuICAgICAgMjQzLFxuICAgICAgMTE2LFxuICAgICAgMTA3LFxuICAgICAgMjIxLFxuICAgICAgNzMsXG4gICAgICA2NyxcbiAgICAgIDE0MixcbiAgICAgIDIzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzksXG4gICAgICAxOTQsXG4gICAgICAxODYsXG4gICAgICAxNyxcbiAgICAgIDExOSxcbiAgICAgIDEwMyxcbiAgICAgIDEwNyxcbiAgICAgIDIzNSxcbiAgICAgIDM1LFxuICAgICAgODgsXG4gICAgICAxMzMsXG4gICAgICA5MyxcbiAgICAgIDEwNyxcbiAgICAgIDIyOCxcbiAgICAgIDMyLFxuICAgICAgMjEzLFxuICAgICAgNDAsXG4gICAgICA3NCxcbiAgICAgIDY4LFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhTRVlaRjFWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3ODQ1NTQwMzE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlYHwnZWm8J2VpPCdlaXwnZWSIPCdlYvwnZWrXCIsXG4gICAgXCJsaWRcIjogXCIyMzM0MjMzNjkxNzUxMTE6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLT1l1L1VIRU1IYjZyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInBhcFNkYi9ManhHRFpXa2ZDbU5kOW8zbnd4S1lHQXp6eklpcUpPd0lqMVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS0JLdWpkdWw4c1BNK0RQWEozcGNFb0hzWVBBUWIwOW9tUjdSaUVHTUs5Yzh5eGs4T25BRFJjN0Q4YWttTlpsdCtDTm5PdDJSOFpIYk9MdExXZGZDQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSWN1S1BnYnpHV3kyaFB2dTQwRkZ5bXJyU2g3dGM4bDR4NnFNWDJMb1BoZzVIK21BZVhWb1lURExyYm05ZjlMZ0RXcWR4QmlsUHBoWjNpamYxMjVHQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Nzg0NTU0MDMxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQxMzA2MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBiaFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGJoLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVldML2JJK3ZZMXV6UDhWV1crVVZIenBJaDRldGlnMFdxKzJkWGFKU1NlQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTI1Mzg0NzM5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0MTMwNjUxMTBcIn0iCn0=process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
