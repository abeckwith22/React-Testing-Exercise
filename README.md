# React Testing Exercises

This exercise practicies working with props, defaultProps, state, and simple click events in React.

Be sure to make a Git repository so you can save your work.

### Carousel Component
You've been given a React App containing an image carousel. The app contains a couple of components, and a single test file.

#### Part 1: Demo the App & Read the Code
- [x] Start the app and play around with the image carousel. Sketch out the component heirarchy and make sure you understand what's going on. Which components have state, and how does that state get changed?

You may find bugs as you're exploring the app. Don't fix them yet!

#### Part 2: Smoke and Snapshot tests
- [x] The *Card* and *Carousel* components don't have any smoke or snapshot tests. Write one of each type of test for each component.

#### Part 3: Bug! Left arrow
As you may have noticed, the left arrow and the right arrow both do the same thing: move to the next image in the image array. 

- [x] Write a (failing) test that checks for this bug. In other words, write a test that expects that when you're on the second image, clicking the left arrow will move you to the first image. Once you've written a failing test, fix the app so that your test turns green.

#### Part 4: Bug! Exhausting the image array
- [x] As you may have noticed, if you're on the last image and try to move forward, or if you're on the first image and try to move backward, you get an error. To fix this, let's just hide the left arrow on the first image and the right arrow on the last.

- [x] Write a (failing) test to check that the left arrow is missing when you're on the first image, and that the right arrow is missing when you're on the last image. Then fix the bug so that your test turns green.
