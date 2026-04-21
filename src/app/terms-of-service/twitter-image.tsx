import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Terms of Service | Tawhid Shaikh";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "Terms Of Service",
    title: "Tawhid Shaikh",
    subtitle: "Legal And Delivery Terms",
    accent: "accent",
  });
}
