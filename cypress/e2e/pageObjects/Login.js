//All portal Navigate and Login related code should go here

class Login{

    //Initialise and navigate to sports bet portal
    navigate(url){
        //Clear all cookies and cache references
        cy.clearCookies()
        cy.clearLocalStorage()
        indexedDB.deleteDatabase('firebaseLocalStorageDb')
        cy.window().then((win) => {
            win.sessionStorage.clear()
        });
        Cypress.session.clearAllSavedSessions()
        cy.visit(url, {failOnStatusCode: false})
        return null
    }

    //Enter Login Code
    loginToSportsBetAccount(){

    }
}

export default Login;