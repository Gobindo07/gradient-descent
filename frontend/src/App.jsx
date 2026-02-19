import React, { useState } from "react";
import PolynomialForm from "./components/PolynomialForm";
import ResultDisplay from "./components/ResultDisplay";
import PlotGraph from "./components/PlotGraph";
import "./styles.css";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="container">
      <h1>Gradient Descent Optimizer</h1>
      <PolynomialForm setResult={setResult} />
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
