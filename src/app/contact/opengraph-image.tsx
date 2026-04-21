import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Contact Tawhid Shaikh";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildOgImage({
    eyebrow: "Contact",
    title: "Build With Tawhid Shaikh",
    subtitle: "Projects | Consulting | Delivery",
    accent: "primary",
  });
}
