
from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/images')
def list_images():
    image_folder = os.path.join(app.static_folder, 'images')
    allowed_ext = ('.png', '.jpg', '.jpeg', '.webp', '.gif')
    files = [f'/static/images/{img}' for img in os.listdir(image_folder) if img.lower().endswith(allowed_ext)]
    return {'images': files}

if __name__ == '__main__':
    app.run(debug=True)
