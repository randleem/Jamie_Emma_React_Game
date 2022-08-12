import {
  render,
  fireEvent,
  waitFor,
  screen,
  queryHelpers,
} from "@testing-library/react";
import DisplayGroups from "./DisplayGroups";

test("if the groups are displayed on the page", () => {
  render(
    <DisplayGroups
      groupArray={[
        ["bob", "jayne", "usef"],
        ["Davide", "Juan", "Gretel"],
      ]}
    />
  );
  const sectionElements = screen.getAllByTestId("group-containers");
  expect(sectionElements).toBeInTheDocument;
  //   screen.getByRole("textbox");
});

test("if two group containers are on the page", () => {
  render(
    <DisplayGroups
      groupArray={[
        ["bob", "jayne", "usef"],
        ["Davide", "Juan", "Gretel"],
      ]}
    />
  );
  const divElements = screen.getAllByTestId("group-containers");
  expect(divElements.length).toBe(2);
  //   screen.getByRole("textbox");
});

test("should render 2 perople in group 2 when you have 5 people and 2 groups", () => {
  render(
    <DisplayGroups
      groupArray={[
        ["bob", "jayne", "usef"],
        ["Davide", "Gretel"],
      ]}
    />
  );
  const sectionElement = screen.getByTestId("group-containers-1");
  expect(sectionElement.children.length).toBe(2);
  //   screen.getByRole("textbox");
});
