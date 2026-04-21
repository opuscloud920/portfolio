import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Tawhid Shaikh retro portfolio social card";
export const size = ogSize;
export const contentType = ogContentType;

export default function TwitterImage() {
  return buildTwitterImage({
    eyebrow: "Shipping Ideas Into Products",
    title: "Tawhid Shaikh",
    subtitle: "Founder | Full Stack Developer | Open-Sourcerer",
    accent: "secondary",
  });
}
