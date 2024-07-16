import { isValidElement } from "react";
import { clsx } from "clsx";
import { customAlphabet } from "nanoid";
import { twMerge } from "tailwind-merge";

import type { ClassValue } from "clsx";
import type { ReactElement, ReactNode } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createId(size?: number) {
  return customAlphabet("2346789ABCDEFGHJKLMNPQRTUVWXYZ")(size || 16);
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
  } else if (node === null || node === undefined || node === false) {
    return "";
  } else if (Array.isArray(node)) {
    return renderChildren(node);
  } else if (isValidElement(node)) {
    const element = node as ReactElement;

    return element.props.children;
  } else {
    return "";
  }

  function renderChildren(children: ReactNode[]): string {
    return children.map((child) => reactNodeToString(child)).join("");
  }
}
