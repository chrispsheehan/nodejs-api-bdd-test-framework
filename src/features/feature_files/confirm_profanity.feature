Feature: Find_Profanity
	As a person who is a little bit delicate
    I would like to have warning that there may be naughty words
    So that I can sit down before fainting


Background:
    Given The profanity removing API is available
    And I am using the contains profanity service


@notsweary
Scenario Outline: No_Profanity_Found
	When I receive an incomming text of <text>
    And I check the content for profanitys
    Then no profanitys are found

Examples:
| text              |
| hello, you mother |     
| you are a ferret  | 


@sweary
Scenario Outline: Profanity_Found
	When I receive an incomming text of <text>
    And I check the content for profanitys
    Then profanitys are found

Examples:
| text              | 
| go to scunthorpe  | 
| you're an ass     | 