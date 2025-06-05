from flask import Flask, render_template, jsonify, request
import os

app = Flask(__name__)

@app.route('/')
def index():
    user_ip = request.remote_addr
    return render_template('index.html', ip=user_ip)

@app.route('/get-images')
def get_images():
    image_dir = os.path.join(app.static_folder, 'images')
    allowed_exts = {'.jpg', '.jpeg', '.png', '.gif', '.webp'}
    images = [f for f in os.listdir(image_dir) if os.path.splitext(f)[1].lower() in allowed_exts]
    return jsonify(images)
