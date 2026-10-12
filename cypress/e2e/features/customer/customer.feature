Feature: create customer
Background:
   
@correctEmailandPass
Scenario: successfull login to order cicle website
    When user enter his email and password
    Then the user is logged in sucessfully

@createCustomer
Scenario: create customer from admin side
    When check some text which is present on dashbord
    Then the dashbord verify sucessfully
    When user click on customer tab in sidebar
    Then customer tab open successfully
    When user click on add new customer option
    Then customer component open successfully
    When verify customer page by text is present on customer page
    Then verify dashborad successfully
    When enter company information and company phone number 
    Then company information added successfully
    When enter contact person information
    Then contact person information added successfully
    When user enter tax info and sales rep
    Then tax information added successfully
    When user select currency and price tier
    Then currency and price tier added
    When enter minimum order price in order settings
    Then price added successfully
    When after completing the form user click on save and edit button
    Then customer information saved and customer created successfully

@editCustomerToSaveShippingAndBillingAddress
Scenario: Edit customer to add shipping and billing address
    When verify the edit customer screen by some text which should be present on it
    Then customer verified that text is present on edit customer screen
    When customer click on add shipping address button to add customer shipping address details
    Then customer should be verified shipping address popup is open successfully after click on button
    When customer enter shipping address form details when shpping address popup is open
    Then customer entered shipping address form details successfully
    When customer click on add billing address button to add customer billing address details
    Then customer should be verified billing address popup is open successfully after click on button
    When customer enter billing address form details when billing address popup is open
    Then customer entered billing address form details successfully

    # @editCustomerToSaveShippingAddress
    # Scenario: Edit customer to add shipping address
    # When verify the edit customer screen by some text
    # Then user is now on edit customer screen
    # When user click add shipping address button
    # Then shipping address popup is open successfully
    # When user enter shipping form details in input field
    # Then shipping details added successfully

    # @addBillingAddressIntoPopupForm
    # Scenario:add shipping address into popup model
    # When user click on add billing address button
    # Then billing address popup open successfull
    # When user enter billing address form details 
    # Then billing details added successfully

    # When user enter the Tax Rate Override if setting is enabled by default
    # Then tax rate override information added successfully
    # When user enter defualt payment terms according to days
    # Then enter defualt payment information added successfully




