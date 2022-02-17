
const fontSchema = require("./schemas/font")
const walletSchema =
  require("./schemas/currency")
const mySecret = process.env['token']
const DB_URI = process.env['DB_URI']
const fs = require("fs")
const url = require("./functions/urls.js")
const Discord = require('discord.js')
const discord = require('discord.js');
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js');
require('discord-buttons')(client);
const { MessageMenu,
  MessageMenuOption } = require("discord-buttons");
const { MessageButton, MessageActionRow } = require('discord-buttons');
const disbut = require("discord-buttons");
const Canvas = require('canvas')
const { createCanvas, loadImage, registerFont } = require('canvas')
const { MessageAttachment } = require('discord.js')
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const path = require('path')
const mongoose = require("mongoose")
const request = require("request");
const translate = require('@iamtraction/google-translate');
const ms = require("ms")
const ms2 = require('pretty-ms');
const wiki = require('wikipedia');
let cache = "875359972010102855"
let tlrole = "875362978185244692"
let tsrole = "875362481579630642"
let clrole = "875362597329842226"
module.exports = client;
const chaosavatar = ("https://cdn.discordapp.com/avatars/834431912537489409/c2dc807238fc19b25c461cf796dcff82.png?size=1024");
const ttseavatar = 'https://cdn.discordapp.com/avatars/875897206425657376/e741f904e69a1fbbb7f58cbdacaaa5a8.png?size=1024 ';

