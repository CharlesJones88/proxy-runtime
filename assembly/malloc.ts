import { __pin, __unpin } from "rt/itcms";

/**
 * Allow host to allocate memory.
 */
export function malloc(size: i32): usize {
  const buffer = new ArrayBuffer(size);
  const ptr = changetype<usize>(buffer);
  return __pin(ptr);
}

/**
 * Allow host to free memory.
 */
export function free(ptr: usize): void {
  __unpin(ptr);
}
