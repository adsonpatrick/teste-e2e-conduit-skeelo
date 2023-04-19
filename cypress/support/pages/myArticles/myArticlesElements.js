const randomPosition = Math.floor(Math.random() * 4) + 1

export const myArticlesElements = {
    buttonProfile: ':nth-child(4) > .nav-link',
    clickTitleArticle: `:nth-child(${randomPosition}) > .preview-link > h1`,
    deleteArticleButton: '.btn-outline-danger',
    writeComment: '.form-control',
    clickSubmitComment: '.card-footer > .btn',
    editArticleButton: '.card-footer > .btn',
    commentPosted: '.card-text'

}