/// <reference types="cypress" />

describe("Get list of users", () => {
    it("Get list of users", () => {
        cy.getUsers().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("quantidade");
            expect(response.body).to.have.property("usuarios");
            expect(response.body.usuarios).to.have.length.at.least(0);
            for (var i = 0; i < response.body.usuarios.length; i++) {
                expect(response.body.usuarios[i]).to.have.property("nome");
                expect(response.body.usuarios[i]).to.have.property("email");
                expect(response.body.usuarios[i]).to.have.property("password");
                expect(response.body.usuarios[i]).to.have.property("administrador");
                expect(response.body.usuarios[i]).to.have.property("_id");
            }
        });
    });
});
