@SDB
Feature: Sidebar 

	Background:
	  Given User already login 
	 
	 @LGT01 
	 Scenario: Successfully logged out
		 	When Click Menu sidebar
			And Click "Logout" submenu
			Then User "successfully logged out and will be directed back to the login page>"
		
		@ABT01	
  	Scenario: Successfully navigated to the companys About
		 	When Click Menu sidebar
			And Click "About" submenu
			Then User "will be directed to the company information page"
		
		@RST01	
		Scenario: Ensure that the Reset app state button can reset all products that are already in the shopping cart
			When Click Add To Cart button for "all" product
			And Click Menu sidebar
			And Click "Reset App State" submenu
			And Click Close button
			And Click Cart button
			Then All product will be removed from the cart
			