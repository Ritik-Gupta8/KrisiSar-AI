import { FeatureShell, ComingSoon } from "@/components/FeatureShell";

export const metadata = { title: "Farm Risk Score - KrisiSar AI" };

export default function RiskScorePage() {
  return (
    <FeatureShell
      title="Farm Risk Score"
      description="Real-time farm risk assessment from 0 to 100, combining weather, disease, and crop health."
    >
      <ComingSoon note="Wire this to POST /api/v1/risk/calculate." />
    </FeatureShell>
  );
}
