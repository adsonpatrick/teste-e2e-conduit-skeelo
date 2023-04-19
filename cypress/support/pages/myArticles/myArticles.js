import { myArticlesElements } from "./myArticlesElements";

class MyArticles {
    static clickButtonProfile() {
        cy.get(myArticlesElements.buttonProfile).click()
    }

    static accessArticle() {
        cy.get(myArticlesElements.clickTitleArticle).click()
    }

    static deleteArticle() {
        cy.get(myArticlesElements.deleteArticleButton).click()
    }

    static inputComment(comment) {
        cy.get(myArticlesElements.writeComment).type(comment)
    }
    static submitComment() {
        cy.get(myArticlesElements.clickSubmitComment).click()
    }

    static commentPostedValidation() {
        cy.get(myArticlesElements.commentPosted).should('be.visible')
    }
}

export default MyArticles