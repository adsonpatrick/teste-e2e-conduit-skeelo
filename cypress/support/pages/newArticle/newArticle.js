import { findAllByAltText, findAllByPlaceholderText } from "@testing-library/dom"
import { newArticleElements } from "./newArticleElements"
class NewArticle {
    static clickNewPost() {
        cy.get(newArticleElements.buttonNewPost).click()
    }

    static insertTitle(title) {
        //cy.findAllByPlaceholderText("Article Title").type(title, {delay: 0}).should("have.value", title)
        //cy.get('fieldset.form-group').contains('input', 'Article Title').type(title, {delay: 0}).should("have.value", title)
        //cy.get(newArticleElements.insertArticleTitle).type(title, {delay: 0}).should("have.value", title)
        //cy.get('input.form-control.form-control-lg[placeholder="Article Title"]').type(title, {delay: 0}).should("have.value", title)
        cy.get('input.form-control.form-control-lg').should('have.attr', 'placeholder').and('contain', 'Article Title').type(title, {delay: 0})


    }

    static insertTitleSubject(titleSubject) {
        //cy.findAllByPlaceholderText(`What's this article about?`).type(titleSubject, {delay: 0}).should("have.value", titleSubject)
        //cy.contains('What s this article about?').find('input').type(titleSubject, {delay: 0}).should("have.value", titleSubject)
        //cy.get(newArticleElements.insertSubTitle).type(titleSubject, {delay: 0}).should("have.value", titleSubject)
        cy.get('#form-id input:nth-child(2)').type(titleSubject, {delay: 0}).should("have.value", titleSubject)
    }

    static writeArticle(article) {
        //cy.findAllByPlaceholderText("Write your article (in markdown)").type(article, {delay: 0}).should("have.value", article)
        //cy.get('fieldset.form-group').contains('input', 'Write your article (in markdown)').type(article, {delay: 0}).should("have.value", article)
        cy.get(newArticleElements.insertArticle).type(article, {delay: 0}).should("have.value", article)
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
