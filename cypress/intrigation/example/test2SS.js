describe('test',function(){
    beforeEach(function() {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      
       cy.url().should('include', '/login');
       cy.get("input[name='username']").type('Admin');
       cy.get("input[type='password']").type("admin123");
       cy.get('button[type="submit"]').click();
      //  cy.intercept('GET', '**/dashboard').as('getDashboard');
      //  cy.wait('@getDashboard', { timeout: 10000 });
       cy.url().should('include','/dashboard/index');
       //  cy.waitForPageLoad();
      });
   it.skip('my test',function(){
  // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  //cy.url({ timeout: 10000 }).should('include', '/login');

 // cy.url().should('include', '/login');
    // Verification: Check that the title is correct
    cy.title().should('eq', 'OrangeHRM');
    });
    it.skip('my second test',function(){
  //  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.url().should('include','/dashboard/index');
   // cy.title().should('eq', 'OrangeHRM');
  //  cy.title().shuold('eq','dashboard');
  //  cy.get('#oxd-brand-banner')
 
    });
    it.skip('my dasboard test',function(){
    cy.get(".oxd-userdropdown").click();
   // cy.contains('a[role="menuitem"]','About').click();
     cy.get('a[role="menuitem"].oxd-userdropdown-link[href="#"]').click();
     cy.get(':nth-child(8) > .oxd-text').should('have.text','0');
     cy.wait(4000);
     cy.get('.oxd-dialog-close-button').click();
    //cy.get(".oxd-dialog-close-button-oxd-dialog-close-button-position").click();
    })
    it('admin verify',function(){
      cy.get('.oxd-main-menu-item-wrapper:nth-child(1)').click();
      cy.url().should('include','/viewSystemUsers');
      cy.get(".orangehrm-header-container [type='button']").click();
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click();
     // cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span:nth-child(1)').click();
     cy.get('.oxd-select-option:nth-child(2)').click();
    //  cy.get('.oxd-select-option:nth-child(2)').should('have.text','admin')
    // cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').should('have.text', 'Admin');
    // cy.get('.oxd-autocomplete-wrapper').type('Peter Mac Anderson').type('{enter}');
    cy.get("li[class='oxd-topbar-body-nav-tab --parent --visited'] span[class='oxd-topbar-body-nav-tab-item']").click()
    cy.get('.oxd-dropdown-menu').click();
    cy.get('oxd-table-cell oxd-padding-cell').each(($el,index,list)=>{
       if($el==='ErnestineLarkin'){
        cy.wrap($el).click();
       }
    })
    
  
  
  })
});