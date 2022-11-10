import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "./Cart";

test('something', async () => {
  // Arrange
  window.fetch = jest.fn()
  window.fetch.mockResolvedValueOnce({json: async () => [{ data: "some data" }]})
  render(<Cart/>);

  //Act
  const buttonElement = await screen.findAllByRole();
  userEvent.click(buttonElement);

  // Assert
  const titleElement = screen.getAllByTitle('title', { exact: false });
  expect(titleElement).not.toBeInTheDocument();
});