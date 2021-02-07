import fizzBuzz from './fizzBuzz.js'

describe('FizzBuzz', () => {
  test('输入3', () => {
    expect(fizzBuzz(3)).toBe("Fizz")
    expect(fizzBuzz(5)).toBe("Buzz")
    expect(fizzBuzz(15)).toBe("FizzBuzz")
  })
})