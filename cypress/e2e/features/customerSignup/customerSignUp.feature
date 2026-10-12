@Signup
Feature: Customer SignUp

@customerVerifyTheLoginScreen
Scenario: New Customer SignUp
When Customer verify the login screen after visit the site URL
Then Customer verified the login screen successfully
And Customer click on SignUp link which is available under the signIn button
Then Customer Clicked on SignUp link successfully which is available under the signIn button

@customerFillTheSignUpFormToLoginOC
Scenario: Customer fill the form details which is required 
When Customer enter the form details which is required to create new customer
Then Customer entered the form deatils successfully which is required
When Customer Clicked on submit button after form deatils is filled successfully
Then Customer clicked on submit successfully

@approvePendingCustomerFromCustomerList
Scenario: Brand owner should be login to approve the dashboard
When the brand owner enter his valid username as "admin"
Then the brand owner username should be populated correctly as "admin"
When the brand owner enter his valid password as "Order123"
Then the brand owner password should be populated correctly as "Order123"
When Brand owner click on SignIn Button to aceess the owner dashboard screen
Then Brand owner clicked on SignIn Button successfully to aceess the owner dashboard screen

@openCustomerListForApproveThePendingCustomer
Scenario: Open Customer list to approve the customer which is still pending for approval
When Customer click on customer tab to open the dropdown menu of customer
Then Dropdown list is open after click on customers tab
And Customer should click on customer list which is available in customer list
When Customer click on pending customer link to access pending customers
Then Pending customer list is open
And Select random customer and open the details of that customer
Then Click on approve customer button to create customer in customer list
And click on OK button of success popup