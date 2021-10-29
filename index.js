const fontnoSchema = require("./schemas/fontno")
const fontSchema = require("./schemas/font")
const walletSchema = 
require("./schemas/currency")
const mySecret = process.env['token']
const DB_URI = process.env['DB_URI']

const Discord = require('discord.js') 
const discord = require('discord.js');
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js');
 require('discord-buttons')(client);
const { MessageMenu,         
MessageMenuOption } = require("discord-buttons") ;
const { MessageButton, MessageActionRow } = require('discord-buttons');
const disbut = require("discord-buttons");
const Canvas = require('canvas')
const { createCanvas, loadImage, registerFont} = require('canvas')
const { MessageAttachment } = require('discord.js')
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const path = require('path')
const { Canvaso} = require("canvas-constructor/cairo");
const opentype = require('opentype.js');
const { load } = require('opentype.js')
const mongoose = require("mongoose")
const request = require("request");
const cache = "875359972010102855" 
let tlrole = "875362978185244692"
let tsrole = "875362481579630642"
let clrole = "875362597329842226"	 
			
const chaosavatar = ("https://cdn.discordapp.com/avatars/834431912537489409/c2dc807238fc19b25c461cf796dcff82.png?size=1024") ; 
 const ttseavatar = 'https://cdn.discordapp.com/avatars/875897206425657376/e741f904e69a1fbbb7f58cbdacaaa5a8.png?size=1024 '; 

var fontno = 0
const normalfontimage = ['https://media.discordapp.net/attachments/880216743518285835/880499222619766854/1629994620210.jpg', 'https://media.discordapp.net/attachments/880216743518285835/880499222955302972/1629995384395.jpg','https://media.discordapp.net/attachments/875361529741066240/884769109320011796/w3kr4m2fi3111.png', 'https://media.discordapp.net/attachments/875361529741066240/884769109030629426/images.png', 'https://media.discordapp.net/attachments/875361529741066240/884769108795744256/images_1.jpeg', 'https://media.discordapp.net/attachments/875361529741066240/884769108611170334/the-test-fun-for-friends-screenshot.png', ] 
const normalfonttitle = ['hayah', 'Elmessiri regular', 'test', 'test2'] 
const normalfonturl = ['https://arbfonts.com//wp-content/fonts/arabic-fonts/new//Hayah.otf', 'https://arbfonts.com//wp-content/fonts/new-arabic-fonts//ElMessiri-Regular.ttf', 'https://bitfly.io/M8EmJB5', 'https://short2.cash/OJbf'] 
mongoose.connect(DB_URI,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		}
	)
	.then(response => console.log('\n\ndb connected successfully...'))
	.catch(err => console.log(err));

