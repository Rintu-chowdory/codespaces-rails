import { useEffect, useState } from "react";
import { fetchHealth, type HealthResponse } from "./api";

export default function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchHealth().then(setHealth).catch((e) => setError(e.message));
  }, []);

  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Codespaces Rails</h1>
      {error && <p style={{ color: "crimson" }}>API error: {error}</p>}
      {health && (
        <pre>{JSON.stringify(health, null, 2)}</pre>
      )}
      {!health && !error && <p>Loading API status…</p>}
    </main>
  );
}
