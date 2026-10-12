
Feature: create order 
Background:
   
@correctEmailandPass
Scenario: successfull login
    When user enter his email and password
    Then the user is logged in sucessfully

@verifyDashboradScreen
Scenario: verify dashbord
    When check some text which is present on dashbord
    Then the dashbord verify sucessfully

@clickOrderTabOnSideBar
Scenario: Click on Order tab
    When user click on side bar order option
    Then drop down tab is open

@selectAddNewOrderFromDropdown
Scenario: select option from dropdown menu
    When user click on add new order text
    Then create order screen is visiable

@selectProducts
Scenario: select products from search box
    When user click on search box select products
    Then products added in order screen

@addBillingAndShippingAddress
    Scenario: add billing and shipping address
    When verify billing and shipping address page
    Then billing and shipping verified successfully
    When staff click on Billing Address button
    Then billing address form open successfully
    When staff enter required fileds of billing address form
    Then form fields updated and ready to submit
    When staff click add new shipping address link
    Then shipping new address form is open
    When staff enter required fileds of shipping address form
    Then shipping form fields updated and ready to submit
    When staff click on next step button
    Then next page is open successfully

 @addNotesShippingMethods
    Scenario: add Notes & Shipping Methods
    When verify Notes & Shipping Methods page
    Then Notes & Shipping Methods verified successfully
    When staff enter shipping notes into required field
    Then form fields updated successfully

    @reviewSubmitPage
    Scenario: review and submit page
    When staff checked the check box of terms and conditions
    Then terms and conditions updated successfully
    
# @clickOnAddBillingLink
# Scenario: add billing address
#     When click on dropdown menu for address
#     Then added address successfully

# @fillUpTheBillingForm
# Scenario: fill billing address form
#     When add required fields into form
#     Then added form billing successfully

# @clickOnAddshippingLink
# Scenario: add shipment address
#     When click on add shipping dropdown menu for address
#     Then added address successfully

# @fillUpTheShippingForm
# Scenario: fill shipping address form
#     When user add required fields into shipping form
#     Then form fields are update successfully

# @addNotesAndShipping
# Scenario: Notes and Shipping tab
#     When user fill the required field of form
#     Then added form notes & shipping successfully

# @clickOnSubmitButton
# Scenario: Submit order 
#     When user click on order button
#     Then order created successfully

