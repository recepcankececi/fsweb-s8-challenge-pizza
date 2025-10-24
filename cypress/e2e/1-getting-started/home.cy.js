describe("Home sayfası yönlendirme testleri", () => {
  const BASE_URL = "http://localhost:5173";

  beforeEach(() => {
    cy.visit(BASE_URL);
  });

  it("ACIKTIM butonu tıklandığında /order sayfasına yönlendirir", () => {
    cy.get('[data-cy="home-aciktim"]').should("be.visible").click();
    cy.url().should("include", "/order");
    cy.get("h3").should("contain", "Position Absolute Acı Pizza");
  });

  it("Tüm SİPARİŞ VER butonları doğru yönlendiriyor", () => {
    cy.get('[data-cy="home-order-button"]').should("have.length.greaterThan", 0)
      .then(($buttons) => {
        const total = $buttons.length;

        for (let i = 0; i < total; i++) {
          // Her buton tıklaması öncesi sayfayı sıfırla
          cy.visit(BASE_URL);

          // İlgili butonu tekrar seç ve tıkla
          cy.get('[data-cy="home-order-button"]').eq(i)
            .should("be.visible")
            .scrollIntoView()
            .click();

          // Yönlendirme kontrolü
          cy.url().should("include", "/order");
          cy.get("h3").should("contain", "Position Absolute Acı Pizza");
        }
      });
  });
});
