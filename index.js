
const mySecret1 = process.env['DB_URI']

const mySecret = process.env['token']
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
const { createCanvas, loadImage } = require('canvas')
const { MessageAttachment } = require('discord.js')
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const path = require('path') 
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
    
    // }}) 
}})  


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
client.on('clickButton', async (button) => { 
    if(button.id === "next" ) {
			button.reply.defer()
if(fontno > normalfonttitle.length){
	
	
  
		fontno = 0  
		let normalfonturls = normalfonturl[fontno]
		let normalfonttitles = normalfonttitle[fontno]  
		let normalfontimages = normalfontimage[fontno] 
	
let next = new MessageButton()
  .setStyle('green')
  .setLabel('التالي') 
  .setID('next')  
let back = new MessageButton()
  .setStyle('red')
  .setLabel('السابق') 
  .setID('back') 
	.setDisabled()
let nextbackrow = new disbut.MessageActionRow()
	.addComponent(back)
  .addComponent(next)
	
button.message.edit({ 
	component: nextbackrow, 
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
	text: "هذا الخط رقم" + fontno
}
}
 })} 
					 else {	
	 
    fontno ++
    let normalfonturls = normalfonturl[fontno]
		let normalfonttitles = normalfonttitle[fontno]  
		let normalfontimages = normalfontimage[fontno]
						 
let next = new MessageButton()
  .setStyle('green')
  .setLabel('التالي') 
  .setID('next')  
let back = new MessageButton()
  .setStyle('red')
  .setLabel('السابق') 
  .setID('back') 
let nextbackrow = new disbut.MessageActionRow()
	.addComponent(back)
  .addComponent(next)

button.message.edit({
	component: nextbackrow, 
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
		text: "هذا الخط رقم" + fontno
	}
    
  }
})
} 	 
console.log(fontno)
	 
 
}}) 
client.on("clickButton", async (button) => {
	if(button.id === "back" ){
if(fontno === 0 ){ 
	let normalfonturls = normalfonturl[fontno]
		let normalfonttitles = normalfonttitle[fontno]  
		let normalfontimages = normalfontimage[fontno]
						 
let next = new MessageButton()
  .setStyle('green')
  .setLabel('التالي') 
  .setID('next')  
let back = new MessageButton()
  .setStyle('red')
  .setLabel('السابق') 
  .setID('back') 
	.setDisabled()

let nextbackrow = new disbut.MessageActionRow()
	.addComponent(back)
  .addComponent(next)

button.message.edit({
	component: nextbackrow, 
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
		text: "هذا الخط رقم" + fontno
	}
    
  }
})
	
} else{
	fontno --
	let normalfonturls = normalfonturl[fontno]
		let normalfonttitles = normalfonttitle[fontno]  
		let normalfontimages = normalfontimage[fontno] 					 
let next = new MessageButton()
  .setStyle('green')
  .setLabel('التالي') 
  .setID('next')  
let back = new MessageButton()
  .setStyle('red')
  .setLabel('السابق') 
  .setID('back')

let nextbackrow = new disbut.MessageActionRow()
	.addComponent(back)
  .addComponent(next)

button.message.edit({
	component: nextbackrow, 
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
		text: "هذا الخط رقم" + fontno
	}
    
  }
})
	console.log("back to " + fontno)
}
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
	client.on("message", msg => { 
  if(msg.content.startsWith("-addfont")) {
    const demand =
msg.content.slice(8, msg.content.length) 
console.log(demand)
normalfonttitle.push(demand)
msg.reply(demand + "تمت اضافة اسم الخط هذا بنجاح")	
console.log(normalfonttitle.lenght)
  }
}) 
	
client.on("message", msg => { 
  if(msg.content === "ping") {
    msg.reply(normalfonttitle)
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
        } 
	} else{
if(menu.values[0] == 'selfrolets') {
		
		console.log("worked")
let tlrole = "875362978185244692"
let tsrole =  "875362481579630642"


          	await Member.roles.add(tsrole)
          
            return menu.reply.send({
			content:"أضيف لك رول المحرر بنجاح", ephemeral: true})
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
})/*
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
	
client.login(mySecret);