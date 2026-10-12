Feature: create staff as admin & create new product
Background:
   
@correctEmailandPass
Scenario: admin go to sign in page and sign in successfully
    When user enter his email and password
    Then the user is logged in sucessfully

@createAdminStaff
Scenario: add new staff and assign the role of admin
    When check some text which is present on dashbord
    Then the admin dashbord is verified sucessfully
    When user click on staff tab of sidebar
    Then sidebar tab is open successfully
    When user click on add staff text in dropdown
    Then click on add new staff successfull
    When verify add new staff page by applying some checks on it
    Then staff page is verified successfully

@fillFormForAddNewAdminStaff
Scenario: fill the form fields for staff creation
    When staff enter form details which is required to create an admin staff
    Then staff form fields updated successfully and new staff is created
    When the staff enter staff email as "testStaffuser@ordercirlcle.com"
    Then the staff user id should be populated correctly as "testStaffuser@ordercirlcle.com"
    When the staff should be click on Switch to staff button
    Then the staff clicked Switch to staff button successfully
    When the staff clicked on submit button to create staff staff
    Then the staff clicked on submit button successfully

@logoutstaffAndGoToLoginPage
Scenario: staff should be logout and go to login page
    When the staff click on logout button then logout popup is open
    Then the staff logout popup should be open 
    When the staff verify popup by class represent staff name in popup
    Then the staff is verified by name successfully
    When the staff verify that it should be on login page
    Then the staff verified login page successfully

@LoginAsStaffAndVerifyTheDashboard
Scenario: staff login again and verify the dashboard
    When the staff memeber enter enter his username as "demostaff"
    Then the staff member username should be populated correctly as "demostaff"
    When the staff memeber enter enter his password as "Order123"
    Then the staff member password should be populated correctly as "Order123"
    When the staff click on signIn button to login to access the dashboard
    Then the staff logged in successfully as admin
    When after login successfully staff should be verified the dashboard screen
    Then the staff verified dashboard successfully

@StaffCreateNewCustomer
Scenario: staff logged In and create new customer
    When staff click on sidebar tab option which is customer
    Then staff clicked successfully on sidebar option
    When staff should be click on add new customer option in dropdown menu
    Then staff clicked on add new customer tab successfully

@CompanyInformationAndContactDetailsOfCustomer
Scenario: staff enter company information and contact person details of customer
    When staff enter required input field which is company name and phone number of a customer
    Then staff filled the required company name successfully
    When staff enter customer contact email which is required as "alex@ordercircle.com"
    Then staff member contact email should be populated correctly as "alex@ordercircle.com"

@TaxInfoAndSalesRepAssignToCustomer
Scenario: staff enter tax information and Sales representative details of customer
    When staff enter tax information and sales rep details for customer which is required
    Then staff entered tax information and sales rep details for customer successfully
    When staff filled the required information then its click on save and edit button of customer
    Then staff clicked the save and edit button of customer successfully

@editCustomerToSaveShippingAndBillingAddress
Scenario: Edit customer to add shipping and billing address
    When verify the edit customer screen by some text which should be present on it
    Then staff verified that text is present on edit customer screen
    When staff click on add shipping address button to add staff shipping address details
    Then staff should be verified shipping address popup is open successfully after click on button
    When staff enter shipping address form details when shpping address popup is open
    Then staff entered shipping address form details successfully
    When staff click on add billing address button to add staff billing address details
    Then staff should be verified billing address popup is open successfully after click on button
    When staff enter billing address form details when billing address popup is open
    Then staff entered billing address form details successfully





