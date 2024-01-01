@LOG
Feature: Login

	Background: 
		Given Navigate to the website
	
	@LOG01
	Scenario: Successfully logged in using valid username and password
		When Input Username and Password fields with valid data
		And Click Login button
		Then User will be directed to the Main page
	
	@LOG02	
	Scenario Outline: Ensure the error message is displayed using various invalid data
	# EMPTY USERNAME 																	@LOG02
	# EMPTY PASSWORD 																	@LOG03
	# EMPTY USERNAME AND PASSWORD 										@LOG04
	# INVALID USERNAME AND PASSWORD 									@LOG05
	# INVALID USERNAME														  	@LOG06
	# INVALID PASSWORD 																@LOG07
	# VALID DATA WITH SPACE AT THE END OF USERNAME 		@LOG08
		When Input Username and Password fields with "<data>"
		And Click Login button
		Then There is an alert message displayed on the "Login" page, said "<alert>"
		Examples:
			| data 						 | alert 																																		 |
			| empty username 	 | Epic sadface: Username is required 																			 |
			| empty password 	 | Epic sadface: Password is required 																			 |
			| empty data 			 | Epic sadface: Username and Password is required 													 |
			| invalid data 		 | Epic sadface: Username and password do not match any user in this service |
			| invalid username | Epic sadface: Username and password do not match any user in this service |
			| invalid password | Epic sadface: Username and password do not match any user in this service |
			| valid with space | Epic sadface: Username and password do not match any user in this service |
			
	 
		
		
		
		
	
	