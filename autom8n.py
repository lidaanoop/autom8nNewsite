from flask import Flask, render_template, request, redirect, session, url_for
import os


app = Flask(__name__,template_folder='template')
app.secret_key = os.urandom(24)

#Quotes of famous


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/faq")
def docs():
    return render_template("faq.html")

@app.route("/contactus")
def contactus():
    return render_template("contact.html")



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=None, debug=True)
