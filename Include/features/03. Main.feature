@MPG
Feature: Main Page

	Background:
  	Given User already login 
 
 	@MPG01 			
	Scenario Outline: Successfully added the product(s) to the cart from the main page
	# 01. FOR ONE PRODUCT (SAUCE LABS BACKPACK)								@MPG01
	# 02. MORE THAN ONE PRODUCT (in this case, its all)				@MPG02
		When Click Add To Cart button for "<counts>" product
		And Click Cart button
		Then The chosen product will show up in the cart "<counts>"
		
		Examples:
			| counts 				|		
			| one						|
			| all 					|
	
	@MPG03
	Scenario: Successfully added product quantity on the main page
	# PRODUCT: SAUCE LABS BACKPACK
		When Click Add To Cart button for "one" product
		And Click Add To Cart button for "one" product
		Then The quantity of the product will be increases
	
	@MPG04
	Scenario: Successfully removed the product from the cart on the main page
	# PRODUCT: SAUCE LABS BACKPACK
		When Click Add To Cart button for "one" product
		And Click Remove button
		Then The product successfully removed from the cart