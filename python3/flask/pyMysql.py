import pymysql

# ---- 用pymysql 操作数据库


def get_connection():
    connect = pymysql.connect(
        host='rm-bp1naf6tv9n4kxxn6zo.mysql.rds.aliyuncs.com',
        port=3306,
        db='a_user',
        user='zsp1',
        password='Zz369369'
    )
    return connect


def sql_handle(sql):
    conn = get_connection()

    # 使用 cursor() 方法创建一个 dict 格式的游标对象 cursor
    cursor = conn.cursor(pymysql.cursors.DictCursor)

    # 使用 execute()  方法执行 SQL 查询
    cursor.execute(sql)

    # 使用 fetchone() 方法获取单条数据.
    # data = cursor.fetchone()
    data = cursor.fetchall()

    # 关闭数据库连接
    cursor.close()
    conn.close()

    return data
