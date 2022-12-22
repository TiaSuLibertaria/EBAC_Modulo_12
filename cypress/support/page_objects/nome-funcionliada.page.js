import faker from 'faker'
import Fake from 'faker/lib/fake'

class CheckoutPage {

    preencherCheckout(nome, sobrenome, empresa, país, endereco, cidade,estado,cep,cel,email) {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()

        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(país)
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado)
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(cel)
        cy.get('#billing_email').clear().type(email)
        cy.get('.button').click()
    }

}

export default new CheckoutPage()