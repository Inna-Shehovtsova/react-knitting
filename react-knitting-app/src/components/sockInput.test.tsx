import React from 'react';
import { render, screen } from '@testing-library/react';
import {SockInput,} from './sockInput';


test('renders counter', () => {
  render(<SockInput/>);
  screen.debug();
  console.log('test ', screen.debug());
  const buttonElement = screen.getByTestId('projname');
  expect(buttonElement).toBeInTheDocument();
   const buttonElement2 = screen.getByTestId('projstich');
   expect(buttonElement2).toBeInTheDocument();
   const buttonElement3 = screen.getByTestId('projrow');
 
  const inputEl = screen.getByTestId('projsize');
  expect(inputEl).toBeInTheDocument();
          
  const inputE2 = screen.getByTestId('createSock');
  expect(inputE2).toBeInTheDocument();

});
