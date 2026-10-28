import ms from "ms";
import { kebabCase } from "lodash";

export function slug(title) {
  return kebabCase(title);
}

export function ttl() {
  return ms("2 days");
}
