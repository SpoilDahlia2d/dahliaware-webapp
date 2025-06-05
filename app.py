from flask import Flask, render_template, send_from_directory, jsonify, request
import os

app = Flask(__name__, static_folder="static")

# Percorso della cartella immagini
IMAGE_FOLDER = os.path.join("static", "pubblic")
ALLOWED_EXTENSIONS = {".png", ".jpg", ".jpeg", ".gif", ".webp"}

@app.route("/")
def home():
    user_ip = request.remote_addr
    return render_template("index.html", ip=user_ip)

@app.route("/images")
def list_images():
    files = os.listdir(IMAGE_FOLDER)
    images = [f"/static/pubblic/{f}" for f in files if os.path.splitext(f)[1].lower() in ALLOWED_EXTENSIONS]
    return jsonify(images)

# Serve file audio se necessario (opzionale)
@app.route("/audio/<filename>")
def get_audio(filename):
    return send_from_directory(os.path.join("static", "audio"), filename)

if __name__ == "__main__":
    app.run(debug=True)