var fontno = 0
mongoose.connect(DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
  .then(response => {
console.log('\n\ndb connected successfully...')
      
 fontSchema.find().then(res => {
console.log(res)
})

                    } )
   
  .catch(err => console.log(err));

client.on("message", msg => {
  if (msg.content === "-test") {
    const btn = new MessageButton()
      .setLabel("test")
      .setStyle("green")
      .setID("btn000")
    msg.reply({
      content: "ㅤ",
      buttons: btn
    })
    client.on("clickButton", async btn => {
      if (btn.id === "btn000"
      ) {

        //btn.reply.send("hi")
        btn.reply.send("hi", true)
      }
    })
  }
  if (msg.content === "-fakejoin") {
    console.log("emited")
    client.emit('guildMemberAdd', client.user);
  }
})
const axios = require('axios');
client.on("message", async msg => {
  /*if(msg.content === "-changelog"){
  const log1 =  new MessageEmbed()
    .setAuthor("chaos", chaosavatar)
    .setColor("#3498DB")
    .setTitle("0,1")
    .addFields(
  { name: '.fontlist',
   value: "تمت اضافة الأمر" },
  { name: '.findfont:',
   value: 'تمت اضافة الأمر' }, 
  { name: '.findfont:',
   value: 'تمت اضافة الأمر'},
  )
  const log2 =  new MessageEmbed()
    .setAuthor("chaos", chaosavatar)
    .setColor("#3498DB")
    .setTitle("0,5")
    .addFields(
  { name: '.lookup',
   value: "تمت اضافة الأمر" },
  { name: '.addfont',
   value: 'تمت اضافة الأمر' }, 
  { name: '.fontlist',
   value: 'تم تحسين الأمر بجعله مرتبط بـ addfont'},
  )
  const btn = new MessageButton()
    .setLabel("التالي")
    .setStyle("green")
    .setID("btn00")
  const btn1 = new MessageButton()
    .setLabel("السابق")
    .setID("btn01")
    .setStyle("red")
    .setDisabled()
  
    const logs = [log1, log2]
  const titles = ["0,1", "0,5"] 
    msg.reply({
  embed: log1, 
  buttons: [btn, btn1]
  })
  client.on("clickButton", async (btn) => {
    if(btn.id === "btn00"   ){
  	
  const num0 = titles. indexOf(btn.message.embeds[0].title) + 1
  let btn0 = new MessageButton()
    .setLabel("التالي")
    .setStyle("green")
    .setID("btn00")
    .setDisabled()
  let btn00 = new MessageButton()
    .setLabel("السابق")
    .setID("btn01")
    .setStyle("red")
  
      btn.message.edit({
  embed: logs[num0], 
  buttons: [btn0, btn00]
  })
    }else{
    if(btn.id === "btn01"   ){
      const num0 = titles. indexOf(btn.message.embeds[0].title) - 1
  let btn0 = new MessageButton()
    .setLabel("التالي")
    .setStyle("green")
    .setID("btn00")
  let btn00 = new MessageButton()
    .setLabel("السابق")
    .setID("btn01")
    .setStyle("red")
    .setDisabled()
  
      btn.message.edit({
  embed: logs[num0], 
  buttons: [btn0, btn00]
  })
    }
    } 
  })}*/
  if (msg.content === "-sendtemp") {

    let selfroleembed = new MessageEmbed()
      .setTitle("اختار مهنتك من هنا ")
      .setDescription("ملاحظة: يمكنك اختيار خيارين بنفس الوقت")
      .setAuthor("chaos", chaosavatar)
      .setColor("#9B59B6")
    const selfroletl = new MessageMenuOption()
      .setLabel("مترجم")
      .setDescription("اختر هذا الخيار اذا كنت مترجم")
      .setEmoji("🈴")
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
      component: selfrolerow
    })
  }
  else {
    if (msg.content.startsWith("-lookup")) {
      const args = msg.content.split(" ");
      let result = null
      if (args.length === 1) {
        const embed = new MessageEmbed()
          .setTitle("و هتبحث عن ايه يا ذكي انت")
          .setColor("#E74C3C")
        return msg.channel.send(embed)
      }
      const https = require('https');
      const word = args[1]
      let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

      await https.get(url, (res) => {
        let body = "";

        res.on("data", (chunk) => {
          body += chunk;
        });

        res.on("end", () => {
          try {
            let json = JSON.parse(body);
            result = json
            const part = json[0].meanings[0].definitions

          } catch (error) {
            console.error(error.message);
          };
        });

      }).on("error", (error) => {
        console.error(error.message);
      });
      setTimeout(async function() {
        if (result) {
          if (result.title) {
            const embed = new MessageEmbed()
              .setTitle("لم نجد ما تبحث عنه... ")
              .setColor("#7F8C8D")
            return msg.reply(embed)
          }
          if (result) {
            const data = result[0]
            const definitionsEn = []
            const definitionsAr = []
            //console.log(data)
            let pron = "النطق: لايوجد"
            if (data.phonetics.length >= 1) {
              pron = `النطق: ${data.phonetics[0].text}`
            }
            const page = await wiki.page(data.word);
            const temp = await page.intro()
            const infoEn = temp.split(".")[0]
            const infoAr = await translate(infoEn, { to: "ar" })
            const wikiinfoAr = {
              name: "ويكيبيديا:",
              value: `${infoAr.text} [مشاهدة المزيد...](${page.fullurl})`
            }
            const wikiinfoEn = {
              name: "Wikipedia:",
              value: `${infoEn} [see more...](${page.fullurl})`
            }
            images = []
            const temp0 = await page.images()
            //mconst p = temp.split(".")[0]
            temp0.forEach(async image => {
              if (!image.title.endsWith(".svg")) {
                images.push(image.url)
              }
            })
            data.meanings.forEach(async def => {
              const tempen = []
              const tempar = []
              if (def.partOfSpeech && def.definitions.length >= 1) {
                //&&&&&&&&&#@#@#@#@###############
                const definitionEn = def.definitions[0].definition
                //&&&&&&&&&#@#@#@#@###############	
                const partOfSpeechEn = def.partOfSpeech
                //&&&&&&&&&#@#@#@#@###############
                const definitionAr = await translate(definitionEn, { to: "ar" })
                //&&&&&&&&&#@#@#@#@###############
                const partOfSpeechAr = await translate(partOfSpeechEn, { to: "ar" })
                const tempDefen = {
                  name: `${partOfSpeechEn}:`,
                  value: definitionEn
                }
                const tempDefAr = {
                  name: `${partOfSpeechAr.text}:`,
                  value: definitionAr.text
                }
                tempen.push(tempDefen)
                tempar.push(tempDefAr)
              }
              if (def.definitions[0].example) {
                const exampleEn = def.definitions[0].example
                const exampleAr = await translate(exampleEn, { to: "ar" })
                const tempDefen = {
                  name: `example:`,
                  value: exampleEn
                }
                const tempDefAr = {
                  name: `مثال:`,
                  value: exampleAr.text
                }
                tempen.push(tempDefen)
                tempar.push(tempDefAr)

              }
              if (def.definitions[0].synonyms.length > 1) {
                const synonymsEn = def.definitions[0].synonyms
                const synonymsAr = await translate(synonymsEn, { to: "ar" })
                const tempDefen = {
                  name: `synonyms:`,
                  value: synonymsEn
                }
                const tempDefAr = {
                  name: `مرادفات:`,
                  value: synonymsAr.text
                }
                tempen.push(tempDefen)
                tempar.push(tempDefAr)

              }
              setTimeout(function() {
                definitionsEn.push(tempen)
                definitionsAr.push(tempar)
              }, 1000)


            })

            let audio = "undefined"
            if (data.phonetics.length >= 1) {
              if (data.phonetics[0].audio) {
                audio = data.phonetics[0].audio
                if (!data.phonetics[0].audio.startsWith("http")) {
                  audio = `https:${audio}`
                }
              }

            }


            setTimeout(async function() {
              let image0 = `https://source.unsplash.com/1600x900/?${data.word}`
              if (images.length >= 1) {
                image0 = images[0]
              }
              let b = {
                name: "‎",
                value: "‎"
              }
              let n = b
              let p = b
              if (definitionsAr.length >= 2) {
                b = definitionsAr[1]
              }
              if (definitionsAr.length >= 3) {
                n = definitionsAr[2]
              } else {
              }
              if (definitionsAr.length >= 4) {
                p = definitionsAr[3]
              } else {
                p = wikiinfoAr
              }

              const embed = new MessageEmbed()
                .setTitle(data.word)
                .addFields(
                  {
                    name: pron,
                    value: "[ ](https://)"
                  },
                  definitionsAr[0],
                  b,
                  n,
                  p

                )
                .setColor("#FFFF00")
                .setImage(image0)

              const btn = new MessageButton()
                .setStyle("green")
                .setID("099")
                .setLabel("استمع للنطق")
              msg.channel.send({
                embed: embed,
                buttons: [btn]
              })
            }, 3500)
            client.on("clickButton", async btn => {
              if (btn.id === "099") {
                var voiceChannel =
                  msg.member.voice.channel;


                if (!voiceChannel) {
                  const embed = new MessageEmbed()
                    .setTitle("انت لست داخل روم صوتي")
                    .setColor("#E74C3C")

                  return btn.reply.send({
                    embed: embed,
                    ephemeral: true
                  })
                }

                if (audio === "undefined") {
                  const embed = new MessageEmbed()
                    .setTitle("لا يوجد نطق لهذه الكلمة للأسف")
                  return btn.reply.send(embed, true)
                }
                btn.reply.defer()
                voiceChannel.join().then(async connection => {
                  function download(url) {
                    request.get(url)
                      .on('error', console.error).pipe(
                        fs.createWriteStream(`${data.word}.mp3`));
                  }
                  await download(audio)
                  setTimeout(function() {
                    const dispatcher =
                      connection.play(`./${data.word}.mp3`)
                    setTimeout(function() {
                      console.log("trying ")
                      fs.unlinkSync(`./${data.word}.mp3`)
                    }, 100000)
                    client.on("voiceStateUpdate", async (oldState, newState) => {
                      if (newState.channelID === null) {
                        if (!oldState.member.user.bot) {
                          if (newState.id === btn.clicker.id) {

                            voiceChannel.leave()
                          }
                        }



                      }
                    })
                  }, 500)
                })
              }
              if (result.length > 5) {

              }//if 5 or more res
            })
            //if result 
          }
        } else {

        }

      }, 300)//lookup command
    }
  }
})
client.on('message', async msg => {
  if (msg.content === '-fontlist') {

    const opt1 = new MessageMenuOption()
      .setLabel("خط عادي")
      .setDescription(`اختر هذا الخيار اذا كان الخط من النوع المستخدم في الفقاعات العادية`)
      .setEmoji(`😁`)
      .setValue(`Normal`)

    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const opt7 = new MessageMenuOption()
      .setLabel("خط تفكير")
      .setDescription(`يعرض الخطرط من فئة التفكير`)
      .setEmoji(`💭`)
      .setValue(`Think`)
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const opt2 = new MessageMenuOption()
      .setLabel("خط غضب")
      .setDescription(`يعرض خطوط مستخدمة في فئة الغضب`)
      .setEmoji(`😠`)
      .setValue(`Anger`)
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const opt3 = new MessageMenuOption()
      .setLabel("خط تهديد")
      .setDescription(`يعرض خطوط مستخدمة في فئة التهديد`)
      .setEmoji(`😈`)
      .setValue(`Threat`)
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const opt4 = new MessageMenuOption()
      .setLabel("خط مربع")
      .setDescription(`يعرض الخطوط المستخدة في فئة  المربع`)
      .setEmoji(`🔳`)
      .setValue(`Square`)
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const opt5 = new MessageMenuOption()
      .setLabel("كل الخطوط")
      .setDescription(`يعرض جميع الخطوط المتوافرة`)
      .setEmoji(`🤩`)
      .setValue(`all`)
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const opt6 = new MessageMenuOption()
      .setLabel("خط غير مصنف")
      .setDescription(`يعرض خطوط لم  يتم تحديد فئتها`)
      .setEmoji(`🤷🏻‍♂️`)
      .setValue(`Undefined`)
    const menu = new MessageMenu()
      .setPlaceholder("اختر نوع الخط")
      .setID("listMenu")
      .addOptions([opt1, opt7, opt2, opt3, opt4, opt5, opt6])
      .setMaxValues(1)
      .setMinValues(1)
    const namelesembed = new MessageEmbed()
      .setColor("#71368A")
      .setTitle("اختر نوع الخط المطلوب")
      .setFooter("ملحوظة: يمكنك اختيار اكثر من خط")

    msg.channel.send({
      embed: namelesembed,
      component: menu
    })
client.on("clickMenu", async menu => {
  if (menu.id === "listMenu") {
    menu.reply.defer()
    function shuffle(array) {
      let currentIndex = array.length, randomIndex;

      // While there remain elements to shuffle...
      while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
    }
    const results = []
    const embeds = []
    await menu.values.forEach(async opt => {

      console.log(opt)

      let result = await fontSchema.find({
        type: [opt]
      })
      if (opt === "all" || opt === "adOptMixed") {
        result = await fontSchema.find()
      }
      results.push(result)
      result.forEach(res => {
        const embed = new MessageEmbed()
          .setTitle(res.title)
          .setImage(res.imageUrl)
          .setURL(res.dowlandUrl)
          .setFooter(res.author.name)
          .setColor("#F1C40F")
        embeds.push(embed)
      })
    })
    setTimeout(function() {
      if (embeds.length == 0) {
        console.log("nono")
        const embed = new MessageEmbed()
          .setTitle("عذرا لا يوجد لدينا خطوط من هذه الفئة للآن")
          .setColor("#979C9F")
          .setFooter("ولكن لا تحزن! يمكنك الذهاب لغرف اضافة الخطوط و تجد الخط المناسب لك و تساعد الاخرين في طريقك كذلك بدون ذكر النقاط التي ستكسبها ")
        menu.channel.send(embed)
        return
      } else {

      }
      shuffle(embeds)
      const title = []
      embeds.forEach(embed => {
        title.push(embed.title)
      })
      if (embeds.length == 1) {
        const next = new MessageButton()
          .setLabel("التالي")
          .setID("fnext")
          .setStyle("green")
          .setDisabled()

        const back = new MessageButton()
          .setLabel("السابق")
          .setID("fback")
          .setStyle("red")
          .setDisabled()
        menu.channel.send({
          embed: embeds[0],
          buttons: [next, back]
        })
        return
      }
const indentfy = Math.floor(Math.random() * 999*9).toString() + Math.floor(Math.random() * 999*9).toString(); 
      const next = new MessageButton()
        .setLabel("التالي")
        .setID(`fnext${indentfy}`)
        .setStyle("green")

      const back = new MessageButton()
        .setLabel("السابق")
        .setID(`fback${indentfy}`)
        .setStyle("red")
        .setDisabled()
      menu.channel.send({
        embed: embeds[0],
        buttons: [next, back]
      }).then(sentmsg => {
        client.on("clickButton", async (btn) => {
          if (btn.id === `fnext${indentfy}`) {
            const temp = btn.message.embeds[0].title
            const embednum = title.indexOf(temp) + 1
            const currEmbed = embeds[embednum]
            //console.log(temp)
            //console.log (embeds)

            const compare = embednum
            let disable = false
            if (compare === embeds.length - 1) {
              disable = true
              const next = new MessageButton()
                .setLabel("التالي")
                .setID(`fnext${indentfy}`)
                .setStyle("green")
                .setDisabled(disable)
              const back = new MessageButton()
                .setLabel("السابق")
                .setID(`fback${indentfy}`)
                .setStyle("red")

              console.log(disable)
              btn.message.edit({
                embed: currEmbed,
                buttons: [next, back]
              })
              return
            }

            const next = new MessageButton()
              .setLabel("التالي")
              .setID(`fnext${indentfy}`)
              .setStyle("green")
              .setDisabled(disable)
            const back = new MessageButton()
              .setLabel("السابق")
              .setID(`fback${indentfy}`)
              .setStyle("red")

            console.log(disable)
            btn.message.edit({
              embed: currEmbed,
              buttons: [next, back]
            })
          } else {
            if (btn.id === `fback${indentfy}`) {
              const temp = btn.message.embeds[0].title

              const embednum = title.indexOf(temp) - 1
              const currEmbed = embeds[embednum]
              //console.log(temp)
              //console.log (embeds)

              const compare = embednum
              let disable = false
              console.log(compare, embeds.length)
              if (compare === 0) {
                disable = true
                const next = new MessageButton()
                  .setLabel("التالي")
                  .setID(`fnext${indentfy}`)
                  .setStyle("green")
                const back = new MessageButton()
                  .setLabel("السابق")
                  .setID(`fback${indentfy}`)
                  .setStyle("red")
                  .setDisabled(disable)

                console.log(disable)
                btn.message.edit({
                  embed: currEmbed,
                  buttons: [next, back]
                })
                return
              }
              const next = new MessageButton()
                .setLabel("التالي")
                .setID(`fnext${indentfy}`)
                .setStyle("green")
              const back = new MessageButton()
                .setLabel("السابق")
                .setID(`fback${indentfy}`)
                .setStyle("red")
                .setDisabled(disable)

              console.log(disable)
              btn.message.edit({
                embed: currEmbed,
                buttons: [next, back]
              })


            }
          }
        })
      })
    }, 400)
  }
})
  }
})

