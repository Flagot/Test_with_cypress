// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
const originalLog = Cypress.log;

Cypress.log = (options) => {
  if (
    options.name === "xhr" &&
    options.consoleProps &&
    options.consoleProps.URL &&
    options.consoleProps.URL.includes("localhost:4000/socket.io")
  ) {
    // Skip logging this xhr request
    return null;
  }
  return originalLog(options);
};
