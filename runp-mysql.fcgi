#!flask/bin/python

import os
if os.path.dirname(os.path.abspath('runp-mysql.fcgi')) == '/home/apps/SchSpec':
  os.environ['SSTEST_DATABASE_URL'] = 'mysql://apps:Amanda09@localhost/SchSpec'
elif os.path.dirname(os.path.abspath('runp-mysql.fcgi')) == '/home/apps/SchSpecTest':
  os.environ['SSTEST_DATABASE_URL'] = 'mysql://apps:Amanda09@localhost/SchSpecTest'
else:
  print "What the heck?"

from flup.server.fcgi import WSGIServer
from app import app

if __name__ == '__main__':
    WSGIServer(app).run()