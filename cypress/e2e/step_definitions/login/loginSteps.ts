/// <reference types="cypress" />
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import {login} from "../../../pages/login/loginPage"

before(() => {
    cy.visit(Cypress.env("base_url"));
  })

When('user enter his email and password',() => {
    login.successfullLogin();
})

When('staff enters his email and password',() => {
    cy.login(Cypress.env("staff_username"), Cypress.env("staff_password"));
    cy.wait(3000);
})

Then ('the user is logged in sucessfully', () => {
    console.log("sucessfully Login");
})

When('check some text which is present on dashbord',()=>{
    login.verifyDashboard();
})
Then ('the dashbord verify sucessfully', () => {
    console.log("Text Present");
})

//parametrize login functionlity
// When('valid username as {string} wrong password as {string}',(username,password)=>{
//     login.validUsernameWorngPassword(username,password);
// })
// Then ('password is invalid', () => {
//     console.log("Incorrect Password");
// })













// When('wrong username valid password',()=>{
//     login.invalidUsernameValidPassword();
// })
// Then ('username is invalid', () => {
//     console.log("Incorrect username");
// })

// When('Invalid username Invalid password',()=>{
//    login.invalidUsernameInvalidPassword();
// })
// Then ('both username and password invalid', () => {
//     console.log("invalid username invalid password");
// })



// /// <reference types="cypress" />
// import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
// import {login} from "../../../pages/login/loginPage"

// // Given('user is at login page', async() => {
// //     beforeEach()
// //     cy.visit(Cypress.env("base_url"));
// // })
// before(() => {
//     cy.visit(Cypress.env("base_url"));
//   })

// When('the user enters email as {string} and password as {string}',(username, password ) => {
//     login.successfullLogin(username, password);
// })
// // When('the user enters email and password',() => {
// //     // cy.visit(Cypress.env("base_url"));
// //     login.successfullLogin();
// // })
// Then ('the user is logged in sucessfully', () => {
//     console.log("sucessfully Login");
// })

// When('check some text which is present on dashbord',()=>{
//     login.verifyDashborad();
// })
// Then ('the dashbord verify sucessfully', () => {
//     console.log("Text Present");
// })

// When('valid username wrong password',()=>{
//     // cy.visit(Cypress.env("base_url"));
//     login.validUsernameWorngPassword();
// })
// Then ('password is invalid', () => {
//     console.log("Incorrect Password");
// })

// When('wrong username valid password',()=>{
//     // cy.visit(Cypress.env("base_url"));
//     login.invalidUsernameValidPassword();
// })
// Then ('username is invalid', () => {
//     console.log("Incorrect username");
// })

// When('Invalid username Invalid password',()=>{
//     // cy.visit(Cypress.env("base_url"));
//     login.invalidUsernameInvalidPassword();
// })
// Then ('both username nad password invalid', () => {
//     console.log("invalid username invalid password");
// })