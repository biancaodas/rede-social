'''definindo crud com blueprint que chama o controller'''
from flask import Blueprint
from controllers.user_controller import index, create, read, update, delete

user_routes_bp = Blueprint('user_bp', __name__)
user_routes_bp.route ('/', methods=['GET'])(index)
user_routes_bp.route ('/', methods=['POST'])(create)
user_routes_bp.route ('/<int:id>', methods=['GET'])(read)
user_routes_bp.route ('/<int:id>', methods=['PUT', 'PATCH'])(update)
user_routes_bp.route ('/<int:id>', methods=['DELETE'])(delete)
