import { customAlphabet } from "nanoid";

export function createId(size?: number) {
  return customAlphabet("2346789ABCDEFGHJKLMNPQRTUVWXYZ")(size || 16);
}
