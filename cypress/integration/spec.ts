//Header

describe('Testing Header', () => {
    it('Link', () => {
      cy.visit('http://localhost:3000/')
      cy.get('#linkLogo[href*="http://localhost:3000/"]').click()
    });

    it('Hover', () => {
        cy.get('#HeaderNavLink').trigger('mouseover');
      });
  
  });

 //Main
describe('Testing Main', () => {
    it('Cards', () => {
        cy.get('#cardMainProducts').should('be.visible');
        cy.get('#cardMainArticles').should('be.visible');
    });

    it('Button See More', () => {
        cy.get('#buttonSeeMore').click();
    });
});

//Footer
 //describe('Testing Footer', () => {
    //it('Button See More', () => {
        //cy.get('#iconIstagram[href*="https://www.instagram.com/"]').click()
    //})
//})


//Responsivity
describe('Testing Responsivity Components', () => {
    beforeEach(() => {
        cy.viewport(428,4067);
      });

    it('Banners Images', () => {
        cy.get('#banner-image').should('not.be.visible');
        cy.get('#banner-image02').should('not.be.visible');
        cy.get('#banner-image-responsive').should('be.visible');
        cy.get('#bannerimage02responsive').should('be.visible') 
    });

    it('Button Menu', () => {
      cy.get('#iconMenu').click();
    });

    it('Navegation Container', () => {
        cy.get('#NavContainer').should('not.exist')
    });
    
})



