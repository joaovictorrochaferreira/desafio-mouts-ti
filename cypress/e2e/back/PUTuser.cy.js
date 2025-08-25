/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

describe("Edit an user", () => {
    let userData;

    before(() => {
        cy.fixture("user.json").then((data) => {
            userData = data;
        });
    });

    it("E-mail already in use", () => {
        cy.request({
            method: "PUT",
            url: "https://serverest.dev/usuarios/07wgY8dvbmBtIhrN",
            failOnStatusCode: false,
            body: {
                nome: userData.name,
                email: userData.email,
                password: userData.password,
                administrador: "false",
            },
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.message).eq("Este email já está sendo usado");
        });
    });

    it("Success update", () => {
        cy.request({
            method: "PUT",
            url: "https://serverest.dev/usuarios/xfH3vMihmvsX9g6s",
            body: {
                nome: faker.person.firstName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                administrador: "false",
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).eq("Registro alterado com sucesso");
        });
    });

});
