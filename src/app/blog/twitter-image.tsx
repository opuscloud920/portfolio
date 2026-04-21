import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Blog by Tawhid Shaikh";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "Blog",
    title: "Tawhid Shaikh",
    subtitle: "Product Notes | Engineering",
    accent: "secondary",
  });
}
