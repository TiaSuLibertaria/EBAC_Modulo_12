// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {
        log: false
    })
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('limparCarrinho', () => {
    cy.visit('/carrinho')
    cy.get('body').then(body => {
        if (body.find('.product-remove > .remove > .fa').length) {
            cy.get('.product-remove > .remove > .fa').then(elementos => {
                let quantidadeItens = elementos.length
                cy.log(quantidadeItens)
                for (let i = 0; i < quantidadeItens; i++) {
                    cy.get(':nth-child(1) > .product-remove > .remove > .fa').click()
                    cy.wait(3000)
                }
            })
        }
    })

})

Cypress.Commands.add('adicionarProduto', (ordemProduto, tamanho, cor, quantidade,) => {
    cy.get(`.grid.product:nth-of-type(${ordemProduto}) > .product-block`).click()
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(`${quantidade}`)
    cy.get('.single_add_to_cart_button').click()
})

Cypress.Commands.add('preencherCheckout', () => {
    cy.visit('/checkout/')
    cy.fixture('cliente').then(cliente => {
        cy.get('#billing_first_name').clear().type(cliente.nome)
        cy.get('#billing_last_name').clear().type(cliente.sobrenome)
        cy.get('#billing_company').clear().type(cliente.empresa)
        cy.get('#select2-billing_country-container').type(cliente.pais)
        cy.get('#billing_address_1').clear({force: true}).type(cliente.endereco)
        cy.get('#billing_city').clear().type(cliente.cidade)
        cy.get('#select2-billing_state-container').type(cliente.estado)
        cy.get('#billing_postcode').clear({ force: true }).type(cliente.cep)
        cy.get('#billing_phone').clear().type(cliente.cel)
        cy.get('#billing_email').clear().type(cliente.email)

    })
})
Cypress.Commands.add('finalizarCompra', () => {
    cy.get('#payment_method_cod').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()
})