client.on("message", msg => { 
  if(msg.content === "-fakejoin") {
console.log("emited")
client.emit('guildMemberAdd', msg.author); 
  }
})/*
//db.get("key").then(value => {});
client.on('message', async (msg) => {
    
const member = msg.author
    const channelId = "875359972010102855"
    if (!channelId) {
      return
    }

    const channel = client.channels.cache.get(channelId)
    if (!channel) {
      return
    }

    const canvas = Canvas.createCanvas(1000, 500)
    const ctx = canvas.getContext('2d')

    const background = await Canvas.loadImage("https://media.discordapp.net/attachments/878746087513542687/879686572507803689/216332.jpg")
    
    let x = 0
    let y = 0
    ctx.drawImage(background, x, y)

    const pfp = await Canvas.loadImage(
      member.user.displayAvatarURL({
        format: 'png',
      })
    )
    x = canvas.width / 2 - pfp.width / 2
    y = 25
    ctx.drawImage(pfp, x, y)

    ctx.fillStyle = '#ffffff'
    ctx.font = '40px sans-serif'
    let text = `Welcome ${member.user.tag}`
    x = "300"     
		ctx.font = '30px sans-serif'
    text = `Member #${guild.memberCount}`
x = "400"
	

    const attachment = new MessageAttachment(canvas.toBuffer())
    channel.send('', attachment)
  })
*/
client.on("message", msg => { 
  if(msg.content === "-commandlist") {
		const commandlistembed = new MessageEmbed()
		.setAuthor("TTSE", ttseavatar)
		.setColor("#3498DB")
   .addFields(
{ name: '-fontlist',
 value: "قائمة من الخطوط يمكنك تنزيلها" },
{ name: '-findfont:',
 value: "ابحث عن خط بواسطة اسمه" },
{ name: '-findfontnum:',
 value: 'ابحث عن خط بواسطة رقمه'},
{ name: '-commandlist',
 value: 'الأمر الذي تستخدمه حاليا'},
{ name: '-deleterole',
 value: 'لحذف رول اخذته بالخطأ'},		 
{ name: '-changelog',
 value: 'قائمة بتحديثات البوت' },
	)
		msg.channel.send({
embed:commandlistembed
})
  }
if(msg.content === "-changelog"){
const log1 =  new MessageEmbed()
	.setAuthor("chaos", chaosavatar)
  .setColor("#3498DB")
	.setTitle("التحديث:1,0")
	.addFields(
{ name: '.fontlist',
 value: "تمت اضافة الأمر" },
{ name: '.findfont:',
 value: 'تمت اضافة الأمر' }, 
{ name: '.findfont:',
 value: 'تمت اضافة الأمر'},

)
	const logs = [log1]
	msg.reply(log1)
}
if(msg.content === "-sendtemp"){
	
		let selfroleembed = new MessageEmbed() 
	.setTitle("اختار مهنتك من هنا ") 
	.setDescription("ملاحظة: يمكنك اختيار خيارين بنفس الوقت")
	.setAuthor("chaos", chaosavatar)
  .setColor("#9B59B6")		
const selfroletl = new MessageMenuOption()
.setLabel("مترجم")
.setDescription("اختر هذا الخيار اذا كنت مترجم")
.setEmoji('🈴')
.setValue('selfroletl')

    const selfrolets = new MessageMenuOption()
    .setLabel("محرر")
    .setDescription("اختر هذا الخيار اذا كنت محرر")
    .setEmoji('📝')
    .setValue('selfrolets')
   const selfrolecl = new MessageMenuOption()
    .setLabel("مبيض")
    .setDescription("اختر هذا الخيار اذا كنت مبيض")
    .setEmoji('🖌️')
    .setValue('selfrolecl')

const selfrolemenu = new MessageMenu()
    .setID('selfrolemenu')
    .setPlaceholder('اختر مهنتك')
    .addOption(selfroletl)
    .addOption(selfrolets)
	  .addOption(selfrolecl)
	  .setMinValues(1)
		.setMaxValues(3) 
	
    const selfrolerow = new disbut.MessageActionRow()
    .addComponent(selfrolemenu)


  msg.channel.send({
		  embed: selfroleembed, 
			component: selfrolerow })
}
})
client.on('message', async msg => { if (msg.content === '-fontlist'){
	let namelesembed = new MessageEmbed() 
	.setTitle("اختار نوع الخط من فضلك") 
	.setAuthor("chaos", chaosavatar)
					
const mainfontlistnormal = new MessageMenuOption()
    .setLabel("عادية")
    .setDescription("الخطوط العادية")
    .setEmoji('😁')
    .setValue('mainfontlistnormal')

    const mainfontlistrage = new MessageMenuOption()
    .setLabel("غضب")
    .setDescription("خطوط الغضب")
    .setEmoji('😠')
    .setValue('mainfontlistrage')

const mainfontlisttheart = new MessageMenuOption()
    .setLabel("التهديد")
    .setDescription("قائمة بخطوط التهديد")
    .setEmoji('😈')
.setValue('mainfontlisttheart')

    const Menu = new MessageMenu()
    .setID('mainfontlistselect')
    .setPlaceholder('اختر نوع الخط')
    .addOption(mainfontlistnormal)
    .addOption(mainfontlistrage)
    .addOption(mainfontlisttheart)

    const Row1 = new disbut.MessageActionRow()
    .addComponent(Menu)


  msg.channel.send({
		  embed: namelesembed, 
			component: Row1 })//.then(async msg => {
    //     let col = msg.createMenuCollector((b) => b, { time: 5000 })

    //     col.on('collect', (b) => {
    //         console.log(b.id)
    //         b.reply.defer()
    //     })
    
    //     col.on('end', (b) => {
    //         console.log('end')
    //     })
    
 }   // }}) 
})  

client.on('clickMenu', async menu => {

if(menu.values[0] == 'mainfontlistnormal') { 
	let nrsem0 = new MessageEmbed()
.setTitle('hayah')
.setImage("https://media.discordapp.net/attachments/880216743518285835/880499222619766854/1629994620210.jpg")
.setFooter( "هذا الخط رقم" + fontno )
	.setAuthor("chaos", chaosavatar)

	 let next = new MessageButton()
  .setStyle('green')
  .setLabel('التالي') 
  .setID('next')  
let back = new MessageButton()
  .setStyle('red')
  .setLabel('السابق') 
  .setID('back') 
	.setDisabled(true)
let nextbackrow = new disbut.MessageActionRow()
	.addComponent(back)
  .addComponent(next)
	
menu.reply.defer() 
menu.channel.send({ 
	content: " ", 
	embed: nrsem0, 
  component: nextbackrow })


 

if(menu.values[0] == 'mainfontlistrage') {
menu.reply.defer()
menu.channel.send("مش عامل حاجة لسا", true)}


        if(menu.values[0] == 'mainfontlisttheart') {
menu.reply.defer()
menu.channel.send("مش عامل حاجة")} 
        //if(menu.values[0] == 'reload') {
            //menu.message.update("No more choices come later, all sold", null)
       //}
	// ) 
  

  		
 //, 1000 * 10);
	 //else if (button.id == "click_to_function_in_row_1_2") {
		//button.defer();
		//button.message.channel.send('On Row 1 first Button click');
	//} else if (button.id == //"click_to_function_in_row_2_
	}});
client.on("clickButton", async (btn) => {
if(btn.id === "nextnr" ){
const color = btn.message.embeds[0].color;
var property_id = "" 
if(color === 3447003) property_id = "normal"
console.log(color)
console.log(property_id)
	}
})
client.on('message', msg => {
	if (msg.content === 'السلام عليكم') {
msg.reply('و عليكم السلام')} 
});

client.on('message', msg => {
	if (msg.content === 'فيلكس') {
		msg.reply('أعظم قائد و تبا للحاقدين')}});

