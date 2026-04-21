Cypress.Commands.add('verificarMensagemNoToast', (mensagemEsperada) => {
  cy.get('.toast').should('have.text', mensagemEsperada);   
});


Cypress.Commands.add('selecionarOpcaoNaCombobox', (labelDoCampo, opcao) => {
  cy.get(`label[for="${labelDoCampo}"]`)
    .parent()
    .as(`campo-${labelDoCampo}`)

  cy.get(`@campo-${labelDoCampo}`).click()
  cy.get(`@campo-${labelDoCampo}`).contains(opcao).click()
})