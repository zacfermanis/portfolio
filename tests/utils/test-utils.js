import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Custom render function that includes providers
const customRender = (ui, options = {}) => {
  return render(ui, options);
};

// Helper to create a user event instance
const createUserEvent = () => userEvent.setup();

// Helper to wait for element to be removed
const waitForElementToBeRemoved = async element => {
  await new Promise(resolve => setTimeout(resolve, 0));
  return element;
};

// Helper to check if element is visible
const isElementVisible = element => {
  return element && !element.hidden && element.style.display !== 'none';
};

export {
  customRender as render,
  screen,
  createUserEvent,
  waitForElementToBeRemoved,
  isElementVisible,
};
