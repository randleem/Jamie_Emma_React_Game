import {
  render,
  fireEvent,
  waitFor,
  cleanup,
  screen,
  queryHelpers,
} from "@testing-library/react";
import App from "./App";

test("renders app title on the page", () => {
  render(<App />);
  const headingElement = screen.getByText(/team randomiser/i);
  expect(headingElement).toBeInTheDocument;
});

test("renders app title on the page2", () => {
  render(<App />);
  const headingElement = screen.getAllByRole("heading");
  expect(headingElement).toBeInTheDocument;
  // screen.getByTestId(/app-title/i);
});

test("renders app title on the page3", () => {
  render(<App />);
  const headingElement = screen.getByRole("heading", {
    name: "Team Randomiser",
  });
  expect(headingElement).toBeInTheDocument;
  //   expect(headingElement).toBe("Team Randomiser");
  //screen.getByTestId(/app-title/i);
});

test("renders app title on the page4", () => {
  render(<App />);
  const headingElement = screen.getByTestId("app-title-1");
  expect(headingElement).toBeInTheDocument;
  //screen.getByTestId(/app-title/i);
});

//Find By
test("renders app title on the page5", async () => {
  render(<App />);
  const headingElement = await screen.findByText(/team randomiser/i);
  expect(headingElement).toBeInTheDocument;
});

//QueryBy

test("doesn't renders app title called dog", async () => {
  render(<App />);
  const headingElement = screen.queryByText(/dogs/i);
  expect(headingElement).not.toBeInTheDocument;
});

test("renders 2 heading elements on page", async () => {
  render(<App />);
  const headingElements = screen.queryAllByRole(/heading/i);
  expect(headingElements.length).toBe(2);
});

test("renders randomise button on the page", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("randomise-button");
  expect(buttonElement).toBeInTheDocument;
});
