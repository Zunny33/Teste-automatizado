/// <reference types="cypress" />
var faker = require('faker'); 

afterEach(() => {
    cy.screenshot()
});

context('Comentar no blog', () => {

    it('Deve comentar em uma publicação no blog', () => {

        let nomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)

        cy.visit('http://lojaebac.ebaconline.art.br/blog-grid/')
        cy.get(':nth-child(2) > .post-grid > .post > .entry-content > .entry-meta > .entry-title > a').click()
        cy.get('#comment').type('Muito interessante')
        cy.get('#author').type(nomeFaker)
        cy.get('#email').type(emailFaker)
        cy.get('#submit').click()

        
    });

    it('Erro ao comentar', () => {

        let nomeFaker = faker.name.lastName()
        
        cy.visit('http://lojaebac.ebaconline.art.br/blog-grid/')
        cy.get(':nth-child(2) > .post-grid > .post > .entry-content > .entry-meta > .entry-title > a').click()
        cy.get('#comment').type('Muito interessante')
        cy.get('#author').type(nomeFaker)
        cy.get('#email').type('email')
        cy.get('#submit').click()

        cy.get('#error-page').should('contain', 'Erro: Digite um endereço de e-mail válido.')


        
    });
    
});