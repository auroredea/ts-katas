class BeerSong {
  verse(verseNumber: number): string {
    if (verseNumber < 0) return this.giveVerseForNegatives()
    return this.firstSentenceVerse(verseNumber) + '\n' + this.secondSentenceVerse(verseNumber)
  }

  private firstSentenceVerse(verseNumber: number): string {
    const numberOfBottles = (capitalize: boolean = false) =>
      verseNumber === 0 ? (capitalize ? 'No more' : 'no more') : verseNumber
    return `${numberOfBottles(true)} ${this.token(
      'bottle',
      verseNumber
    )} of beer on the wall, ${numberOfBottles()} ${this.token('bottle', verseNumber)} of beer.`
  }

  private secondSentenceVerse(verseNumber: number): string {
    const prepositionOfNumber = verseNumber === 1 ? 'it' : 'one'
    const verseNumberMinusOne =
      verseNumber === 1 ? 'no more' : verseNumber === 0 ? 99 : verseNumber - 1
    const firstPart =
      verseNumber === 0
        ? 'Go to the store and buy some more,'
        : `Take ${prepositionOfNumber} down and pass it around,`

    return `${firstPart} ${verseNumberMinusOne} bottles of beer on the wall.`
  }

  private token(existing: string, number: number): string {
    return number == 1 ? existing : existing + 's'
  }

  private giveVerseForNegatives(): string {
    return ''
  }
}

export default BeerSong
