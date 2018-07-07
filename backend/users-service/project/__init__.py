from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
db = SQLAlchemy(app)


@app.route("/")
def hello():
    return "<h1 style='color:blue'>Hello There!</h1>"

