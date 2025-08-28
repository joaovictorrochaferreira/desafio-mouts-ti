/// <reference types="cypress"/>

describe("User login", function () {
  it("Login", function () {
    cy.getUsers().then((response) => {
      const userLoginEmail = response.body.usuarios[0].email;
      const userLoginPassword = response.body.usuarios[0].password;
      cy.visit("/login");
      cy.get('[data-testid="email"]').type(userLoginEmail);
      cy.get('[data-testid="senha"]').type(userLoginPassword);
      cy.get('[data-testid="entrar"]').click();
      cy.contains("Serverest Store");
    });
  });
});
