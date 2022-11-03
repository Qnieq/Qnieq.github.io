from aiogram.types import Message
from Bot.bot_cfg import Config
from Bot.bot_cfg import bot
from aiogram import Dispatcher
from aiogram.types import LabeledPrice, PreCheckoutQuery, ContentType
from keyboards.client_button import keyboard
from data_base.sql_data_base import DataBase

db = DataBase('bot_database.db')

async def start(message: Message):
    await bot.send_message(message.chat.id, "Test webApp", reply_markup=keyboard)

async def buy_process(web_app_message):
    user_id = web_app_message.chat.id

    from_web = f'{web_app_message.web_app_data.data}'.replace("/", "")
    for i in from_web.split():
        if "=0" in i:
            continue
        name = (i.partition("=")[0])
        count = (i.partition("=")[2])
        await db.add_to_cart(name, user_id, count)

    data = await db.get_cart(web_app_message.chat.id)
    new_data = []
    for i in range(len(data)):
        new_data.append(await db.get_user_product(data[i][0]))
    new_data = [new_data[i][0] for i in range(len(new_data))]

    prices = [LabeledPrice(label=new_data[i][0]+f" x{data[i][2]}",
                           amount=new_data[i][1]*100*data[i][2]) for i in range(len(new_data))]
    await bot.send_invoice(web_app_message.chat.id,
                           title="title",
                           description='Title',
                           provider_token=Config.PAYMENT_TOKEN,
                           currency="rub",
                           need_email=True,
                           need_phone_number=False,
                           prices=prices,
                           start_parameter='example',
                           payload='some_invoice')
    await db.empty_cart(web_app_message.chat.id)

async def checkout_process(pre_checkout_query: PreCheckoutQuery):
    await bot.answer_pre_checkout_query(pre_checkout_query.id, ok=True)


async def successful_payment(message: Message):
    await bot.send_message(message.chat.id, 'Payment is Successfully!!')

def register_hadlers_cl(dp: Dispatcher):
    dp.register_message_handler(start, commands=['start'])
    dp.register_message_handler(buy_process, content_types='web_app_data')
    dp.register_pre_checkout_query_handler(checkout_process, lambda q: True)
    dp.register_message_handler(successful_payment, content_types=ContentType.SUCCESSFUL_PAYMENT)
