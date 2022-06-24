/// <reference types="cypress" />


describe('Funcionalidade Página de produtos e adição no carrinho', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')

    });

    afterEach(() => {
        cy.screenshot()
    });

    

    it('Deve adicionar um produto da lista', () => {

        cy.get('[class="product-block grid"]')
         //.first()
         //.last()
         //.eq(3)
         .contains('Aether Gym Pant')
         .click()

    });

    it.only('Deve adicionar itens ao carrinho', () => {

        var quantidade = 5

        cy.get('[class="product-block grid"]')
         .contains('Aether Gym Pant')
         .click()
         cy.get('.button-variable-item-32').click()
         cy.get('.button-variable-item-Green').click()
         cy.get('.input-text').clear().type(quantidade).click()
         cy.get('.single_add_to_cart_button').click()

         cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
         cy.get('.woocommerce-message').should('contain', quantidade + ' × “Aether Gym Pant” foram adicionados no seu carrinho.')
    });

});