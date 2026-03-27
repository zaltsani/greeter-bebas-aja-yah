import { test, expect } from "@jest/globals"
import { useEmotionsSelection } from "../emotions-selection";
import { EmotionsDefinitions } from "../emotions-definitions";

test('Get emotion messaeg selection', () => {
  // Arrange
  const array = EmotionsDefinitions;
  const response = array[0].response;

  // Act
  const result = useEmotionsSelection(response)

  // Assert
  expect(response).toContain(result)
});