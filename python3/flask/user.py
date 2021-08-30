from flask import Flask, url_for, request, render_template, json
from pyMysql import get_connection
import pymysql


def user(app):

    # 用户登录
    @app.route('/login', methods=['POST'])
    def login():
        if request.method == 'POST':
            # mysql 连接查询
            conn = get_connection()
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            cursor.execute("select * from a_user")
            data = cursor.fetchall()

            res = {'msg': data, 'code': 200}
            return json.dumps(res, ensure_ascii=False)
        else:
            res = {'msg': 'login error', 'code': 200}
            return json.dumps(res, ensure_ascii=False)

    # 用户退出
    @app.route('/quit', methods=['POST'])
    def quit():
        if request.method == 'POST':
            # mysql 连接查询
            conn = get_connection()
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            cursor.execute("select * from a_user")
            data = cursor.fetchall()

            res = {'msg': data, 'code': 200}
            return json.dumps(res, ensure_ascii=False)
        else:
            res = {'msg': 'login error', 'code': 200}
            return json.dumps(res, ensure_ascii=False)
