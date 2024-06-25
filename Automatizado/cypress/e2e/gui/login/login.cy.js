/// <reference types="cypress" />

describe('GUI - Testes Relacionados ao login', () => {

    it('TC001 - nao deve ser possivel efetuar login sem informar email e senha', () => {
        
        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('contain', 'Username is required')
    });

    it('TC002 - nao deve ser possivel efetuar login com email valido e senha invalida', () => {
        cy.login('standard_user', 'invalida');
        cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user in this service')
    });

    it('TC003 - nao deve ser possivel efetuar login com email invalido e senha valida', () => {
        cy.login('Nicolas', 'secret_sauce');
        cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user in this service')
    });

    it('TC004 - nao deve ser possivel efetuar login com email invalido e senha valida', () => {
        cy.login('Nicolas', 'invalido');
        cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user in this service')
    });

    it('TC005 - deve ser possivel efetuar login com email valido e senha valida', () => {
        cy.login('standard_user', 'secret_sauce');
        cy.get('[data-test="title"]').should('contain', 'Products')
    });

    
})