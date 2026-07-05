import { FeatureShell, ComingSoon } from "@/components/FeatureShell";

export const metadata = { title: "Weather Intelligence - KrisiSar AI" };

export default function WeatherPage() {
  return (
    <FeatureShell
      title="Weather Intelligence"
      description="7-day forecast, disease risk prediction, and irrigation recommendations."
    >
      <ComingSoon note="Wire this to GET /api/v1/weather/current?latitude=..&longitude=.." />
    </FeatureShell>
  );
}
