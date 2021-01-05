Feature: Replace_Profanity_With_Character
	As a person who is a little bit delicate
    I would like to have words of profanity replaced with some characters
    So that I am not exposed to bad things


Background:
    Given The profanity removing API is available


@notsweary
Scenario Outline: No_Profanity_Replaced_With_Character
    Given I am using the profanity character replacement service with <replacementCharacter>
	When I receive an incomming text of <text>
    And I replace profanitys in the content
    Then the <text> remains unchanged

Examples:
    | replacementCharacter  | text              |
    | _                     | hello, you mother | 
    | ~                     | you are a ferret  |


@sweary
Scenario Outline: Profanity_Replaced_With_Character
    Given I am using the profanity character replacement service with <replacementCharacter>
	When I receive an incomming text of <text>
    And I replace profanitys in the content
    Then replaced profanity with the corresponding amount of <replacementCharacter>    

Examples:
    | replacementCharacter  | text              |
    | -                     | you're an ass     |
    | =                     | go to scunthorpe  |