describe('OrangeHRM Login Tests', function() {
  
    // Runs before each test
    beforeEach(function() {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    });
  
    it('should verify the login page URL and title', function() {
      cy.url().should('include', '/login');
      cy.title().should('eq', 'OrangeHRM');
    });
  
    it('should log in with valid credentials and redirect to dashboard', function() {
      cy.get("input[name='username']").type('Admin');
      cy.get("input[type='password']").type('admin123');
      cy.get('button[type="submit"]').click();
  
      // Verify successful login
      cy.url().should('include', '/dashboard'); // Adjust according to actual dashboard URL
      cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'Dashboard'); // Verify dashboard element
    });
  
  });
  