client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('و عليكم السلام')
  }
});

client.on('message', msg => {
  if (msg.content === 'فيلكس') {
    msg.reply('أعظم قائد و تبا للحاقدين')
  }
});

client.on('ready', async () => {

	/*
 const unzipper = require("unzipper")

  function download(url){
   request.get(url)
        .on('error', console.error)		.pipe(
fs.createWriteStream("bbbbbgdydyd.zip "))};
download("https://cdn.discordapp.com/attachments/900114652183281684/910156431070736414/bbbbbgdydyd.zip ")
	fs.createReadStream('bbbbbgdydyd.zip ')
  .pipe(unzipper.Extract({ path: "bbbbbgdydyd.zip " }));
*/

  console.log('im fucking ready');
});
client.on("message", async (msg) => {

  if (msg.content.includes("-findfont:")) {
    const demand = msg.content.slice(10, msg.content.length)
    const output =
      normalfonttitle.filter(function(value) {
        return value === demand
      })

    const tempfontno = normalfonttitle.indexOf(demand)
    let normalfonturls = normalfonturl[tempfontno]
    let normalfonttitles = normalfonttitle[tempfontno]
    let normalfontimages = normalfontimage[tempfontno]

    console.log(output)
    if (tempfontno > 0 - 1) {
      msg.reply({
        embed: {
          color: 3447003,
          author: {
            name: 'chaos',
            icon_url: chaosavatar
          },
          title: normalfonttitles,
          url: normalfonturls,
          image: {
            url: normalfontimages
          },

          footer: {
            text: "هذا الخط رقم" + tempfontno
          }

        }
      })

    }
  }
})


client.on("message", msg => {
  if (msg.content.includes("-findfontnum:")) {
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
          icon_url: chaosavatar
        },
        title: normalfonttitles,
        url: normalfonturls,
        image: {
          url: normalfontimages
        },

        footer: {
          text: "هذا الخط رقم" + demandnum
        }

      }
    })
  }
})