client.on('ready', () => {
	
	console.log('im fucking ready');
});
client.on("message", async (msg) => {
	
if(msg.content.includes("-findfont:")) {
const demand = msg.content.slice(10, msg.content.length) 
	const output =
normalfonttitle.filter(function(value){ 
		return value === demand   
	}) 
	
  const tempfontno = normalfonttitle.indexOf(demand)
			let normalfonturls = normalfonturl[tempfontno]
		let normalfonttitles = normalfonttitle[tempfontno]  
		let normalfontimages = normalfontimage[tempfontno] 				
		
		console.log(output)
		if (tempfontno > 0 - 1){msg.reply({
			embed: {
    color: 3447003,
    author: {
      name: 'chaos',
      icon_url: chaosavatar}, 
    title: normalfonttitles,
    url: normalfonturls ,
    image: {
			url: normalfontimages
		}, 
  
	footer: {
		text: "هذا الخط رقم" + tempfontno
	}
    
		} })
	
									} 	
}}) 


client.on("message", msg => { 
  if(msg.content.includes("-findfontnum:")) {
		const demand = msg.content.slice(13, msg.content.length) 
    demandnum = Number(demand)
		
let normalfonturls = normalfonturl[demandnum]
		let normalfonttitles = normalfonttitle[demandnum]  
		let normalfontimages = normalfontimage[demandnum] 
		msg.reply({
			embed: {
    color: 3447003,
    author: {
      name: 'chaos',
      icon_url: chaosavatar}, 
    title: normalfonttitles,
    url: normalfonturls ,
    image: {
			url: normalfontimages
		}, 
  
	footer: {
		text: "هذا الخط رقم" + demandnum
	}
    
		} })
  }
})

client.on('clickMenu', async menu => {
    const Member = await menu.message.guild.members.fetch({ user: menu.clicker.id, force: true})
if(menu.values[1] == 'selfroletl' && menu.values[2] == 'selfrolets' && menu.values[0] == 'selfrolecl'  ) { 
let tlrole = "875362978185244692"
let tsrole =  "875362481579630642"
let clrole =  "875362597329842226"
          	await
Member.roles.add(tsrole) 
	          await Member.roles.add(clrole)
            await Member.roles.add(tlrole) 
            return menu.reply.send({
			content:"تمت إضافة كل الرولات الثلاثة لك", ephemeral: true}) 
	} else { 	
if(menu.values[2] == 'selfroletl' && menu.values[1] == 'selfrolets' && menu.values[0] == 'selfrolecl'  ) { 
let tlrole = "875362978185244692"
let tsrole =  "875362481579630642"
let clrole =  "875362597329842226"
          	await
Member.roles.add(tsrole) 
	          await Member.roles.add(clrole)
            await Member.roles.add(tlrole) 
            return menu.reply.send({
			content:"تمت إضافة كل الرولات الثلاثة لك", ephemeral: true}) 
	} else { 	
if(menu.values[2] == 'selfroletl' && menu.values[0] == 'selfrolets' && menu.values[1] == 'selfrolecl'  ) { 
let tlrole = "875362978185244692"
let tsrole =  "875362481579630642"
let clrole =  "875362597329842226"
          	await
Member.roles.add(tsrole) 
	          await Member.roles.add(clrole)
            await Member.roles.add(tlrole) 
            return menu.reply.send({
			content:"تمت إضافة كل الرولات الثلاثة لك", ephemeral: true}) 
	} else { 	
if(menu.values[1] == 'selfroletl' && menu.values[0] == 'selfrolets' && menu.values[2] == 'selfrolecl'  ) { 
let tlrole = "875362978185244692"
let tsrole =  "875362481579630642"
let clrole =  "875362597329842226"
          	await
Member.roles.add(tsrole) 
	          await Member.roles.add(clrole)
            await Member.roles.add(tlrole) 
            return menu.reply.send({
			content:"تمت إضافة كل الرولات الثلاثة لك", ephemeral: true}) 
	} else { 	
if(menu.values[0] == 'selfroletl' && menu.values[2] == 'selfrolets' && menu.values[1] == 'selfrolecl'  ) { 
let tlrole = "875362978185244692"
let tsrole =  "875362481579630642"
let clrole =  "875362597329842226"
          	await
Member.roles.add(tsrole) 
	          await Member.roles.add(clrole)
            await Member.roles.add(tlrole) 
            return menu.reply.send({
			content:"تمت إضافة كل الرولات الثلاثة لك", ephemeral: true}) 
	} else { 	
if(menu.values[0] == 'selfroletl' && menu.values[1] == 'selfrolets' && menu.values[2] == 'selfrolecl'  ) { 
let tlrole = "875362978185244692"
let tsrole =  "875362481579630642"
let clrole =  "875362597329842226"
          	await
Member.roles.add(tsrole) 
	          await Member.roles.add(clrole)
            await Member.roles.add(tlrole) 
            return menu.reply.send({
			content:"تمت إضافة كل الرولات الثلاثة لك", ephemeral: true}) 
	} else { 
if(menu.values[0] == 'selfrolets' && menu.values[1] == 'selfroletl') {
		
		console.log("worked")
let tlrole = "875362978185244692"
let tsrole =  "875362481579630642"


          	await Member.roles.add(tsrole)
            await Member.roles.add(tlrole)

            return menu.reply.send({
			content:"أضيف لك كل من رول المحرر و المترجم بنجاح", ephemeral: true}) 
							} else {
if(menu.values[0] == 'selfrolecl' && menu.values[1] == 'selfrolets') {
		
		console.log("worked")
let tsrole =  "875362481579630642"
let clrole =  "875362597329842226"


          	await Member.roles.add(tsrole)
            await Member.roles.add(clrole)

            return menu.reply.send({
			content:"أضيف لك كل من رول المبيض و المحرر بنجاح", ephemeral: true})
				} 						
else {
if(menu.values[0] == 'selfrolecl' && menu.values[1] == 'selfroletl') {
		
		console.log("worked")
let tlrole = "875362978185244692"
let clrole =  "875362597329842226"


          	await Member.roles.add(clrole)
            await Member.roles.add(tlrole)

            return menu.reply.send({
			content:"أضيف لك كل من رول المبيض و المترجم بنجاح", ephemeral: true})
} else{
if(menu.values[0] == 'selfrolets' && menu.values[1] == 'selfrolecl') {
		
		console.log("worked")
let tsrole =  "875362481579630642"
let clrole =  "875362597329842226"


          	await Member.roles.add(clrole)
            await Member.roles.add(tsrole)

            return menu.reply.send({
			content: "أضيف لك كل من رول المحرر و المبيض بنجاح", ephemeral: true})
	} else{
if(menu.values[0] == 'selfroletl' && menu.values[1] == 'selfrolecl') {
		
		console.log("worked1")
let tlrole = "875362978185244692"
let clrole =  "875362597329842226"


          	await Member.roles.add(clrole)
            await Member.roles.add(tlrole)

            return menu.reply.send({
			content:"لقد اضيف لك كل من رول المترجم و المبيض", ephemeral: true})
} else{
if(menu.values[0] == 'selfroletl' && menu.values[1] == 'selfrolets'){console.log("worked1")
let tlrole = "875362978185244692"
let tsrole = "875362481579630642"
 

          	await Member.roles.add(tsrole)
            await Member.roles.add(tlrole)

            return menu.reply.send({
			content:"لقد اضيف لك كل من رول المترجم و المحرر", ephemeral: true})
																																		} else{
if(menu.values[0] == 'selfrolecl') {
			let clrole = "875362597329842226"
        if(!Member.roles.cache.has(clrole)) {
            await Member.roles.add(clrole)
            return menu.reply.send("أضيف رول المبيض لك بنجاح", true)
        } else {
					return menu.reply.send("لديك هذا الرول بالفعل", true) 
					
	
}} else	{	
if(menu.values[0] == 'selfroletl') {
			let tlrole = "875362978185244692"
        if(!Member.roles.cache.has(tlrole)) {
            await Member.roles.add(tlrole)
            return menu.reply.send("اضيف رول المترجم لك بنجاح", true)
        } else{
					return menu.reply.send("لديك هذا الرول بالفعل", true)
				} 
	} else{
if(menu.values[0] == 'selfrolets') {
		
		

if(!Member.roles.cache.has(tsrole)) { 
            await Member.roles.add(tsrole)
            return menu.reply.send("اضيف رول المحرر لك بنجاح", true)
        } else{
	console.log("failed to add role'its already there'")
					return menu.reply.send("لديك هذا الرول بالفعل", true)
				} 
							}						
							}}}}}}}}}}}}}}}) 
