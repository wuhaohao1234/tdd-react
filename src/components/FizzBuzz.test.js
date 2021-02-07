import FizzBuzz from './FizzBuzz'
import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
test('should show number result when click 3 number', () => {
  const comp = render(<FizzBuzz/>)
  userEvent.click(comp.queryByText(/3/))
  expect(comp.queryByTestId('result')).toHaveTextContent('3')
})

test('should show number result when click 3 number and "=" button', () => {
  const comp = render(<FizzBuzz/>)
  userEvent.click(comp.queryByText(/3/))
  userEvent.click(comp.queryByText(/=/))
  expect(comp.queryByTestId('result')).toHaveTextContent('Fizz')
})
test('should show number result when click 5 number and "=" button', () => {
  const comp = render(<FizzBuzz/>)
  userEvent.click(comp.queryByText(/5/))
  userEvent.click(comp.queryByText(/=/))
  expect(comp.queryByTestId('result')).toHaveTextContent('Buzz')
})