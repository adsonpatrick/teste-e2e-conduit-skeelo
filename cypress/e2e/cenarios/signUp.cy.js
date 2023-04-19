
import SignUp from "../../support/pages/signUp/signUp"

const faker = require('faker-br')
const urlSignUp = '/register?_k=p4bxi7'

describe("CENÁRIO DE SUCESSO - SIGN UP", () => {
    it("Espera que crie uma nova conta na plataforma", () => {
        const username = faker.internet.userName()
        const email = faker.internet.exampleEmail()
        const password = faker.internet.password()

        cy.step('DADO... que eu queira criar uma nova conta')
        cy.visit(urlSignUp)

        cy.step('QUANDO... preencho username, email e senha')
        SignUp.insertUsername(username)
        SignUp.insertEmail(email)
        SignUp.insertPassword(password)

        cy.step('E... clico no botão de criar conta')
        SignUp.clickCrateAccountButton()

        cy.step('ENTÃO... a conta é criada com sucesso')
        SignUp.accountUrlValidation()

    })
})

describe("CENÁRIO DE FALHA - SIGN UP", () => {
    it("Espera que não crie uma nova conta com um username já utilizado", () => {
        const email = faker.internet.exampleEmail()
        const password = faker.internet.password()

        cy.step('DADO... que eu queira criar uma nova conta')
        cy.visit(urlSignUp)

        cy.step('QUANDO... preencho username já existente')
        SignUp.insertUsername('Eneida_Pereira47')

        cy.step('E... preencho email e senha')
        SignUp.insertEmail(email)
        SignUp.insertPassword(password)

        cy.step('E... clico no botão de criar conta')
        SignUp.clickCrateAccountButton()

        cy.step('ENTÃO... retorna uma mensagem de erro informando que username já existe')
        SignUp.messageError()

    })
})