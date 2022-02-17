const mySecret = process.env['token2']
const client = require("./index.js")
const fs = require("fs")
const Discord = require("discord.js")
const path = require("path")
const Client = client 
const functions = require("./functions.js")  
//const config = require('./config.js') 
const axios = require("axios")
client.on('ready', async () => {
  const baseFile = 'command-base.js'

  const commandBase = require(`./commands/${baseFile}`)

  const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile) {
        const option = require(path.join(__dirname, dir, file))
        commandBase(client, option)
      }
    }
  }

  readCommands('commands')
}) 