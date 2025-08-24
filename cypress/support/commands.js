import { faker } from '@faker-js/faker';

Cypress.Commands.add('creatNewUser', () => {
    cy.visit("/login");
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('[data-testid="nome"]').type(faker.person.firstName());
    cy.get('[data-testid="email"]').type(faker.internet.email());
    cy.get('[data-testid="password"]').type(faker.internet.password());
    cy.get('[data-testid="cadastrar"]').click();
    cy.get(".alert").should("contain", "Cadastro realizado com sucesso");
})

Cypress.Commands.add('creatNewAdmin', () => {
    cy.visit("/login");
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('[data-testid="nome"]').type(faker.person.firstName());
    cy.get('[data-testid="email"]').type(faker.internet.email());
    cy.get('[data-testid="password"]').type(faker.internet.password());
    cy.get(".form-check").should("contain", "Cadastrar como administrador?");
    cy.get('[data-testid="checkbox"]').check();
    cy.get('[data-testid="cadastrar"]').click();
    cy.get(".alert").should("contain", "Cadastro realizado com sucesso");
})