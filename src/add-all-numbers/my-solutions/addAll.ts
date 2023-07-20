export function addAll(number: number, ...numbers: number[]) {
  if (numbers.length === 0) return number
  else return number + numbers.reduce((a, b) => a + b)
}
