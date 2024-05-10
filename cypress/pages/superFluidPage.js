class superFluidPage {
    elements = {
        connectWalletButton: () => cy.get("[data-cy='connect-wallet-button']"),
        walletOptionsPopUp: () => cy.get("[role='document']"),
        metaMaskOption: () => cy.get("[data-testid='rk-wallet-option-metaMask’]")
    };
}
  
export default new superFluidPage();
