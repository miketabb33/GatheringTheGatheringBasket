const facebookLoginUrl = "https://www.facebook.com/";
const gatheringBasketUrl = "https://www.facebook.com/inthegatheringbasket";
const botEmail = "botUsername";
const botPassword = "botPassword";

describe("Bot", () => {
  it("should scrape", () => {
    cy.visit(facebookLoginUrl);
    loginToFacebookWithBot();
  });
});

const loginToFacebookWithBot = () => {
  const emailInput = cy.get('[data-testid="royal_email"]');
  const passwordInput = cy.get('[data-testid="royal_pass"]');
  const loginButton = cy.get('[data-testid="royal_login_button"]');
  emailInput.type(botEmail);
  passwordInput.type(botPassword);
  loginButton.click();
};
