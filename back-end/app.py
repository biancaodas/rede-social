'''CRUD com flask que chama blueprint'''
from flask import Flask
from routes.user_routes_bp import user_routes_bp

app = Flask(__name__)

app.register_blueprint(user_routes_bp, url_prefix = '/user')

if __name__=='__main__':
    app.debug = True
    app.run()
    