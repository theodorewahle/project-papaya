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
@jobs_blueprint.route('/jobs/pending/<user_id>', methods=['POST','GET'])
def get_jobs_by_status(user_id):
    jobs = Job.query.filter_by(id=user_id,status="pending")
    jobs_list = []
    for job in jobs:
        job_object = db_object_as_dict(job)
        jobs_list.append(job_object)
    response_object = {
        'status': 'success',
        'data': jobs_list
    }
    return jsonify(response_object), 200
#@jobs_blueprint.route('/post_job', methods=['POST','GET'])
#def post_jobs():
#    job_details = request.json
#    name = job_details['name']
#    description = job_details['description']
#    status = job_details['status']
#    start = job_details['start_time']
#    start_time = datetime.datetime(start)
#    start_time.strftime('%m/%d/%Y')
#    end = job_details['end_time']
#    end_time = datetime.datetime(end)
#    end_time.strftime('%m/%d/%Y')
#    employer = job_details['employer']
#    btc_rate = job_details['hourly_bitcoin_rate']
#    Job.insert().values(name=name,description=description, status = status,
#                        start_time = start_time, end_time = end_time, employer
#                        = employer, hourly_bitcoin_rate = btc_rate)
#    response_object = {
#        'status': 'success',
#        'data': jobs_list
#    }
