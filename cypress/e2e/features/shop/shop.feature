Feature: create order on shop side
Background:
   
@correctEmailandPass
Scenario: successfull login
    When customer enters shop email and password
    Then the user is logged in sucessfully

@createOrderOnShopSide
Scenario: create new order on shop side
 When check some text which is present on Shop Side dashboard
 Then shop side dashbord verify sucessfully
 When customer click on order tab in shop side
 Then order tab dropdown open successfully
 When customer click on add new order button
 Then add new order page is open successfully
 When verify that customer is on create order page
 Then create order page verifyed successfully

@selectProductsFromList
Scenario: select products to create new order
When customer click on chosse products search box
Then products list open successfully
# When customer select products to create new order
# Then products are selected successfully
When customer click on add new billing address
Then billing address form is open successfully

@fillBillingAddressform
Scenario: customer fill billing address form
When customer enter required fileds of billing address form
Then form fields updated and ready to submit
When customer click add new shipping address link
Then shipping new address form is open
When customer enter required fileds of shipping address form
Then shipping form fields updated and ready to submit
When customer click on next step button
Then next page is open successfully

@notesShippingMethodsPage
Scenario: customer fill notes and shipping method
When customer enter shipping notes into required field
Then form fields updated successfully

@reviewSubmitPage
Scenario: review and submit page
When customer checked the check box of terms and conditions
Then terms and conditions updated successfully

 