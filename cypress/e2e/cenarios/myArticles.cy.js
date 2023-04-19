import MyArticles from "../../support/pages/myArticles/myArticles"

const faker = require('faker-br')

describe('CENÁRIO DE SUCESSO - MEUS ARTIGOS', () => {
    it('Espera que consiga publicar um comentário em um artigo', () => {
        const comments = faker.lorem.paragraph()

        cy.step('DADO... que eu acesse a plataforma')
        cy.login('email', 'password')

        cy.step('QUANDO... Clico no perfil')
        MyArticles.clickButtonProfile()

        cy.step('E... Acesso algum artigo e escrevo um comentário')
        MyArticles.accessArticle()
        MyArticles.inputComment(comments)

        cy.step('E... Clico no botão de submeter')
        MyArticles.submitComment()

        cy.step('Então o comentário é postado no artigo')
        MyArticles.commentPostedValidation()
    })
})
