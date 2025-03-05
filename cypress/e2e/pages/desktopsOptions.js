class NewLDesktopsOptioins {

    desktopsOptions(options) {

        //Sort desktops by all options.

        cy.get('.top-menu > :nth-child(2) > [href="/computers"]').trigger('mouseover')
        cy.get("body > div.master-wrapper-page > div.master-wrapper-content > div.header-menu > ul.top-menu > li:nth-child(2) > ul > li:nth-child(1) > a").click()

        //Sort desktops by all options.

        cy.get('#products-orderby').should('be.visible')

        ///Sort desktops by Position.

        cy.get('select[name="products-orderby"]').select(0)
        cy.wait(2000)

        //Sort desktops by Name : A to Z.

        cy.get('#products-orderby').select(1)
        cy.wait(2000)

        ///Sort desktops by Name : Z to A.

        cy.get('#products-orderby').select(2)
        cy.wait(2000)

        ///Sort desktops by Price: Low to High .

        cy.get('#products-orderby').select(3)
        cy.wait(2000)

        ///Sort desktops by Price: HIgh to Low .

        cy.get('#products-orderby').select(4)
        cy.wait(2000)

        ///Sort desktops by Created on .

        cy.get('#products-orderby').select(5)
        cy.wait(2000)

    }
}

export default NewLDesktopsOptioins