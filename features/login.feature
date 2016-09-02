Feature: login


@watch
Scenario: Unsuccessful login
  Given I am viewing the login page
  When I enter "Texas Mix" and "burrito" and press submit
  Then I am asked to check my password and sign in again

@watch
Scenario: Successful login
  Given I am viewing the login page
  When I enter "Texas Mix" and "taco" and press submit
  Then I am taken to the main page
  Then I see a header "Welcome to Mix Bank!"
