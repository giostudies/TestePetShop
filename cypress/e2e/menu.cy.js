describe('Menu testes', () => {
  it('Verificar se o nav está mandando pro lugar correto', () => {
    cy.visit('/')
    cy.get('.mobile-menu').click()
    cy.get('.header__nav-list > :nth-child(2) > a').click()
    cy.url().should('include', '/#sobre')
    cy.get('.mobile-menu').click()
    cy.get('.header__nav-list > :nth-child(3) > a').click()
    cy.url().should('include', '/#servicos')
    cy.get('.mobile-menu').click()
    cy.get('.header__nav-list > :nth-child(4) > a').click()
    cy.url().should('include', '/#depoimentos')
  })
})