import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function slugify(str) {
  return str.replace(/\s+/g, "-");
}

export function unSlugify(str) {
  return str.replace(/-/g, " ");
}
