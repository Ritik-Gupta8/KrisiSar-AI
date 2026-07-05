import { FeatureShell, ComingSoon } from "@/components/FeatureShell";

export const metadata = { title: "Crop Diagnosis - KrisiSar AI" };

export default function DiagnosisPage() {
  return (
    <FeatureShell
      title="Crop Diagnosis"
      description="Upload a crop photo for instant AI disease detection powered by Gemini Vision."
    >
      <ComingSoon note="Wire this to POST /api/v1/diagnosis/analyze (multipart image upload)." />
    </FeatureShell>
  );
}
