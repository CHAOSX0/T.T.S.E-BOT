const { MessageEmbed } = require('discord.js');
var yauzl = require("yauzl");
const fs = require("fs")
const path= require("path")
const wallet = require("../functions/wallet.js")
const events = require("events")
const request = require("request");
const archiver = require('archiver');
const { pipeline, finished } = require('stream');
const { MessageMenu,
  MessageMenuOption } = require("discord-buttons");
const disbut = require("discord-buttons");
const func = require("../functions/images")
var Jimp = require('jimp');
module.exports = {
  commands: ["cut", "قص"],
  //expectedArgs: '<num1> <num2>',
  permissionError: 'You need admin permissions to run this command',
  //minArgs: 0,
  //maxArgs: 0,
  callback: (message, arguments, text, client ) => { 
        client.on("clickMenu", async menu => {
        console.log(menu)
        }) 
        console.log("b")
let fuqNum =  0  
const testing = false
const msg = message 
if(!msg.author.id == "834431912537489409" && testing){
const embed = new MessageEmbed()
.setTitle("هذا الأمر قيد التطوير ")
return msg.reply(embed)
}
if(msg.guild.id == "888405450616352809" && msg.author.id !== "834431912537489409"){
return 
}
if(msg.guild.id !== "875359377777917983"  ){
console.log("teamx")

} 
image_ext = ["png", "jpg"]  
if(msg.attachments.size >= 1){
const date = Date()
const dirs = ["image", "zip"]
dirs.forEach(di => {
var dir = `./temp/${date}/${di}`
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}
})
const embed = new MessageEmbed()
.setTitle("اختر طريقة القص")
.setColor("#03ffee")
const opt1 = new MessageMenuOption() 
.setLabel("4000PX")
.setDescription(` يقص الصورة إلى اجزاء تكون بحد أقصى ٤٠٠٠ بكسل
هذا الخيار من الممكن ان يتسبب في قص الفقاعات `)
.setValue("4000px")
const opt2 = new MessageMenuOption() 
.setLabel("مخصص")
.setDescription(` يقص الصورة إلى اجزاء تكون بحد أقصى مخصص 
قد يتسبب في قص الفقاعات`)
.setValue("special") 
const opt3 = new MessageMenuOption() 
.setLabel("معزز بالذكاء الاصطناعي")
.setDescription(`قادم قريبا...`)
.setValue("AIenhanced")
const menu = new MessageMenu()
.setID("CutMenu")
.setPlaceholder("اختر طريقة القص")
.addOptions(opt1, opt2, opt3)
.setMinValues(1) 
.setMaxValues(1)
const row = new disbut.MessageActionRow()
 .addComponent(menu)
msg.reply({
embed: embed, 
components:[row]
}).then(sentmsg => {

        
client.on("clickMenu", async menu => {
        if(menu.id == "CutMenu"  ){
          if(menu.values[0].endsWith("px")){
let amount = parseInt(menu.values[0].split("px")[0]) 
dicrs = -100
if(amount !== 4000  ){
dicrs = -110
}
wallet.addmoney(menu.clicker.id, dicrs).then(res => {
  if(res.success== true ){
        console.log(res)
     const embed = new MessageEmbed() 
.setTitle("نجحت العملية")
.setColor("#03fc5e")
.setDescription(`المتبقي الصافي بالعملات الفضية ${Math.round(res.wallet.total)/100}`)
     menu.reply.send(embed, true)
  }else {
if(res.success == false   ){
 menu.reply.send("يا عمي معكاش فلوس ", true )
return 
}
  }
const images = [] 
const zips = []
const attas = msg.attachments

attas.forEach(atta=> {
if(atta.name.endsWith(".jpg") || atta.name.endsWith(".png")  ){
images.push(atta)
}else{
if(atta.name.endsWith(".zip")){
zips.push(atta)
}
}
})
if(images.length > 0 && zips.length > 0){
const embed = new MessageEmbed()

.setTitle("حدد عاوز تقص ملف مضغوط ولا  صور متجلطنيش")
msg.reply(embed) 
return} 
if(images.length > 0){
console.log("dd double")
var finishEvent = new events.EventEmitter(); 
finishEvent.on("finished", (num) => {
console.log(num)
const embed = new MessageEmbed() 
.setTitle(`جاري القص [${num}/${images.length}]`) 
.setColor("#0ac2ff")
sentmsg.edit({
embed:embed, 
components:null}) 

        
if(num == images.length){

        
setTimeout(function(){
const embed = new MessageEmbed()
.setTitle("انتهى القص")
.setDescription("كيف تريد الحصول على الصور المقصوصة")
.setColor("#03ffee")
const opt1 = new MessageMenuOption() 
.setLabel("صور")
.setDescription(`الحصول على الصور بدون اي ضغط`)
.setValue("oneByone")
.setEmoji({
name:"emoji_11", 
id:"930167800100687922"
});
const opt2 = new MessageMenuOption() 
.setLabel("ملف مضغوط")
.setEmoji({
name:`zip_10Silver`, 
id: "930162600711434291"
})
.setDescription(`الحصول على الصور داخل ملف مضغوط
يكلف هذا الخيار ١٠ قطع فضية`)
.setValue("zipFile")
const menu = new MessageMenu()
.setID("FileMenu")
.setPlaceholder("كيف تريد الحصول على الصور")
.addOption(opt1)
.addOption(opt2)
.setMinValues(1) 
.setMaxValues(1)
const row = new disbut.MessageActionRow()
 .addComponent(menu)
sentmsg.edit({
embed:embed, 
components:[row]
})
client.on("clickMenu", menu => {
if(menu.id ==  "FileMenu" ){
 if(menu.values[0] == "oneByone"  ){
  
  func.get_files(`./temp/${date}/finished/`).forEach(file => {
        menu.channel.send({
   files: [{
      attachment: file,
      name: file.split("/").pop()
   }]
})
  })
fs.rmdir(`./temp/${date}/`, { recursive: true }, (err) => {
    if (err) {
        throw err;
    }
});
 }else{
   if(menu.values[0] == "zipFile"  ){
wallet.addmoney(menu.clicker.id, -1000).then(res => {
  if(res.success== true ){
        console.log(res)
     const embed = new MessageEmbed() 
.setTitle("نجحت العملية")
.setColor("#03fc5e")
.setDescription(`المتبقي الصافي بالعملات الفضية ${Math.round(res.wallet.total)/100}`)
     menu.reply.send(embed, true)
  }else {
if(res.success == false   ){
 menu.reply.send("يا عمي معكاش فلوس ", true )
return 
}
  }}) 
const archiver = require('archiver');
    // create a file to stream archive data to.
const output = fs.createWriteStream(`./temp/${date}/zip/test.zip`);
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.

});
archive.directory(`./temp/${date}/finished`, false);
archive.pipe(output)
archive.on('error', function(err) {
  throw err;
});
archive.finalize();
output.on('close', function() {
fs.rmdir(`./temp/${date}/`, { recursive: true }, (err) => {
    if (err) {
        throw err;
    }

    console.log(`./temp/${date}/ is deleted!`);
});
msg.channel.send({
files: [{
      attachment:`./temp/${date}/zip/test.zip`,
      name:"output.zip"
   }]})
});
return 
   }
 }} 
   })
     }, 500)
      }
       });
let num = 1
images.forEach(image=> {
spliten = image.name.split(".")
ext = `.${spliten[spliten.length-1] }`
func.cut_image(image.url, func.get_cuts(image.height,amount), image.width, num, `./temp/${date}/finished`,ext)
finishEvent.emit("finished", num) 
num++             })}else{
if(zips.length > 0){
let filesNum = 1
const finishEvent2_0 = new events.EventEmitter();  
 menu.channel.send(new MessageEmbed()
.setTitle("جاري التحميل...")
.setDescription(`تنزيل الملفات [0/${zips.length}]`)).then(msgIdn => {
         

zips.forEach(file => {
const dir = `./temp/${date}/zips/`
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}
var w = fs.createWriteStream(`./temp/${date}/zips/${file.name}`);

request.get(file.url).pipe(w);

w.on('finish', function(){
  data = {
        amount: zips.length,
        num: filesNum, 
        msg: msgIdn
  } 
  finishEvent2_0.emit("finish", data )
filesNum++
});

})
finishEvent2_0.on("finish", data => {
let idfk = 0 
const embed = new MessageEmbed()
.setTitle("جاري التحميل...")
.setDescription(`تنزيل الملفات [${data.num}/${data.amount}]`)
data.msg.edit(embed)
if(data.num == data.amount){
func.get_files(`./temp/${date}/zips/`).forEach(file => {
const dir = `./temp/${date}/image/${file.split("/").pop().split(".")[0]}`
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}
const embed = new MessageEmbed()
.setTitle("جاري التحميل...")
.setDescription(`فك الضغط[${0}/${data.amount}]`)
const detio = data.msg
data.msg.edit(embed)
const the9finish = new events.EventEmitter()
func.unzip(file, dir).on("finish", data => {
if(data.type == 1  ){
fuqNum++
setTimeout(function(){
const embed = new MessageEmbed()
.setTitle("جاري التحميل...")
.setDescription(`فك الضغط[${fuqNum}/${zips.length}]`)
detio.edit(embed) 
}, 200)
if(fuqNum == zips.length  ){
const embed = new MessageEmbed()
.setTitle("جاري التحميل...")
.setDescription(`قص الصور [0/${zips.length}]`)
detio.edit(embed)
let idfk = 0  
func.get_files(`./temp/${date}/image/`).forEach(async chapter => {
chapterName = chapter.split("/").pop()
const img0 = func.get_files(`${chapter}/`)
let assfucker = 0   
img0.forEach(async img=> {
const sizeOf = require('image-size')
const dime = sizeOf(img)
const cuts = func.get_cuts(dime.height,amount) 
func.cut_image(img, cuts, dime.width, `${chapterName}-${img.split("/").pop().split(".")[0]}`, `./temp/${date}/finished/${chapterName}/`,`.${dime.type}`).on("done", data=>{
assfucker+=1
console.log(assfucker, cuts.length, idfk, img0.length)
if(assfucker ==  cuts.length ){
 assfucker=0
 idfk++ 
 if(idfk==img0.length){
         idfk=0
         console.log("done")
        the9finish.emit("done")
 }

}
})
        
})

})}

}else{

}}) 
let somith = 0 
the9finish.on("done", ()=>{
somith+=1
console.log(`somith:${somith}`)
console.log("done")
setTimeout(function(){
const embed = new MessageEmbed()
.setTitle("جاري التحميل...")
.setDescription(`قص الصور [${somith}/${zips.length}]`)
detio.edit(embed)}, 200)

if(somith == zips.length) {
 const archiver = require('archiver');
    // create a file to stream archive data to.
const output = fs.createWriteStream(`./temp/${date}/zip/output.zip`);
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.

});
func.get_files(`./temp/${date}/finished/`).forEach(dir=> {
archive.directory(dir, `${dir.split("/").pop()}/` )
})
archive.pipe(output)
archive.on('error', function(err) {
  throw err;
});
archive.finalize();
output.on('close', function() {
detio.delete()
detio.channel.send({
      files: [{
      attachment:`./temp/${date}/zip/output.zip`,
      name:"output.zip"
   }]}).then(()=>{
  fs.rmdir(`./temp/${date}/`, { recursive: true }, (err) => {
    if (err) {
        throw err;
    }
});
   })
})
        } 
})
})
}})
 }) 
}
}
 })
 }else{
          if(menu.values[0] == "special"){
const opt1 = new MessageMenuOption() 
.setLabel("5000PX")
.setValue("5000px")
const opt2 = new MessageMenuOption() 
.setLabel(`3000PX`)
.setValue('3000px') 
const opt3 = new MessageMenuOption() 
.setLabel("2000PX")
.setValue('2000px')
const menu = new MessageMenu()
.setID("CutMenu")
.setPlaceholder("اختر طريقة القص")
.addOptions(opt1, opt2, opt3)
.setMinValues(1) 
.setMaxValues(1)
const row = new disbut.MessageActionRow()
 .addComponent(menu)
sentmsg.edit({
embed: embed, 
components:[row]
})
          }
 }
  }
})
}) 
}else{
console.log(msg.attachments)
const embed = new MessageEmbed()
.setTitle("عاوزني اقص الهواء مثلا؟")
.setDescription("هات صورة ولا ملف مضغوط يبني بلاش استعباط")
msg.reply(embed)
}
/*


yauzl.open("./testo.zip", {lazyEntries: true}, function(err, zipfile) {
  if (err) throw err;
  zipfile.readEntry();
  zipfile.on("entry", function(entry) {
    if (/\/$/.test(entry.fileName)) {
      // Directory file names end with '/'.
      // Note that entries for directories themselves are optional.
      // An entry's fileName implicitly requires its parent directories to exist.
      zipfile.readEntry();
    } else {
      // file entry
      zipfile.openReadStream(entry, async function(err, readStream) {
        if (err) throw err;
        readStream.on("end",  function() {
          zipfile.readEntry();
        });
const destDir = './'
const writer = fs.createWriteStream(path.join(destDir, entry.fileName));
readStream.pipe(writer);

await finished(readStream, (err) => {
    if (err) {
          console.error(' ### Streaming to writer failed: ', err);
    } else {
        console.log(' ### Streaming to writer succeded, file unzipped.');
    }
}) 
      });
    }
  });
});
var unzip=require('adm-zip');

 var zip=new unzip("./testo.zip");
 console.log(zip.getEntries().length); 
*/

  },
  requiredRoles: [],
        }