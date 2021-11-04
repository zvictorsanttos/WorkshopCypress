/// <reference types="cypress" />

describe("DevFinance", () => {
  it("Adicionando e Removendo Transação de entrada e saidas", () => {
    // Url da aplicação
    cy.visit("https://devfinance-agilizei.netlify.app/#");

    // Adicionando entradas
    cy.get("a[onclick*=open]").click();
    cy.get("#description").type("Freela");
    cy.get("#amount").type("15");
    cy.get("#date").type("2021-11-03");
    cy.contains("button", "Salvar").click();
    cy.get("table tbody tr").should("have.length", 1);

    // Adicionando Saida

    cy.get("a[onclick*=open]").click();
    cy.get("#description").type("Freela Deu Ruim");
    cy.get("#amount").type("-100");
    cy.get("#date").type("2021-10-04");
    cy.contains("button", "Salvar").click();
    cy.get("table tbody tr").should("have.length", 2);

    // Removendo transação de entrada

    cy.contains("Freela").parent().find("img[onclick*=remove]").click();
    cy.get("table tbody tr").should("have.length", 1);

    // Removendo transação de saidas

    cy.contains("Freela Deu Ruim")
      .parent()
      .find("img[onclick*=remove]")
      .click();
    cy.get("table tbody tr").should("have.length", 0);
  });
});
