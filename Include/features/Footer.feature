@FT0
Feature: Footer

	Background:
  	Given User already login 

	Scenario Outline: Successfully redirected to the company's account
		#1. TWITTER    @FTO01
		#2. FACEBOOK	 @FTO02
		#3. LINKEDIN	 @FTO03
		When Click "<account>" on footer
		Then User will be directed to the "<account>" account
		
		Examples:
		 | account  |
		 | Twitter  |
		 | Facebook |
		 | Linkedin |
		
		
	