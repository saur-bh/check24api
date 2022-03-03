/// <reference types="Cypress" />

const testURLInvalid = "https://finanzen.check24.de/accounts/r/frs/productInfo/kreditkarte/abcd"


describe('REST API Test with valid ID i.e. abcd', () => {
    
    it('API TEST - Validate Status Code', () => {
      cy.request({
        method: 'GET',
        url: testURLInvalid,
        failOnStatusCode: false,
      }).as('check24')
      cy.get('@check24').its('status').should('equal', 404)
    })

    it('API TEST - Validate message', () => {
        cy.request({
          method: 'GET',
          url: testURLInvalid,
          failOnStatusCode: false,
        }).as('check24')
        cy.get('@check24').its('body').should('include', { message: "HTTP 404 Not Found" })
      })
  
   
  })