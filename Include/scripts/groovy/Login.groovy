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

import Utils.*

import internal.GlobalVariable

public class Login {


	//	@Given("Navigate to the website")
	//	public void navigateToTheWebsite() {
	//
	//		WebUI.openBrowser('')
	//		WebUI.navigateToUrl(GlobalVariable.baseUrl)
	//	}
	//
	//	@When("Input Username and Password fields with valid data")
	//	public void inputWithValidData() {
	//		Map<String, String> data = Utils.getUserData(1);
	//
	//		WebUI.setText(findTestObject('Object Repository/01. LOG-Login/LOG_textbox_Username'), data.get("username"));
	//		WebUI.setText(findTestObject('Object Repository/01. LOG-Login/LOG_textbox_Password'), data.get("password"));
	//	}
	//
	//	@And("Click Login button")
	//	public void clickLoginButton() {
	//
	//		WebUI.click(findTestObject('01. LOG-Login/LOG_button_Login'))
	//	}
	//
	//	@When("Input Username and Password fields with {string}")
	//	public void inputWithInvalidData(String dataName) {
	//		int row = 0;
	//
	//		if(dataName.equals("empty username")) {
	//			row = 2
	//		} else if(dataName.equals("empty password")) {
	//			row = 3
	//		} else if(dataName.equals("empty data")) {
	//			row = 4
	//		} else if(dataName.equals("invalid data")) {
	//			row = 5
	//		} else if(dataName.equals("invalid username")) {
	//			row = 6
	//		} else if(dataName.equals("invalid password")) {
	//			row = 7
	//		} else if(dataName.equals("valid with space")) {
	//			row = 8
	//		}
	//		Map<String, String> data = Utils.getUserData(row);
	//
	//		WebUI.setText(findTestObject('Object Repository/01. LOG-Login/LOG_textbox_Username'), data.get("username"));
	//		WebUI.setText(findTestObject('Object Repository/01. LOG-Login/LOG_textbox_Password'), data.get("password"));
	//	}
	//
	//	@Then("There is an alert said {string}")
	//	public void messagePopUp(String message) {
	//		try {
	//			WebUI.verifyElementPresent(findTestObject('Object Repository/01. LOG-Login/LOG_alert'), 2)
	//			WebUI.verifyElementText(findTestObject('Object Repository/01. LOG-Login/LOG_alert'), message)
	//		} catch (Exception e) {
	//			System.out.println("Error Message doesnt show!");
	//		}
	//	}
	//
	//	@Given("User already login")
	//	public void userAlreadyLogin() {
	//		CucumberKW.runFeatureFileWithTags('Include/features', ((['@LOG01'])) as String[])
	//	}
}
