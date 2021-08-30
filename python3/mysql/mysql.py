import mysql.connector

mydb = mysql.connector.connect(
    host="rm-bp1naf6tv9n4kxxn6zo.mysql.rds.aliyuncs.com",       # 数据库主机地址
    user="zsp1",    # 数据库用户名
    passwd="Zz369369",   # 数据库密码
    port='3306',
    database="a_user"  # 数据库名称
)

print(mydb)
