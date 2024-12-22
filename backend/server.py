from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

print("Flask server is starting...")
data_store = []

@app.route('/add',methods=['POST'])
def add_string():
    content = request.json.get('input','')
    if content:
        data_store.append(content)
        print(f"added string:{content}")
    return jsonify({'message':'String added','data':data_store})



if __name__ == '__main__':
    app.run(debug=True)




