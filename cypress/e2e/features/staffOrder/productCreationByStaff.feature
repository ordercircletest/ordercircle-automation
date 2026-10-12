Feature: Create New Product from Admin dashborad
Background:
   
@staffAddcorrectEmailandPasswordToAccessTheDashboard
Scenario:staff login with correct credentials to access dashboard
    When staff enters his email and password
    Then the user is logged in sucessfully

@afterLoginStaffShouldCreateProduct
Scenario: After login succesfully staff should go to the add new product Product Pagr
 When check some text which is present on staff dashbord
 Then the staff dashbord is verified sucessfully
 When staff should be click on product text which is visible in sidebar menu
 Then the product tab is open when staff clicked on it to
 When staff should be click on add new product option from dropdown
 Then staff clicked successfully and staff now on create product page
 When staff should be verify by checking some text which is present on create product screen
 Then staff verified the product creation page by verification of some text

@FillTheFormDataToCreateNewProductFromStaffSide
Scenario: Staff Enter the form details correctly which is required to create new product
When Staff should add the form details correctly which is required to create new product 
Then Staff entered the form details which is required for product creation
When Staff should click on submit button which is required to create new product 
Then Staff clicked succesfully on submit button which is required to create new product
