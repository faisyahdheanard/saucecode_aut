@DPP
Feature: Detail Product

Background:
  	Given User already login 
  	
  @DPP01
	Scenario: Successfully added product to the cart from the detail page
		When Click "Sauce Labs Backpack" product name
		And Click Add To Cart button
		And Click Cart button
		Then "Sauce Labs Backpack" will show up in the cart
		
	@DPP02
	Scenario: Successfully added more than one product to the cart from the detail page
		When Click "Sauce Labs Backpack" product name
		And Click Add To Cart button
		And Click Back To Products button
		And Click "Sauce Labs Bike Light" product name
		And Click Add To Cart button
		And Click Cart button
		Then "Sauce Labs Backpack" will show up in the cart
		And "Sauce Labs Bike Light" will show up in the cart
	
	@DPP03	
	Scenario: Successfully added product quantity on the detail page
		When Click "Sauce Labs Backpack" product name
		And Click Add To Cart button
		And Click Add To Cart button
		And Click Cart button
		Then The quantity of the product will be increases
	
	@DPP04	
	Scenario: Successfully removed the product from the cart on the detail page
		When Click "Sauce Labs Backpack" product name
		And Click Add To Cart button
		And Click Remove button
		And Click Cart button
		Then The product successfully removed from the cart
		
	