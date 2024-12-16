import sqlite3

class DBContext:
    
    def __init__(self, _db_name:str):
        self.db_name = _db_name
    
    def _connect_database(self, db_name:str):
        return sqlite3.connect(db_name)
    
    def create_database(self, create_statement:str):
        self.execute(create_statement)
    
    def execute(self, query:str):
        db = self._connect_database(self.db_name)
        cursor = db.cursor()
        cursor.execute(query)
        result = cursor.fetchall()
        
        db.commit()
        db.close()
        
        return result