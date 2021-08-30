from logging import debug
from flask import Flask, render_template


app = Flask(__name__)


@app.route('/hello')
@app.route('/hello/<name>')
def hello(name=None):
    if name:
        return name

    return '<span style="color: red;">render_template</span>'
    # return name ? 'render_template' : name
    # return render_template('hello.html', name=name)


if __name__ == "__main__":
    app.run(
        # host="0.0.0.0",
        port=8000,
        debug=True
    )
