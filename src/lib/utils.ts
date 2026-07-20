import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getHighQualityImageUrl(url: string, width: number = 1920): string {
  if (!url) return "";
  if (url.includes("googleusercontent.com") || url.includes("google.com")) {
    // Remove any existing sizing parameter if present
    const cleanUrl = url.split("=")[0];
    return `${cleanUrl}=w${width}`;
  }
  return url;
}
