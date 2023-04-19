import { logoutElements } from "./logoutElements"

class Logout {
    static clickOnSettings() {
        cy.get(logoutElements.settingsButton).click()
    }

    static exitPlataform() {
        cy.intercept({
            url: 'https://api.realworld.io/api/articles?limit=10&offset=0'
        }).as('logoutSuccess')
        cy.get(logoutElements.logoutButton).click()
    }

    static logoutUrlValidation() {
        cy.wait('@logoutSuccess').its('response.statusCode').should('eq', 200)
    }
}
export default Logout