/// <reference types="Cypress" />

const testURLvalid = "https://finanzen.check24.de/accounts/r/frs/productInfo/kreditkarte/200007"


describe('REST API Test with valid ID i.e. 200007', () => {
  it('API TEST - Validate Header', () => {
    cy.request(testURLvalid).as('check24')
    cy.get('@check24')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json;charset=UTF-8')
  })

  it('API TEST - Validate Status Code', () => {
    cy.request({
      method: 'GET',
      url: testURLvalid,
      failOnStatusCode: false,
    }).as('check24')
    cy.get('@check24').its('status').should('equal', 200)
  })

 
})
