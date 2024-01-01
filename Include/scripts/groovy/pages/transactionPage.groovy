package pages

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

import internal.GlobalVariable
import pages.utils

public class transactionPage {

	public static void validationOnCheckoutPage() {
		WebUI.click(findTestObject('Object Repository/05. TRS-Transaction/TRS_text_Your Information Checkout'))
	}

	public static void clickCheckout() {
		WebUI.click(findTestObject('Object Repository/05. TRS-Transaction/TRS_button_Checkout'))
	}

	public static void setInputTransactionValid() {
		Map<String, String> data = utils.getUserInfo(1);
		WebUI.setText(findTestObject('Object Repository/05. TRS-Transaction/TRS_field_First name'), data.get("first name"))
		WebUI.setText(findTestObject('Object Repository/05. TRS-Transaction/TRS_field_Last name'), data.get("last name"))
		WebUI.setText(findTestObject('Object Repository/05. TRS-Transaction/TRS_field_Postal code'), data.get("postal code"))
	}

	public static void clickContinue() {
		WebUI.click(findTestObject('Object Repository/05. TRS-Transaction/TRS_button_Continue'))
	}

	public static void clickFinish() {
		WebUI.click(findTestObject('Object Repository/05. TRS-Transaction/TRS_button_Finish'))
	}

	public static void validationOnCheckoutOverviewPage() {
		WebUI.verifyElementPresent(findTestObject('Object Repository/05. TRS-Transaction/TRS_text_Chekout overview'), 10)
	}

	public static void validationSuccessfullPayment(String message) {
		WebUI.verifyElementPresent(findTestObject('Object Repository/05. TRS-Transaction/TRS_text_Transaction success'), 10)
		WebUI.verifyElementText(findTestObject('Object Repository/05. TRS-Transaction/TRS_text_Transaction success'), message)
	}

	public static void clickCancel() {
		WebUI.click(findTestObject('Object Repository/05. TRS-Transaction/TRS_button_Cancel'))
	}

	public static void setInputTransactionInvalid(String dataName) {
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

		Map<String, String> data = utils.getUserInfo(row);

		WebUI.setText(findTestObject('Object Repository/05. TRS-Transaction/TRS_field_First name'), data.get("first name"))
		WebUI.setText(findTestObject('Object Repository/05. TRS-Transaction/TRS_field_Last name'), data.get("last name"))
		WebUI.setText(findTestObject('Object Repository/05. TRS-Transaction/TRS_field_Postal code'), data.get("postal code"))
	}
}