client.on("message", msg => { 
  if(msg.content === "-deleterole") {
    const delroleem = new 
	MessageEmbed()
.setTitle("اختر الرول الذي تريد حذفه")
.setAuthor("chaos", chaosavatar)	
.setColor("#E74C3C")
const selfroledeltl = new MessageMenuOption()
.setLabel("مترجم")
.setDescription("اختر هذا الخيار اذا كنت تريد حذف رول المترجم")
.setEmoji('🈴')
.setValue('selfroledeltl')

    const selfroledelts = new MessageMenuOption()
    .setLabel("محرر")
    .setDescription("اختر هذا الخيار اذا كنت تريد حذف رول المحرر")
    .setEmoji('📝')
    .setValue('selfroledelts')
   const selfroledelcl = new MessageMenuOption()
    .setLabel("مبيض")
    .setDescription("اختر هذا الخيار اذا كنت تريد حذف رول المبيض")    .setEmoji('🖌️')
    .setValue('selfroledelcl')

const delrolemenu = new MessageMenu()
    .setID('selfrolemenu')
    .setPlaceholder('اختر الرول')
    .addOption(selfroledeltl)
    .addOption(selfroledelts)
	  .addOption(selfroledelcl)
	  .setMinValues(1)
		.setMaxValues(1)
		const delrolerow = new disbut.MessageActionRow()
    .addComponent(delrolemenu)

		msg.channel.send({
			embed: delroleem, 
			component: delrolemenu
			
			})
  }
})
/*
client.on('clickMenu', async menu =>  {
const Member = await menu.guild.members.fetch({ user: menu.clicker.id, force: true})
if(menu.values[0] == 'selfroledelts') {
        if(Member.roles.cache.has(tsrole)) { 
				console.log(Member.roles.cache)
            await Member.roles.remove(tdrole)
            return menu.reply.send("ازيل الرول بنجاح", true)
				} else{
					return menu.reply.send("ليس لديك هذا الرول لتزيله", true)
				}} 
        if(Member.roles.cache.has(tlrole)) {
            await Member.roles.remove(tlrole)
            return menu.reply.send("ازيل الرول بنجاح", true)
				} else{
					return menu.reply.send("ليس لديك هذا الرول لتزيله", true)
				} 
        
if(menu.values[0] == 'selfroledelcl') {
        if(Member.roles.cache.has(clrole)) {
            await Member.roles.remove(clrole)
            return menu.reply.send("ازيل الرول بنجاح", true)
				} else{
					return menu.reply.send("ليس لديك هذا الرول لتزيله", true)
				}} 
}) 


   



    //var role = message.guild.roles.find("name", "role name");
    //setInterval(() => {
       // role.edit({
           // color: colors[random]
      //  })
   // }, 5000);

//});
/*
function logEvery2Seconds(i) {
    setTimeout(() => {
			var colors = ['#8585ff','#fff681','#a073fd','#fd73b9']; 

        console.log('Infinite Loop Test n:', i);
        logEvery2Seconds(++i);
    }, 2000)
}

logEvery2Seconds(0);

let i = 0;
setInterval(() => {
	var colors = ['#8585ff','#fff681','#a073fd','#fd73b9']; 

    console.log('Infinite Loop Test interval n:', i++);
}, 2000)

	var colors = ['#8585ff','#fff681','#a073fd','#fd73b9']; 
*/
const og = null ; 
client.on("message", async (message ) => {
	if(message.content.includes("-kick")){
    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('KICK_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.kick()
        message.reply("تم طرد المستخدم بنجاح", true )
      } else {
        message.reply("و هتطرد مين يروح امك؟ ", true )
      }
    } else {
      message.reply("ليست لديك الصلاحيات لإستخدام هذا الأمر", true 
  )
    }
 		
}
})
client.on("message", async (message)=> {
	if(message.content.includes("-ban")){
    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if(
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('BAN_MEMBERS')
    ) { 
      const target = mentions.users.first()
      if (target) {
		const targetMember = message.guild.members.cache.get(target.id)
		if(targetMember.hasPermission("ADMINISTRATOR ")){
			message.reply({
				embed: {
		color: 15158332,
    author: {
      name: 'T.T.S.E BOT',
      icon_url: ttseavatar}, 
    title: "متقدرش تسجن السجان يحب",
    				
				}
			})
		}else{
      
        targetMember.ban()
        message.reply("تم حظر المستخدم بنجاح", true )
      } 
 		
}else{
        message.reply({
	content:"و هتطرد مين يروح امك؟", 
  ephemeral: true })
      }
    }else{
      message.reply("ليست لديك الصلاحيات لإستخدام هذا الأمر", true)
				} 
		}})
