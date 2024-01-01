package pages;
import internal.GlobalVariable;

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint;
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase;
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData;
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject;
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject;

import com.kms.katalon.core.annotation.Keyword;
import com.kms.katalon.core.checkpoint.Checkpoint;
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords;
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords;
import com.kms.katalon.core.model.FailureHandling;
import com.kms.katalon.core.testcase.TestCase;
import com.kms.katalon.core.testdata.TestData;
import com.kms.katalon.core.testobject.TestObject;
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords;
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords;
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords;
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI;
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW;




import pages.utils;

public class loginPage {

	public static void goToTheWebsite() {
		WebUI.openBrowser('')
		WebUI.navigateToUrl(GlobalVariable.baseUrl)
	}

	public static void setInputValidData() {
		Map<String, String> data = utils.getUserData(1);
		WebUI.setText(findTestObject('Object Repository/01. LOG-Login/LOG_textbox_Username'), data.get("username"));
		WebUI.setText(findTestObject('Object Repository/01. LOG-Login/LOG_textbox_Password'), data.get("password"));
	}

	public static void clickLogin() {
		WebUI.click(findTestObject('01. LOG-Login/LOG_button_Login'))
	}

	public static void setInputInvalidData(String dataType) {
		int row = 0;

		if(dataType.equals("empty username")) {
			row = 2
		} else if(dataType.equals("empty password")) {
			row = 3
		} else if(dataType.equals("empty data")) {
			row = 4
		} else if(dataType.equals("invalid data")) {
			row = 5
		} else if(dataType.equals("invalid username")) {
			row = 6
		} else if(dataType.equals("invalid password")) {
			row = 7
		} else if(dataType.equals("valid with space")) {
			row = 8
		}
		Map<String, String> data = utils.getUserData(row);

		WebUI.setText(findTestObject('Object Repository/01. LOG-Login/LOG_textbox_Username'), data.get("username"));
		WebUI.setText(findTestObject('Object Repository/01. LOG-Login/LOG_textbox_Password'), data.get("password"));
	}

	public static void alertMessage(String pageName, String message) {
		if (pageName.equals("Login")) {
			WebUI.verifyElementPresent(findTestObject('Object Repository/01. LOG-Login/LOG_alert'), 10)
			WebUI.verifyElementText(findTestObject('Object Repository/01. LOG-Login/LOG_alert'), message);
		} else if (pageName.equals("Transaction")) {
			WebUI.verifyElementPresent(findTestObject('Object Repository/05. TRS-Transaction/TRS_text_alert Transaction'), 10)
			WebUI.verifyElementText(findTestObject('Object Repository/05. TRS-Transaction/TRS_text_alert Transaction'), message);
		} else if (pageName.equals("Cart")) {
			WebUI.verifyElementPresent(findTestObject('Object Repository/03. CRT-Cart/CRT_button_Alert'), 10)
			WebUI.verifyElementText(findTestObject('Object Repository/03. CRT-Cart/CRT_button_Alert'), message);
		}
	}

	public static void alreadyLogin() {
		CucumberKW.runFeatureFileWithTags('Include/features', ((['@LOG01'])) as String[])
	}
}
