import os
from flask import Flask, render_template, send_from_directory, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/get-images')
def get_images():
    image_dir = os.path.join(app.static_folder, 'images')
    allowed_exts = {'.jpg', '.jpeg', '.png', '.gif', '.webp'}
    images = [f for f in os.listdir(image_dir) if os.path.splitext(f)[1].lower() in allowed_exts]
    return jsonify(images)
