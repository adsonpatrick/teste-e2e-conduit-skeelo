import { newArticleElements } from "./newArticleElements"
class NewArticle {
    static clickNewPost() {
        cy.get(newArticleElements.buttonNewPost).click()
    }

    static insertTitle(title) {
        cy.get(newArticleElements.insertArticleTitle).type(title).should("have.value", title)
    }

    static insertTitleSubject(titleSubject) {
        cy.get(newArticleElements.insertSubTitle).type(titleSubject).should("have.value", titleSubject)
    }

    static writeArticle(article) {
        cy.get(newArticleElements.insertArticle).type(article)
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
