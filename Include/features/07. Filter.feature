@FLT
Feature: Filter Application

	Scenario Outline: Successfully apply various filter to sort the products
	#NAME A TO Z							@FLT01
	#NAME Z TO A 							@FLT02
	#PRICE (LOW TO HIGH)  		@FLT03
	#PRICE (HIGH TOLOW low) 	@FLT04
	  Given User already login 
  	When Select Filter "<filterOptions>"
		Then The products will be shown based on user filter choices "<filterOptions>"
			
		Examples:
			| filterOptions 			|
			| Name A to Z 				|
			| Name Z to A 				|
			| Price (low to high) | 
			| Price (high to low) | 
	