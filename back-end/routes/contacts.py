from flask import Blueprint

contacts = Blueprint('contacts',__name__)

@contacts.route("/")
def home():
    return 'Lista de contatos'

@contacts.route('/new')
def add_contact():
    return "salvando um contato"