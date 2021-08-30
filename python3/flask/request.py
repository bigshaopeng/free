from flask import Flask, url_for, request, render_template, json
from flask_cors import CORS, cross_origin
from pyMysql import get_connection
from user import user

import pymysql

app = Flask(__name__)
# 允许所有接口跨域
CORS(app, supports_credentials=True)

# 单接口跨域--失败
# @cross_origin(supports_credentials=True)

user(app)
# @app.route('/login', methods=['POST'])
# def login():
#     if request.method == 'POST':
#         # mysql 连接查询
#         conn = get_connection()
#         cursor = conn.cursor(pymysql.cursors.DictCursor)
#         cursor.execute("select * from a_user")
#         data = cursor.fetchall()

#         res = {'msg': data, 'code': 200}
#         return json.dumps(res, ensure_ascii=False)
#     else:
#         res = {'msg': 'login error', 'code': 200}
#         return json.dumps(res, ensure_ascii=False)


if __name__ == "__main__":
    # host='0.0.0.0' 允许通过ip 访问
    app.run(port=8000, debug=True, host='0.0.0.0')
