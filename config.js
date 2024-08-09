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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_43_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDMyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDI4LFxuICAgICAgICA1NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMixcbiAgICAgICAgMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjksXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDg2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU0LFxuICAgICAgICA3OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDY5LFxuICAgICAgICAxODQsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgODIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiam52Rko4N0F4SzRkUTRUeGxiWUhFUEg0MVFvU0FVS29xWlB3SFdRVjNKWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVVl0STQ5WnpRQldHVU5ibFhOWDJuUVwiLFxuICBcInBob25lSWRcIjogXCIwMGFjMmFiYS1kZDRmLTQ2ODgtODE5Ni1hYjhlYWRkYTgyYjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgzLFxuICAgICAgMTc1LFxuICAgICAgMzYsXG4gICAgICAxOCxcbiAgICAgIDkyLFxuICAgICAgMzcsXG4gICAgICAyNSxcbiAgICAgIDExOSxcbiAgICAgIDUwLFxuICAgICAgMTk3LFxuICAgICAgMCxcbiAgICAgIDE5OCxcbiAgICAgIDE5LFxuICAgICAgMjUsXG4gICAgICA1NCxcbiAgICAgIDE1OSxcbiAgICAgIDE2OSxcbiAgICAgIDEzNSxcbiAgICAgIDE0MCxcbiAgICAgIDc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0OSxcbiAgICAgIDEzMSxcbiAgICAgIDEyNixcbiAgICAgIDEyOCxcbiAgICAgIDIsXG4gICAgICAxMDcsXG4gICAgICAyMDcsXG4gICAgICAxODEsXG4gICAgICAxODUsXG4gICAgICA1MCxcbiAgICAgIDEyOCxcbiAgICAgIDI1NCxcbiAgICAgIDQ4LFxuICAgICAgMjA4LFxuICAgICAgNTcsXG4gICAgICAxMjgsXG4gICAgICAyMixcbiAgICAgIDE2LFxuICAgICAgMjA3LFxuICAgICAgMTE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpHN0xIOFNDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3ODQ1NTQwMzE6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlYHwnZWm8J2VpPCdlaXwnZWSIPCdlYvwnZWrXCIsXG4gICAgXCJsaWRcIjogXCIyMzM0MjMzNjkxNzUxMTE6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLU1l1L1VIRUpIMTFyVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInBhcFNkYi9ManhHRFpXa2ZDbU5kOW8zbnd4S1lHQXp6eklpcUpPd0lqMVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRDRqUmoyakRnUXpFaTM2MjhyWlFLbU8vSUtOYVpmdDhOUytHdkUza2RVY2k4bDB1RmtYYU93MlJmTmM5OW84UUNCUTJDVnZBMnpaSGZKU0lITnNnRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOWxUbWRwbmF2dWd6U0wzaHhMYngzUW5MNDl2ZS9nSTVNOG00T0RnWEtOd0c1ZnJWRHMrblY5YmkwZnlrOTd0ajExVEZGbFVOak5lM2V5WTNlMm1yQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Nzg0NTU0MDMxOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzE4NTgxMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBiaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGJpLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTkVjMGU3dXFEdDE0eTdvOW92WTQzM0VmQXp6VFgzckRDRVlzYUdMNVE2MD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTI1Mzg0NzM5LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
