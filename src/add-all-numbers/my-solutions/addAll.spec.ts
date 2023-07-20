import { addAll } from './addAll'

describe('add-all', () => {
  it('should give the same number of given one number', () => {
    const expected = 2

    expect(addAll(expected)).toEqual(expected)
  })

  it('should add two numbers', () => {
    const expected = 6

    expect(addAll(3, 3)).toEqual(expected)
  })

  it('should add several numbers', () => {
    const expected = 6

    expect(addAll(3, 1, 1, 1)).toEqual(expected)
  })

  it('should add several numbers with negative one', () => {
    const expected = 6

    expect(addAll(0, 6, -3, 3)).toEqual(expected)
  })
})
