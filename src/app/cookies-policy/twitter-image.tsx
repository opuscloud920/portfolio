import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Cookies Policy | Tawhid Shaikh";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "Cookies Policy",
    title: "Tawhid Shaikh",
    subtitle: "Cookies And Analytics",
    accent: "secondary",
  });
}
