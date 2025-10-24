describe("Sipariş oluşturma ve success doğrulama akışı", () => {

  it("formu doldurur, gönderir ve success sayfasında doğru bilgileri görür", () => {
    // 1. Ana sayfayı aç
    cy.visit("http://localhost:5173/");

    // 2. 'ACIKTIM' butonuna tıklayarak sipariş sayfasına git
    cy.contains("ACIKTIM").click();
    cy.url().should("include", "/order");

    // 3. İsim gir
    cy.get('input[placeholder="Adınızı girin"]').type("Recep Can Keçeci");

    // 4. Boyut seç
    cy.contains("Boyut Seç").parent().within(() => {
      cy.contains("Orta").click();
    });

    // 5. Hamur seç
    cy.contains("Hamur Seç").parent().within(() => {
      cy.get("select").select("İnce");
    });

    // 6. En az 4 ek malzeme seç
    cy.contains("Ek Malzemeler").parent().within(() => {
      cy.get('input[type="checkbox"]').eq(0).check();
      cy.get('input[type="checkbox"]').eq(1).check();
      cy.get('input[type="checkbox"]').eq(2).check();
      cy.get('input[type="checkbox"]').eq(3).check();
    });

    // 7. Not ekle
    cy.get('textarea').type("Bol malzeme olsun lütfen");

    // 8. Formu gönder
    cy.get('[data-cy="submit-order"]').should("not.be.disabled").click();

    // 9. Success sayfasına yönlendirildiğini doğrula
    cy.url().should("include", "/success");
    cy.get('[data-cy="success-page"]').should("exist");

    // 10. Success sayfasındaki bilgiler doğru mu kontrol et
    cy.get('[data-cy="order-name"]').should("contain", "Recep Can Keçeci");
    cy.get('[data-cy="order-size"]').should("contain", "Orta");
    cy.get('[data-cy="order-dough"]').should("contain", "İnce");
    cy.get('[data-cy="order-extras"]').should("not.be.empty");
    cy.get('[data-cy="order-note"]').should("contain", "Bol malzeme olsun");

    // 11. "Yeni Sipariş Ver" butonu tekrar /order sayfasına yönlendirmeli
    cy.get('[data-cy="new-order-btn"]').click();
    cy.url().should("include", "/order");
  });

});
