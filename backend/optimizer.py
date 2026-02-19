

class PolynomialOptimizer:
    """
    Gradient Descent Optimizer for Degree-4 Polynomial:
    f(x) = ax^4 + bx^3 + cx^2 + dx + e
    """

    def __init__(self, a, b, c, d, e):
        self.a = a
        self.b = b
        self.c = c
        self.d = d
        self.e = e

    def function(self, x):
        """Compute polynomial value"""
        return (
            self.a * x**4 +
            self.b * x**3 +
            self.c * x**2 +
            self.d * x +
            self.e
        )

    def derivative(self, x):
        """Compute derivative f'(x)"""
        return (
            4 * self.a * x**3 +
            3 * self.b * x**2 +
            2 * self.c * x +
            self.d
        )

    def gradient_descent(self, x_init, learning_rate, iterations):
        """
        Perform Gradient Descent Optimization
        """
        x = x_init
        history = []

        for _ in range(iterations):
            grad = self.derivative(x)
            x = x - learning_rate * grad
            history.append((x, self.function(x)))

        return {
            "min_x": x,
            "min_value": self.function(x),
            "history": history
        }
