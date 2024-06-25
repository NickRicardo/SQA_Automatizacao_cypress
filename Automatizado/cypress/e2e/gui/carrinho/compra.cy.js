/// <reference types="cypress" />

describe("GUI - Testes Relacionados a compra do produto", () => {
  it("TC001 - deve ser possivel efetuar compra de 3 produtos", () => {
    //Realizando o login
    cy.login("standard_user", "secret_sauce");
    cy.get('[data-test="title"]').should("contain", "Products");

    //Ordenar os produtos
    cy.get('[data-test="product-sort-container"]').select(
      "Price (low to high)"
    );

    //Clicar em 3 produtos
    cy.get(':nth-child(1) > [data-test="inventory-item-description"]').should(
      "contain",
      "Sauce Labs Onesie"
    );
    cy.get(':nth-child(2) > [data-test="inventory-item-description"]').should(
      "contain",
      "Sauce Labs Bike Light"
    );
    cy.get(':nth-child(3) > [data-test="inventory-item-description"]').should(
      "contain",
      "Sauce Labs Bolt T-Shirt"
    );

    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

    //verificar se estao dentro do carrinho
    cy.get('[data-test="shopping-cart-link"]').should("have.text", "3").click();

    //Preenchimento dos dados
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Fulano');
    cy.get('[data-test="lastName"]').type('Da Silva');
    cy.get('[data-test="postalCode"]').type('27600000');

    cy.get('[data-test="continue"]').click();

    //Comparar valores de venda
    cy.get('[data-test="subtotal-label"]').should('have.text', 'Item total: $33.97');
    cy.get('[data-test="tax-label"]').should('have.text', 'Tax: $2.72');
    cy.get('[data-test="total-label"]').should('have.text', 'Total: $36.69');


    //Finalizar compra
    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="back-to-products"]').click();
  });
});
