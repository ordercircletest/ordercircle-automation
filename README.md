# cypress-cucumber-typescript project

> Cypress 10+ with Cucumber Type Script.


- ## 💻 Pre-requisites

Before you use this project you only need to have Node Js installed in your computer.
    https://nodejs.org/es/download/

Set The Proxy settings in npm config file by writing the command npm config edit
    https_proxy=http://username:password@ustrlxmcp01.genre.com:80 (Replace the @ sign in password by %40)
    registry=http://registry.npmjs.org/

## 🚀 Goto the project folder
       Open the terminal and run: npm init -y
       The package.json will be created
## 🚀 Install cypress
       run npm install --save-dev cypress
       
## 🚀 Open cypress
       run npx cypress open

## 🚀 install ntlm auth plugin
       run npm install --save-dev cypress-ntlm-auth
       run npx ntlm-proxy 
       open another terminal and run npx cypress-ntlm open

## 🚀 Run the demo: 
Open the terminal and run: npm run cypress:execution

## 🚀 Run the specific feature file in cmd with headless option

npx cypress run --browser chrome --spec "cypress/e2e/features/login.feature"


## 🚀 Run All the feature files in cmd with headless option

npx cypress run --browser chrome

## 🚀 Run the specific feature file with cmd without headless option

npx cypress run --browser chrome --headed --spec "cypress/e2e/features/login.feature"

# 🚀 Run this command to generate the HTML report 

node cucumber-html-report.js