describe('my first test', function()
{

it('my first test case',function(){

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type("ca");
    cy.wait(4000)
    cy.get('.product:visible').should('have.length',4)
    cy.get('.products').find('.product').should('have.length',4)
    cy.get('.products').find('.product').eq(1).contains("ADD TO CART").click()
    cy.get('.products').find('.product').each(($el,index,$list) =>{
    const vegtext =  $el.find('h4.product-name').text()

      if(vegtext.includes('Cashews')) {
       cy.wrap($el).find('button').click();
     //  cy.check()
      }
    })

})

})