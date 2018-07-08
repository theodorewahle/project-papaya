from flask import Blueprint, jsonify, request
import datetime
from project import db
from project.models import Job
from project.utils import db_object_as_dict

jobs_blueprint = Blueprint('jobs', __name__)


@jobs_blueprint.route('/jobs', methods=['GET'])
def get_jobs():
    jobs = Job.query.all()
    jobs_list = []
    for job in jobs:
        job_object = db_object_as_dict(job)
        jobs_list.append(job_object)
    response_object = {
        'status': 'success',
        'data': jobs_list
    }
    return jsonify(response_object), 200
# TODO This needs to go in the users API side 
@jobs_blueprint.route('/jobs/pending_employer/<employer_id>', methods=['POST','GET'])
def get_jobs_by_status_and_employer(employer_id):
    #jobs = Job.query.filter_by(employer=employer_id,status="pending")
    #jobs_list = []
    #for job in jobs:
    #    job_object = db_object_as_dict(job)
    #    jobs_list.append(job_object)
    Job.query.delete()
    db.session.commit()
    response_object = {
        'status': 'success',
    }
    return jsonify(response_object), 200

#@jobs_blueprint.route('/jobs/pending_worker/<worker_id>', methods=['GET'])
#def get_jobs_by_status_and_worker(worker_id):
#    jobs = Job.query.filter_by(worker=worker_id,status="pending")
#    jobs_list = []
#    for job in jobs:
#        job_object = db_object_as_dict(job)
#        jobs_list.append(job_object)
#    response_object = {
#        'status': 'success',
#        'data': jobs_list
#    }
#    return response_object
@jobs_blueprint.route('/jobs/update/<job_id>', methods=['PATCH'])
def update_job(job_id):
    updatedable_fields = ['status','worker', 'start_time','end_time','description']
    details = request.json
    job = Job.query.filter_by(id=job_id).first()
    for key, value in details.items():
        if key in updatedable_fields:
            setattr(job, key, value) 
    print(job.description)
    job_object = db_object_as_dict(job)
    db.session.commit()
    response_object = {
        'status': 'success',
        'data': job_object
    }
    return jsonify(response_object), 201

@jobs_blueprint.route('/jobs/<job_id>', methods=['GET'])
def get_single_job(job_id):
    job = Job.query.filter_by(id=job_id).first()
    job_object = db_object_as_dict(job)
    response_object = {
        'status': 'success',
        'data': job_object
    }
    return jsonify(response_object), 200
# TODO Also needs to go on Users API
@jobs_blueprint.route('/jobs/available/<employer>', methods=['GET'])
def get_available_job_employer(employer):
    job = Job.query.filter_by(employer=employer,status="available").first()
    job_object = db_object_as_dict(job)
    response_object = {
        'status': 'success',
        'data': job_object
    }
    return jsonify(response_object), 200
@jobs_blueprint.route('/jobs/post', methods=['POST'])
def post_job():
    details = request.json
    job = Job()
    for key, value in details.items():
        try:
            setattr(job, key, value) 
        except:
            pass
    db.session.add(job)
    db.session.commit()
    job_object = db_object_as_dict(job)
    response_object = {
        'status': 'success',
        'data': job_object
    }
    return jsonify(response_object), 200
