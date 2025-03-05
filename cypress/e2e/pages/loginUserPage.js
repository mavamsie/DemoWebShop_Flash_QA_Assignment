class NewLoginDetails {

    loginDetails(login) {

        //Navigate to DemoWebShop Website

        cy.visit('https://demowebshop.tricentis.com/')

        cy.get('.ico-login').click()

        cy.get('#Email').type(login.Email)
        cy.get('#Password').type(login.Password)

        cy.get('form > .buttons > .button-1').click()


    }
}

export default NewLoginDetails