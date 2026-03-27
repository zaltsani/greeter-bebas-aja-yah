import { useGreetingSelection } from "../greeting-selection"
import { test, expect } from "@jest/globals"

test('Get greeting selection', () => {
  // Arrange
  const array = [
    "Hello",
    "Hi",
    "Dear",
    "Good to see you",
    "It's been a while",
    "Love to see you again",
    "Hey there",
  ];

  // Act
  const result = useGreetingSelection(array)

  // Assert
  expect(array).toContain(result)
});