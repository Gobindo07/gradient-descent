import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/optimize";

export default function PolynomialForm({ setResult }) {
  const [formData, setFormData] = useState({
    a: 1, b: 0, c: 0, d: 0, e: 0,
    x_init: 2,
    learning_rate: 0.001,
    iterations: 1000
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: parseFloat(e.target.value)
    });
  };

  const handleSubmit = async () => {
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
      {Object.keys(formData).map((key) => (
        <input
          key={key}
          type="number"
          name={key}
          placeholder={key}
          value={formData[key]}
          onChange={handleChange}
        />
      ))}
      <button onClick={handleSubmit}>
        {loading ? "Optimizing..." : "Run Optimization"}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
