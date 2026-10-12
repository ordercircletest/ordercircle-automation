@login
Feature: Login
# Background:
#     Given user is at login page
@correctEmailandPass
Scenario: successfull login
    When user enter his email and password
    Then the user is logged in sucessfully

@verifyDashboradScreen
Scenario: verify dashbord
    When check some text which is present on dashbord
    Then the dashbord verify sucessfully

#parametrize login functionlity
# @correctUsernameAndWrongPassword
# Scenario Outline: correct user name and wrong password
#     When valid username as "<username>" wrong password as "<password>"
#     Then password is invalid

#     Examples:
#         |username | password |
#         | admin  | 1234567  |

# @wrongUsernameAndrightPassword
# Scenario: incorrect user name and valid password
#     When wrong username valid password
#     Then username is invalid

# @emptyUsernameAndCorrectPassword
# Scenario: Empty user name and valid password
#     When Invalid username Invalid password
#     Then both username nad password invalid

    # Scenario Outline: successfull login
    #     Given user is at login page
    #     When the user enters email as "<email>" and password as "<pass>"
    #     Then the user is logged in sucessfully

    #     Examples:
    #         | email | pass    |
    #         | asdd  | adasdsa |
