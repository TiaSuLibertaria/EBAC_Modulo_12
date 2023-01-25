
class CheckoutPage {

    preencherCheckout() {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()

        cy.fixture('cliente', (dados) => {
            cy.get('#billing_first_name').clear().type(dados.nome)
            cy.get('#billing_last_name').clear().type(dados.sobrenome)
            cy.get('#billing_company').clear().type(dados.empresa)
            cy.get('#select2-billing_country-container').click().type(dados.pais)
            cy.get('#billing_address_1').clear().type(dados.endereco)
            cy.get('#billing_city').clear().type(dados.cidade)
            cy.get('#select2-billing_state-container').click().type(dados.estado)
            cy.get('#billing_postcode').clear().type(dados.cep)
            cy.get('#billing_phone').clear().type(dados.cel)
            cy.get('#billing_email').clear().type(dados.email)
            cy.get('.button').click()
        })
            
    }

}

export default new CheckoutPage()