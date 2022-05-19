import { Telegraf } from "telegraf";

import { getConfig } from "../config/config";

const config = getConfig('env_')
const bot = new Telegraf(config.bot_section.bot_token)

bot.on('message', (ctx) => ctx.reply('msg'))

bot.launch()