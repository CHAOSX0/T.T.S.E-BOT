const walletSchema = require("../schemas/currency")
function addMoney(id,amount) {
  return new Promise(resolve => {
     walletSchema.findOne({
       userId: id
     }).then(res =>{
        if(res == "undefined" || res == null ){
          resolve({success: false, 
                error: "no money"})
        
        }else{
        if(res.total <= 0){
          resolve({
                success: false, 
                error: "no money"
          })
          }else{
          if(res.total < amount ){
                resolve({
                success: false, 
                error: "no money"
          })
          }
   let gold = res.wallet.gold*100*100
   let silver = res.wallet.silver*100
   let bronze = res.wallet.bronze   
   let biggest = 0 ;
 if(gold == undefined || gold== null || isNaN(gold)){
gold = 0 }
 if(silver == undefined || gold==null|| isNaN(silver)){
silver = 0} 
 if(bronze == undefined || bronze == null|| isNaN(bronze)){
 bronze = 0 }
if(amount < 0){
   if(amount%10000==0&&gold>0&&Math.abs(amount)<=gold){
    biggest = "gold"
   }else{
   if(amount%100==0&&silver>0&&Math.abs(amount)<=silver){
    biggest = "silver" 
   }else{
   if(bronze > 0 && Math.abs(amount)<=bronze){
     console.log(amount, bronze)
    biggest = "bronze" 
   }
   }
   }}else{
if(amount%10000==0){
    console.log("gold")
    biggest = "gold"
   }else{
   if(amount%100==0&&amount<10000){
    console.log("silver")
    biggest = "silver" 
   }else{
   if(amount%1==0&&amount<100){
     console.log("bronze")
    biggest = "bronze" 
   }
   }}}
if(typeof(biggest) == "string"  ){
if(biggest == "gold"  ){
  walletSchema.findOneAndUpdate({
userId:id}, {$inc:{
 "wallet.total": amount, 
 "wallet.gold": amount/100/100
}}).then(res=>{
let now = {
success: true, 
userId:id, 
wallet:{
total: (silver/100)+(gold/100/100+amount/100/100) + bronze, 
gold:(gold/100/100) + amount/100/100, 
silver: silver/100,
bronze: bronze
}
}
resolve(now)
})
}else{
if(biggest=="bronze"){
walletSchema.findOneAndUpdate({
userId:id}, {$inc:{
 "wallet.total": amount, 
 "wallet.bronze": amount
}}).then(res => {
let now = {
success: true, 
userId:id, 
wallet:{
total: res.wallet.total + amount, 
gold:gold/100/100, 
silver: silver/100,
bronze: bronze + amount
}
}
resolve(now)
resolve(res)
})
}
else{
walletSchema.findOneAndUpdate({
userId:id}, {$inc:{
 "wallet.total": amount, 
 "wallet.silver": amount/100
}}).then(res=> {
let now = {
success: true, 
userId:id, 
wallet:{
total: res.wallet.total + amount/100, 
gold:gold/100/100, 
silver: (silver/100) + amount/100,
bronze: bronze
}
}
resolve(now)
})
}
}}else{

}
}}
})
  }) 
} 
//addMoney("834431912537489409",-10505) 
 module.exports = {addmoney: addMoney} 