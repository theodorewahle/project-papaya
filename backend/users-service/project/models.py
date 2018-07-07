from app import db

class UserAccount(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(128))

class Jobs(db.Model):
    __tablename__ = 'jobs'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128))
    description = String(db.String(256))
	status = db.Column(db.String(128)) #pending
    start_time = db.Column(db.DateTime())
    end_time = db.Column(db.DateTime())
    worker = db.Column(db.Integer, db.ForeignKey('users.id'))
    worker_rating = db.Column(db.Float)
    employer = db.Column(db.Integer, db.ForeignKey('users.id'))
    employer_rating = db.Column(db.Float)
    hourly_bitcoin_rate = db.Column(db.Float)
