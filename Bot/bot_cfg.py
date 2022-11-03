from aiogram import Bot, Dispatcher
from dataclasses import dataclass

@dataclass
class Config:
    API_TOKEN = 'BOT_TOKEN'
    PAYMENT_TOKEN = "PAYMENT_TOKEN"

bot = Bot(token=Config.API_TOKEN)
dp = Dispatcher(bot)

