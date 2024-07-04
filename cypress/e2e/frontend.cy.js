import frontend from "../fixtures/frontend.json"
import polestar from "../page/frontend"
let pol = new polestar();
describe('ploestar navigation', {
  retries: {
    runMode: 2,
    openMode: 1,
  },
}, () => {
  it('switch to polestar2', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit('/')
    cy.url().should('include', 'www.polestar.com')
    pol.alertDialog().click()
    pol.hamburgerMenu().click()
    pol.selecePolestar2().click()
    pol.seleceUpptäckPolestar2().click()
    pol.getPolestar2Text().should('have.text', frontend.polestar2)
  })
  it('switch to polestar3', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit('/')
    cy.url().should('include', 'www.polestar.com')
    pol.alertDialog().click()
    pol.hamburgerMenu().click()
    pol.selecePolestar3().click()
    pol.seleceUpptäckPolestar3().click()
    pol.getPolestar3Text().should('have.text', frontend.polestar3)

  })

})