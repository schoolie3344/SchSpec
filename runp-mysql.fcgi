#!flask/bin/python

# use mysql
import os
# os.environ['DATABASE_URL'] = 'mysql://apps:Amanda09@localhost/apps'

from flup.server.fcgi import WSGIServer
from app import app

if __name__ == '__main__':
    WSGIServer(app).run()