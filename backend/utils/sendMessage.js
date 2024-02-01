import { telegramBot } from '../telegram/telegramBot.js'

const chatId = '-4104691003'

export const sendMessage = message => {
	telegramBot.sendMessage(chatId, message)
}
