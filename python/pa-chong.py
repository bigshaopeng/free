# http://baijiahao.baidu.com/builder/preview/s?id=1623915094811613872
# https://www.futuresquare.cn/

from urllib import request
import re

page = request.urlopen("https://www.futuresquare.cn/")
content = page.read().decode("utf-8")
pic = re.findall("png",content)
print pic
# for p in pic
#     print p