from flask import Flask
from flask import jsonify
from flask import request

app = Flask(__name__)

users = [
    {"id": 1, "name": "Jhon", "email": "teste@teste.com"},
    {"id": 2, "name": "Jane", "email": "teste2@teste.com"},
]

def gera_novo_id():
    return max(user["id"] for user in users) + 1

'''retorna lista de usuários'''
@app.route("/", methods=['GET'])
def list_users():
    return jsonify(users)


'''retorna o usuário com base no id'''
@app.route("/<int:id>", methods=['GET'])
def list_user(id):
    user = [user for user in users if user["id"] == id]
    return jsonify(user[0])

'''inserir usuário'''
@app.route("/", methods=['POST'])
def new_user():
    if request.is_json:
        new = request.get_json()
        new["id"] = gera_novo_id()
        users.append(new)

        return jsonify({"mensagem": "usuário adicionado"}, 201)
    
    return jsonify({"error": "a requisição precisa estar no padrão JSON"}, 415)

'''atualiza usuário'''
@app.route("/<int:id>", methods=['PUT', 'PATCH'])
def att_user(id):
    if request.is_json:

        user_request = request.get_json()

        user_banco = [user for user in users if user["id"] == id]
        user_banco[0].update(user_request)

        return jsonify({"mensagem": "usuário atualizado"}, 201)

    return jsonify({"error": "a requisição precisa estar no padrão JSON"}, 415)


'''deletar usuário'''
@app.route("/<int:id>", methods=['DELETE'])
def delete_user(id):
    user = [user for user in users if user["id"] == id]
    users.remove(user[0])
    return jsonify({"mensagem": "usuário removido"}, 204)


if __name__=='__main__':
    app.debug = True
    app.run()







    # '''atualiza parcialmente um usuário'''
# @app.route("/<int:id>", methods=['PATCH'])
# def att_partly_user(id):
#     if request.is_json:

#         user_request = request.get_json()

#         user_banco = [user for user in users if user["id"] == id]
#         user_banco[0].update(user_request)

#         return jsonify({"mensagem": "usuário atualizado"}, 201)

#     return jsonify({"error": "a requisição precisa estar no padrão JSON"}, 415)

