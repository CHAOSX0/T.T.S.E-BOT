var Jimp = require('jimp');
const path = require("path");
var yauzl = require("yauzl");
const fs = require("fs")
var sizeOf = require('image-size') 
var events = require('events');
const { pipeline, finished } = require('stream');
function get_cuts(height, portion){
let runing = true  
let result = [] 
let temporary = height
while (runing){
 if(temporary == 0  ){
        runing = false
 }
 if(temporary >= portion){
         result.push(portion)
        temporary -= portion
 }else {if(!temporary == 0 ){
    result.push(temporary)
    temporary = 0
        
  }
 }
} 
return result
};
function cut_image(url, cuts, width, name, path0, ext){
var doneEvent = new events.EventEmitter();
var prev_cut = 0
let identify = 1 
let paths = [] 
cuts.forEach(cut => {
Jimp.read(url).then(img =>{
img.crop(0,prev_cut,width,cut )
.write(path.join(path0,`${name}-${identify}${ext}`))
paths.push(path.join(path0,`${name}-${identify}${ext}`))
identify++
prev_cut+=cut
}).then(res=>{
doneEvent.emit("done",{
paths: paths
} )
})

//prev_cut = prev_cut + cut   
}) 
return doneEvent
} 
function unzip(path0, save_path){
var finishEvent = new events.EventEmitter(); 
yauzl.open(path0, {lazyEntries: true}, function(err, zipfile) {
  function get_number(path1){
 var unzip0 =require('adm-zip');

 var zip = new unzip0(path1);
 return zip.getEntries().length
  }
  let amount = get_number(path0)
  let num = 0

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
const destDir = save_path
const writer = fs.createWriteStream(path.join(destDir, entry.fileName));
readStream.pipe(writer);

await finished(readStream, (err) => {

num++
if(err){
console.log(err)
}else {
console.log(num)
if(num == amount  ){
finishEvent.emit("finish", {
type:1
})
}else{
finishEvent.emit("finish", {
type:0,
num:num, 
left:amount
})
}
        
}
        //console.log(' ### Streaming to writer succeded, file unzipped.');
    
})
      });
    }
  });
})
return finishEvent
};
function get_files(dir_path){
let result = [] 
const testFolder = dir_path
fs.readdirSync(testFolder).forEach(file => {
 result.push(dir_path + file) 
}) 
return result
}  
function cut_zip(path0, save, img_save){
 unzip(path0,save).on("finish", (data) => {
if(data.type == 1  ){
const files = get_files(save) 
console.log(files)
num = 1
files.forEach(file => {
const dim = sizeOf(file) 
console.log(dim)
cut_image(file, get_cuts(dim.height,4000), dim.width, num, img_save, `.${dim.type}`)
num++
 })

}
})
 
 
}
module.exports = {
get_cuts: get_cuts, 
cut_image: cut_image,
unzip: unzip, 
get_files: get_files, 
cut_zip: cut_zip
}

