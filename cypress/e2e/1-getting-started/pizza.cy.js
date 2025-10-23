/// <reference types="cypress" />

// URL'yi projene göre ayarla
const BASE_URL = 'http://localhost:5173/order';

describe('Pizza Formu', () => {
  beforeEach(() => {
    cy.visit(BASE_URL);
  });

  it('inputa bir metin girer', () => {
    // İsim alanına yaz ve doğrula
    cy.get('[data-cy="input-name"]').as('name');
    cy.get('@name').type('Ali');
    cy.get('@name').should('have.value', 'Ali');

    // İsteğe bağlı: hata yıldızı kayboldu mu (varsa)
    // cy.get('[data-cy="label-name"] .error-star').should('not.exist');
  });

  it('birden fazla malzeme seçilebilir', () => {
    // En az 4 en çok 10 kuralını sağlayacak şekilde 4 adet işaretle
    const extras = ['Pepperoni', 'Sosis', 'Domates', 'Mısır'];

    extras.forEach((e) => {
      cy.get(`[data-cy="extra-${e}"]`).check().should('be.checked');
    });

    // 5’inciyi da seçip seçilebildiğini doğrulamak istersen:
    // cy.get('[data-cy="extra-Soğan"]').check().should('be.checked');

    // Toplam seçili sayısını kontrol (checkbox container’ında):
    cy.get('[data-cy="checkbox-extras"] input[type="checkbox"]:checked')
      .should('have.length.at.least', 4);
  });

  it('formu gönderir', () => {
    // Gerekli alanlar
    cy.get('[data-cy="input-name"]').type('Ayşe');

    // Boyut (radio)
    cy.get('[data-cy="radio-size"] input[type="radio"][value="Orta"]').check().should('be.checked');

    // Hamur (select)
    cy.get('[data-cy="select-dough"]').select('İnce').should('have.value', 'İnce');

    // En az 4 ekstra
    ['Pepperoni', 'Sosis', 'Domates', 'Mısır'].forEach((e) => {
      cy.get(`[data-cy="extra-${e}"]`).check();
    });

    // Not
    cy.get('[data-cy="textarea-note"]').type('Hızlı teslim lütfen.');

    // Konsol log’un payload aldığına dair spy
    cy.window().then((win) => {
      cy.spy(win.console, 'log').as('consoleLog');
    });

    // Submit aktif olmalı
    cy.get('[data-cy="submit-order"]').should('not.be.disabled').click();

    // Konsola payload basıldı mı?
    cy.get('@consoleLog').should('be.called');
    // İstersen argüman yapısını da doğrula:
    // cy.get('@consoleLog').should('be.calledWithMatch', Cypress.sinon.match.has('isim', 'Ayşe'));
  });
});
