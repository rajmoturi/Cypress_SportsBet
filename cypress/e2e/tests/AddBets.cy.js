import Login from "../../e2e/pageObjects/Login"
import Home_RacingBets from "../../e2e/pageObjects/Home_RacingBets"
import 'assert'

let rowslength; // loop through excel testdataJson element blocks

const loginpage = new Login()
const homeRacingBets = new Home_RacingBets()

describe('Sports Bet - Racing', () => {
  Cypress.on('fail', (error, runnable) => {
    debugger
    //we now have access to the error instance
    throw error // throw error to have test still failed
  })

  // the following code is to parse excel rows and produce JSON data file at run time of a specified excel sheet
  /*beforeEach( () => {
    cy.Task('readXlsx', {file: '../../e2e/fixtures/testdata.xlsx', sheet: 'Main'}).then(rows)
    rowslength = rows.length;
    cy.writeFile('../../e2e/fixtures/testdata.json', {rows})
  })*/

  it('Sports Bet - Racing - Add Horse Bets', () => {
    loginpage.navigate(Cypress.env('wip_url'))  // cy.visit('https://www.sportsbet.com.au/')
    homeRacingBets.nextToJumpHorses(2)
  })
})