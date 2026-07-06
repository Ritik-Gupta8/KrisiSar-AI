"use client";

import { useEffect, useState } from "react";
import { FeatureShell } from "@/components/FeatureShell";
import { apiRequest, ApiError } from "@/lib/api";
import { Loader2, Database, BarChart3 } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

interface DiseaseTrend {
  disease?: string;
  count?: number;
  avg_confidence?: number;
}
interface RiskDist {
  risk_level?: string;
  count?: number;
  avg_score?: number;
}

const PIE_COLORS = ["#22c55e", "#eab308", "#f97316", "#ef4444", "#6b7280"];

export default function AnalyticsPage() {
  const [loading, setLoading] = useState(true);
  const [trends, setTrends] = useState<DiseaseTrend[] | null>(null);
  const [risk, setRisk] = useState<RiskDist[] | null>(null);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      setLoading(true);
      try {
        // Both endpoints require BigQuery; if either fails we show the info state.
        const [t, r] = await Promise.all([
          apiRequest<DiseaseTrend[]>("/api/v1/analytics/disease-trends?days=30", {
            timeoutMs: 20_000,
          }),
          apiRequest<RiskDist[]>("/api/v1/analytics/risk-distribution?days=30", {
            timeoutMs: 20_000,
          }),
        ]);
        if (!active) return;
        setTrends(Array.isArray(t) ? t : []);
        setRisk(Array.isArray(r) ? r : []);
      } catch (err) {
        if (!active) return;
        // BigQuery not configured / no data yet — expected until analytics is set up
        setUnavailable(true);
        if (!(err instanceof ApiError)) console.error(err);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const hasData =
    (trends && trends.length > 0) || (risk && risk.length > 0);

  return (
    <FeatureShell
      title="Analytics"
      description="Disease trends and farm-risk distribution across all users, powered by BigQuery."
    >
      {loading && (
        <div className="feature-card flex items-center justify-center py-16">
          <Loader2 className="w-6 h-6 animate-spin text-green-600 mr-2" />
          <span className="text-gray-600 dark:text-gray-300">
            Loading analytics...
          </span>
        </div>
      )}

      {!loading && (unavailable || !hasData) && (
        <div className="feature-card text-center py-12">
          <Database className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-semibold mb-2">
            Analytics not populated yet
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto mb-4">
            This dashboard reads aggregated usage data from BigQuery. It fills up
            as farmers run diagnoses and risk checks. To enable it, create the
            BigQuery dataset and tables, then pass a <code>user_id</code> with
            requests so events are logged.
          </p>
          <p className="text-sm text-gray-500">
            Setup steps are in{" "}
            <code>database/bigquery/schema.sql</code> and{" "}
            <code>docs/DEPLOYMENT.md</code>.
          </p>
        </div>
      )}

      {!loading && !unavailable && hasData && (
        <div className="space-y-6">
          {trends && trends.length > 0 && (
            <div className="feature-card">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-600" /> Top diseases (30
                days)
              </h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={trends}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="disease" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="count"
                      name="Cases"
                      fill="#22c55e"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {risk && risk.length > 0 && (
            <div className="feature-card">
              <h3 className="text-lg font-bold mb-4">Risk distribution</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={risk}
                      dataKey="count"
                      nameKey="risk_level"
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      label
                    >
                      {risk.map((_, i) => (
                        <Cell
                          key={i}
                          fill={PIE_COLORS[i % PIE_COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      )}
    </FeatureShell>
  );
}
