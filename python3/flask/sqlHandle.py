from flask import request, json
from pyMysql import sql_handle


def sqlHandle(app):

    @app.route('/sqlHandle', methods=['POST'])
    def createTable():
        body = request.json or {}
        data = sql_handle(body['sql'], True)
        res = {'msg': data, 'code': 200}
        return json.dumps(res, ensure_ascii=False)
