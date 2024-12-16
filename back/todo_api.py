from todo_db_context import TodoDBContext as tdbc
from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/add-item",methods=["POST"])
def add():
    item = request.get_json()
    db = tdbc()
    db.add_task(item["task"], item["date"], item["priority"])
    return jsonify(item);


@app.route("/get_items", methods=["GET"])
def get_all():
    db = tdbc()
    items = []
    result = db.get_tasks()
    for r in result:
        items.append({"id":r[0],"task":r[1],"date":r[2],"priority":r[3]})
    return jsonify(items);


@app.route("/update-item", methods=["PUT"])
def update():
    item = request.get_json()
    db = tdbc()
    db.update_task(item["id"], item["task"], item["date"], item["priority"])
    return jsonify(item);


@app.route("/delete-item/<task_id>", methods=["DELETE"])
def delete(task_id):
    db = tdbc()
    db.delete_task(task_id)
    return({})


def run():
    app.run(debug=True)