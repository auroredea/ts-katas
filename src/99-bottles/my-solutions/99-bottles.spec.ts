import BeerSong from './99-bottles'

describe('beer song', () => {
  const beerSong: BeerSong = new BeerSong()

  it('give the corresponding verse', () => {
    //given
    const verseNumber: number = 8

    //when
    const actual: string = beerSong.verse(verseNumber)

    //then
    const expected: string =
      '8 bottles of beer on the wall, 8 bottles of beer.\n' +
      'Take one down and pass it around, 7 bottles of beer on the wall.'
    expect(actual).toStrictEqual(expected)
  })

  it('give no verse if number is negative', () => {
    //given
    const verseNumber: number = -5

    //when
    const actual: string = beerSong.verse(verseNumber)

    //then
    const expected: string = ''
    expect(actual).toStrictEqual(expected)
  })

  it('give the before last verse', () => {
    //given
    const verseNumber: number = 1

    //when
    const actual: string = beerSong.verse(verseNumber)

    //then
    const expected: string =
      '1 bottle of beer on the wall, 1 bottle of beer.\n' +
      'Take it down and pass it around, no more bottles of beer on the wall.'
    expect(actual).toStrictEqual(expected)
  })

  it('give the last verse', () => {
    //given
    const verseNumber: number = 0

    //when
    const actual: string = beerSong.verse(verseNumber)

    //then
    const expected: string =
      'No more bottles of beer on the wall, no more bottles of beer.\n' +
      'Go to the store and buy some more, 99 bottles of beer on the wall.'
    expect(actual).toStrictEqual(expected)
  })
})
