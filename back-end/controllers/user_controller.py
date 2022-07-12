'''Define as rotas/processamento da aplicação que chama do models'''
from flask import jsonify
from flask import request
from models import user_db

def index():
    '''retorna lista de usuários'''
    return jsonify(user_db.users)

def create():
    '''criar usuário'''
    if request.is_json:
        new = request.get_json()
        new["id"] = user_db.create_new_id()
        user_db.users.append(new)
        return jsonify({"mensagem": "usuário adicionado"}, 201)
    return jsonify({"error": "a requisição precisa estar no padrão JSON"}, 415)

def read(id):
    '''retorna o usuário com base no id'''
    user = [user for user in user_db.users if user["id"] == id]
    return jsonify(user[0])

def update(id):
    '''atualiza um usuário'''
    if request.is_json:
        user_request = request.get_json()
        user_banco = [user for user in user_db.users if user["id"] == id]
        user_banco[0].update(user_request)
        return jsonify({"mensagem": "usuário atualizado"}, 201)
    return jsonify({"error": "a requisição precisa estar no padrão JSON"}, 415)

def delete(id):
    '''deleta um usuário do banco de dados'''
    user = [user for user in user_db.users if user["id"] == id]
    user_db.users.remove(user[0])
    return jsonify({"mensagem": "usuário removido"}, 204)
