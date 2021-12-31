function align_center (text){
const array = [] 
const number = (33 - text.length) / 4
for (let i = 0; i < number; i++) {
  array.push("ㅤ")
}
const spaces = array.join("")
const res = `ㅤ${spaces}${text}${spaces}`
return res
}

function align_left (text){
const array = [] 
const number = (33 - text.length) / 2
for (let i = 0; i < number; i++) {
  array.push("ㅤ")
}
const spaces = array.join("")
const res = `${text}${spaces}`
return res
}

function align_right (text){
const array = [] 
const number = (33 - text.length) / 2
for (let i = 0; i < number; i++) {
  array.push("ㅤ")
}
const spaces = array.join("")
const res = `${spaces}${text}`
return res
}
module.exports =  {
algin: align_center, 
 center: align_center, 
 left: align_right, 
 right: align_left
}
