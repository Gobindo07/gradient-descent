from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Derivative of degree 4 function
def derivative(a, b, c, d, x):
    return 4*a*x**3 + 3*b*x**2 + 2*c*x + d


# Gradient Descent Function
def gradient_descent(a, b, c, d, e, x, lr, it):

    for i in range(it):
        grad = derivative(a, b, c, d, x)
        x = x - lr * grad

    y = a*x**4 + b*x**3 + c*x**2 + d*x + e

    return x, y


@app.route("/optimize", methods=["POST"])
def optimize():

    data = request.json

    a = float(data["a"])
    b = float(data["b"])
    c = float(data["c"])
    d = float(data["d"])
    e = float(data["e"])

    x = float(data["x"])
    lr = float(data["lr"])
    it = int(data["it"])

    min_x, min_y = gradient_descent(a,b,c,d,e,x,lr,it)

    return jsonify({
        "min_x": min_x,
        "min_y": min_y
    })


if __name__ == "__main__":
    app.run(debug=True)
