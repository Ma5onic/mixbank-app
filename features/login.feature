Feature: login

  Scenario: Putting in name and password to login
    Given I am viewing the login page
    When I enter "Texas Mix" and "taco" and press Enter
    Then I am taken to the main page
