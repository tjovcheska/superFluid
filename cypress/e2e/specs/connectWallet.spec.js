import superFluidPage from "../../pages/superFluidPage";

describe('Test User Login', () => {
  it('Connects with Metamask', () => {
    cy.visit('https://app.superfluid.finance/wrap?upgrade');

    // Click "Connect Wallet" button
    superFluidPage.elements.connectWalletButton().first().click();

    // Check if the Pop Up is visible
    superFluidPage.elements.walletOptionsPopUp().should('be.visible');


    // Click "Metamask" option
    superFluidPage.elements.metaMaskOption().click();

    // Accept Metamask access
    cy.acceptMetamaskAccess();

    // Check if "Wrap" button is displayed and disabled
    superFluidPage.elements.wrapButton().should('be.disabled');
  });
});
