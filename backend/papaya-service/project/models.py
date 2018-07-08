from project import db

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(128))

class Job(db.Model):
    __tablename__ = 'jobs'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128))
    description = db.Column(db.String(1000))
    status = db.Column(db.String(128))
    start_time = db.Column(db.DateTime())
    end_time = db.Column(db.DateTime())
    worker = db.Column(db.Integer, db.ForeignKey('users.id'))
    worker_rating = db.Column(db.Float)
    employer = db.Column(db.Integer, db.ForeignKey('users.id'))
    employer_rating = db.Column(db.Float)
    hourly_bitcoin_rate = db.Column(db.Float)
