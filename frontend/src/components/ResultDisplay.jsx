export default function ResultDisplay({ result }) {
  return (
    <div className="card">
      <h2>Optimization Result</h2>
      <p><strong>Minimum x:</strong> {result.min_x}</p>
      <p><strong>Minimum f(x):</strong> {result.min_value}</p>
    </div>
  );
}
