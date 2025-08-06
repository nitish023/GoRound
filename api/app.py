from flask import Flask
from flask_cors import CORS
from routes import goal_routes

app = Flask(__name__)
CORS(app)  # allows cross-origin calls from React

app.register_blueprint(goal_routes)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
