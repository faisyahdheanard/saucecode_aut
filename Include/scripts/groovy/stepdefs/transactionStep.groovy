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
import pages.transactionPage

public class transactionStep {
	
	@And("Click Checkout button")
	public void clickCheckoutButton() {
		transactionPage.clickCheckout()
	}
	
	@Then("The Checkout page will be displayed")
	public void validateCheckoutPageDisplayed() {
		transactionPage.validationOnCheckoutPage()
	}
	
	@And("Input First Name, Last Name, Postal Code fields with valid data")
	public void transactionValidData() {
		transactionPage.setInputTransactionValid()
	}
	
	@And("Click Continue button")
	public void clickContinueButton() {
		transactionPage.clickContinue()
	}
	
	@And("Click Finish button")
	public void clickFinishButton() {
		transactionPage.clickFinish()
	}
	
	@Then("The Checkout overview page is displayed")
	public void checkoutOverviewPageDisplayed() {
		transactionPage.validationOnCheckoutOverviewPage()
	}
	
	@And("The transaction is successful and there is a message said {string}")
	public void validatePaymentSuccessful(String message) {
		transactionPage.validationSuccessfullPayment(message)
	}
	
	@And("Click Cancel button")
	public void clickCancelButton() {
		transactionPage.clickCancel()
	}
	
	@And("Input First name, Last name, and Postal code with {string}")
	public void transactionInvalidData(String dataName) {
		transactionPage.setInputTransactionInvalid(dataName)
	}
	
	
}
