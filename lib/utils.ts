import { clsx } from "clsx";
import { customAlphabet } from "nanoid";
import { twMerge } from "tailwind-merge";

import type { ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createId(size?: number) {
  return customAlphabet("2346789ABCDEFGHJKLMNPQRTUVWXYZ")(size || 16);
}
