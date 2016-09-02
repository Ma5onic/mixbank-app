Feature: login

@watch
Scenario: Putting in name and password to login
Given I am viewing the login page
When I enter "Texas Mix" and "taco" and press submit
Then I am taken to the main page
Then I see a header "Welcome to Mix Bank!"
