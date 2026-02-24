'use client';
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { month: "Jan", score: 70 },
  { month: "Feb", score: 78 },
  { month: "Mar", score: 85 },
];

export default function Dashboard() {
  return (
    <div style={{ padding: "40px", background: "#ffffff", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "40px", fontWeight: "bold", color: "#1D4ED8" }}>
        PropertyGenome Dashboard
      </h1>

      <div style={{
        background: "#EFF6FF",
        padding: "30px",
        borderRadius: "16px",
        marginTop: "30px",
        maxWidth: "600px"
      }}>
        <h2 style={{ fontSize: "20px", color: "#555" }}>Property Score</h2>
        <p style={{ fontSize: "64px", color: "#1D4ED8", fontWeight: "bold" }}>
          85 / 100
        </p>
        <p style={{ color: "green", fontWeight: "600" }}>
          Excellent Investment Grade
        </p>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Score Trend</h2>
        <LineChart width={600} height={300} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="score" />
        </LineChart>
      </div>
    </div>
  );
}
