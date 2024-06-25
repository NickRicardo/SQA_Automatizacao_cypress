/// <reference types="cypress" />

describe('GUI - Testes Relacionados ao login', () => {

    it('TC001 - nao deve ser possivel efetuar login sem informar email e senha', () => {
        
        cy.visit("https://www.saucedemo.com/");

        cy.get('[data-test="username"]').type("standard_user");

        cy.get('[data-test="password"]').type("teste");

        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user in this service')
    });
})