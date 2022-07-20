/**
 * @jest-environment jsdom
 */
import {
  addActivity,
  removeone,
  saveone,
} from '../src/addEditErase.js';

document.body.innerHTML = '<ul class="todos"></ul>';

// Tests for Adding item in todo list
describe('By adding item in todos', () => {
  // Arrange
  const items = ['new item 1', 'new item 2', 'new item 3'];
  // Act
  items.forEach((item) => addActivity(item));
  // Assert
  test('check if addActivity is a function', () => {
    expect(typeof addActivity).toBe('function');
  });
  test('test if new item added', () => {
    expect(saveone.length).not.toBe(0);
  });
});

// Tests for Removing item in todo list
describe('By removing item in todos', () => {
  // Act
  removeone(saveone.length);
  // Assert
  test('check if removeItem is a function', () => {
    expect(typeof removeone).toBe('function');
  });
  test('test if item removed from array', () => {
    expect(saveone.length).toBe(2);
  });
});
