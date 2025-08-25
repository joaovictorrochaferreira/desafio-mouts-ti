/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

describe("Login from API", function () {
  it("Regular user login", () => {
    const user = {
      nome: faker.person.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    cy.createNewUser(user);
    cy.request({
      method: "POST",
      url: "https://serverest.dev/login",
      body: {
        email: user.email,
        password: user.password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Login realizado com sucesso");
      expect(response.body).to.have.property("authorization");
    });
  });
});
