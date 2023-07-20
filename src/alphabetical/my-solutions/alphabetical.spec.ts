import { alphabetical } from './alphabetical'

describe('alphabetical', () => {
  it('should give the same string given in output', () => {
    const expected = 'The seven tears'

    expect(alphabetical(expected)).toEqual([expected])
  })

  it('should give two strings in alphabetical order', () => {
    const expected = ['Robert Swan', 'The seven tears']

    expect(alphabetical('The seven tears', 'Robert Swan')).toEqual(expected)
  })

  it('should sort in alphabetical order', () => {
    const expected = ['aaab', 'aaac', 'bbbc']

    expect(alphabetical('aaac', 'bbbc', 'aaab')).toEqual(expected)
  })
})
