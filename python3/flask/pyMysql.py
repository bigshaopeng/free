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


# conn = get_connection()

# # 使用 cursor() 方法创建一个 dict 格式的游标对象 cursor
# cursor = conn.cursor(pymysql.cursors.DictCursor)

# # 使用 execute()  方法执行 SQL 查询
# cursor.execute("select * from a_user")

# # 使用 fetchone() 方法获取单条数据.
# data = cursor.fetchone()

# print(11, cursor)
# # print("-- 当前数量: %d " % data['total'])

# # 关闭数据库连接
# cursor.close()
# conn.close()
