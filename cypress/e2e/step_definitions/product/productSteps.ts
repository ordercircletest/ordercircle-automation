/// <reference types="cypress" />
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import {product} from "../../../pages/product/productPage"

Given('user is at login page', async() => {
    cy.visit(Cypress.env("base_url"));
})

When('check some text which is present on dashbord',()=>{
    product.verifyDashborad();
})
Then ('the dashbord verify sucessfully', () => {
    console.log("Text Present");
})

When('user click on products text in sidebar',()=>{
    product.clickOnProductTab();
})
Then ('product tab is open successfully', () => {
    console.log("sidebar Tab is open");
})

When('user click add new product option from dropdown',()=>{
    product.clickAddNewProduct();
})
Then ('user is now on create product page', () => {
    console.log("create product page is open");
})

When('verify user is on create product page',()=>{
    product.productPageVerification();
})
Then ('product page verify successfully', () => {
    console.log("product page verified");
})

When('user enter requird form fields to create product',()=>{
    product.enterProductInformation();
})
Then ('fields updated for create product', () => {
    console.log("fields updated successfully");
})

When('user click on use volume price tiers switch button',()=>{
    product.volumePriceTiers();
})
Then ('volume price tiers switch button is enabled', () => {
    console.log("switch button is enabled successfully");
})

When('user enter inventory details for track inventory',()=>{
    product.trackProductInventory();
})
Then ('inventory details added for track inventory', () => {
    console.log("inventory details added successfully");
})

When('user click on varients check box to add product variations',()=>{
    product.selectProductVarientsCheckBox();
})
Then ('product variations check box selected successfully', () => {
    console.log("check box selected successfully");
})

When('user add product variations in input fields',()=>{
    product.addProductVarients();
})
Then ('variations added successfully', () => {
    console.log("variations added successfully");
})

When('user click on submit button to create product',()=>{
    product.clickSubmitButton();
})
Then ('user submit button successfully', () => {
    console.log("product created successfully");
})