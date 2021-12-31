const Discord = require("discord.js")
const {MessageEmbed } = require("discord.js")
const userSchema =  require("../schemas/users")
module.exports = { 
  commands: ['shrink', 'addition'],
  /*expectedArgs: '<num1> <num2>',
  permissionError: 'You need admin permissions to run this command',
  minArgs: 2,
  maxArgs: 2,*/
  callback: async (message, arguments, text) => {
const https = require('https');
const msg = message 
     const args = msg.content.split(" ")
if(args[1]){
  if(args[1].startsWith("https://")){
const user = await userSchema.findOne({id: msg.author.id})
if(!user){
const embed = new MessageEmbed()
.setTitle("يبدو انك لم تسجل الدخول في موقع الاختصار")  
.setDescription("لتسجيل الدخول اتبع الخطوات الاتية")
.setImage("https://media.discordapp.net/attachments/900114652183281684/923674480138678343/112.jpg")
const next = new MessageButton()
.setLabel("الخطوة التالية")
msg.author.send("")
}
const base = args[1]
   const url = `https://rapid-cut.com/api?api=${token}&url=${base}`
   let result = null 
    await https.get(url,(res) => {
    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
    });

    res.on("end", () => {
        try {
            result = JSON.parse(body);

	const embed = new MessageEmbed()
	.setColor("#03ffdd")
	.setTitle(result.shortenedUrl)
	msg.reply(embed)

	
        } catch (error) {
            console.error(error.message);
        };
    });

}).on("error", (error) => {
    console.error(error.message);
});
  }
}

  },
  permissions: 'ADMINISTRATOR',
  requiredRoles: [],
}