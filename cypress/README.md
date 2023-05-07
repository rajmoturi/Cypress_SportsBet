MAIN {
    1. Any assumptions made
    - URL : https://www.sportsbet.com.au/
    - Add Bets Function/Test Scenario
    - Automated Couple of screens with basic required assertions
    - Tools & Techonologies
        - Cypress 11.2.0 With Native Packages and node-xlsx plugin, cypress-allure-plugin, jsonpath , java run time, java extensions, json plugins
        - Wrapped java Script with chai libraries, soft assertions
        - Mocha TDD Framework
        - The framework layout 
    
    2. Problems encountered and how you might fix it given more time
    - Sports Bet web Pages are built in with React javascript frameoworks, Microsoft Azure, webpack, google Font API, Nginx web server etc., 
    - Cypress recognises all the DOM elements within the given pages , however dynamic nature of many of these elements are very tricky and need to 
        handle in a smart way. Some times taking up parent and loop through childs , some times go with data- automation- id as a key Locator attibute 

    3. Problems you may encounter as the test suite grows
    - Since the application is very complex , probably we may come up with  a blueprint design to handle various functional/business units
    - centralised DOM Libs, Centralised data store, de-Centralised modular page classes, generic libs, centralised configs, organise describe, it    
        blocks in a modular way.
    - Configure docker container via git lab docker image by configuring .yaml  
    - Neat and clear code development with help docs, wikis, line comments, block comments

    4. Any improvement areas to make it easier for adoption by other team members / easier to implement future tests
    - develop core templates and centralised libraries to adopt and develop
    - CCC [ Copy code and customise ] apporah HAS TO BE DEVELOPED
}


Automation Development{
    1. Navigate to https://www.sportsbet.com.au using a browser window with width 420px, click on the first card under the ‘Next to Jump’ carousel   
       which will navigate you to a racecard
        - AUTOMATED -

    2. Add two different bets into your Bet Slip by clicking on the market button for a particular horse
        - AUTOMATED -

    3. Open the Bet Slip (yellow button in the top right) and confirm the correct two bets have been added.
        - Asserted the count of bets placed in bet slip
}
    

    Use Selenium WebDriver automation tool with one of these languages:
    Java/Javascript/Typescript
    If you are not comfortable with the above, please use a language/framework you are comfortable in to implement your solution
     - Cypress with Javascript 
    You may like to use Page Object Model or another convention of your choice
    - - PAGE OBJECT MODEL -
    Use a shell script to run tests (Optional)
    Generate a custom report (Optional) 
      - Allure Graphical Dashboard/Reports
