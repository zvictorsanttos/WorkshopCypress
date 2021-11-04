/// <reference types="cypress" />

describe("DevFinances", () => {
  it("Deletando uma transação", () => {
    cy.visit("https://devfinance-agilizei.netlify.app/#");

    cy.get("a[onclick*=Transaction.remove(0)]").click();

    cy.get("table tbody tr").should("have.length", 0);
  });
});
