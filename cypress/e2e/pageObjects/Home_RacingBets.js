// Home Page and Racing bets related fucntions should go here
class Home_RacingBets{
    
    nextToJumpHorses(betscount){
        let i=0
        cy.fixture('UIDOMLib').then(function (UILocator){
            cy.get(UILocator.Home.RacingTab.NextToJumpHorses.R_Horse1, {timeout: 30000}).should('exist')
            cy.get(UILocator.Home.RacingTab.NextToJumpHorses.R_Horse1).click()

            //Loop Through All and select bets 
          /*       
                if ( Cypress.$("div[data-automation-id='racecard-outcome']").length > 0 ){  // verify bet cards are found are not 
                    cy.get("div[data-automation-id='racecard-outcome']") // iterate across all the elements of the betcards and place bets , note: its sequenctial at the moment
                    .each($el => {
                        
                        if (!$el.length){
                            cy.task("log", "No Bets Found!!!!")
                            return
                        }
                        else if (i < betscount) {
                            cy.task("log", "entered in to i < betscount)")
                            cy.wrap($el)
                            .click()
                            i++;
                            
                        }
                        else{
                            return
                        }
                     //   cy.task("log", i)
                       // cy.wrap(i)
                    
                    })

       
          
                    
                    // Click bet Slip Button - Yellow Button
                    cy.get('.square_fr1jty6 > .border_fyn86re > .contentContainer_ff3y6tu').click()
                    //Assert No Of Bets Placed
                    cy.get('.size16_f6irgbz.bold_f1au7gae').contains(betscount)
                                      
                }
                else{
                    cy.task("log", "Bet Cards are not found")
                    return 
                }      */  
                cy.get("div[data-automation-id='racecard-outcome']", {timeout: 30000}).should('exist')
                
                 //if ( Cypress.$("div[data-automation-id='racecard-outcome']").length > 0 ){  // verify bet cards are found are not 

                 if ( cy.get("div[data-automation-id='racecard-outcome']").its('length').should('be.gte', 0) ) {
                    cy.task("log", "bet cards are more than 0 , we can proceed adding bets")
                 }   
                 else{
                    cy.task("log", "Bet Cards are not found")
                    return 
                    }    

                    cy.task("log", "Entered In to MIAN IF")
                    cy.get("div[data-automation-id='racecard-outcome']") // iterate across all the elements of the betcards and place bets , note: its sequenctial at the moment
                    .each($el => {
                        cy.task("log", "Entered In to $el")
                        cy.wrap($el)
                        .invoke("text")
                        .then((text1)=>{
                            if (i < betscount) {
                                cy.wrap($el)
                                .click()
                                cy.get("div[data-automation-id='betslip-bet-info']")
                                .each($el1 => {
                                    cy.task("log", "Entered In to $el1")
                                    cy.wrap($el1)
                                    .invoke("text")
                                    .should((text2) =>{
                                        expect(text1).not.to.eq(text2)
                                    })
                                   
                                })
                                i++;
                                
                            }
                        })                   
                    })

       
          
                    
                    // Click bet Slip Button - Yellow Button
                  //  cy.get('.square_fr1jty6 > .border_fyn86re > .contentContainer_ff3y6tu').click()
                    //Assert No Of Bets Placed
                 //   cy.get('.size16_f6irgbz.bold_f1au7gae').contains(betscount) 
                                      
               // }
               
          //  })
    })
    }
}
export default Home_RacingBets;
