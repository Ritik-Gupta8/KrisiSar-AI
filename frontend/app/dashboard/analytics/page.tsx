import { FeatureShell, ComingSoon } from "@/components/FeatureShell";

export const metadata = { title: "Analytics - KrisiSar AI" };

export default function AnalyticsPage() {
  return (
    <FeatureShell
      title="Analytics"
      description="Disease trends, risk distribution, and data-driven insights."
    >
      <ComingSoon note="Wire this to GET /api/v1/analytics/disease-trends and /risk-distribution." />
    </FeatureShell>
  );
}
