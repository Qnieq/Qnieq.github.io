from aiogram import executor
from bot_cfg import dp, Config
from handlers import client

client.register_hadlers_cl(dp)

if __name__ == '__main__':
    print('start')
    executor.start_polling(dp, skip_updates=True)