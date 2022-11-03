import sqlite3 as sq

class DataBase:
    def __init__(self, db_file):
        self.connect = sq.connect(db_file)
        self.cursor = self.connect.cursor()

    async def get_user_product(self, name):
        with self.connect:
            return self.cursor.execute("""SELECT * FROM product WHERE name=(?)""",
                                       [name]).fetchall()

    async def get_cart(self, user_id):
        with self.connect:
            return self.cursor.execute("""SELECT * FROM cart WHERE user_id=(?)""",
                                       [user_id]).fetchall()

    async def add_to_cart(self, name, user_id, count):
        with self.connect:
            return self.cursor.execute("""INSERT INTO cart (name, user_id, count) VALUES (?, ?, ?)""",
                                       [name, user_id, count])

    async def empty_cart(self, user_id):
        with self.connect:
            return self.cursor.execute("""DELETE FROM cart WHERE user_id=(?)""", [user_id])