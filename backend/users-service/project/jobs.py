from flask import Blueprint, jsonify
from project import db
from project.models import Job

jobs_blueprint = Blueprint('jobs', __name__)
@jobs_blueprint.route('/jobs', methods=['GET'])
def get_jobs():
    response_object = {
        'status': 'success',
        'data': 'All Jobs'
    }
    return jsonify(response_object), 200
