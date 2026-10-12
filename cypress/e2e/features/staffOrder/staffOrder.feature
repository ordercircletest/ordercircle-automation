Feature: create staffOrder
Background:
   
@correctEmailandPass
Scenario: successfull login
    When staff enters his email and password
    Then the user is logged in sucessfully

@createStaffOrder
Scenario: add new order from staff dashboard
    When check some text which is present on dashbord
    Then the dashbord verify sucessfully
    When staff click on sidebar staff option
    Then staff tab open successfully
    When staff click on add new order option in sidebar
    Then order page of staff is open successfully
    When staff verify order page by text
    Then order page of staff verified successfully
    When When staff select customer from customer account dropdown
    # And  customers account dropdown open
    Then Then customer selected from customer list
    # When staff select customer from customer account dropdown
    # Then customer selected from customer list
    When staff select product from product dropdown
    Then product selected from product list

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

