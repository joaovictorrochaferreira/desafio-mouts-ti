import { faker } from "@faker-js/faker";

// O comando agora ACEITA um argumento 'user'
Cypress.Commands.add("createNewUser", (user) => {
  cy.visit("/login");
  cy.get('[data-testid="cadastrar"]').click();
  cy.get('[data-testid="nome"]').type(user.nome);
  cy.get('[data-testid="email"]').type(user.email);
  cy.get('[data-testid="password"]').type(user.password);
  cy.get('[data-testid="cadastrar"]').click();
  cy.get(".alert").should("contain", "Cadastro realizado com sucesso");
});

Cypress.Commands.add("createNewAdmin", () => {
  cy.visit("/login");
  cy.get('[data-testid="cadastrar"]').click();
  cy.get('[data-testid="nome"]').type(faker.person.firstName());
  cy.get('[data-testid="email"]').type(faker.internet.email());
  cy.get('[data-testid="password"]').type(faker.internet.password());
  cy.get(".form-check").should("contain", "Cadastrar como administrador?");
  cy.get('[data-testid="checkbox"]').check();
  cy.get('[data-testid="cadastrar"]').click();
  cy.get(".alert").should("contain", "Cadastro realizado com sucesso");
});

Cypress.Commands.add("getUsers", () => {
  cy.request({
    method: "GET",
    url: "https://serverest.dev/usuarios",
  });
});
