describe('Login dengan username tidak terdaftar', () => {
  it('Menampilkan pesan kesalahan jika username tidak terdaftar', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_wrong');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match any user in this service');
  });
});
