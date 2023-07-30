/**
 * Performs an in-place shuffle of array items using the Fisher-Yates (Knuth) algorithm.
 * 
 * @param array - The array to be shuffled.
 * @returns The same array after being shuffled.
 */
export function shuffle<T>(array: T[]): T[] {
  // Start from the last element and swap one by one. We don't need to run for the first element
  // that's why i > 0
  for (let i = array.length - 1; i > 0; i--) {
      // Pick a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));

      // Swap array[i] with the element at array[j]
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}