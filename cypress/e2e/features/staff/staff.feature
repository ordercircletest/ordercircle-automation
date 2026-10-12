Feature: create staff
Background:
   
@correctEmailandPass
Scenario: successfull login
    When user enter his email and password
    Then the user is logged in sucessfully

@createStaff
Scenario: add new staff
    When check some text which is present on dashbord
    Then the dashbord verify sucessfully
    When user click on staff tab of sidebar
    Then sidebar tab is open successfully
    When user click on add staff text in dropdown
    Then click on add new staff successfull
    When verify add new staff page
    Then verified successfully

@fillFormForAddNewStaff
Scenario: fill the form fields
    When user enter form details which is required
    Then staff form fields updated successfully
    When the admin enter staff email as "testStaffuser@ordercirlcle.com"
    Then the admin user id should be populated correctly as "testStaffuser@ordercirlcle.com"
    When user click on staff submit button
    Then staff created successfully
