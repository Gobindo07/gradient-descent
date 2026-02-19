from flask import Flask, request, jsonify
from flask_cors import CORS
from optimizer import PolynomialOptimizer

app = Flask(__name__)
CORS(app)

@app.route("/optimize", methods=["POST"])
def optimize():
    try:
        data = request.json

        required_fields = [
            "a", "b", "c", "d", "e",
            "x_init", "learning_rate", "iterations"
        ]

        for field in required_fields:
            if field not in data:
                return jsonify({"error": f"Missing field: {field}"}), 400

        optimizer = PolynomialOptimizer(
            data["a"],
            data["b"],
            data["c"],
            data["d"],
            data["e"]
        )

        result = optimizer.gradient_descent(
            data["x_init"],
            data["learning_rate"],
            data["iterations"]
        )

        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/")
def home():
    return jsonify({"message": "Gradient Descent API Running"})


if __name__ == "__main__":
    app.run(debug=True)
