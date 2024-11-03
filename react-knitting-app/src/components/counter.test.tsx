import React from 'react';
import { render, screen } from '@testing-library/react';
import {Counter} from './counter';


test('renders counter', async () => {
  render(<Counter name='simpleCounter'/>);
  console.log('test ', screen.debug());
  const buttonElement = screen.getByTestId('counterincr');
  expect(buttonElement).toBeInTheDocument();
   const buttonElement2 = screen.getByTestId('counterdecr');
   expect(buttonElement2).toBeInTheDocument();
   const buttonElement3 = screen.getByTestId('counterres');
   expect(buttonElement3).toBeInTheDocument();
  // const inputEl = screen.getByTestId('counterinput') as HTMLInputElement;
  // expect(inputEl).toBeInTheDocument();
  // expect(inputEl.value).toBe("0");

  // buttonElement.click();
  // let v = await  screen.findByTestId('counterinput') as HTMLInputElement;
  // expect(v.value).toBe("1");
  // buttonElement.click();
  // v = await  screen.findByTestId('counterinput') as HTMLInputElement;
  // expect(v.value).toBe("2");
  
  // buttonElement2.click();
  // v = await  screen.findByTestId('counterinput') as HTMLInputElement;
  // expect(v.value).toBe("1");
  // buttonElement3.click();
  // v = await  screen.findByTestId('counterinput') as HTMLInputElement;
  // expect(v.value).toBe("0");
});
