import { newArticleElements } from "./newArticleElements"

class NewArticle {
    static clickNewPost() {
        cy.get(newArticleElements.buttonNewPost).click()
    }

    static insertTitle(title) {
        cy.get('#main > div > div > div > div > div > form > fieldset > fieldset:nth-child(1) > input').first().type(title, {delay: 0})
    }

    static insertTitleSubject(titleSubject) {
        cy.get('#main > div > div > div > div > div > form > fieldset > fieldset:nth-child(2) > input').first().type(titleSubject, {delay: 0}).should("have.value", titleSubject)
    }

    static writeArticle(article) {
        cy.get(newArticleElements.insertArticle).type(article, {delay: 0})
    }

    static submitArticle() {
        cy.get(newArticleElements.publishArticleButton).click()
    }

    static articleUrlValidation() {
        cy.url().should('include', '164761')
    }

    static messageError() {
        cy.get(newArticleElements.spanErrorArticle).should("contain", "can't be blank")
    }
}

export default NewArticle
