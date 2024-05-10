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

    // assuming there is only metamask popping up 
    // always important to switch between metamask and cypress window
    // cy.switchToMetamaskWindow();
    // // connect to dapp
    // cy.acceptMetamaskAccess().should("be.true");
    // cy.confirmMetamaskSignatureRequest();
    // // switch back to cypress window (your dApp)
    // cy.switchToCypressWindow();
    // // check UI change
    // cy.contains('...').should('be.visible');
  });
});
