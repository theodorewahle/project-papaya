from flask import Blueprint, jsonify

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
