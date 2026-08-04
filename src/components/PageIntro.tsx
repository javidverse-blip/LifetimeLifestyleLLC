import { PageBanner } from "@/components/PageBanner";

export function PageIntro({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return <PageBanner eyebrow={eyebrow ?? ""} title={title}>{children}</PageBanner>;
}
