import {render,screen} from '@testing-library/react';
import Login from '../Login';
test('checking components loaded', () => {
  // the steps for test
  render (<Login/>);
  expect(screen.queryByText(/login/)).toBeInTheDocument();
})

test(' checking email and password are empty ', () => {
  render(<Login/>);
  expect(screen.queryByPlaceholderText('Email')).toHaveValue("");
  expect(screen.queryByPlaceholderText('Password')).toHaveValue("");
})