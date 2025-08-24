/// <reference types="cypress" />

describe('Login from API', function () {
    let userData;

    before(() => {
        cy.fixture("user.json").then((data) => {
            userData = data;
        });
    });

    it("Regular user login", () => {
        cy.request({
            method:"POST",
            url: "https://serverest.dev/login",
            failOnStatusCode: false,
            body:{
                email: userData.email,
                password: userData.password,
            },
        }).then((response) => {
            expect(response.body).to.have.property("message").eq("Login realizado com sucesso");
            expect(response.body).to.have.property("authorization");
        })
    })
});