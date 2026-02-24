'use client';
import { useState } from "react";

export default function Analyzer() {
  const [address, setAddress] = useState("");
  const [score, setScore] = useState<number | null>(null);

  const analyzeProperty = () => {
    const generatedScore = Math.floor(60 + Math.random() * 40);
    setScore(generatedScore);
  };

  return (
    <div style={{ minHeight: "100vh", padding: "40px", background: "#ffffff" }}>
      <h1 style={{ fontSize: "40px", color: "#1D4ED8", fontWeight: "bold" }}>
        Property Analyzer
      </h1>

      <div style={{
        background: "#EFF6FF",
        padding: "30px",
        borderRadius: "16px",
        marginTop: "30px",
        maxWidth: "600px"
      }}>
        <label style={{ fontSize: "18px", fontWeight: "600" }}>
          Enter Property Address
        </label>

        <input
          type="text"
          placeholder="123 Main St, Charlotte, NC"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "10px",
            borderRadius: "10px",
            border: "1px solid #ccc"
          }}
        />

        <button
          onClick={analyzeProperty}
          style={{
            marginTop: "20px",
            background: "#1D4ED8",
            color: "white",
            padding: "14px 24px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer"
          }}
        >
          Get PropertyGenome Score™
        </button>
      </div>

      {score && (
        <div style={{
          marginTop: "40px",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          maxWidth: "600px"
        }}>
          <h2 style={{ fontSize: "24px" }}>Your PropertyGenome Score</h2>
          <p style={{ fontSize: "64px", color: "#1D4ED8", fontWeight: "bold" }}>
            {score} / 100
          </p>
          <p style={{ color: "green", fontWeight: "600" }}>
            Investment Grade: Excellent
          </p>
        </div>
      )}
    </div>
  );
}
