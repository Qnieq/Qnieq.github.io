from aiogram.types import Message
from bot_cfg import bot, PAYMENT_TOKEN
from aiogram import Dispatcher
from aiogram.types import LabeledPrice, PreCheckoutQuery, ContentType
from keyboards.client_button import keyboard

async def start(message: Message):
    await bot.send_message(message.chat.id, "Test webApp", reply_markup=keyboard)

PRICE = {
    '1': [LabeledPrice(label='Item1', amount=10000)],
    '2': [LabeledPrice(label='Item2', amount=20000)],
    '3': [LabeledPrice(label='Item3', amount=30000)],
    '4': [LabeledPrice(label='Item4', amount=40000)],
    '5': [LabeledPrice(label='Item5', amount=50000)],
    '6': [LabeledPrice(label='Item6', amount=60000)]
}

async def buy_process(web_app_message):
    await bot.send_invoice(web_app_message.chat.id,
                           title="title",
                           description='Title',
                           provider_token=PAYMENT_TOKEN,
                           currency="rub",
                           need_email=True,
                           need_phone_number=False,
                           prices=PRICE[f'{web_app_message.web_app_data.data}'],
                           start_parameter='example',
                           payload='some_invoice')

async def checkout_process(pre_checkout_query: PreCheckoutQuery):
    await bot.answer_pre_checkout_query(pre_checkout_query.id, ok=True)

async def successful_payment(message: Message):
    await bot.send_message(message.chat.id, 'Payment is Successfully!!')

def register_hadlers_cl(dp: Dispatcher):
    dp.register_message_handler(start, commands=['start'])
    dp.register_message_handler(buy_process, content_types='web_app_data')
    dp.register_pre_checkout_query_handler(checkout_process, lambda q: True)
    dp.register_message_handler(successful_payment, content_types=ContentType.SUCCESSFUL_PAYMENT)
