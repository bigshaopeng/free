from flask import Flask

app = Flask(__name__)


@app.route('/')
def index():
    return "hello word"


print('__name__:', __name__)

if __name__ == '__main__':
    app.debug = True  # 设置调试模式，生产的时候关闭
    app.run()