client.on("message", async (meassage) => { 
let msg = meassage
let meassagee = meassage  
if(meassage.content.includes("-unmute")) {
	const { member, mentions } = meassage

    const tag = `<@${member.id}>`

        
			
      const target = mentions.users.first()
      if (target) {
        const targetMember = meassage.guild.members.cache.get(target.id)
	if(targetMember.roles.cache.has("875389195319926854")){
const { member, mentions } = msg

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = meassage.guild.members.cache.get(target.id)      
					targetMember.roles.remove("875389195319926854")
        meassage.reply("تم فك إسكات المستخدم بنجاح", true ) 
      } else {
				return meassage.reply({
	content:"هتفكه عن مين يسطا", 
  ephemeral: true })
      }
    } else {
      meassage.reply("ليست لديك الصلاحيات لإستخدام هذا الأمر", true 
  )
					}
	}

} else{
msg.reply("هذا المستخدم غير مسكت")
}
}
 
})
/*client.on("ready", () => {
client.channels.cache.get("900114652183281684").send({
embed: {
	color: 2067276, 
	title: "شغال تمام تمام", 
	image: {
		 url: "https://media.discordapp.net/attachments/878746087513542687/878746848335118396/IMG_20210822_000608.jpg"
	}, 

}
}).then((sentMessage) => {
	rolecolors = ["#E74C3C", "#E67E22", " #FFFF00", "#2ECC71", "#3498DB", "#206694", "#9B59B6"]
	colors = ["#1ABC9C", "#11806A", "#2ECC71", "#E74C3C", "#992D22", "#95A5A6", "#BCC0C0", "#FFFF00"] 
	setInterval(function() {
var rolecolor =  rolecolors[Math.floor(Math.random()* rolecolors.length)];
var color = colors[Math.floor(Math.random()* colors.length)];
		const embed = new MessageEmbed()
.setTitle("شغال تمام تمام")
.setImage("https://media.discordapp.net/attachments/878746087513542687/878746848335118396/IMG_20210822_000608.jpg")
.setColor(color)
		sentMessage.edit({embed: embed })
client.channels.cache.get("900114652183281684").guild.roles.cache.get("889090917812817921").edit({
color: rolecolor
})							}, 1000)

})
})*/
let event = 0 
client.on("message", async (msg) => {
	if(msg.content.includes("-addfont")) {
if(msg.attachments.size > 0 ) {
if(msg.attachments.array()[0].name.endsWith(".otf") || msg.attachments.array()[0].name.endsWith(".ttf") ){
const fontinDb = await fontSchema.findOne({
	
})
var del = "" 
async function imageCreat (fontType){
setTimeout( async function (){
await registerFont(`./${msg.attachments.array()[0].name}`, { family: name})										 
const canvas = createCanvas(1280, 720)
const ctx = canvas.getContext('2d')

// Write "Awesome!"
const background = await Canvas.loadImage("https://media.discordapp.net/attachments/886995572278571071/902296868028055592/2077.jpg")
ctx.drawImage(background, 0, 0)
var size = "75px" 
ctx.font = `${size} "${name}"`
if(ctx.measureText("خطوط التحرير ").width > 430){
	console.log("too big")
  console.log(ctx.measureText("خطوط التحرير ").width )
size = "50px"  
} 
var y = 475
var x = 200 
ctx.font = `${size} "${name}"`
if(ctx.measureText(name).width > 500){
	console.log("too big name")
	console.log (ctx.measureText(name).width)
	y = 400
}
ctx.rotate(0), 												 ctx.fillStyle = "#026C93";
ctx.fillText(name, y, x)	
ctx.fillText("خطوط التحرير",500, 460)  
		 
let atta = new Discord.MessageAttachment(canvas.toBuffer(), `${name} image.png`)
client.channels.cache.get("886995572278571071").send(atta).then( async sentmessage => {const url = 
sentmessage.attachments.array()[0].url 																																																														
const embed = new MessageEmbed()
.setAuthor("T.T.S.E BOT", ttseavatar)
.setColor("#F1C40F")
.setTitle("النتيجة المتوقعة:")
.setDescription(name)
.setImage(url)
.setURL(msg.attachments.array()[0].url)
.setFooter(`ستتم اضافة الخط في خمس ثواني
اذا وجدت اي اخطاء اضغط🔴`)																																							
msg.channel.send(embed).then( async sentMessage => {
	sentMessage.react("🔴")
	setTimeout(function(){
		const embed = new MessageEmbed()
.setAuthor("T.T.S.E BOT", ttseavatar)
.setColor("#F1C40F")
.setTitle("النتيجة المتوقعة:")
.setDescription(name)
.setImage(url)
.setURL(msg.attachments.array()[0].url)
.setFooter(`ستتم اضافة الخط في اربع ثواني
اذا وجدت اي اخطاء اضغط🔴`)
		sentMessage.edit(embed)
	}, 1000)
	setTimeout(function(){
		const embed = new MessageEmbed()
.setAuthor("T.T.S.E BOT", ttseavatar)
.setColor("#F1C40F")
.setTitle("النتيجة المتوقعة:")
.setDescription(name)
.setImage(url)
.setURL(msg.attachments.array()[0].url)
.setFooter(`ستتم اضافة الخط في ثلاث ثواني
اذا وجدت اي اخطاء اضغط🔴`)
		sentMessage.edit(embed)
	}, 2000)
	setTimeout(function(){
		const embed = new MessageEmbed()
.setAuthor("T.T.S.E BOT", ttseavatar)
.setColor("#F1C40F")
.setTitle("النتيجة المتوقعة:")
.setDescription(name)
.setImage(url)
.setURL(msg.attachments.array()[0].url)
.setFooter(`ستتم اضافة الخط في  ثانيتين
اذا وجدت اي اخطاء اضغط🔴`)
		sentMessage.edit(embed)
	}, 3000)
	setTimeout(function(){
		const embed = new MessageEmbed()
.setAuthor("T.T.S.E BOT", ttseavatar)
.setColor("#F1C40F")
.setTitle("النتيجة المتوقعة:")
.setDescription(name)
.setImage(url)
.setURL(msg.attachments.array()[0].url)
.setFooter(`ستتم اضافة الخط في ثانية
اذا وجدت اي اخطاء اضغط🔴`)
		sentMessage.edit(embed)
	}, 4000)
	setTimeout( async function(){
let userWallet = await walletSchema.findOne({
	userId: msg.author.id
});
if(!userWallet){
const newWallet = {
		userId: msg.author.id, 
  wallet: {

		silver: 10,
  	total: 10*100
  }
}
await walletSchema.create(newWallet)
}
if(userWallet){
	await walletSchema.updateOne({
		userId: msg.author.id
	}, {
$inc: {
	"wallet.silver":10, 
	"wallet.total":10*100
}
})
}

		const embed = new MessageEmbed()
.setAuthor("T.T.S.E BOT", ttseavatar)
.setColor("#F1C40F")
.setTitle("تمت اضافة الخط")
.setDescription("منحت 10 قطع فضية كمكافأت لمساهمتك في السيرفر")
		sentMessage.edit(embed)

		setTimeout( async function(){
			sentMessage.delete()
		if(msg.deletable){
msg.delete()
}
		}, 4000)
	}, 5000)
	client.on ("messageReactionAdd",  async (reaction, user) => {
 if (reaction.partial) {
  try {
    await reaction.fetch();} 
  catch (error) {
    console.error(error)
     return}}
   if (!user.bot) {
if (reaction.emoji.name === "🔴" && reaction.message.id === sentMessage.id ) { 
 if(user.id === msg.author.id){
	 setTimeout(function(){
		 if(sentMessage.deletable){
			 sentMessage.delete()
		 }
		 
		 if(msg.deletable){
			 msg.delete()
		 }
	 }, 500)
	 const canvas = createCanvas(1280, 720)
const ctx = canvas.getContext('2d')

// Write "Awesome!"
const background = await Canvas.loadImage("https://media.discordapp.net/attachments/886995572278571071/902296868028055592/2077.jpg")
ctx.drawImage(background, 0, 0)
var size = "75px" 
ctx.font = `${size} "${name}"`
if(ctx.measureText("font test").width > 430){
	console.log("too big")
  console.log(ctx.measureText("font test ").width )
size = "50px"  
} 
if(ctx.measureText("font test").width < 350 ){
	console.log("too small")
  console.log(ctx.measureText("font test ").width )
size = "75px"  
} 
var y = 475
var x = 200 
ctx.font = `${size} "${name}"`
if(ctx.measureText(name).width > 500){
	if(ctx.measureText(name).width > 650){
	console.log("too too big name")
	console.log (ctx.measureText(name).width)
	y = 250
}}
ctx.rotate(0), 												 ctx.fillStyle = "#026C93";
ctx.fillText(name, y, x)	
ctx.fillText("font test", 500, 460)  
		 
let atta = new Discord.MessageAttachment(canvas.toBuffer(), `${name} image.png`)

client.channels.cache.get("886995572278571071").send(atta).then(message => {
const url = 
message.attachments.array()[0].url
const embed = new MessageEmbed()
	.setTitle("يؤسفنا سماع مواجهتك لخطأ")
	.setDescription("هل حل هذا المشكلة؟")
	.setImage(url)
 .setColor("#34495E")
const btn1 = new MessageButton()
	.setLabel("نعم")
  .setStyle("green")
  .setID("pYes")
const btn2 = new MessageButton()
	.setLabel("لا")
  .setStyle("red")
  .setID("pNo")																																					
sentMessage.channel.send({
	content: "", 
  buttons: [btn1, btn2], 
	embed: embed
}).then(sentmsg =>{
		client.on("clickButton", async (btn) =>{
		if(btn.id === "pYes"){
let userWallet = await walletSchema.findOne({
	userId: msg.author.id
});
if(!userWallet){
const newWallet = {
		userId: msg.author.id, 
  wallet: {

		silver: 10,
  	total: 10*100
  }
}
await walletSchema.create(newWallet)
}
if(userWallet){
	await walletSchema.updateOne({
		userId: msg.author.id
	}, {
$inc: {
	"wallet.silver":10, 
	"wallet.total":10*100
}
})
}

		const embed = new MessageEmbed()
.setAuthor("T.T.S.E BOT", ttseavatar)
.setColor("#F1C40F")
.setTitle("تمت اضافة الخط")
.setDescription("منحت 10 قطع فضية كمكافأت لمساهمتك في السيرفر")
		sentmsg.edit({
			embed: embed, 
			buttons: null
		})
	setTimeout(function(){
			sentmsg.delete()
		}, 3000)
	 // btn.reply.defer()
}else { if (btn.id === "pNo"){
			client.channels.cache.get("")

}
	}
})})
})
}else{
	 sentMessage.reply({
 content: "انت لست من استدعى هذا الأمر " + user
	 })
}
        
}  }
}) 
		
  
 
})
setTimeout(function(){fs.unlinkSync(`./${org}`)}, 500) 
								})																															}, 500);
}//image cre

const org = msg.attachments.array()[0].name 
const name = org.slice(0, org.length - 4)
console.log(og)

let fs = require(`fs`);
function download(url){
   request.get(url)
        .on('error', console.error)		.pipe(
fs.createWriteStream(msg.attachments.array()[0].name));
}
download(msg.attachments.array()[0].url)
const opt1 = new MessageMenuOption()
	.setLabel("خط عادي")
	.setDescription(`اختر هذا الخيار اذا كان الخط من النوع المستخدم في الفقاعات العادية`)
  .setEmoji(`😁`)
  .setValue(`adOptNormal`)
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const opt2 = new MessageMenuOption()
	.setLabel("خط غضب")
	.setDescription(`اختر هذا الخيار اذا كان الخط من النوع المستخدم في فقاعات الغضب`)
  .setEmoji(`😠`)
  .setValue(`adOptAnger`)
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	const opt3 = new MessageMenuOption()
	.setLabel("خط تهديد")
	.setDescription(`اختر هذا الخيار اذا كان الخط من النوع المستخدم في فقاعات التهديد`)
  .setEmoji(`😈`)
  .setValue(`adOptThreat`)
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const opt4 = new MessageMenuOption()
	.setLabel("خط مربع")
	.setDescription(`اختر هذا الخيار اذا كان الخط من النوع المستخدم في الفقاعات المربعة`)
  .setEmoji(`🔳`)
  .setValue(`adOptSquare`)
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const opt5 = new MessageMenuOption()
	.setLabel("خط هجين")
	.setDescription(`اختر هذا الخيار اذا كان الخط ينتمي لأكثر من فئة في نفس الوقت`)
  .setEmoji(`🐸`)
  .setValue(`adOptMixed`)
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const opt6 = new MessageMenuOption()
	.setLabel("خط غير مصنف")
	.setDescription(`اختر هذا الخيار اذا كان الخط لا يقع تحت اي فئة معينة`)
  .setEmoji(`🤷🏻‍♂️`)
  .setValue(`adOptUndefined`)
	const menu = new MessageMenu()
	.setPlaceholder("اختر نوع الخط")
	.setID("addMenu")
  .addOptions([opt1, opt2, opt3, opt4, opt5, opt6])
const embed = new MessageEmbed()
	.setTitle("اختر نوع الخط")
	.setColor("RANDOM")
	msg.channel.send({
embed: embed, 
component: menu
})
 client.on("clickMenu", async (menu) => {
async function addfont(){
imageCreat()
			}
const value = menu.values[0] 
const op = [
"adOptNormal","adOptAnger", 
"adOptThreat", "adOptSquare", 
"adOptMixed", "adOptUndefined"]
//NORMAL #########################
if(value === op[0]) {
	var fontType = "i" 
	imageCreat(["Normal"])
setTimeout(function(){
menu.message.delete()
}, 860)
	
} 
else{
//ANGER #########################
if(value === op[1]) {
	
} 
else{
//THREAT #########################
if(value === op[2]) {
	
}
else{
//SQUARE #########################
if(value === op[3]) {
	
}
else{
// MIXED #########################
if(value === op[4]) {
	
}
else{
//UNDEFINED ######################
if(value === op[5]) {
	
}
else{
	
}}}}}}
})

}
else{
if(msg.attachments.array()[0].name.endsWith(".png") || msg.attachments.array()[0].name.endsWith(".jpg") ){
	let embed = new MessageEmbed()
	.setTitle(`لا يمكنك إضافة الصور ايها الغبي!`)
.setImage("https://media.discordapp.net/attachments/875361529741066240/901945840451592242/0.mp4 ")
.setColor("#E74C3C")
msg.reply(embed)
}
else{
	const embed = new MessageEmbed()
	.setTitle(`الملفات المدعومة هي
.ttf
.otf`)
 .setDescription(`و لا يمكنك إضافة سواهم`)
 .setColor("#992D22")
	
msg.reply(embed)
}}
}else{ msg.channel.send("و هتضيف ايه ان شاء الله؟ ") }
}})

