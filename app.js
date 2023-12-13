const express = require("express");
const Telegraf = require("telegraf").Telegraf;

const port = 3000;
const webhookDomain = "https://teleg.vercel.app";
const token = "6925511753:AAFmnuS44oCILYgYP9iNN1p0HBPPb_UcXN8";

const bot = new Telegraf(token);
const app = express();

// Set the bot API endpoint
async function setHook() {
    app.use(await bot.createWebhook({ domain: webhookDomain }));
  }
  
setHook();

app.get("/",(req,res)=>{{ 
    res.json({
        message: "Server working correctly"
    });
 }})

bot.on("text", ctx => ctx.reply("Hello"));

app.listen(port, () => console.log("Listening on port", port));

module.exports = app;