describe('Aplicación Angular - pruebas E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('muestra el título principal', () => {
    cy.contains('Angular — Mapbox, Animaciones y Click Tracking').should('be.visible');
  });

  it('incrementa el contador de tracking al hacer click', () => {
    cy.contains('button', 'Botón principal').click();
    cy.contains('boton-principal:').parent().should('contain.text', '1');
    cy.contains('Total de clicks:').should('contain.text', '1');
  });

  it('muestra los tres botones con tracking tags', () => {
    cy.get('[data-tracking-tag="boton-principal"]').should('exist');
    cy.get('[data-tracking-tag="boton-secundario"]').should('exist');
    cy.get('[data-tracking-tag="boton-demo"]').should('exist');
  });
});