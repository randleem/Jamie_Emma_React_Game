import {
  render,
  fireEvent,
  waitFor,
  cleanup,
  screen,
  queryHelpers,
} from "@testing-library/react";
import Input from "./Input";

afterEach(cleanup);

test("if there is a blank input box on page render", () => {
  render(
    <Input
      onSubmit={() => {
        console.log("submitted");
      }}
    />
  );
  const nameInput = screen.getByPlaceholderText(/Add name here/i);
  expect(nameInput.value).toBe("");
  // screen.getByRole("textbox");
});

test("it should allow you to input a value", () => {
  render(
    <Input
      onSubmit={() => {
        console.log("submitted");
      }}
    />
  );
  const nameInput = screen.getByPlaceholderText(/Add name here/i);
  const submitButton = screen.getByText("Submit");
  expect(nameInput.value).toBe("");
  fireEvent.click(submitButton);
  expect(nameInput.value).toBe("");
  // screen.getByRole("textbox");
});
