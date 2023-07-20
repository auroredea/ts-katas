export function alphabetical(word: string, ...words: string[]) {
  if (words.length === 0) return [word]
  else return [word, ...words].sort()
}
