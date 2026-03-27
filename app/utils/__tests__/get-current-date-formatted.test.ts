import { expect, test } from "@jest/globals";
import { getCurrentDateFormatted } from "../get-current-date-formatted";


test("returns a formatted date string", () => {
  // Arrange
  const type = "string";

  // Act
  const result = getCurrentDateFormatted()

  // Assert
  expect(typeof result).toBe(type)
});

test('Current date formatted function ensure right date', () => {
  // Arrange
  const today = new Date();
  const date = today.getDate();

  // Act
  const result = getCurrentDateFormatted()

  // Assert
  expect(result).toContain(String(date))
});

test('Current date formatted function ensure right dayearte', () => {
  // Arrange
  const today = new Date();
  const year = today.getFullYear();

  // Act
  const result = getCurrentDateFormatted()

  // Assert
  expect(result).toContain(String(year))
});