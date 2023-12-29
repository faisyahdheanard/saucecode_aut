Feature: Transaction2

Background:
  	Given User already login 		
			
	@TRS04
	Scenario Outline: Ensure the error message is displayed when input with various data field
	# 1. BLANK DATA         @TRS04
	# 2. EMPTY FIRST NAME		@TRS05
	# 3. EMPTY LAST NAME		@TRS06
	# 4. EMPTY POSTAL CODE	@TRS07
		When Click Add To Cart button for "one" product
		And Click Cart button
		And Click Checkout button
		And Input First name, Last name, and Postal code with "<data>"
		And Click Continue button
		Then There is a message said "<message>"
		
		Examples:
			| data 							| message 																											 |
			| blank data 				| Error: First Name, Last Name, and Zip/Postal Code are required |
			| empty first name  | Error: First Name is required 																 |
			| empty last name 	| Error: Last Name is required 																	 |
			| empty postal code | Error: Postal Code is required 																 |
	