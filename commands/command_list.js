const ttseavatar = 'https://cdn.discordapp.com/avatars/875897206425657376/e741f904e69a1fbbb7f58cbdacaaa5a8.png?size=1024 '; 

const { MessageEmbed } = require('discord.js');
const { MessageMenu,         
MessageMenuOption } = require("discord-buttons") ;
module.exports = {
  commands: ['commandlist', 'قائمة الأوامر', "لائحة الأوامر", "help", "command list", "commandslist"],
  //expectedArgs: '<num1> <num2>',
  permissionError: 'You need admin permissions to run this command',
  //minArgs: 0,
  //maxArgs: 0,
  callback: (message, arguments, text) => {  
const msg = message ;
if(msg.guild.id !== "888405450616352809"){
const commandlistembed = new MessageEmbed()
.setAuthor("TTSE", ttseavatar)
.setColor("#3498DB")
.addFields(
{ name: '-fontlist',
 value: "قائمة من الخطوط يمكنك تنزيلها" }, 
{ name: '-commandlist',
 value: 'الأمر الذي تستخدمه حاليا'},
{ name: '-lookup',
 value: "ابحث عن كلمة إنجليزية في القاموس"},
{
name: "-mute", 
value: `أمر ميوت المعتاد بس بخاصية  timout `
}, 
{
name: "-balance", 
value: "تحقق من رصيدك"
}, 
{ name: '-cut',
 value: 'قص الصور الطويلة'},		 
{ name: '-delete',
value: 'حذف عدد معين من الرسائل' },
{ name: '-addfont',
 value: 'اضف الخطوط و اكسب العملات' },
//{ name: '-mute',
// value: "الإسكات عضو" },
//{ name: '-kick',
 //value: "لطرد عضو" },
//{ name: '-unmute',
 //value: 'لفك اسكات عضو' },
//{ name: '-ban',
//value: "لحظر عضو من الدخول للسيرفر"}
)
const opt1 = new MessageMenuOption()
.setLabel("عربي")
.setValue("arabicCommands")
const opt2 = new MessageMenuOption()
.setLabel("English")
.setValue("englishCommands")

const menu0 = new MessageMenu()
.setID('commandlistMenu')
.setPlaceholder("English")
  
.addOption(opt1)
.addOption(opt2)
msg.channel.send({
embed:commandlistembed, 
//component: menu0
})
  }},
  requiredRoles: [],
        }