from todo_db_context import TodoDBContext as tdbc
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

class Base(BaseModel):
    task_id:int
    task:str
    date:str
    priority:int
    finished:bool


app = FastAPI()

origins = [
    "http://127.0.0.1:5500",
]

app.add_middleware( 
    CORSMiddleware, 
    allow_origins=origins, 
    allow_credentials=True, 
    allow_methods=["*"], 
    allow_headers=["*"]
    )

@app.get('/')
def home():
    return 'Hello World'


@app.post("/add-task")
def add(item:Base):
    db = tdbc()
    db.add_task(item.task, item.date, item.priority, item.finished)
    return item;


@app.get("/get-tasks")
def get_all():
    db = tdbc()
    items = []
    result = db.get_tasks()
    for r in result:
        items.append({"id":r[0],"task":r[1],"date":r[2],"priority":r[3], "finished": r[4]})
    return items;


@app.put("/update-task")
def update(item:Base):
    db = tdbc()
    db.update_task(item.task_id, item.task, item.date, item.priority, item.finished)
    return item;


@app.delete("/delete-task/{task_id}")
def delete(task_id):
    db = tdbc()
    db.delete_task(task_id)
    return {}