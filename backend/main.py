from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin
import os
from colorFilter.main import changeImageColor
from flask.helpers import send_file
app = Flask(__name__)
cors = CORS(app)
UPLOAD_FOLDER = os.path.abspath('upload-files')
CONVERT_FOLDER = os.path.abspath('converted-files')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['CONVERT_FOLDER'] = CONVERT_FOLDER
@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/convert", methods=['POST'])
def convert():
    for i in request.files:
        extension = i.rsplit('.')[-1].lower()
        request.files[i].save(os.path.join(app.config['UPLOAD_FOLDER'], i))
        changeImageColor(os.path.join(app.config['UPLOAD_FOLDER'], i), os.path.join(app.config['CONVERT_FOLDER'], i))
        return send_file(os.path.join(app.config['CONVERT_FOLDER'], i))