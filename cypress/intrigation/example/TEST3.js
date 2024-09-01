describe('OrangeHRM Test Suite', function () {
  // Using `before` to perform the login only once before all tests
  beforeEach(function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
    // Ensure the login page is loaded
    cy.url().should('include', '/login');
    
    // Perform login
    cy.get("input[name='username']").type('Admin');
    cy.get("input[type='password']").type("admin123");
    cy.get('button[type="submit"]').click();

    // Wait for dashboard to load after login
    // cy.intercept('GET', '**/dashboard').as('getDashboard');
    // cy.wait('@getDashboard', { timeout: 10000 });
    
    // Ensure we are redirected to the dashboard
    cy.url().should('include', '/dashboard/index');
  });

  it('Verifies the page title after login', function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    // Verification: Check that the title is correct
    cy.title().should('eq', 'OrangeHRM');
  });

  it('Checks the dashboard URL', function () {
    // Ensure we are on the dashboard page
    cy.url().should('include', '/dashboard/index');
  });

  it('Interacts with the user dropdown and verifies about dialog', function () {
    // Click the user dropdown menu
    cy.get(".oxd-userdropdown").click();

    // Click the "About" link
    cy.get('a[role="menuitem"].oxd-userdropdown-link[href="#"]').click();

    // Verify the text of the nth-child element
    cy.get(':nth-child(8) > .oxd-text').should('have.text', '0');

    // Wait and close the dialog
    cy.wait(4000);
    cy.get('.oxd-dialog-close-button').click();
  });

  it('Verifies the Admin menu functionality', function () {
    // Click the Admin menu item
    cy.get('.oxd-main-menu-item-wrapper:nth-child(1)').click();
    cy.url().should('include', '/viewSystemUsers');

    // Click the Add button in the system users view
    cy.get(".orangehrm-header-container [type='button']").click();
  });
});

  