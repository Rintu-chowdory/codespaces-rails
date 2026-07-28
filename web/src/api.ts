const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000";

export interface HealthResponse {
  status: string;
  environment: string;
  timestamp: string;
}

export async function fetchHealth(): Promise<HealthResponse> {
  const res = await fetch(`${API_BASE}/api/v1/health`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}
