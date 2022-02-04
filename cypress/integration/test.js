describe("Anecdotes", function () {
  beforeEach(function () {
    cy.visit("http://localhost:5000");
  });
  it("front page can be opened", function () {
    cy.contains("Anecdotes");
    cy.contains("create new");
  });
});
