Feature: Create New Product from Admin dashborad
Background:
   
@correctEmailandPass
Scenario:login successfully for admin dashboard
    When user enter his email and password
    Then the user is logged in sucessfully

@createproduct
Scenario: create product
 When check some text which is present on dashbord
 Then the dashbord verify sucessfully
 When user click on products text in sidebar 
 Then product tab is open successfully
 When user click add new product option from dropdown
 Then user is now on create product page
 When verify user is on create product page
 Then product page verify successfully
 When user enter requird form fields to create product
 Then fields updated for create product 

 @priceTiers
 Scenario: update volume price tiers
 When user click on use volume price tiers switch button
 Then volume price tiers switch button is enabled

 @inventeryDetails
 Scenario: update inventory details
 When user enter inventory details for track inventory
 Then inventory details added for track inventory

 @addProductVarients
 Scenario: add product varients
 When user click on varients check box to add product variations
 Then product variations check box selected successfully
 When user add product variations in input fields
 Then variations added successfully
 When user click on submit button to create product
 Then user submit button successfully


