import { FeatureShell, ComingSoon } from "@/components/FeatureShell";

export const metadata = { title: "Government Schemes - KrisiSar AI" };

export default function SchemesPage() {
  return (
    <FeatureShell
      title="Government Schemes"
      description="Discover schemes you are eligible for, with application guidance."
    >
      <ComingSoon note="Wire this to POST /api/v1/schemes/find-eligible." />
    </FeatureShell>
  );
}
