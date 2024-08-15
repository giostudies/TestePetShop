describe('Visitar a página', () => {
  // Before: hook que permite executar um comando antes dos testes
  before(() => {
    // Inicia o servidor antes de rodar os testes
    cy.exec('npx http-server -p 8080', { failOnNonZeroExit: false });
  });
  it('Testar se está entrando corretamente', () => {
    cy.visit('/')
  })
})