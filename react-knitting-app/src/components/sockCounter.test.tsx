import React from 'react';
import { render, screen } from '@testing-library/react';
import {SockCounter,} from './sockCounter';


test('renders counter', () => {
  render(<SockCounter/>);
  screen.debug();
  console.log('test ', screen.debug());
  const buttonElement = screen.getByTestId('counterincr');
  expect(buttonElement).toBeInTheDocument();
   const buttonElement2 = screen.getByTestId('counterdecr');
   expect(buttonElement2).toBeInTheDocument();
   const buttonElement3 = screen.getByTestId('counterres');
 
  const inputEl = screen.getByTestId('counterinput');
  expect(inputEl).toBeInTheDocument();
          
  const inputE2 = screen.getByTestId('sockinput');
  expect(inputE2).toBeInTheDocument();

});
