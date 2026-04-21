import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Contact Tawhid Shaikh";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "Contact",
    title: "Tawhid Shaikh",
    subtitle: "Projects | Consulting | Collaboration",
    accent: "primary",
  });
}
