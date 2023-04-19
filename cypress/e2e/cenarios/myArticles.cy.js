const faker = require('faker-br')

import MyArticles from "../../support/pages/myArticles/myArticles"

describe('CENÁRIO DE SUCESSO - MEUS ARTIGOS', () => {
    it('Espera que consiga publicar um comentário em um artigo', () => {
        const comments = faker.lorem.paragraph()

        cy.login('email', 'password')
        MyArticles.clickButtonProfile()
        MyArticles.accessArticle()
        MyArticles.inputComment(comments)
        MyArticles.submitComment()
        MyArticles.commentPostedValidation()
    })
})
