/**
 * Performs an in-place shuffle of array items using the Fisher-Yates (Knuth) algorithm.
 * 
 * @param array - The array to be shuffled.
 * @returns The same array after being shuffled.
 * @see https://stackoverflow.com/a/2450976
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

/**
 * Decodes HTML entities in a string.
 * 
 * @param html - The string to be decoded.
 * @returns The decoded string.
 * @see https://stackoverflow.com/a/34064434
 */
export function decodeHtml(html: string) {
  var doc = new DOMParser().parseFromString(html, "text/html");
  return doc.documentElement.textContent;
}

/**
 * Converts a string to title case.
 * 
 * @param input - The string to be converted.
 * @returns The converted string.
 * @see https://apastyle.apa.org/style-grammar-guidelines/capitalization/title-case
 */
export function toTitleCase(input: string) {
  const minorWords = ['and', 'as', 'but', 'for', 'if', 'nor', 'or', 'so', 'yet', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'off', 'on', 'per', 'to', 'up', 'via'];

  return input
    .toLowerCase()
    .split(' ')
    .map((word, index, inputArray) => {
      // Do not capitalize minorWords unless they are the first word, last word, 
      // first word of a subtitle, or first word after punctuation
      if (minorWords.includes(word) && 
          index !== 0 && 
          index !== inputArray.length - 1 && 
          inputArray[index - 1][inputArray[index - 1].length - 1] !== ":" &&
          inputArray[index - 1][inputArray[index - 1].length - 1] !== "—"
         ) {
        return word;
      } else {
        // Capitalize the word if it is a major word or meets one of the other conditions
        return word.charAt(0).toUpperCase() + word.substring(1);
      }
    })
    .join(' ');
}