import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
} from "recharts";

export default function PlotGraph({ result }) {
  if (!result || !result.history) return null;

  const data = result.history.map((item) => ({
    x: item[0],
    y: item[1],
  }));

  return (
    <div className="card">
      <h2>Convergence Graph</h2>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
        >
          <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />

          <XAxis
            dataKey="x"
            tickCount={6}
            label={{
              value: "x",
              position: "insideBottom",
              offset: -10,
            }}
          />

          <YAxis
            tickCount={6}
            label={{
              value: "f(x)",
              angle: -90,
              position: "insideLeft",
            }}
          />

          <Tooltip
            formatter={(value) => Number(value).toFixed(6)}
          />

          <Line
            type="monotone"
            dataKey="y"
            stroke="#6366f1"
            strokeWidth={2}
            dot={false}
          />

          <Scatter
            data={[
              {
                x: result.min_x,
                y: result.min_value,
              },
            ]}
            fill="#ef4444"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
