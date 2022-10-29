from aiogram.types import KeyboardButton, ReplyKeyboardMarkup, WebAppInfo

web_app = WebAppInfo(url="https://qnieq.github.io/")

keyboard = ReplyKeyboardMarkup(
    keyboard=[
        [KeyboardButton(text="Site", web_app=web_app)]
    ],
    resize_keyboard=True
)
