import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Privacy Policy | Tawhid Shaikh";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "Privacy Policy",
    title: "Tawhid Shaikh",
    subtitle: "Data Use And Protection",
    accent: "secondary",
  });
}
