const Discord = require('discord.js') 
const discord = require('discord.js');
const ms = require("ms")
const ms2 = require('pretty-ms');
const run = require("./timer_2")
const client = new Discord.Client()
const {MessageEmbed} = require("discord.js")
const events = require("events")
const event = require("./timer_Hub") 
let busy = 4 
client.on("message ", async msg => {
console.log("msg")
})
console.log(client.events)
event.on("timer1",data => {
if(busy > 1){
busy -= 1
function align(text){
const array = [] 
const number = (33 - text.length) / 4
for (let i = 0; i < number; i++) {
  array.push("ㅤ")
}
const spaces = array.join("")
const res = `ㅤ${spaces}${text}${spaces}`
return res
}
const type = data.type
const type1 = data.type1
const time = data.time
var timeLeft = data.time 
const embed = new MessageEmbed()
.setTitle(align(`الوقت المتبقي ل${data.member.username}`))
.setDescription(align(`الوقت المتبقي:${ms2(timeLeft, {colonNotation: true})}`) )
. setColor("#03f2ff")
. setFooter(`تم ${type} بواسطة ${data.user.username}`, "https://cdn.discordapp.com/avatars/"+data.user.id+"/" + data.user.avatar+".png") 
client.channels.cache.get("879662097636687902").send(embed).then( sentmsg => {
const loop = setInterval(function(){

 /*if(timeLeft % 2000 > 0 ){
setTimeout(function (){
timeLeft -= 1000
const embed1 = new MessageEmbed()
.setTitle(align("المؤقت"))
.setDescription(align(`الوقت المتبقي:${ms2(timeLeft, {colonNotation: true})}`) )
. setColor("	#1ABC9C")
. setFooter(`بطلب من ${msg.author. username}`, "https://cdn.discordapp.com/avatars/"+msg.author.id+"/" + msg.author.avatar+".png") 
return sentmsg.edit(embed1)	
}, 1000)
}*/
timeLeft -= 5000

const embed1 = new MessageEmbed()
.setTitle(align(`${data.member.username} الوقت المتبقي ل`))
.setDescription(align(`الوقت المتبقي:${ms2(timeLeft, {colonNotation: true})}`) )
. setColor("#03f2ff")
. setFooter(`تم ${type} بواسطة ${data.user.username}`, "https://cdn.discordapp.com/avatars/"+data.user.id+"/" + data.user.avatar+".png") 

sentmsg.edit(embed1)
}, 5000)
setTimeout(function(){
sentmsg.channel.send(`تم فك ${type1} عن ${data.member}`).then(sentMsg => {
setTimeout(function(){
sentmsg.delete()
sentMsg.delete()
}, 4000)
})
clearInterval(loop)
}, time + 1000 )
})  
}else{
	
}

}) 
client.login("ODkxMzA5OTYxNjMwNjA5NDA5.YU8fFg.s4SiaM6PtaNwvpJqCiFldUdd1J8")