client.on('guildMemberAdd', async member => {
	console.log("a member joined ")
    const wecomechannel = client.channels.cache.get('875359972010102855')
      canvas.context.font = '42px sans-serif',
    canvas.context.textAlign = 'center';
    canvas.context.fillText(member.user.tag.toUpperCase(), 512, 410)
    canvas.context.font = '32px sans serif'
    canvas.context.fillText(`You are the ${member.guild.memberCount}th`, 512, 455)
    canvas.context.beginPath()
    canvas.context.arc(512, 166, 119, 0, Math.PI * 2, true)
    canvas.context.closePath()
    canvas.context.clip()
    await Canvas.loadImage(member.user.displayAvatarURL({format: 'png', size: 1024}))
    .then(img => {
        canvas.context.drawImage(img, 393, 47, 238, 238);
    })
    let atta = new Discord.MessageAttachment(canvas.create.toBuffer(), `welcome-${member.id}.png`)
    try {
        welcomechannel.send(`مرحبا بك في نقابة تتسي`, atta)
    } catch (error) {
        console.log(error)
    }
})
client.on('ready',async () => {	

//console.log('<img src="' + canvas.toDataURL() + '" />')	
											 
  client.user.setActivity('كايوس عظيم', 'كايوس عظيم') 
});
client.on("message", async (msg) => {
	if(msg.content === "-sendver"   ){
const embed = new MessageEmbed()
		.setTitle("اضغط موافق للموافقة على القوانين ")
		.setImage("https://images-ext-1.discordapp.net/external/W0Dhz0caODqcWWug0f8Uu73HB2nq1cTUsLPzLCxOifU/https/media.discordapp.net/attachments/875361529741066240/896457236375818240/1633802426059.png")
const btn = new MessageButton()
  .setStyle('green')
  .setLabel('موافق') 
  .setID('agree')
msg.channel.send({
embed: embed, 
buttons: [btn] 
})
}
})
client.on("clickButton", async (btn) => {
	if(btn.id === "agree"){
const Member = await btn.message.guild.members.fetch({ user: btn.clicker.id, force: true}) 
Member.roles.add("896060656242008136")
Member.roles.remove("896060542765125662")
const embed = new MessageEmbed()
		.setTitle("اضغط موافق للموافقة على القوانين ")
		.setImage("https://images-ext-1.discordapp.net/external/W0Dhz0caODqcWWug0f8Uu73HB2nq1cTUsLPzLCxOifU/https/media.discordapp.net/attachments/875361529741066240/896457236375818240/1633802426059.png")
		.setColor("RANDOM")
const btno = new MessageButton()
  .setStyle('green')
  .setLabel('موافق') 
  .setID('agree')
btn.message.edit({
embed: embed, 
buttons: [btno]
})
btn.reply.send({
	content:  ` active و اضيف مكانه رول  sus ازيل منك رول `, 
ephemeral: true 
	
})
}
})
client.login("ODc1ODk3MjA2NDI1NjU3Mzc2.YRcM1w.BWYrq9lMWqxxDC2J22SiTD2pQRw").then(function(){
	console.log("hi")
})
