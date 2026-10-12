/// <reference types="cypress" />
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import {staff} from "../../../pages/staff/staffPage"

Given('user is at login page', async() => {
    cy.visit(Cypress.env("base_url"));
})

When('check some text which is present on dashbord',()=>{
    staff.verifyDashborad();
})
Then ('the dashbord verify sucessfully', () => {
    console.log("Text Present");
})

When('user click on staff tab of sidebar',()=>{
    staff.clickOnSideBarStaffTab();
})
Then ('sidebar tab is open successfully', () => {
    console.log("Tab is open");
})

When('user click on add staff text in dropdown',()=>{
    staff.AddNewStaff();
})
Then ('click on add new staff successfull', () => {
    console.log("clicked successfully");
})

When('verify add new staff page',()=>{
    staff.verifyAddNewStaffPage();
})
Then ('verified successfully', () => {
    console.log("verified successfully");
})

When('user enter form details which is required',()=>{
    staff.fillAddNewStaffFormFileds();
})
Then ('staff form fields updated successfully', () => {
    console.log("fields updated successfully");
})

When('the admin enter staff email as {string}', (staffEmailAddress) => {
    staff.enterStaffEmailAddress(staffEmailAddress);
})
Then ('the admin user id should be populated correctly as {string}', (staffEmailAddressVerification) => {
    staff.verifyStaffEmailAddress(staffEmailAddressVerification);
    // console.log("updated successfully");
})

When('user click on staff submit button',()=>{
    staff.clickStaffSubmitButton();
})
Then ('staff created successfully', () => {
    console.log("staff created successfully");
})