const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js');
 require('discord-buttons')(client);
const { MessageMenu,              
MessageMenuOption } = require("discord-buttons") ;
const { MessageButton, MessageActionRow } = require('discord-buttons');
const disbut = require("discord-buttons");
const chaosavatar = ("https://cdn.discordapp.com/avatars/834431912537489409/c2dc807238fc19b25c461cf796dcff82.png?size=1024") ; 
 const ttseavatar = 'https://media.discordapp.net/attachments/875361574095835156/879376206074617866/1629719709822.png'; 

var fontno = 0
const normalfontimage = ['https://media.discordapp.net/attachments/880216743518285835/880499222619766854/1629994620210.jpg', 'https://media.discordapp.net/attachments/880216743518285835/880499222955302972/1629995384395.jpg','https://media.discordapp.net/attachments/875361529741066240/884769109320011796/w3kr4m2fi3111.png', 'https://media.discordapp.net/attachments/875361529741066240/884769109030629426/images.png', 'https://media.discordapp.net/attachments/875361529741066240/884769108795744256/images_1.jpeg', 'https://media.discordapp.net/attachments/875361529741066240/884769108611170334/the-test-fun-for-friends-screenshot.png', ] 
const normalfonttitle = ['hayah', 'Elmessiri regular', 'test', 'test2'] 
const normalfonturl = ['https://arbfonts.com//wp-content/fonts/arabic-fonts/new//Hayah.otf', 'https://arbfonts.com//wp-content/fonts/new-arabic-fonts//ElMessiri-Regular.ttf', 'https://bitfly.io/M8EmJB5', 'https://short2.cash/OJbf'] 
client.on('message', msg => { 
  if(msg.content === "test") {
const testembed = new MessageEmbed() 
    
      .setTitle("تجريب")
      .setDescription("حاجة بدون فايدة هدفها الوحيد التجريب")
      .setFooter("اعتبر اني كتبت الكلام الي فوق كمان مرة");

  let button = new disbut.MessageButton()
  .setLabel("خطوط صراخ")
  .setID("rage-font")
  .setStyle("blurple");
    
    let button2 = new disbut.MessageButton()
  .setLabel("خطوط عادية")
  .setID("normal-font")
  .setStyle("blurple");

 
 msg.reply('انا بوت كلب', {
   buttons: [button, button2], 
   embed: testembed
   
 })}});
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
	
let nextbackrow = new disbut.MessageActionRow()
	.addComponent(back)
  .addComponent(next)
	
menu.reply.defer() 
menu.channel.send({ 
	content: "hhh ", 
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
      }})  //}
	 
   
client.on('clickButton', async (button) => {if (button.id == "back") {
		button.reply.defer()
		fontno - 1
    let normalfonturls = normalfonturl[fontno]
		let normalfonttitles = normalfonttitle[fontno]  
		let normalfontimages = normalfontimage[fontno] 
		button.reply.send({ 
		 embed: {
    color: 3447003,
			image: { 
			 
			url: normalfontimages
			}, 
    author: {
      name: "chaos",
      icon_url: chaosavatar },
    title: normalfonttitles,
    url: normalfonturls }, 

  
				 });
	} }) 

  

  		
 //, 1000 * 10);
	 //else if (button.id == "click_to_function_in_row_1_2") {
		//button.defer();
		//button.message.channel.send('On Row 1 first Button click');
	//} else if (button.id == //"click_to_function_in_row_2_2") {
	//	button.reply.send('On Row 2 first Button click');
client.on('clickButton', async (button) => {if (button.id == "next") {
		button.reply.defer()
		fontno =+ 1
    let normalfonturls = normalfonturl[fontno]
		let normalfonttitles = normalfonttitle[fontno]  
		let normalfontimages = normalfontimage[fontno] 
		button.reply.send({ 
		 embed: {
    color: 3447003,
			image: { 
				width: 1, 
				height: 7, 
				url: normalfontimages
			}, 
    author: {
      name: "chaos",
      icon_url: chaosavatar },
    title: normalfonttitles,
    url: normalfonturls }, 

    timestamp: new Date(),
				 });
	} })  


//تكلم هنا بس
//هتعمل ايرور كدا
client.on('message', msg => {
	if (msg.content === '-commandlist') {
		const commandlist = new MessageEmbed()
			.setColor('#1ABC9C')
			.setTitle('لائحة الأوامر')
.setAuthor('ttse',ttseavatar)
 .addFields(
		{ name: '-fontlist', value: 'يعرض مجموعة من الخطوط' },
		{ name: '-commandlist', value: '\u200B يعرض الاوامر المتاحة' });
		msg.reply(commandlist);
}});
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

client.login('ODc1ODk3MjA2NDI1NjU3Mzc2.YRcM1w.P9r1lXC1U3dj-C6VvDNSTYjbuNw');