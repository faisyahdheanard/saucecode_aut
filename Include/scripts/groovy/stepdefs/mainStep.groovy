package stepdefs

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

import internal.GlobalVariable
import pages.mainPage

public class mainStep {
	
	@Then("User will be directed to the Main page")
	public void directedToTheHomePage() {
		mainPage.validationOnHomePage()
	}
	
	@And("Click Remove button")
	public void clickRemoveButton() {
		mainPage.clickRemove()
	}
	
	
	
	
	
	// FILTER CHECK-----------------------------------------------
	
	@When("Select Filter {string}")
	public void selectFilter(String filterOption) {
		mainPage.selectFilterOption(filterOption)
	}
	
	@Then("The products will be shown based on user filter choices {string}")
	public void validateProductAppear(String filterOption) {
		mainPage.validationTheFilterProduct(filterOption)
	}
	
	
	
	
	
	// SIDEBAR CHECK----------------------------------------------
	
	@When("Click Menu sidebar")
	public void clickMenuSidebar() {
		mainPage.clickMenu()
	}
	
	@And("Click {string} submenu")
	public void clickSidebarSubmenu(String submenuOption) {
		mainPage.clickSubmenu(submenuOption)
	}

	@Then("User {string}")
	public void validateActionSubmenu(String result) {
		mainPage.validationOfSubmenuAct(result)
	}
	
	@And("Click Close button")
	public void clickCloseButton() {
		mainPage.clickClose()
	}
	

	
	
	
	// FOOTER CHECK-----------------------------------------------
	
	@When("Click {string} on footer")
	public void clickFooterButton(String footerOption) {
		mainPage.clickFooter(footerOption)
	}

	@Then("User will be directed to the {string} account")
	public void validateFooterNavigates(String footerOption) {
		mainPage.validationOfFooter(footerOption)
	}
}
