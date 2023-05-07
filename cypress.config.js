const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer'); //import allure from @shelex/cypress-allure-plugin/writer

//xlsx parsing config
const xlsx = require('node-xlsx').default;
const fs = require('fs'); //for file
const { resolve } = require("path");
const path = require('path'); //for file path

module.exports = defineConfig({
  e2e: {
    //default time out 
    "defaultCommandTimeout": 80000,

    //Page Load Time
    "pageLoadTimeout": 80000,

    //Browser Security
    "chromeWebSecurity":false,

    //Fixtures Folder
    "fixturesFolder": "cypress/e2e/fixtures/UILocatorsRepository/",

    //sports bet project config
    projectId: 'Project_SportsBet',
    env: {
      wip_url:'https://www.sportsbet.com.au/',
      dev_url:'dev url placed holder',
      sit_url:'sit url placeholder',
      prod_url:'prod url place holder'
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      //allure report config 
      allureWriter(on, config);

      //log task
      on('task',{
        log(message){
          console.log(message)
          return null
        }
      })

       //Xlsx...
       require('node-xlsx').default;
       on('task', { parseXlsx({filePath})
       { return new promises((resolve, reject) =>
        {
          try
          {
            const jsonData = xlsx.parse(fs.readFileSync(filePath));
            resolve(jsonData);
          } catch (e)
          {
            reject(e);
          } });
        }}); 
        
       const readXlsx = require('./cypress/plugins/read-xlsx.js') 
       on('task', {
        'readXlsx': readXlsx.read
       })
       
    },
  },
});
  