from flask import Flask
import json

app = Flask (__name__)

@app.route('/data')
def flask_api():
    return json.dumps({
        'name': 'Brandon',
        'month': 'June'
    })