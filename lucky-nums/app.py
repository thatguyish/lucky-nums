from flask import Flask, render_template,request,jsonify
from tools import validate_json
from random import randint
import requests

app = Flask(__name__)


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")

@app.route("/api/get-lucky-num",methods=["POST"])
def get_lucky_num():
    """Get your lucky number and fact as json data"""
    if validate_json(request.json) == True:
        
        numbers_api_url = 'http://numbersapi.com/'
        number = randint(1,100)
        year = request.json['year']
        
        number_fact = requests.get(numbers_api_url+str(number)+'?json').json()

        year_fact = requests.get(numbers_api_url+year+'/year?json').json()

        numbers_and_facts = {'num':{'num':number_fact['number'],'fact':number_fact['text']},'year':{'year':year_fact['number'],'fact':year_fact['text']}}
        return jsonify(numbers_and_facts)
    else:
        errors = validate_json(request.json)

        return jsonify(errors=errors)
