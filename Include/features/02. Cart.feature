@CRT
Feature: Cart

	Background:
  	Given User already login 
 
  @CRT01
	Scenario: Validate the cart page is displayed when click Cart icon
		When Click Cart button
		Then The cart page is displayed
	
	@CRT02	
	Scenario: Successfully removed the product from the cart on the cart page
	# PRODUCT: SAUCELABS BACKPACK
		When Click Add To Cart button for "one" product
		And Click Cart button
		And Click Remove button
		Then The product successfully removed from the cart
		
	@CRT03	
	Scenario: Successfully navigated back from the cart page to the main page to continue shopping
		When Click Cart button
		And Click Continue Shopping button
		Then User will be directed to the Main page
				