/**
 *
 * @param {string | undefined} item
 * @param {string} value
 * @return {boolean}
 */
export function containsValue(item: string | undefined, value: string): boolean {
  if (!item) return false;

  return item
    .toLowerCase()
    .includes(value.toLowerCase());
}
