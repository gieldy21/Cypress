describe('Checkout dengan produk kosong', () => {
  it('Menampilkan pesan kesalahan jika melakukan checkout', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="error"]').should('contain.text', 'Your cart is empty');
  });
});
