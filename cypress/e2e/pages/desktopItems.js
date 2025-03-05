class NewLDesktopsItems {

    // Add all desktop items to cart and validate total price.
    // Remove 1 item from cart and validate total price.
    // Checkout items from cart and validate checkout.

    desktopItems() {
        //  Simple Computer
        cy.get(':nth-child(1) > .product-item > .picture > a > img').click({ force: true })
        cy.wait(2000)
        cy.get('#add-to-cart-button-75').click({ force: true })
        cy.wait(2000)

        // Build your own expensive computer

        cy.get(':nth-child(2) > .product-item > .picture > a > img').click({ force: true })
        cy.wait(2000)
        cy.get('#add-to-cart-button-74').click({ force: true })
        cy.wait(2000)

        // Build your own Cheap computer

        cy.get(':nth-child(4) > .product-item > .details > .product-title > a').click({ force: true })
        cy.wait(2000)
        cy.get('#add-to-cart-button-72').click({ force: true })

        // Adding this one for Deleting it

        cy.get(':nth-child(4) > .product-item > .picture > a > img').click({ force: true })
        cy.wait(2000)
        cy.get('#add-to-cart-button-28').click({ force: true })

        // Click the Cart Icon

        cy.get('.ico-cart > .cart-label').click({ force: true })
        cy.wait(5000)

        // select 1 item  to remove from cart and validate total price.

        cy.get(':nth-child(3) > .remove-from-cart > input').click({ force: true })
        cy.wait(5000)

        //Update the Cart

        cy.get('.update-cart-button').click({ force: true })

        //Term and Conditions Applies

        cy.get('#termsofservice').click({ force: true })

        // CheckOut 

        cy.get('#checkout').click({ force: true })

        cy.get('#billing-buttons-container > .button-1').click({ force: true })

        //Shiping Address

        cy.get('#PickUpInStore').click({ force: true })
        cy.get('#shipping-buttons-container > .button-1').click({ force: true })

        //PaymentMethod

        cy.get('#paymentmethod_0').click({ force: true })
        cy.get('#payment-method-buttons-container > .button-1').click({ force: true })
        cy.wait(2000)

        //Payment_Information

        cy.get('#payment-info-buttons-container > .button-1').click({ force: true })

        //Confirm the Order

        cy.get('#confirm-order-buttons-container > .button-1').click()

        //Navigate to my account and validate order is created successful.

        cy.get('.button-2').click({ force: true })

        cy.get('.header-links > ul > :nth-child(1) > .account').click({ force: true }) //click my email link

        cy.get(':nth-child(3) > .inactive').click({ force: true }) // Click Orders in the Left Menu
        cy.wait(2000)

        cy.get(':nth-child(1) > .buttons > .button-2').click({ force: true }) /// click details button for my  order

    }
}

export default NewLDesktopsItems