import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "About Tawhid Shaikh";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "About",
    title: "Tawhid Shaikh",
    subtitle: "Journey | Work | Open-Sourcerer",
    accent: "accent",
  });
}
