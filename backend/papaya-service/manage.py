from flask_script import Manager
from datetime import datetime

from project import create_app, db
from project.models import User, Job

app = create_app()

manager = Manager(app)

@manager.command
def recreate_db():
    """Recreates a database."""
    db.drop_all()
    db.create_all()
    db.session.commit()

@manager.command
def seed_db():
    """Seeds the database."""
    worker= User(
        email='papaya@worker.com',
    )
    db.session.add(worker)
    boss = User(
        email='papaya@boss.com',
    )
    db.session.add(boss)
    db.session.commit()
    job1 = Job(
            name='Mowing the Lawn',
            description="This is the description",
            status="pending",
            start_time=datetime.now(),
            end_time=datetime.now(),
            worker_rating=3.7,
            employer_rating=3.8,
            hourly_bitcoin_rate=0.002
            )
    db.session.add(job1)
    db.session.commit()

if __name__ == '__main__':
    manager.run()
