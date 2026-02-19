import React, { useState } from "react";
import PolynomialForm from "./components/PolynomialForm";
import ResultDisplay from "./components/ResultDisplay";
import PlotGraph from "./components/PlotGraph";
import "./styles.css";

function App() {
  const [result, setResult] = useState(null);

  const [equationData, setEquationData] = useState({
    a: 1,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
  });

  const formatTerm = (coef, power) => {
    if (coef === 0) return "";
    const sign = coef > 0 ? " + " : " - ";
    const absCoef = Math.abs(coef);

    if (power === 0) return `${sign}${absCoef}`;
    if (power === 1)
      return `${sign}${absCoef === 1 ? "" : absCoef}x`;
    return `${sign}${absCoef === 1 ? "" : absCoef}x${power === 2 ? "²" : power === 3 ? "³" : "⁴"}`;
  };

  const buildEquation = () => {
    const { a, b, c, d, e } = equationData;

    let eq = "f(x) =";

    if (a !== 0) eq += `${a === 1 ? "" : a}x⁴`;
    eq += formatTerm(b, 3);
    eq += formatTerm(c, 2);
    eq += formatTerm(d, 1);
    eq += formatTerm(e, 0);

    return eq.replace("+ -", "- ");
  };

  return (
    <div className="container">
      <h1>Gradient Descent Optimizer</h1>
      <p className="subtitle">
        Optimization of a 4th-degree polynomial using Gradient Descent Algorithm
      </p>

      <div className="card">
        <h2>Mathematical Model</h2>
        <p style={{ textAlign: "center", fontSize: "18px" }}>
          {buildEquation()}
        </p>
      </div>

      <PolynomialForm
        setResult={setResult}
        setEquationData={setEquationData}
      />

      {result && (
        <>
          <ResultDisplay result={result} />
          <PlotGraph result={result} />
        </>
      )}
    </div>
  );
}

export default App;
