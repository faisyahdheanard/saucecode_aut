import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

import Utils.*


class Transaction {
	@And("Click Checkout button")
	public void clickCheckoutButton() {
		WebUI.click(findTestObject('Object Repository/05. TRS-Transaction/TRS_button_Checkout'))
	}

	@Then("The Checkout page will be displayed")
	public void validateCheckoutPageDisplayed() {
		WebUI.click(findTestObject('Object Repository/05. TRS-Transaction/TRS_text_Your Information Checkout'))
	}

	@And("Input First Name, Last Name, Postal Code fields with valid data")
	public void transactionValidData() {
		Map<String, String> data = Utils.getUserInfo(1);

		WebUI.setText(findTestObject('Object Repository/05. TRS-Transaction/TRS_field_First name'), data.get("first name"))
		WebUI.setText(findTestObject('Object Repository/05. TRS-Transaction/TRS_field_Last name'), data.get("last name"))
		WebUI.setText(findTestObject('Object Repository/05. TRS-Transaction/TRS_field_Postal code'), data.get("postal code"))
	}

	@And("Click Continue button")
	public void clickContinueButton() {
		WebUI.click(findTestObject('Object Repository/05. TRS-Transaction/TRS_button_Continue'))
	}

	@And("Click Finish button")
	public void clickFinishButton() {
		WebUI.click(findTestObject('Object Repository/05. TRS-Transaction/TRS_button_Finish'))
	}

	@Then("The Checkout overview page is displayed")
	public void checkoutOverviewPageDisplayed() {
		WebUI.verifyElementPresent(findTestObject('Object Repository/05. TRS-Transaction/TRS_text_Chekout overview'), 2)
	}

	@And("The transaction is successful and there is a message said {string}")
	public void validatePaymentSuccessful(String message) {
		WebUI.verifyElementPresent(findTestObject('Object Repository/05. TRS-Transaction/TRS_text_Transaction success'), 2)
		WebUI.verifyElementText(findTestObject('Object Repository/05. TRS-Transaction/TRS_text_Transaction success'), message, FailureHandling.STOP_ON_FAILURE)
	}

	@Then("There is a message said {string}")
	public void errorMessageDisplayed(String message) {
		WebUI.verifyElementText(findTestObject('Object Repository/05. TRS-Transaction/TRS_text_alert Transaction'), message, FailureHandling.STOP_ON_FAILURE)
	}

	@And("Click Cancel button")
	public void clickCancelButton() {
		WebUI.click(findTestObject('Object Repository/05. TRS-Transaction/TRS_button_Cancel'))
	}

	@And("Input First name, Last name, and Postal code with {string}")
	public void transactionInvalidData(String dataName) {
		int row = 0;

		if(dataName.equals("blank data")) {
			row = 2
		} else if(dataName.equals("empty first name")) {
			row = 3
		} else if(dataName.equals("empty last name")) {
			row = 4
		} else if(dataName.equals("empty postal code")) {
			row = 5
		}

		Map<String, String> data = Utils.getUserInfo(row);

		WebUI.setText(findTestObject('Object Repository/05. TRS-Transaction/TRS_field_First name'), data.get("first name"))
		WebUI.setText(findTestObject('Object Repository/05. TRS-Transaction/TRS_field_Last name'), data.get("last name"))
		WebUI.setText(findTestObject('Object Repository/05. TRS-Transaction/TRS_field_Postal code'), data.get("postal code"))
	}
}