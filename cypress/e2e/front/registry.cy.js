/// <reference types="cypress"/>

describe('Creating new registration', function () {
  
    it('Normal user registration', function () {
        cy.creatNewUser();
        cy.wait(3000);
        cy.contains('Serverest Store');
    });

    it('Admin registration', function () {
        cy.creatNewAdmin()
        cy.wait(3000);
        cy.contains("Este é seu sistema para administrar seu ecommerce.");
    });

})