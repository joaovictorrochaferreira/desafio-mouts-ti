/// <reference types="cypress"/>

describe('User login', function () {

    let userData;

    before(() => {
        cy.fixture("user.json").then((data) => {
            userData = data;
        });
    });

    it('Login', function () {
        cy.visit("/login");
        cy.get('[data-testid="email"]').type(userData.email);
        cy.get('[data-testid="senha"]').type(userData.password);
        cy.get('[data-testid="entrar"]').click();
        cy.contains("Serverest Store");
    });
})