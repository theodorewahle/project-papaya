from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def create_app():

    # instantiate the app
    app = Flask(__name__)

    # set config
    app.config.from_object('project.config.BaseConfig')

    db.init_app(app)

    from project.jobs import jobs_blueprint
    app.register_blueprint(jobs_blueprint)

    @app.route("/")
    def hello():
        return "<h1 style='color:blue'>Hello There!</h1>"

    return app



