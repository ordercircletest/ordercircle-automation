/// <reference types="cypress" />
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import {adminStaff} from "../../../pages/staffOrder/adminStaffPage"

Given('user is at login page', async() => {
    cy.visit(Cypress.env("base_url"));
})

When('check some text which is present on dashbord',() => {
    adminStaff.verifyDashborad();
})
Then ('the admin dashbord is verified sucessfully', () => {
    console.log("Text is Present");
})

When('user click on staff tab of sidebar',() => {
    adminStaff.clickOnSideBarStaffTab();
})
Then ('sidebar tab is open successfully', () => {
    console.log("Tab is open");
})

When('user click on add staff text in dropdown',() => {
    adminStaff.AddNewStaff();
})
Then ('click on add new staff successfull', () => {
    console.log("clicked successfully");
})

When('verify add new staff page by applying some checks on it',() => {
    adminStaff.verifyAddNewStaffPage();
})
Then ('staff page is verified successfully', () => {
    console.log("verified successfully");
})

When('staff enter form details which is required to create an admin staff',() => {
    adminStaff.fillAddNewAdminStaffFormFileds();
})
Then ('staff form fields updated successfully and new staff is created', () => {
    console.log("fields updated successfully");
})

When('the staff enter staff email as {string}', (staffEmailAddress) => {
    adminStaff.enterStaffEmailAddress(staffEmailAddress);
})
Then ('the staff user id should be populated correctly as {string}', (staffEmailAddressVerification) => {
    adminStaff.verifyStaffEmailAddress(staffEmailAddressVerification);
    console.log("verified staff email successfully");
})

When('the staff should be click on Switch to staff button',() => {
    adminStaff.clickSwitchToAdminButton();
})
Then ('the staff clicked Switch to staff button successfully', () => {
    console.log("button clicked successfully");
})

When('the staff clicked on submit button to create staff staff',() => {
    adminStaff.clickStaffSubmitButton();
})
Then ('the staff clicked on submit button successfully', () => {
    console.log("clicked on submit button successfully");
})

When('the staff click on logout button then logout popup is open',() => {
    adminStaff.clickOnLoginPopup();
})
Then ('the staff logout popup should be open', () => {
    console.log("logout popup is open successfully");
})

When('the staff verify popup by class represent staff name in popup',() => {
    adminStaff.clickOnSignOutButton();
})
Then ('the staff is verified by name successfully', () => {
    console.log("verified staff class successfully");
})

When('the staff verify that it should be on login page',() => {
    adminStaff.verifyLoginPage();
})
Then ('the staff verified login page successfully', () => {
    console.log("verified login page successfully");
})

When('the staff memeber enter enter his username as {string}', (staffUsername) => {
    adminStaff.enterStaffUsername(staffUsername);
})
Then ('the staff member username should be populated correctly as {string}', (staffUsernameVerification) => {
    adminStaff.verifyStaffUsername(staffUsernameVerification);
    console.log("verified staff username successfully");
})

When('the staff memeber enter enter his password as {string}', (staffPassword) => {
    adminStaff.enterStaffPassword(staffPassword);
})
Then ('the staff member password should be populated correctly as {string}', (staffPasswordVerification) => {
    adminStaff.verifyStaffPassword(staffPasswordVerification);
    console.log("verified staff password successfully");
})

When('the staff click on signIn button to login to access the dashboard',() => {
    adminStaff.clickLoginButton();
})
Then ('the staff logged in successfully as admin', () => {
    console.log("staff logged in successfully");
})

When('after login successfully staff should be verified the dashboard screen',() => {
    adminStaff.verifiedDashborad();
})
Then ('the staff verified dashboard successfully', () => {
    console.log("staff verified dashboard successfully");
})

When('staff click on sidebar tab option which is customer',() => {
    adminStaff.staffClickOnCustomerToOpenDropdown();
})
Then ('staff clicked successfully on sidebar option', () => {
    console.log("staff clicked successfully");
})

When('staff should be click on add new customer option in dropdown menu',() => {
    adminStaff.clickOnAddNewCustomer();
})
Then ('staff clicked on add new customer tab successfully', () => {
    console.log("staff clicked successfully");
})

When('staff enter required input field which is company name and phone number of a customer',() => {
    adminStaff.companyInformationOfCustomer();
})
Then ('staff filled the required company name successfully', () => {
    console.log("company information added successfully");
})

When('staff enter customer contact email which is required as {string}', (customerContactPersonEmail) => {
    adminStaff.staffAddContactEmailOfCustomer(customerContactPersonEmail);
})
Then ('staff member contact email should be populated correctly as {string}', (customerContactEmailVerification) => {
    adminStaff.staffVerifyContactEmailOfCustomer(customerContactEmailVerification);
    console.log("verified staff password successfully");
})

When('staff enter tax information and sales rep details for customer which is required',() => {
    adminStaff.taxInformationAndSalesRepresentative();
})
Then ('staff entered tax information and sales rep details for customer successfully', () => {
    console.log("tax information and sales rep details for customer successfully");
})

When('staff filled the required information then its click on save and edit button of customer',() => {
    adminStaff.clickOnSaveAndEditButton();
})
Then ('staff clicked the save and edit button of customer successfully', () => {
    console.log("clicked the save and edit button successfully");
})

When('verify the edit customer screen by some text which should be present on it',()=>{
    adminStaff.editCustomerScreen();
})
Then ('staff verified that text is present on edit customer screen', () => {
    console.log("user acccess the edit customer screen successfully");
})

When('staff click on add shipping address button to add staff shipping address details',()=>{
    adminStaff.clickAddShippingButton();
})
Then ('staff should be verified shipping address popup is open successfully after click on button', () => {
    console.log("form is open ");
})

When('staff enter shipping address form details when shpping address popup is open',()=>{
    adminStaff.addShipingAddress();
})
Then ('staff entered shipping address form details successfully', () => {
    console.log("username added into popup model form");
})

When('staff click on add billing address button to add staff billing address details',()=>{
    adminStaff.clickBillingAddressButton();
})
Then ('staff should be verified billing address popup is open successfully after click on button', () => {
    console.log("billing address popup open successfull");
})

When('staff enter billing address form details when billing address popup is open',()=>{
    adminStaff.addBillingAddress();
})
Then ('staff entered billing address form details successfully', () => {
    console.log("billing address added successfull");
})