client.on('clickMenu', async menu => {
  const Member = await menu.message.guild.members.fetch({ user: menu.clicker.id, force: true })
  if (menu.values[1] == 'selfroletl' && menu.values[2] == 'selfrolets' && menu.values[0] == 'selfrolecl') {
    let tlrole = "875362978185244692"
    let tsrole = "875362481579630642"
    let clrole = "875362597329842226"
    await
      Member.roles.add(tsrole)
    await Member.roles.add(clrole)
    await Member.roles.add(tlrole)
    return menu.reply.send({
      content: "تمت إضافة كل الرولات الثلاثة لك", ephemeral: true
    })
  } else {
    if (menu.values[2] == 'selfroletl' && menu.values[1] == 'selfrolets' && menu.values[0] == 'selfrolecl') {
      let tlrole = "875362978185244692"
      let tsrole = "875362481579630642"
      let clrole = "875362597329842226"
      await
        Member.roles.add(tsrole)
      await Member.roles.add(clrole)
      await Member.roles.add(tlrole)
      return menu.reply.send({
        content: "تمت إضافة كل الرولات الثلاثة لك", ephemeral: true
      })
    } else {
      if (menu.values[2] == 'selfroletl' && menu.values[0] == 'selfrolets' && menu.values[1] == 'selfrolecl') {
        let tlrole = "875362978185244692"
        let tsrole = "875362481579630642"
        let clrole = "875362597329842226"
        await
          Member.roles.add(tsrole)
        await Member.roles.add(clrole)
        await Member.roles.add(tlrole)
        return menu.reply.send({
          content: "تمت إضافة كل الرولات الثلاثة لك", ephemeral: true
        })
      } else {
        if (menu.values[1] == 'selfroletl' && menu.values[0] == 'selfrolets' && menu.values[2] == 'selfrolecl') {
          let tlrole = "875362978185244692"
          let tsrole = "875362481579630642"
          let clrole = "875362597329842226"
          await
            Member.roles.add(tsrole)
          await Member.roles.add(clrole)
          await Member.roles.add(tlrole)
          return menu.reply.send({
            content: "تمت إضافة كل الرولات الثلاثة لك", ephemeral: true
          })
        } else {
          if (menu.values[0] == 'selfroletl' && menu.values[2] == 'selfrolets' && menu.values[1] == 'selfrolecl') {
            let tlrole = "875362978185244692"
            let tsrole = "875362481579630642"
            let clrole = "875362597329842226"
            await
              Member.roles.add(tsrole)
            await Member.roles.add(clrole)
            await Member.roles.add(tlrole)
            return menu.reply.send({
              content: "تمت إضافة كل الرولات الثلاثة لك", ephemeral: true
            })
          } else {
            if (menu.values[0] == 'selfroletl' && menu.values[1] == 'selfrolets' && menu.values[2] == 'selfrolecl') {
              let tlrole = "875362978185244692"
              let tsrole = "875362481579630642"
              let clrole = "875362597329842226"
              await
                Member.roles.add(tsrole)
              await Member.roles.add(clrole)
              await Member.roles.add(tlrole)
              return menu.reply.send({
                content: "تمت إضافة كل الرولات الثلاثة لك", ephemeral: true
              })
            } else {
              if (menu.values[0] == 'selfrolets' && menu.values[1] == 'selfroletl') {

                console.log("worked")
                let tlrole = "875362978185244692"
                let tsrole = "875362481579630642"


                await Member.roles.add(tsrole)
                await Member.roles.add(tlrole)

                return menu.reply.send({
                  content: "أضيف لك كل من رول المحرر و المترجم بنجاح", ephemeral: true
                })
              } else {
                if (menu.values[0] == 'selfrolecl' && menu.values[1] == 'selfrolets') {

                  console.log("worked")
                  let tsrole = "875362481579630642"
                  let clrole = "875362597329842226"


                  await Member.roles.add(tsrole)
                  await Member.roles.add(clrole)

                  return menu.reply.send({
                    content: "أضيف لك كل من رول المبيض و المحرر بنجاح", ephemeral: true
                  })
                }
                else {
                  if (menu.values[0] == 'selfrolecl' && menu.values[1] == 'selfroletl') {

                    console.log("worked")
                    let tlrole = "875362978185244692"
                    let clrole = "875362597329842226"


                    await Member.roles.add(clrole)
                    await Member.roles.add(tlrole)

                    return menu.reply.send({
                      content: "أضيف لك كل من رول المبيض و المترجم بنجاح", ephemeral: true
                    })
                  } else {
                    if (menu.values[0] == 'selfrolets' && menu.values[1] == 'selfrolecl') {

                      console.log("worked")
                      let tsrole = "875362481579630642"
                      let clrole = "875362597329842226"


                      await Member.roles.add(clrole)
                      await Member.roles.add(tsrole)

                      return menu.reply.send({
                        content: "أضيف لك كل من رول المحرر و المبيض بنجاح", ephemeral: true
                      })
                    } else {
                      if (menu.values[0] == 'selfroletl' && menu.values[1] == 'selfrolecl') {

                        console.log("worked1")
                        let tlrole = "875362978185244692"
                        let clrole = "875362597329842226"


                        await Member.roles.add(clrole)
                        await Member.roles.add(tlrole)

                        return menu.reply.send({
                          content: "لقد اضيف لك كل من رول المترجم و المبيض", ephemeral: true
                        })
                      } else {
                        if (menu.values[0] == 'selfroletl' && menu.values[1] == 'selfrolets') {
                          console.log("worked1")
                          let tlrole = "875362978185244692"
                          let tsrole = "875362481579630642"


                          await Member.roles.add(tsrole)
                          await Member.roles.add(tlrole)

                          return menu.reply.send({
                            content: "لقد اضيف لك كل من رول المترجم و المحرر", ephemeral: true
                          })
                        } else {
                          if (menu.values[0] == 'selfrolecl') {
                            let clrole = "875362597329842226"
                            if (!Member.roles.cache.has(clrole)) {
                              await Member.roles.add(clrole)
                              return menu.reply.send("أضيف رول المبيض لك بنجاح", true)
                            } else {
                              return menu.reply.send("لديك هذا الرول بالفعل", true)


                            }
                          } else {
                            if (menu.values[0] == 'selfroletl') {
                              let tlrole = "875362978185244692"
                              if (!Member.roles.cache.has(tlrole)) {
                                await Member.roles.add(tlrole)
                                return menu.reply.send("اضيف رول المترجم لك بنجاح", true)
                              } else {
                                return menu.reply.send("لديك هذا الرول بالفعل", true)
                              }
                            } else {
                              if (menu.values[0] == 'selfrolets') {



                                if (!Member.roles.cache.has(tsrole)) {
                                  await Member.roles.add(tsrole)
                                  return menu.reply.send("اضيف رول المحرر لك بنجاح", true)
                                } else {
                                  console.log("failed to add role'its already there'")
                                  return menu.reply.send("لديك هذا الرول بالفعل", true)
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
})
client.on("message", msg => {
  if (msg.content === "-deleterole") {
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
      .setDescription("اختر هذا الخيار اذا كنت تريد حذف رول المبيض").setEmoji('🖌️')
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
const og = null;
client.on("message", async (message) => {
  if (message.content.includes("-kick")) {
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
        message.reply("تم طرد المستخدم بنجاح", true)
      } else {
        message.reply("و هتطرد مين يروح امك؟ ", true)
      }
    } else {
      message.reply("ليست لديك الصلاحيات لإستخدام هذا الأمر", true
      )
    }

  }
})
client.on("message", async (message) => {
  if (message.content.includes("-ban")) {
    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('BAN_MEMBERS')) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        if (targetMember.hasPermission("ADMINISTRATOR ")) {
          message.reply({
            embed: {
              color: 15158332,
              author: {
                name: 'T.T.S.E BOT',
                icon_url: ttseavatar
              },
              title: "متقدرش تسجن السجان يحب",

            }
          })
        } else {

          targetMember.ban()
          message.reply("تم حظر المستخدم بنجاح", true)
        }

      } else {
        message.reply({
          content: "و هتطرد مين يروح امك؟",
          ephemeral: true
        })
      }
    } else {
      message.reply("ليست لديك الصلاحيات لإستخدام هذا الأمر", true)
    }
  }
})
client.on("message", async (meassage) => {
  let msg = meassage
  let meassagee = meassage
  if (meassage.content.includes("-unmute")) {
    const { member, mentions } = meassage

    const tag = `<@${member.id}>`



    const target = mentions.users.first()
    if (target) {
      const targetMember = meassage.guild.members.cache.get(target.id)
      if (targetMember.roles.cache.has("875389195319926854")) {
        const { member, mentions } = msg

        const tag = `<@${member.id}>`

        if (
          member.hasPermission('ADMINISTRATOR') || member.id === "834431912537489409") {
          const target = mentions.users.first()
          if (target) {
            const targetMember = meassage.guild.members.cache.get(target.id)
            targetMember.roles.remove("875389195319926854")
            meassage.reply("تم فك إسكات المستخدم بنجاح", true)
          } else {
            return meassage.reply({
              content: "هتفكه عن مين يسطا",
              ephemeral: true
            })
          }
        } else {
          meassage.reply("ليست لديك الصلاحيات لإستخدام هذا الأمر", true
          )
        }
      }

    } else {
      msg.reply("هذا المستخدم غير مسكت")
    }
  }

})
/*
client.on("ready", () => {
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
  if (msg.content.includes("-addfont")) {
    if (msg.attachments.size > 0) {
      if (msg.attachments.array()[0].name.endsWith(".otf") || msg.attachments.array()[0].name.endsWith(".ttf")) {
        const org = msg.attachments.array()[0].name
        const name = org.slice(0, org.length - 4)
        const fontinDb = await fontSchema.findOne({
          title: name
        })
        if (fontinDb) {
          const embed = new MessageEmbed()
            .setAuthor("T.T.S.E BOT", ttseavatar)
            .setTitle("هذا الخط موجود بالفعل")
            .setImage("https://media.discordapp.net/attachments/900114652183281684/904453133504221184/bugs-bunny-tears.gif.gif")
            .setColor("#7F8C8D")
          msg.reply(embed)
          return
        }
        var del = ""
        async function imageCreat(fontType) {
          setTimeout(async function() {
            await registerFont(`./${msg.attachments.array()[0].name}`, { family: name })
            const canvas = createCanvas(1280, 720)
            const ctx = canvas.getContext('2d')

            // Write "Awesome!"
            const background = await Canvas.loadImage("https://media.discordapp.net/attachments/886995572278571071/902296868028055592/2077.jpg")
            ctx.drawImage(background, 0, 0)
            var size = "75px"
            ctx.font = `${size} "${name}"`
            if (ctx.measureText("خطوط التحرير ").width > 430) {
              console.log("too big")
              console.log(ctx.measureText("خطوط التحرير ").width)
              size = "50px"
            }
            var y = 475
            var x = 200
            ctx.font = `${size} "${name}"`
            if (ctx.measureText(name).width > 500) {
              console.log("too big name")
              console.log(ctx.measureText(name).width)
              y = 400
            }
            ctx.rotate(0), ctx.fillStyle = "#026C93";
            ctx.fillText(name, y, x)
            ctx.fillText("خطوط التحرير", 500, 460)

 let atta = new Discord.MessageAttachment(canvas.toBuffer(), `${name} image.png`)
let atta1 = new Discord.MessageAttachment(msg.attachments.array()[0].url, `${name}file.${msg.attachments.array()[0].name.split(".").pop()}`)
            client.channels.cache.get("886995572278571071").send({files: [atta, atta1]}).then(async sentmessage => {
const url = sentmessage.attachments.array()[0].url 
const embed = new MessageEmbed()
                .setAuthor("T.T.S.E BOT",ttseavatar)
                .setColor("#F1C40F")
                .setTitle("النتيجة المتوقعة:")
                .setDescription(name)
                .setImage(url)
                .setURL(url) 
                .setFooter(`ستتم اضافة الخط في 5 ثواني
اذا وجدت اي اخطاء اضغط🔴`)
              msg.channel.send(embed).then(async sentMessage => {
                sentMessage.react("🔴")
var time = 0
var looping = true 
var intreval = setInterval(async function(){
if(looping){
console.log(time)
if(time == 6  ){
clearInterval(intreval)
looping = false
}
if(time == 5){
function shorten (link){
var promise = new Promise((resolve, reject) => {
var request = require('request');
var headers = {
    'Authorization': 'Bearer 0b66ec1a7d74d6dc8ba30f0c0b8a4f960ef4de71',
    'Content-Type': 'application/json'
};

var dataString = `{"long_url": "${link}"}`

var options = {
    url: 'https://api-ssl.bitly.com/v4/shorten',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
  const temp = JSON.parse(body.toString())
console.log(temp)
  resolve(temp)
    }else{
        if(error){
        reject(error)
        }else{
        const temp = JSON.parse(body.toString())
  resolve(temp) 
        }
    }
        
}

request(options, callback);
})
return promise 
}
const funq = require("./functions/urls.js")
time++
const avatar = "https://cdn.discordapp.com/avatars/" + msg.author.id + "/" + msg.author.avatar + ".png"
const shortUrl = await shorten(sentmessage.attachments.array()[1].url);
console.log(shortUrl)
console.log("aha")
const curNum = 1
await fontSchema.create({
type: fontType,
num: curNum,
title: name,
dowlandUrl: shortUrl.link,
longUrl: sentmessage.attachments.array()[1].url, 
linkId: shortUrl.id,
imageUrl: url,
author: {
 avatar: {
  url: avatar
         },
 id: msg.author.id,
 name: msg.author.username
        },
 reported: false
}).then(res=> {
console.log(res)
})
let userWallet = await walletSchema.findOne({
                    userId: msg.author.id
                  });
                  if (!userWallet) {
                    const newWallet = {
                      userId: msg.author.id,
                      wallet: {

                        silver: 10,
                        total: 10 * 100
                      }
                    }
                    await walletSchema.create(newWallet)
                  }
                  if (userWallet) {
                    await walletSchema.updateOne({
                      userId: msg.author.id
                    }, {
                        $inc: {
                          "wallet.silver": 10,
                          "wallet.total": 10 * 100
                        }
                      })
                  }
                  sentMessage.reactions.removeAll()
const embed = new MessageEmbed()
.setAuthor("T.T.S.E BOT", ttseavatar)
.setColor("#F1C40F")
.setTitle("تمت اضافة الخط")
.setDescription("منحت 10 قطع فضية كمكافأت لمساهمتك في السيرفر")
sentMessage.edit(embed)

                  setTimeout(async function() {
                    sentMessage.delete()
                    if (msg.deletable) {
                      msg.delete()
                    }
                  }, 4000)
}
if(time <= 4) {
time ++
const embed = new MessageEmbed()
.setAuthor("T.T.S.E BOT",ttseavatar)
.setColor("#F1C40F")
.setTitle("النتيجة المتوقعة:")
.setDescription(name)
.setImage(url)
 .setURL(url) 
.setFooter(`ستتم اضافة الخط في ${5 - time} ثواني
اذا وجدت اي اخطاء اضغط🔴`)
sentMessage.edit(embed)
} 
}}, 1000)
                
                client.on("messageReactionAdd", async (reaction, user) => {
                  if (reaction.partial) {
                    try {
                      await reaction.fetch();
                    }
                    catch (error) {
                      console.error(error)
                      return
                    }
                  }
                  if (!user.bot) {
                    if (reaction.emoji.name === "🔴" && reaction.message.id === sentMessage.id) {

 if (user.id === msg.author.id) {
  clearInterval(intreval)
setTimeout( function() {
if (sentMessage.deletable) {
         sentMessage.delete()
                          }

                          if (msg.deletable) {
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
                        if (ctx.measureText("font test").width > 430) {
                          console.log("too big")
                          console.log(ctx.measureText("font test ").width)
                          size = "50px"
                        }
                        if (ctx.measureText("font test").width < 350) {
                          console.log("too small")
                          console.log(ctx.measureText("font test ").width)
                          size = "75px"
                        }
                        var y = 475
                        var x = 200
                        ctx.font = `${size} "${name}"`
                        if (ctx.measureText(name).width > 500) {
                          if (ctx.measureText(name).width > 650) {
                            console.log("too too big name")
                            console.log(ctx.measureText(name).width)
                            y = 250
                          }
                        }
                        ctx.rotate(0), ctx.fillStyle = "#026C93";
                        ctx.fillText(name, y, x)
                        ctx.fillText("font test", 500, 460)

                        let atta = new Discord.MessageAttachment(canvas.toBuffer(), `${name} image.png`)

                        client.channels.cache.get("886995572278571071").send(atta).then(message => {
const url = message.attachments.array()[0].url 
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
                          return sentMessage.channel.send({
                            content: "",
                            buttons: [btn1, btn2],
                            embed: embed
                          }).then(sentmsg => {
client.on("clickButton",async btn => {
 if(btn.id == "pYes"  ){
const avatar = "https://cdn.discordapp.com/avatars/" + msg.author.id + "/" + msg.author.avatar + ".png"
  

                  await fontSchema.create({
                    type: fontType,
                    num: 1,
                    title: name,
                    dowlandUrl: msg.attachments.array()[0].url,
                    imageUrl: url,
                    author: {
                      avatar: {
                        url: avatar
                      },
                      id: msg.author.id,
                      name: msg.author.username
                    },
                    reported: false

                  })
let userWallet = await walletSchema.findOne({
                    userId: msg.author.id
                  });
                  if (!userWallet) {
                    const newWallet = {
                      userId: msg.author.id,
                      wallet: {

                        silver: 10,
                        total: 10 * 100
                      }
                    }
                    await walletSchema.create(newWallet)
                  }
                  if (userWallet) {
                    await walletSchema.updateOne({
                      userId: msg.author.id
                    }, {
                        $inc: {
                          "wallet.silver": 10,
                          "wallet.total": 10 * 100
                        }
                      })
                  }
sentmsg.reactions.removeAll()
const embed = new MessageEmbed()
.setAuthor("T.T.S.E BOT", ttseavatar)
.setColor("#F1C40F")
.setTitle("تمت اضافة الخط")
.setDescription("منحت 10 قطع فضية كمكافأت لمساهمتك في السيرفر")
sentmsg.edit({
embed: embed
})

                  setTimeout(async function() {
                    sentMessage.delete()
                    if (msg.deletable) {
                      msg.delete()
                    }
                  }, 4000)
         
 }
if(btn.id == "pNo"  ){
 const embed = new MessageEmbed()
.setTitle("احا ")
.setColor("#ff0303")
.setDescription("روح تكلم مع @𝖈𝖍𝖆𝖔𝖘#7264 ")
sentmsg.edit({
component: null,
embed: embed
})
}
})
                          })
                        })
                      } else {
                        sentMessage.reply({
                          content: "انت لست من استدعى هذا الأمر " + user
                        })
                      }

                    }
                  }
                })



              })
              setTimeout(function() { fs.unlinkSync(`./${org}`) }, 500)
            })
          }, 500);
        }//image cre

        let fs = require(`fs`);
        function download(url) {
          request.get(url)
            .on('error', console.error).pipe(
              fs.createWriteStream(msg.attachments.array()[0].name));
        }
        download(msg.attachments.array()[0].url)
        const opt1 = new MessageMenuOption()
          .setLabel("خط عادي")
          .setDescription(`اختر هذا الخيار اذا كان الخط من النوع المستخدم في الفقاعات العادية`)
          .setEmoji(`😁`)
          .setValue(`Normal`)
        //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        const opt2 = new MessageMenuOption()
          .setLabel("خط غضب")
          .setDescription(`اختر هذا الخيار اذا كان الخط من النوع المستخدم في فقاعات الغضب`)
          .setEmoji(`😠`)
          .setValue(`Anger`)
        //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        const opt3 = new MessageMenuOption()
          .setLabel("خط تهديد")
          .setDescription(`اختر هذا الخيار اذا كان الخط من النوع المستخدم في فقاعات التهديد`)
          .setEmoji(`😈`)
          .setValue(`Threat`)
        //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        const opt4 = new MessageMenuOption()
          .setLabel("خط مربع")
          .setDescription(`اختر هذا الخيار اذا كان الخط من النوع المستخدم في الفقاعات المربعة`)
          .setEmoji(`🔳`)
          .setValue(`Square`)
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
          .setValue(`Undefined`)
        const menu = new MessageMenu()
          .setPlaceholder("اختر نوع الخط")
          .setID("addMenu")
          .addOptions([opt1, opt2, opt3, opt4, opt6])
          .setMaxValues(5)
          .setMinValues(1)
        const embed = new MessageEmbed()
          .setTitle("اختر نوع الخط")
          .setColor("RANDOM")
        msg.channel.send({
          embed: embed,
          component: menu
        })
        client.on("clickMenu", async (menu) => {
          if (menu.id === "addMenu") {

            if (menu.values.length > 1 && menu.values.includes("Undefined")) {
              const temp = []
              menu.values.forEach(opt => {
                if (opt === "Normal") {
                  temp.push("عادي")
                }
                if (opt === "Anger") {
                  temp.push("غضب")
                }
                if (opt === "Threat") {
                  temp.push("تهديد")
                }
                if (opt === "Square") {
                  temp.push("مربع")
                }
              })
              let text = "كيف زبطت معك غير محدد و"
              let text1 = "بنفس الوقت"
              menu.reply.send({
                content: `${text} ${temp[0]} ${text1}`,
                ephemeral: true
              })
              return
            } else {
              const type = []
              menu.values.forEach(opt => {
                type.push(opt)
              })
              menu.reply.defer()
              imageCreat(type)
              setTimeout(function() {
                menu.message.delete()
              }, 850)
            }
          }
        })

      }
      else {
        if (msg.attachments.array()[0].name.endsWith(".png") || msg.attachments.array()[0].name.endsWith(".jpg")) {
          let embed = new MessageEmbed()
            .setTitle(`لا يمكنك إضافة الصور ايها الغبي!`)
            .setImage("https://media.discordapp.net/attachments/875361529741066240/901945840451592242/0.mp4 ")
            .setColor("#E74C3C")
          msg.reply(embed)
        }
        else {
          if (msg.attachments.array()[0].name.endsWith(".mp4")) {
            const embed = new MessageEmbed()
              .setTitle("بتحاول تضيف فيديو ليه يكلب يعني فتكر ان كايوس العظيم المبجل مفكرش بأمثالك؟ ")
              .setColor("#E74C3C")
            msg.reply(embed)
          } else {
            const embed = new MessageEmbed()
              .setTitle(`الملفات المدعومة هي
.ttf
.otf`)
              .setDescription(`و لا يمكنك إضافة سواهم`)
              .setColor("#992D22")

            msg.reply(embed)
          }
        }
      }
    } else { msg.channel.send("و هتضيف ايه ان شاء الله؟ ") }
  }
})
client.on("clickButton", async btn => {
try{
 if(btn.type == "pNo"){
    btn.meassage.edit("كويس")
 }
}
catch{
 return 
}
})
client.on('guildMemberAdd', member => {
  var welcomeCanvas = {};
  welcomeCanvas.create = Canvas.createCanvas(1024, 500)
  welcomeCanvas.context = welcomeCanvas.create.getContext('2d')
  welcomeCanvas.context.font = '72px sans-serif';
  welcomeCanvas.context.fillStyle = '#ffffff';

  Canvas.loadImage("https://media.discordapp.net/attachments/878746087513542687/879686572507803689/216332.jpg").then(async (img) => {
    let canvas = welcomeCanvas;

    welcomeCanvas.context.drawImage(img, 0, 0)
    welcomeCanvas.context.fillText("welcome", 360, 360);
    const Guild = client.guilds.cache.get("875359377777917983")
    const Member = Guild.members.cache.get(member.id)
    if (member.id === "834431912537489409") {
      console.log("chaos joined")
      Member.roles.add("888525445245571132")
    }
    console.log("a member joined ")
    const welcomechannel = client.channels.cache.get('875359972010102855')
    //client.channels.cache.get('886995572278571071').send(Member.user.displayAvatarURL({format: 'png', size: 1024}))
    canvas.context.font = '42px sans-serif',
      canvas.context.textAlign = 'center';
    canvas.context.fillText(Member.user.username, 512, 410)
    canvas.context.font = '32px sans serif'
    canvas.context.fillText(`You are the ${Member.guild.memberCount}th`, 512, 455)/*
  canvas.context.beginPath()
    canvas.context.arc(512, 166, 119, 0, Math.PI * 2, true)
    canvas.context.closePath()
    canvas.context.clip()*/
    await Canvas.loadImage(Member.user.displayAvatarURL({ format: 'png', size: 1024 }))
      .then(img => {
        canvas.context.drawImage(img, 393, 47, 238, 238);
      })
    let atta = new Discord.MessageAttachment(canvas.create.toBuffer(), `welcome-${member.user}.png`)
    try {
      welcomechannel.send(`مرحبا بك في نقابة تتسي ${Member}`, atta)
    } catch (error) {
      console.log(error)
    }
    Member.roles.add("896060542765125662")



    /*welcomeCanvas.context.beginPath();
  welcomeCanvas.context.arc(512, 166, 128, 0, Math.PI * 2, true);
    welcomeCanvas.context.stroke()
    welcomeCanvas.context.fill()*/
    return
  })
  /*
  const Guild = client.guilds.cache. get("875359377777917983")
  const Member =  Guild.members.cache.get(member.id)
  if(member.id === "834431912537489409"){
  console.log("chaos joined")
  Member.roles.add("896311308222365697")
  }
    let canvas = welcomeCanvas;
    console.log("a member joined ")
      const welcomechannel = client.channels.cache.get('875359972010102855')
  //client.channels.cache.get('886995572278571071').send(Member.user.displayAvatarURL({format: 'png', size: 1024}))
        canvas.context.font = '42px sans-serif',
      canvas.context.textAlign = 'center';
  canvas.context.fillText(Member.user.username , 512, 410)
      canvas.context.font = '32px sans serif'
      canvas.context.fillText(`You are the ${Member.guild.memberCount}th`, 512, 455)/*
    canvas.context.beginPath()
      canvas.context.arc(512, 166, 119, 0, Math.PI * 2, true)
      canvas.context.closePath()
      canvas.context.clip()*//*
await Canvas.loadImage(Member.user.displayAvatarURL({format: 'png', size: 1024}))
.then(img => {
  canvas.context.drawImage(img, 393, 47, 238, 238);
})
let atta = new Discord.MessageAttachment(canvas.create.toBuffer(), `welcome-${member.user}.png`)
try {
  welcomechannel.send(`مرحبا بك في نقابة تتسي ${Member}`, atta)
} catch (error) {
  console.log(error)
}
Member.roles.add("896060542765125662")

return */
})
client.on('ready', async () => {
  var getPixels = require("get-pixels")
  


  var arr = [1, 2, 3, 4, 5]
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    } return array;
  }
  shuffle(arr)
  //console.log(arr)
  client.user.setActivity('كايوس عظيم', 'كايوس عظيم')



});

/*
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
})*/

client.on("clickButton", async (btn) => {
  if (btn.id === "agree") {
    const Member = await btn.message.guild.members.fetch({ user: btn.clicker.id, force: true })
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
      content: ` active و اضيف مكانه رول  sus ازيل منك رول `,
      ephemeral: true

    })
  }
})
client.on("message", async msg => {
  if (msg.content === "p") {
    const embed = new MessageEmbed()
      .setTitle("اضغط تحت")
    const btn = new MessageButton()
      .setLabel("هنا")
      .setStyle("green")
      .setID("u89")

    msg.channel.send(embed, btn)
  }
  else {
    if (msg.content.startsWith("-delete")) {
      const args = msg.content.split(" ")

      const { member, mentions } = msg
      const Guild = client.guilds.cache.get("875359377777917983")
      const Member = Guild.members.cache.get(msg.author.id)
      if (!Member.roles.cache.has("888525445245571132")) {
        return msg.reply("انت لا تمتلك الصلاحيات لأستخدام هذا الأمر يلا برا يكلب")
      }
      if (Member.roles.cache.has("875360476295471115") || Member.roles.cache.has("888525445245571132")) {
        if (args.length === 1) {
          msg.channel.bulkDelete(100)
          setTimeout(function() {
            const embed = new MessageEmbed()
              .setTitle("تم الحذف بنجاح")

            msg.channel.send(embed).then(sentmsg => {
              setTimeout(function() {
                sentmsg.delete()
              }, 2000)
            })

          }, 1000)
        } else {
          if (isNaN(args[1])) {
            return msg.reply("لا يبدو ان هذا رقم ")
          }
          if (args[1] < 3) {
            const embed = new MessageEmbed()
              .setTitle("لا تستطيع حذف اقل من ٣ رسائل ايها الغبي!")
            return msg.channel.send(embed).then(sentmsg => {
              setTimeout(function() {
                sentmsg.delete()
              }, 2000)

            })
          }
          if (args[1] > 100) {
            const embed = new MessageEmbed()
              .setTitle("لا تستطيع حذف اكثر من ١٠٠ رسالة")
            return msg.channel.send(embed).then(sentmsg => {
              setTimeout(function() {
                sentmsg.delete()
              }, 2000)

            })
          }
          msg.channel.bulkDelete(args[1])
          setTimeout(function() {
            const embed = new MessageEmbed()
              .setTitle(`تم حذف ${args[1]} من الرسائل`)
            msg.channel.send(embed).then(sentmsg => {
              setTimeout(function() {
                sentmsg.delete()
              }, 2000)
            })
          }, 1000)
        }
      }
    }
  }
})
client.on("clickButton", async btn => {
  if (btn.id === "u89") {
    console.log("emited")
    client.emit('guildMemberAdd', btn.clicker);

    btn.reply.send("تم", true)
  }
})
client.on("message", async msg => {
  if (msg.content.startsWith("-mute") || msg.content.startsWith("-اخرس")) {
    const msgMember = await msg.guild.members.fetch({ user: msg.author.id, force: true })
    if (!msgMember.hasPermission("ADMINISTRATOR")) {
      const embed = new MessageEmbed()
        .setTitle("ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤالعب بعيد ياض")
        .setDescription(`تم اسكات ${msg.author} لمدة خمس دقائق لإزعاج راحة هذا الموقر`)
      await msgMember.roles.add("919046775854231562")
      setTimeout(function() {
        msgMember.roles.remove("919046775854231562")
      }, 60 * 1000 * 5)
      return msg.reply(embed)
    }
    const hole = msg.content.split("")
    const start = msg.content.indexOf("<")
    const end = msg.content.indexOf(">")
    let target = msg.content.slice(start, end)
    if (target.startsWith("<")) {
      console.log("p")
      target = target.slice(1, target.length)
    }
    if (!target) {
      const embed = new MessageEmbed()
        .setTitle("و انا هعمل ايه دلوقتي هسكت مين يعني يعبقري زمانك انت")
        .setColor("#992D22")
      return msg.reply(embed)
    }
    const args = msg.content.split(" ")
    if (msg.mentions.members.size == 1) {
      if (target.startsWith("@")) {
        const targetId = target.slice(1, target.length)

        if (targetId == "875897206425657376") {
          const embed = new MessageEmbed()
            .setTitle("فاكرني حمار مثل البوتات التانية و اسكت نفسي؟ اقلب وجهك لولا انك ادمن لكنت طردتك")
            .setColor("#992D22")
          return msg.reply(embed)
        }
        const Member = await msg.guild.members.fetch({ user: targetId, force: true })
        console.log(target)

        if (msgMember.user.id == Member.user.id) {
          const embed = new MessageEmbed()
            .setTitle("هو انت بتعمل ايه يبني؟ ")
            .setImage("https://media.discordapp.net/attachments/886995572278571071/921354248262922270/images.jpeg")
            .setColor("#E91E63")
          return msg.reply(embed)
        }
        if (targetId == "834431912537489409") {
          const embed = new MessageEmbed()
            .setTitle("يعم هو انت عاوزني اسكت صانعي هو انت حمار؟  دنا لو سكته هيمحيني عن وجه الأرض")
            .setColor("#992D22")
          return msg.reply(embed)
        }
        if (Member.hasPermission("ADMINISTRATOR")) {
          const embed = new MessageEmbed()
            .setTitle(`يعم ${Member.user.username} ادمن مثلك لو اعطيته الرول مش هيحصل حاجة`)
            .setColor("#E91E63")
          return msg.reply(embed)
        }
        if (Member.roles.cache.has("919046775854231562")) {
          const embed = new MessageEmbed()
            .setTitle("يعم الواد ماكل ميوت من اول خف شوية عليه")
            .setColor("#ff0303")
          return msg.reply(embed)
        }
        if (args[2]) {
          let time = ms(args[2])

          if (time < 60 * 1000 && args[3]) {
            time = ms(args[2] + args[3])
            console.log(args[2] + args[3])
          }
          console.log(time)
          if (time < 60 * 1000 && time >= 1000) {
            const embed = new MessageEmbed()
              .setTitle("يجب ان يكون الوقت اطول من دقيقة")
              .setColor("#992D22")
            return msg.reply(embed)
          }
          if (time == 0 || time > ms("4w")) {
            const embed = new MessageEmbed()
              .setTitle("لا أعتقد ان هذا رقم صالح")
              .setColor("#992D22")
            return msg.reply(embed)
          }
          const data = {
            type: "اسكاته",
            type1: "الإسكات",
            user: msgMember.user,
            member: Member.user,
            time: time
          }
          

        Member.roles.add("919046775854231562")
setTimeout(function(){
Member.roles.remove("919046775854231562")
}, time)          
let time1 = new Date().getTime();
const tilltime = new Date(time1 + time).toISOString();
                  axios.patch(`https://discord.com/api/v9/guilds/${msg.guild.id}/members/${id}`, {
                    'communication_disabled_until': `${tilltime}`
                  }, {
                      headers: {
                        'Authorization': 'Bot ' + client.token.toString(),
                        'Content-Type': 'application/json'
                      }
                    }).then(() => {
                      const embed = new MessageEmbed()
                        .setTitle(`تم اسكات ${user.username} بنجاح`)
                        .setColor("#32a852")
                      return msg.reply(embed)
                    })        }
        Member.roles.add("919046775854231562")
setTimeout(function(){
Member.roles.remove("919046775854231562")
}, 1000*60*60*24*7)          
let time = new Date().getTime();
const tilltime = new Date(time + 1000*60*60*24*7).toISOString();
                  axios.patch(`https://discord.com/api/v9/guilds/${msg.guild.id}/members/${Member.user.id}`, {
                    'communication_disabled_until': `${tilltime}`
                  }, {
                      headers: {
                        'Authorization': 'Bot ' + client.token.toString(),
                        'Content-Type': 'application/json'
                      }
                    }).then(() => {
                      const embed = new MessageEmbed()
                        .setTitle(`تم اسكات ${Member.user.username} بنجاح`)
                        .setColor("#32a852")
                      msg.reply(embed)
                    })
      }

    }
    if (msg.mentions.members.size >= 2) {
      msg.mentions.users.forEach(async user => {
        const id = user.id
        const Member = await msg.guild.members.fetch({ user: id, force: true })
        const msgMember = await msg.guild.members.fetch({ user: msg.author.id, force: true })
        if (Member.roles.cache.has("919046775854231562")) {
          const embed = new MessageEmbed()
            .setTitle(`يعم الواد ${user.username} ماكل ميوت من اول خف شوية عليه`)
            .setColor("#ff0303")
          msg.reply(embed)
        } else {
          if (Member.hasPermission("ADMINISTRATOR")) {
            const embed = new MessageEmbed()
              .setTitle(`يعم ${Member.user.username} ادمن مثلك لو اعطيته الرول مش هيحصل حاجة`)
              .setColor("#E91E63")
            msg.reply(embed)
          } else {
            if (id == "834431912537489409") {
              const embed = new MessageEmbed()
                .setTitle("يعم هو انت عاوزني اسكت صانعي هو انت حمار؟  دنا لو سكته هيمحيني عن وجه الأرض")
                .setColor("#992D22")
              msg.reply(embed)
            } else {
              if (msgMember.user.id == Member.user.id) {
                const embed = new MessageEmbed()
                  .setTitle("هو انت بتعمل ايه يبني؟ ")
                  .setImage("https://media.discordapp.net/attachments/886995572278571071/921354248262922270/images.jpeg")
                  .setColor("#E91E63")
                msg.reply(embed)
              } else {
                if (id == "875897206425657376") {
                  const embed = new MessageEmbed()
                    .setTitle("فاكرني حمار مثل البوتات التانية و اسكت نفسي؟ اقلب وجهك لولا انك ادمن لكنت طردتك")
                    .setColor("#992D22")
                  msg.reply(embed)
                } else {
Member.roles.add("919046775854231562")
setTimeout(function(){
Member.roles.remove("919046775854231562")
}, 1000*60*60*24*7)          
let time = new Date().getTime();
const tilltime = new Date(time + 1000*60*60*24*7).toISOString();
                  axios.patch(`https://discord.com/api/v9/guilds/${msg.guild.id}/members/${id}`, {
                    'communication_disabled_until': `${tilltime}`
                  }, {
                      headers: {
                        'Authorization': 'Bot ' + client.token.toString(),
                        'Content-Type': 'application/json'
                      }
                    }).then(() => {
                      const embed = new MessageEmbed()
                        .setTitle(`تم اسكات ${user.username} بنجاح`)
                        .setColor("#32a852")
                      msg.reply(embed)
                    })

                }
              }
            }
          }
        }
      })
    }
    if (msg.mentions.roles.size >= 1) {
      const roles = msg.mentions.roles
      const errors = []
      roles.forEach(role => {
        const targets = []

        role.guild.members.cache.forEach(member => {
          if (member.roles.cache.has(role.id)) {
            targets.push(member)
          }
        })
        targets.forEach(target => {
          const id = target.user.id
          const Member = target
          const msgMember = msg.member

          if (Member.roles.cache.has("919046775854231562")) {
            const error = {
              name: `<:red:922870292987129916> لم يتم اسكات ${target.user.username}`,
              value: `تم اسكات ${target.user.username} بالفعل`
            }
            errors.push(error)

          } else {
            if (msgMember.user.id == Member.user.id) {
              const error = {
                name: `<:red:922870292987129916> لم يتم اسكات ${target.user.username}`,
                value: `${target.user.username} هو مستخدم الأمر`
              }
              errors.push(error)
            } else {
              if (id == "875897206425657376") {
                const error = {
                  name: `<:red:922870292987129916>لم يتم اسكات ${target.user.username}`,
                  value: `حاول ${msgMember.user.username} اسكات هذا العظيم`
                }
                errors.push(error)
              } else {
                if (Member.hasPermission("ADMINISTRATOR")) {
                  const error = {
                    name: `<:red:922870292987129916> لم يتم اسكات ${target.user.username}`,
                    value: `يمتلك ${target.user.username} صلاحيات ادمن`
                  }
                  errors.push(error)
                } else {
                  if (id == "834431912537489409") {
                    const error = {
                      name: `<:red:922870292987129916> لم يتم اسكات ${target.user.username}`,
                      value: `حاول ${msgMember.user.username} اسكات صانعي العظيم`
                    }
                    errors.push(error)
                  } else {
                    const error = {
                      name: `<:Green:922870208958439424> تم اسكات ${target.user.username}`,
                      value: "ㅤ"
                    }
                    let time = new Date().getTime();
                    const tilltime = new Date(time + 1000*60*60*24*7).toISOString();
target.roles.add("919046775854231562")
setTimeout(function(){
rarget.roles.remove("919046775854231562")
}, 1000*60*60*24*7 );          axios.patch(`https://discord.com/api/v9/guilds/${msg.guild.id}/members/${id}`, {
                      'communication_disabled_until': `${tilltime}`
                    }, {
                        headers: {
                          'Authorization': 'Bot ' + client.token.toString(),
                          'Content-Type': 'application/json'
                        }
                      }).then(() => {
                        errors.push(error)
                      })


                  }
                }
              }
            }
          }
        })
      })
      setTimeout(function() {
        const embed = new MessageEmbed()
          .addFields(errors)
          .setColor("#03fcf0")
        msg.reply(embed)
      }, 1000)
    }
  }
  if (msg.content === "k") {
    const temp = await fontSchema.find()
    msg.reply(temp.toString())
  }
  if (msg.content === "i") {
    if (msg.author.id === "834431912537489409") {
      msg.channel.send("-delete")
    }

  }
  if (msg.content.startsWith("e")) {
    msg.reply(msg.content.slice(2, msg.content.length))
  }
})

client.login(mySecret).catch(err=> {
console.log(err)
}) 