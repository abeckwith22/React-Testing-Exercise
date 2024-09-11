import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

// smoke test
it("renders", () => {
  render(<Carousel
    photos={TEST_IMAGES}
    title="images for testing"
  />);
});

// snapshot test
it('matches snapshot', () => {
    const {
        asFragment
    } = render(<Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />);
    expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the left arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // move to second image, setup for test
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect first image to show, but not the second
  expect(
    container.querySelector(`img[alt="testing image 2"]`)
  ).not.toBeInTheDocument();
  expect(
    container.querySelector(`img[alt="testing image 1"]`)
  ).toBeInTheDocument();

});

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it('hides right arrow for last image', function () {
  const { container, debug } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // move to last image
  const rightArrow = container.querySelector(".bi-arrow-right-circle");

  for(let i = 0; i < TEST_IMAGES.length; i++){
    fireEvent.click(rightArrow);
  } 
  // debug();

  expect(rightArrow).not.toBeInTheDocument();
})

it('hides left arrow for first image', function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  expect(leftArrow).not.toBeInTheDocument();
})