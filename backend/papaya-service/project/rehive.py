from flask import Blueprint, jsonify

from project import db
from project.models import User
from project.utils import db_object_as_dict
import requests
rehive_blueprint = Blueprint('rehive', __name__)


@rehive_blueprint.route('/check_balance/<user_id>', methods=['GET'])
def check_crypto_balance(user_id):
    user = User.query.filter_by(id=user_id).first()
    headers = {
    "Content-Type" : "application/json",
    "Authorization" : "Token e2fcc530141326f605ed45afbf84cd000a31689131d921aebba411ede45fb402"
    }
    response = requests.get(
    'https://api.rehive.com/3/admin/accounts/',
    headers=headers
).json()
    #users = User.query.all()
    #users_list = []
    #for user in users:
    #    user_object = db_object_as_dict(user)
    #    users_list.append(user_object)
    print(response)
    accounts = response["data"]

    for account in accounts:
        if account.user.email == user.email:
            for currency_types in account.currencies:
                if currency.currency.description == 'bitcoin':
                    print(currency.available_balance)
    response_object = {
        'status': 'success',
    'response' : response
    }
    return jsonify(response_object), 200
