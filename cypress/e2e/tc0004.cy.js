describe('Melihat detail produk', () => {
  it('Menampilkan detail produk', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.inventory_item_name').contains('Sauce Labs Backpack').click();
    cy.url().should('include', '/inventory-item.html');
    cy.get('.inventory_details_name').should('contain.text', 'Sauce Labs Backpack');
    cy.get('.inventory_details_price').should('be.visible');
  });
});
