from flask import Flask
from datetime import datetime, time
from flask_sqlalchemy import SQLAlchemy
from flask.json import JSONEncoder

db = SQLAlchemy()
class CustomJSONEncoder(JSONEncoder):
    def default(self, obj):
        try:
            if isinstance(obj, datetime):
                return obj.isoformat()
            elif isinstance(obj, time):
                return obj.isoformat()
            iterable = iter(obj)
        except TypeError:
            pass
        else:
            return list(iterable)
        return JSONEncoder.default(self, obj)

def create_app():

    # instantiate the app
    app = Flask(__name__)

    # Set custom encoder
    app.json_encoder = CustomJSONEncoder

    # set config
    app.config.from_object('project.config.BaseConfig')

    db.init_app(app)

    from project.jobs import jobs_blueprint
    app.register_blueprint(jobs_blueprint)
    from project.users import users_blueprint
    app.register_blueprint(users_blueprint)

    @app.route("/")
    def hello():
        return "<h1 style='color:blue'>Hello There!</h1>"

    return app



