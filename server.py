from flask import Flask, render_template

app = Flask('Yaiko')

@app.route('/')
def main_page():
    return render_template('index.html')

@app.route('/shop')
def shop_page():
    return render_template('shop.html')

@app.route('/game')
def game_page():
    return render_template('game.html')


if __name__ == '__main__':
    app.run(debug=True)