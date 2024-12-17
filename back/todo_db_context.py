from db_context import DBContext as dbc

class TodoDBContext:
    def __init__(self):
        self.db_context = dbc("todo.db")
        self.create_todo_item_table()

    def create_todo_item_table(self):
        create_table = """
        CREATE TABLE IF NOT EXISTS Tasks
        (
            id INTEGER PRIMARY KEY,
            task varchar(128),
            date DATE,
            priority INTEGER,
            finished INTEGER
        )
        """
        self.db_context.create_database(create_table)

    def add_task(self, task, date, priority, finished):
        self.db_context.execute(f"""
                                    INSERT INTO tasks (task, date, priority, finished)
                                    values
                                    ('{task}', '{date}', {priority}, {finished});
                                """)

    def get_tasks(self):
        return self.db_context.execute('SELECT * FROM tasks;')

    def update_task(self, task_id, task, date, priority, finished):
        return self.db_context.execute(f'''UPDATE tasks SET task = "{task}", date = "{date}", priority = {priority}, finished = {finished} where id == {task_id}''')

    def delete_task(self, id):
        self.db_context.execute(f"""
                                DELETE FROM tasks WHERE id = {id};
                                """)