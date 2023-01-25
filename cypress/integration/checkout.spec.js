import EndPage from '../support/page_objects/nome-funcionalidade.page'

describe('Funcionalidade endereços', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados => {
      cy.login(dados.usuario, dados.senha)
    })
  });

  it('Deve fazer cadastro de faturamento com com sucesso', () => {
    EndPage.preencherCheckout()

  });
});