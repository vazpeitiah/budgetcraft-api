import { roundNumber } from '../../src/utils/helpers'

test('roundedNumber makes a number round', () => {
  expect(roundNumber(1.2345, 2)).toBe(1.23)
})
