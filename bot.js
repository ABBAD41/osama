const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("642304835135209503")
setInterval(function() {
channel.send(`osama osama osama osama osama osama بحبكم بحبكم بحبكم osama كيفكم هلا هلا لاه  @يا اسامه @يا اسامه @@ هلا هل بحبكما هلا هلا هلا السلام عليكم كيفكم كيفكم osama osama osama`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
