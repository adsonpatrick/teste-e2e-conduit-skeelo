/// <reference types="cypress" />

import NewArticle from "../../support/pages/newArticle/newArticle"

const faker = require('faker-br')

describe("CENÁRIO DE SUCESSO - NOVO ARTIGO", () =>{
    it("Espera que realize a publicação de um artigo", () =>{
        const title = faker.lorem.words()
        const titleSubject = faker.lorem.words()
        const article = faker.lorem.text()

        cy.step('DADO... que eu acesse a plataforma')
        cy.login('email', 'password')

        cy.step('QUANDO... clico no botão de nova postagem')
        NewArticle.clickNewPost()

        cy.step('E... preencho o título e subtitulo')
        NewArticle.insertTitle(title)
        NewArticle.insertTitleSubject(titleSubject)

        cy.step('E... escrevo o artigo e clico em publicar')
        NewArticle.writeArticle(article)
        NewArticle.submitArticle()

        cy.step('ENTÃO... o artigo deve ser')
        NewArticle.articleUrlValidation()
    })
})

describe("CENÁRIO DE FALHA - NOVO ARTIGO", () =>{
    it("Espera que não publique um artigo com o título em branco", () =>{
        const titleSubject = faker.lorem.words()
        const article = faker.lorem.text()

        cy.step('DADO... que eu acesse a plataforma')
        cy.login('email', 'password')

        cy.step('QUANDO... clico no botão de nova postagem')
        NewArticle.clickNewPost()

        cy.step('E... preencho o subtitulo')
        NewArticle.insertTitleSubject(titleSubject)

        cy.step('E... escrevo o artigo')
        NewArticle.writeArticle(article)

        cy.step('E... clico em publicar artigo')
        NewArticle.submitArticle()

        cy.step('ENTÃO... deve aparecer uma mensagem de erro informando que o título não pode ficar em branco')
        NewArticle.messageError()
    })
})