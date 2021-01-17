import { getAllByText, render } from "@testing-library/react";
import React from'react';
import ReactDOM from'react-dom';
import Home from "../src/components/Home";
import ViewOne from "./components/ViewOne";
import ViewTwo from "./components/ViewTwo";

// Smoke tests
it("Smoketest of Home Component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("Smoketest of ViewOne Component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ViewOne />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("Smoketest of ViewTwo Component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ViewTwo />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// react-testing-library (Unit,E2E,Integration)
//Looks at what's on the page
it("check text on page in Home Component", () => {
  const { getByText } = render(<Home />);
  expect(getByText("Welcome to this React SPA")).toBeInTheDocument();
});
it("check text on page in ViewOne Component", async () => {
  const { getByText } = render(<ViewOne />);
  expect( getByText("Responsive card deck example")).toBeInTheDocument();
});

it("check text on page in ViewTwo Component", () => {
  const { getByText } = render(<ViewTwo text="This is the magnificent ViewTwo" />);
  expect(getByText("This is the magnificent ViewTwo")).toBeInTheDocument();
});

it("check element on page in ViewOne Component", async () => {
  const { getByTestId } = render(<ViewOne />);
  expect( getByTestId("cardtest")).toBeInTheDocument();
});
it("check existence of instance of element with depicted text from array of duplicates on page in ViewOne Component", async () => {
  const { getAllByText } = render(<ViewOne />);
 var instance = getAllByText("Card title")[0]
  expect( instance).toBeInTheDocument();
});

//Test State
it("should update state on click", () => {
  const incrementCounter = jest.fn();
  const wrapper = mount(<Home onClick={incrementCounter} />);
  const handleClick = jest.spyOn(React, "useState");
  handleClick.mockImplementation(size => [size, incrementCounter]);

  wrapper.find("#inc").simulate("click");
  expect(incrementCounter).toBeTruthy();
});

