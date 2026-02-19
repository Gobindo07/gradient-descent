import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/optimize";

export default function PolynomialForm({ setResult, setEquationData }) {
  const [formData, setFormData] = useState({
    a: 1,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    x_init: 2,
    learning_rate: 0.001,
    iterations: 1000,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Send coefficients to parent whenever they change
  useEffect(() => {
    if (setEquationData) {
      setEquationData({
        a: formData.a,
        b: formData.b,
        c: formData.c,
        d: formData.d,
        e: formData.e,
      });
    }
  }, [formData.a, formData.b, formData.c, formData.d, formData.e]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value === "" ? "" : parseFloat(value),
    });
  };

  const handleSubmit = async () => {
    if (formData.learning_rate <= 0) {
      setError("Learning rate must be greater than 0");
      return;
    }

    if (formData.iterations <= 0) {
      setError("Iterations must be greater than 0");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await axios.post(API_URL, formData);
      setResult(res.data);
    } catch (err) {
      setError("Error running optimization");
    }

    setLoading(false);
  };

  return (
    <div className="card">
      <h2>Polynomial Coefficients</h2>

      {["a", "b", "c", "d", "e"].map((key) => (
        <div className="input-group" key={key}>
          <label>
            Coefficient {key} (
            {key === "a"
              ? "x⁴"
              : key === "b"
              ? "x³"
              : key === "c"
              ? "x²"
              : key === "d"
              ? "x"
              : "constant"}
            )
          </label>
          <input
            type="number"
            name={key}
            value={formData[key]}
            onChange={handleChange}
          />
        </div>
      ))}

      <h2>Optimization Parameters</h2>

      <div className="input-group">
        <label>Initial x</label>
        <input
          type="number"
          name="x_init"
          value={formData.x_init}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Learning Rate</label>
        <input
          type="number"
          step="0.0001"
          name="learning_rate"
          value={formData.learning_rate}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Iterations</label>
        <input
          type="number"
          name="iterations"
          value={formData.iterations}
          onChange={handleChange}
        />
      </div>

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Optimizing..." : "Run Optimization"}
      </button>

      {error && <p className="error">{error}</p>}
    </div>
  );
}
