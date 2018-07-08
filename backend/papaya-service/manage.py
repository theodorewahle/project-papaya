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
            description="""I need someone to help me mown the lawn during the
            timetime that I will be away during the summer. My garden is
            approximately 20 square meters, and I have all the required
            machinery for doingso""",
            status="Available",
            start_time="2018-07-15T15:00:00",
            end_time="2018-07-15T16:00:00",
            worker_rating=3.7,
            employer_rating=5.0,
            hourly_bitcoin_rate=0.02
            )
    job2 = Job(
            name='Cleaning Apartment',
            description="""Looking for someone to clean my apartment! I live in
            the Upper East Side and have no cleaning supplies at my place.
            However I will offer great company while cleaning, and will provide
            lunch.""",
            status="Pending",
            start_time="2018-07-21T11:00:00",
            end_time="2018-07-21T12:30:00",
            worker_rating=3.7,
            employer_rating=4.0,
            hourly_bitcoin_rate=0.01
            )
    job3 = Job(
            name='Baby Sitting',
            description="""Hello guys, me and my husband are going on a date,
            and are looking for a babysitter. We live in the Brooklyn, and
            would prefer someone from the area. Ideally, if you speak spanish
            However I will offer great company while cleaning, and will provide
            lunch.""",
            status="Pending",
            start_time="2018-07-21T11:00:00",
            end_time="2018-07-21T12:30:00",
            worker_rating=3.7,
            employer_rating=4.0,
            hourly_bitcoin_rate=0.01
            )
    db.session.add(job1)
    db.session.add(job2)
    db.session.add(job3)
    db.session.commit()

if __name__ == '__main__':
    manager.run()
