import { cache } from "react";

export function random() {
  return crypto.randomUUID();
}

export const cachedRandom = cache(random);
