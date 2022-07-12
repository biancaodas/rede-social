'''banco de dados manual'''
users = [
    {"id": 1, "name": "Jhon", "email": "teste@teste.com"},
    {"id": 2, "name": "Jane", "email": "teste2@teste.com"},
    {"id": 3, "name": "Josh", "email": "teste2@teste.com"}
]


def create_new_id():
    '''localiza o maior id e adiciona 1'''
    return max(user["id"] for user in users) + 1
