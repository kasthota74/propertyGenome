import Link from "next/link";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#ffffff" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "20px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#1D4ED8" }}>
          PropertyGenome
        </h1>
        <div>
          <Link href="/analyzer" style={{ marginRight: "20px" }}>Analyzer</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </nav>

      <section style={{ textAlign: "center", padding: "100px 20px", background: "#EFF6FF" }}>
        <h2 style={{ fontSize: "48px", fontWeight: "bold" }}>
          The FICO Score for Real Estate
        </h2>
        <p style={{ fontSize: "20px", color: "#555", marginTop: "20px" }}>
          AI-powered PropertyGenome Score™ for Investors, Banks, and Homeowners
        </p>

        <Link href="/analyzer">
          <button style={{
            marginTop: "40px",
            background: "#1D4ED8",
            color: "white",
            padding: "16px 32px",
            borderRadius: "12px",
            fontSize: "18px",
            border: "none",
            cursor: "pointer"
          }}>
            Analyze Property Address
          </button>
        </Link>
      </section>
    </main>
  );
}
