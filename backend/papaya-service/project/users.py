from flask import Blueprint, jsonify

from project import db
from project.models import User
from project.utils import db_object_as_dict

users_blueprint = Blueprint('users', __name__)


@users_blueprint.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    users_list = []
    for user in users:
        user_object = db_object_as_dict(user)
        users_list.append(user_object)
    response_object = {
        'status': 'success',
        'data': users_list
    }
    return jsonify(response_object), 200
