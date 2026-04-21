import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Projects by Tawhid Shaikh";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "Projects",
    title: "Tawhid Shaikh",
    subtitle: "Product Engineering Portfolio",
    accent: "primary",
  });
}
