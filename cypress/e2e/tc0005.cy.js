describe('Menambah produk yang tersedia ke keranjang', () => {
  it('Menampilkan Produk berhasil ditambahkan ke keranjang', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('contain.text', '1');
  });
});
