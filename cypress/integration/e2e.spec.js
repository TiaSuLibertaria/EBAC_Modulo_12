context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
        //cy.limparCarrinho()
        cy.visit('/produtos/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.limparCarrinho()
        cy.visit('/produtos/page/2')
        cy.adicionarProduto(1, 'S', 'Blue', 1)
        cy.visit('/produtos/page/2')
        cy.adicionarProduto(2, 'M', 'Red', 1)
        cy.visit('/produtos/')
        cy.adicionarProduto(2, 'XS', 'Blue', 2)

        cy.preencherCheckout()

        cy.finalizandoCompra()

        cy.get('.woocommerce-notice').should('contain', 'Obrigado')
    })



})