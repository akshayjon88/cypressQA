describe('test',function(){
    beforeEach(function() {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.waitForPageLoad();
      });
   it('my test',function(){
  // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   cy.url().should('include', '/login');
    // Verification: Check that the title is correct
    cy.title().should('eq', 'OrangeHRM');
   
    
    });
    it('my second test',function(){
  //  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   cy.get("input[name='username']").type('Admin');
    cy.get("input[type='password']").type("admin123");
    cy.get('button[type="submit"]').click();


    });
});