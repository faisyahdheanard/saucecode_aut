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
import pages.loginPage

public class loginStep {
	@Given("Navigate to the website")
	public void navigateToTheWebsite() {
		loginPage.goToTheWebsite();
	}

	@When("Input Username and Password fields with valid data")
	public void inputWithValidData() {
		loginPage.setInputValidData();
	}

	@And("Click Login button")
	public void clickLoginButton() {
		loginPage.clickLogin();
	}

	@When("Input Username and Password fields with {string}")
	public void inputWithInvalidData(String dataName) {
		loginPage.setInputInvalidData(dataName);
	}

	@Then("There is an alert message displayed on the {string} page, said {string}")
	public void messagePopUp(String pageName, String message) {
		loginPage.alertMessage(pageName, message);
	}

	@Given("User already login")
	public void userAlreadyLogin() {
		loginPage.alreadyLogin();
	}
}
