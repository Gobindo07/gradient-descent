export default function ResultDisplay({ result }) {
  if (!result) return null;

  return (
    <div className="card">
      <h2>Optimization Result</h2>

      <div className="result-box">
        <div className="result-label">Minimum x</div>
        <div className="result-value">
          {Number(result.min_x).toFixed(6)}
        </div>
      </div>

      <div className="result-box">
        <div className="result-label">Minimum f(x)</div>
        <div className="result-value">
          {Number(result.min_value).toFixed(6)}
        </div>
      </div>
    </div>
  );
}
