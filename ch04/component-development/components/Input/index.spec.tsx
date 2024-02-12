import {
  RenderResult,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { Input } from '.';

describe('Input', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Input id="username" label="Username" />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should empty in input on initial render', () => {
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement;

    expect(inputNode).toHaveValue('');
  });

  it('should show input text', () => {
    // Arrange
    const inputText = 'Test Input Text';
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement;

    // Action
    fireEvent.change(inputNode, { target: { value: inputText } });

    // Assert
    expect(inputNode).toHaveValue(inputText);
  });

  it('should reset when user clicks button', () => {
    // Arrange
    const inputText = 'Test Input Text';
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement;
    const buttonNode = screen.getByRole('button', {
      name: 'Reset',
    }) as HTMLButtonElement;

    // Action
    fireEvent.change(inputNode, { target: { value: inputText } });
    fireEvent.click(buttonNode);

    // Assert
    expect(inputNode).toHaveValue('');
  });
});
