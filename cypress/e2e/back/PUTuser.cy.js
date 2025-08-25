/// <reference types="cypress"/>

describe("Edit an user", () => {
  it("E-mail already in use", () => {
    cy.getUsers().then((response) => {
      const idToUpdate = response.body.usuarios[0]._id;
      const existingEmail = response.body.usuarios[1].email;
      cy.request({
        method: "PUT",
        url: `https://serverest.dev/usuarios/${idToUpdate}`,
        failOnStatusCode: false,
        body: {
          nome: "Usuário Atualizado",
          email: existingEmail,
          password: "nova-senha",
          administrador: "false",
        },
      }).then((putResponse) => {
        expect(putResponse.status).to.eq(400);
        expect(putResponse.body.message).to.eq(
          "Este email já está sendo usado"
        );
      });
    });
  });

  it("Success update", () => {
    cy.getUsers().then((response) => {
      const firstUserId = response.body.usuarios[0]._id;
      const firstUser = response.body.usuarios[0];
      cy.request({
        method: "PUT",
        url: `https://serverest.dev/usuarios/${firstUserId}`,
        body: {
          nome: firstUser.nome,
          email: firstUser.email,
          password: firstUser.password,
          administrador: "false",
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq("Registro alterado com sucesso");
      });
    });
  });
});
