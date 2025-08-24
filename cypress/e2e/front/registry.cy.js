/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Creating new registration', function () {
    it('Normal user registration', function () {
        cy.visit("/login");
        cy.get('[data-testid="cadastrar"]').click();
        cy.get('[data-testid="nome"]').type(faker.person.firstName());
        cy.get('[data-testid="email"]').type(faker.internet.email());
        cy.get('[data-testid="password"]').type(faker.internet.password());
        cy.get('[data-testid="cadastrar"]').click();
        cy.get(".alert").should("contain", "Cadastro realizado com sucesso");
    })

    it('Admin registration', function () {
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

})