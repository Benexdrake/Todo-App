from db_context import DBContext as dbc

class TodoDBContext:
    def __init__(self):
        self.db_context = dbc("todo.db")
        self.create_todo_item_table()

    def create_todo_item_table(self):
        create_table = """
        CREATE TABLE IF NOT EXISTS Items
        (
            id INTEGER PRIMARY KEY,
            task varchar(128),
            date DATE,
            priority int
        )
        """
        self.db_context.create_database(create_table)

    def add_task(self, task, date, priority):
        self.db_context.execute(f"""
                                    INSERT INTO items (task, date, priority)
                                    values
                                    ('{task}', '{date}', {priority});
                                """)

    def get_tasks(self):
        return self.db_context.execute('SELECT * FROM items;')

    def update_task(self, id, task, date, priority):
        self.cursor.execute(f'''UPDATE todo SET task = "{task}", date = "{date}", priority = {priority} where id == {id}''')

    def delete_task(self, id):
        self.db_context.execute(f"""
                                DELETE FROM items WHERE id = {id};
                                """)