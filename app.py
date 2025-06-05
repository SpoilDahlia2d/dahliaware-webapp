from flask import Flask, render_template
import os

app = Flask(__name__, static_folder="static")

@app.route('/')
def index():
    image_dir = os.path.join(app.static_folder, 'images')
    allowed_ext = ['.png', '.jpg', '.jpeg', '.webp', '.gif']
    image_files = [f for f in os.listdir(image_dir) if os.path.splitext(f)[1].lower() in allowed_ext]
    return render_template('index.html', image_files=image_files)

if __name__ == '__main__':
    app.run()
