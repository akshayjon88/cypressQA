describe('test',function(){
    beforeEach(function() {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      
       cy.url().should('include', '/login');
       cy.get("input[name='username']").type('Admin');
       cy.get("input[type='password']").type("admin123");
       cy.get('button[type="submit"]').click();
       cy.url().should('include','/dashboard/index');
       //  cy.waitForPageLoad();
      });
   it('my test',function(){
  // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  //cy.url({ timeout: 10000 }).should('include', '/login');

 // cy.url().should('include', '/login');
    // Verification: Check that the title is correct
    cy.title().should('eq', 'OrangeHRM');
    });
    it('my second test',function(){
  //  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.url().should('include','/dashboard/index');
   // cy.title().should('eq', 'OrangeHRM');
  //  cy.title().shuold('eq','dashboard');
  //  cy.get('#oxd-brand-banner')
 
    });
    it('my dasboard test',function(){
    cy.get(".oxd-userdropdown").click();
    
    })
});