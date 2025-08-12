describe("template spec", () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: "GET",
        url: "http://localhost:4000/socket.io/**",
      },
      {
        body: {},
      }
    ).as("socketIO", { log: false });
  });
  it("should enter username and password and log in", () => {
    cy.visit("https://hms.sprintapps.net/");
    cy.get('input[placeholder="Phone Number"]').type("0808080808");
    cy.get('input[type="password"]').type("000000");
    cy.get('button[type="submit"]').click();
    cy.url().should("not.include", "/login");
  });
});
