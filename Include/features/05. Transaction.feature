@TRS
Feature: Transaction

	Background:
	  	Given User already login 
	
		@TRS01
		Scenario: Validate the checkout page is displayed when click Checkout button
			When Click Add To Cart button for "one" product
			And Click Cart button
			And Click Checkout button
			Then The Checkout page will be displayed
			
		@TRS02
		Scenario: Successfully created transaction with valid data
			When Click Add To Cart button for "one" product
			And Click Cart button
			And Click Checkout button
			And Input First Name, Last Name, Postal Code fields with valid data
			And Click Continue button
			Then The Checkout overview page is displayed
			When Click Finish button
			Then The transaction is successful and there is a message said "Thank you for your order!"
			
		@TRS03	
		Scenario: Ensure the error message is displayed when attempting to checkout with an empty cart
			When Click Cart button
			And Click Checkout button	
			Then There is an alert message displayed on the "Cart" page, said "Error: Unable to proceed to checkout. Your shopping cart is empty. Please add items to your cart before continuing"
	
		@TRS04
		Scenario Outline: Ensure the error message is displayed when input with various data field
		# 1. BLANK DATA         	@TRS04
		# 2. EMPTY FIRST NAME			@TRS05
		# 3. EMPTY LAST NAME			@TRS06
		# 4. EMPTY POSTAL CODE		@TRS07
			When Click Add To Cart button for "one" product
			And Click Cart button
			And Click Checkout button
			And Input First name, Last name, and Postal code with "<data>"
			And Click Continue button
			Then There is an alert message displayed on the "Transaction" page, said "<message>"
			Examples:
				| data 							| message 																											 |
				| blank data 				| Error: First Name, Last Name, and Zip/Postal Code are required |
				| empty first name  | Error: First Name is required 																 |
				| empty last name 	| Error: Last Name is required 																	 |
				| empty postal code | Error: Postal Code is required 																 |
			
		@TRS08	
		Scenario: Successfully navigated back from the Checkout:Your Information page to the cart page
			When Click Add To Cart button for "one" product
			And Click Cart button
			And Click Checkout button
			And Click Cancel button
			Then User will be directed to the Cart page
		
		@TRS09	
		Scenario: Successfully navigated back from the Checkout:Overview page to the main page
			When Click Add To Cart button for "one" product
			And Click Cart button
			And Click Checkout button
			And Input First Name, Last Name, Postal Code fields with valid data
			And Click Continue button
			And Click Cancel button
			Then User will be directed to the Main page
	
		 
	