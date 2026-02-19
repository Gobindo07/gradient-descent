import {
  LineChart, Line, XAxis, YAxis,
  Tooltip, CartesianGrid,
  ResponsiveContainer, Scatter
} from "recharts";

export default function PlotGraph({ result }) {

  const data = result.history.map((item) => ({
    x: item[0],
    y: item[1]
  }));

  return (
    <div className="card">
      <h2>Convergence Graph</h2>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid stroke="#e2e8f0" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="y" stroke="#6366f1" strokeWidth={2} />
          <Scatter
            data={[{ x: result.min_x, y: result.min_value }]}
            fill="red"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
