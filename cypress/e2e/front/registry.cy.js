/// <reference types="cypress"/>

import { faker } from "@faker-js/faker";

describe("Creating new registration", function () {
  it("Normal user registration", function () {
    const user = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    cy.createNewUser(user);
    cy.wait(3000);
    cy.contains("Serverest Store");
  });

  it("Admin registration", function () {
    cy.createNewAdmin();
    cy.wait(3000);
    cy.contains("Este é seu sistema para administrar seu ecommerce.");
  });
});
