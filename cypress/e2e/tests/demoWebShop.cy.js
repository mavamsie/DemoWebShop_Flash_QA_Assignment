

import NewLoginDetails from '.././pages/loginUserPage.js';

import NewLDesktopsOptioins from '.././pages/desktopsOptions.js';

import NewLDesktopsItems from '.././pages/desktopItems.js';




const login = new NewLoginDetails();
const desktop = new NewLDesktopsOptioins();
const desktopItems = new NewLDesktopsItems();



describe('DemoWebShop_Website', () => {

  it('Navigate on DemoWebShop_Website', () => {

    cy.fixture('inputData').then(testdata => {
      testdata.forEach(data => {

        login.loginDetails(data)
        desktop.desktopsOptions(data)
        desktopItems.desktopItems()

      });
    });
  })
})