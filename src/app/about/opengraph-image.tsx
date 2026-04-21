import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "About Tawhid Shaikh";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildOgImage({
    eyebrow: "About",
    title: "About Tawhid Shaikh",
    subtitle: "Founder | Full Stack Developer | Open-Sourcerer",
    accent: "accent",
  });
}
