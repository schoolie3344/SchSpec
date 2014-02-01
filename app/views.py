from flask import render_template, flash, redirect, session, url_for, request, g
# from flask.ext.login import login_user, logout_user, current_user, login_required
from app import app #, db, lm, oid
# from forms import LoginForm, EditForm, PostForm, SearchForm
# from models import User, ROLE_USER, ROLE_ADMIN, Post, Map, Point, Log
from datetime import datetime
# from config import POSTS_PER_PAGE, MAX_SEARCH_RESULTS


@app.route('/', methods = ['GET', 'POST'])
@app.route('/index', methods = ['GET', 'POST'])
def index():
  return render_template('index.html',
    title = 'Home')
    
@app.route('/SmartSwitch', methods = ['GET'])
def smartswitch():
  return render_template('smartswitch.html',
    title = 'DL4 Smart Switch')
    
    
@app.route('/BarEnds', methods = ['GET'])
def barends():
  return render_template('barends.html',
    title = 'Heavy Stainless Bar Ends')