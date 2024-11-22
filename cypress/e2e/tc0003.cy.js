describe('Login dengan password Tidak Terdaftar', () => {
  it('Menampilkan pesan kesalahan jika password tidak terdaftar', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standart_user');
    cy.get('#password').type('secret_wrong');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match any user in this service');
  });
});
