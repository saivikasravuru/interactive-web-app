from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')
 
@app.route('/api/button', methods=['POST'])
def button():
    data = request.get_json()
    button_id = data.get('button')
    return jsonify({'message': f'You clicked {button_id}!'})

if __name__ == '__main__':
    app.run(debug=True)
 
