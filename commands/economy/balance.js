const walletSchema = require("/home/runner/bot-1/schemas/currency")
const algin  = require("/home/runner/bot-1/functions")
const { MessageEmbed } = require('discord.js');
module.exports = {
  commands: ['balance', 'inventory', "wallet"],
  //expectedArgs: '<num1> <num2>',
 // permissionError: 'You need admin permissions to run this command',
 // minArgs: 2,
 // maxArgs: ,
  callback: async (message, arguments, text) =>{
   if(msg.guild.id == "888405450616352809" && msg.author.id !== "834431912537489409"){
return 
   }
   const msg = message; 
   let member =  msg.mentions.members.first() 
   if(!member)member = msg.member;   const member_id = member.user.id


  
   const users_wallet = await  walletSchema.findOne({
     userId: member_id
    })
   if(!users_wallet){
     const embed = new MessageEmbed()  
      .setTitle("يعم دا كحيان معندهوش قرش")
      .setColor("#BCC0C0")
    return msg.reply(embed)
   } else{
     let gold = users_wallet.wallet.gold
    if(typeof gold == "undefined" ){
      gold = 0 
    }
     let silver = users_wallet.wallet.silver
    if(typeof silver == "undefined"){
     silver = 0
    } 
    let bronze = users_wallet.wallet.bronze
    if(typeof bronze == "undefined"){
      bronze = 0 
    }
const numGold = gold.toString().split("").length
const goldarray = [] 
const goldnumber = (33 - (7 + numGold)) / 2
for (let i = 0; i < goldnumber; i++) {
  goldarray.push("ㅤ")
}
const golds = goldarray.join("")
const numsilver = silver. toString().split("").length
;const silverarray = [] 
const silverumber = (33 - (7 + numsilver)) / 2
for (let i = 0; i < silverumber; i++) {
  silverarray.push("ㅤ")
}
const silvers = silverarray.join("") 
const spaces = {
gold: golds , 
silver: silvers, 
bronze:golds
} 
const money = `الذهب: ${gold} <:gold:910989323300642847>${spaces.gold}` + `
` + `الفضة: ${silver} <:silver:910989895701520385>${spaces.silver}` + `
` + `البرونز: ${bronze} <:bronze:910997405040771202>${spaces.bronze}`
const embed = new MessageEmbed()
    .setTitle(algin.center(
`${member.user.username} محفظة`)) 
    .setAuthor(member.user.username, "https://cdn.discordapp.com/avatars/"+member.user.id+"/"+member.user.avatar+".png")
   .setDescription(money)
return msg.reply(embed)
 //  msg.reply(users_wallet.toString())
  }
  },
  }