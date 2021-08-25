# hello.py

"""
多行注释
"""


def application(environ, start_response):
    # a = 0

    # print(environ)
    start_response('200 OK', [('Content-Type', 'text/html')])  # 行尾注释
    # print('12\n345')
    # print(r'12345')
    # print(a)
    # a = a + 1
    # print(a)
    print('REQUEST_METHOD: ', environ['REQUEST_METHOD'])
    if (environ['PATH_INFO'] == '/favicon.ico'):
        # print('33')
        return [b'2']
    '''
    print(
        1 + 1,
        '2',
        '3'
    )
    '''

    return [b'1']
    # return [b'<h1>Hello, web!</h1>']
