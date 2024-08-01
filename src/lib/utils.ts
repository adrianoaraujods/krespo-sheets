import { isValidElement } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { ClassValue } from "clsx";
import type { ReactElement, ReactNode } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatStringForSearch(string: string): string {
  return string
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .toLowerCase();
}

export function reactNodeToString(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return node.toString();
  } else if (!node) {
    return "";
  } else if (Array.isArray(node)) {
    return node.map((child) => reactNodeToString(child)).join("");
  } else if (isValidElement(node)) {
    const element = node as ReactElement;
    return reactNodeToString(element.props.children);
  } else {
    return "";
  }
}
