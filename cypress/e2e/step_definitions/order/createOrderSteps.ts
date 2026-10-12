/// <reference types="cypress" />
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import {orderCreation} from "../../../pages/order/createOrderPage"


When('check some text which is present on dashbord',()=>{
    orderCreation.verifyDashborad();
})
Then ('the dashbord verify sucessfully', () => {
    console.log("Text Present");
})

When('user click on side bar order option', ()=>{
    orderCreation.clickOnOrderTab();
})
Then('drop down tab is open', ()=>{
    console.log('Tab Open Successfully')
})

When('user click on add new order text', ()=>{
    orderCreation.addNewOreder();
})
Then('create order screen is visiable', ()=>{
    console.log('Open Order Screen Successfully')
})

When('user click on search box select products', ()=>{
    orderCreation.selectProduct();
})
Then('products added in order screen', ()=>{
    console.log('Open Order Screen Successfully')
})

When('verify billing and shipping address page',()=>{
    orderCreation.verifyBillingAndShippingPage();
})
Then ('billing and shipping verified successfully', () => {
    console.log("verified successfully");
})

When('staff click on Billing Address button',()=>{
    orderCreation.clickOnBillingAddress();
})
Then ('billing address form open successfully', () => {
    console.log("form open successfully");
})

When('staff enter required fileds of billing address form',()=>{
    orderCreation.fillBillingAddressForm();
})
Then ('form fields updated and ready to submit', () => {
    console.log("billing form is updated successfully");
})

When('staff click add new shipping address link',()=>{
    orderCreation.openShippingForm();
})
Then ('shipping new address form is open', () => {
    console.log("shipping form is open successfully");
})

When('staff enter required fileds of shipping address form',()=>{
    orderCreation.fillShippingAddressForm();
})
Then ('shipping form fields updated and ready to submit', () => {
    console.log("shipping form is open successfully");
})

When('staff click on next step button',()=>{
    orderCreation.nextStepButton();
})
Then ('next page is open successfully', () => {
    console.log("next page is open successfully");
})

When('verify Notes & Shipping Methods page',()=>{
    orderCreation.verifyNotesAndShippingPage();
})
Then ('Notes & Shipping Methods verified successfully', () => {
    console.log("verified successfully");
})

When('staff enter shipping notes into required field',()=>{
    orderCreation.addNotesAndShippingMethod();
})
Then ('form fields updated successfully', () => {
    console.log("verified successfully");
})

When('staff checked the check box of terms and conditions',()=>{
    orderCreation.reviewSubmit();
})
Then ('terms and conditions updated successfully', () => {
    console.log("terms and conditions fields updated successfully");
})


// When('click on dropdown menu for address', ()=>{
//     dashbord.billingAndShipment();
// })
// Then('added address successfully', ()=>{
//     console.log('added address successfully')
// })

// When('add required fields into form', ()=>{
//     dashbord.billingAddressForm();
// })
// Then('added form billing successfully', ()=>{
//     console.log('added input address Fields successfully')
// })

// When('user fill the required field of form', ()=>{
//     dashbord.notesAndShipping();
// })
// Then('added form notes & shipping successfully', ()=>{
//     console.log('form notes & shipping successfully')
// })

// When('user click on order button', ()=>{
//     dashbord.submitOrder();
// })
// Then('order created successfully', ()=>{
//     console.log('order created ')
// })


