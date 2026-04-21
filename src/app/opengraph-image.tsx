import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Tawhid Shaikh Portfolio v5 preview";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return buildOgImage({
    eyebrow: "Tawhid Shaikh Portfolio v5",
    title: "Tawhid Shaikh",
    subtitle: "Founder | Full Stack Developer | Open-Sourcerer",
    accent: "primary",
  });
}
