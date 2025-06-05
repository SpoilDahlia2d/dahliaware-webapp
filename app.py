from flask import Flask, render_template, request
import os

app = Flask(__name__)

@app.route("/")
def index():
    ip = request.headers.get('X-Forwarded-For', request.remote_addr)
    return render_template("index.html", ip=ip)

if __name__ == "__main__":
    app.run(debug=True)
