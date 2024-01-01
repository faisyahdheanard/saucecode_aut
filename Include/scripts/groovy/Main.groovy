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
import com.kms.katalon.core.webui.common.WebUiCommonHelper
import com.kms.katalon.core.webui.driver.DriverFactory
import static org.junit.Assert.assertEquals

import Utils.*

import internal.GlobalVariable

public class Main {

	//	@Then("User will be directed to the Main page")
	//	public void directedToTheHomePage() {
	//		WebUI.verifyElementPresent(findTestObject('Object Repository/02. MPG-Main/MPG_text_Product title'), 0)
	//		WebUI.verifyElementText(findTestObject('Object Repository/02. MPG-Main/MPG_text_Product title'), "Products", FailureHandling.STOP_ON_FAILURE)
	//	}
	//
	//	@When("Select Filter {string}")
	//	public void selectFilter(String filterName) {
	//
	//		String value = "";
	//		switch(filterName) {
	//			case "Name A to Z":
	//				value = "az";
	//				break;
	//			case "Name Z to A":
	//				value = "za";
	//				break;
	//			case "Price (low to high)":
	//				value = "lohi";
	//				break;
	//			case "Price (high to low)":
	//				value = "hilo";
	//				break;
	//		}
	//
	//		WebUI.selectOptionByValue(findTestObject('Object Repository/02. MPG-Main/MPG_select_Filter'), value, false)
	//	}
	//
	//	@Then("The products will be shown based on user filter choices {string}")
	//	public void validateProductAppear(String filterName) {
	//		Map<String, String> dataProduct = Utils.getProductDataSec();
	//		ArrayList<String> expectedProductNames = new ArrayList<>(dataProduct.keySet());
	//		ArrayList<String> expectedProductPrices = new ArrayList<>(dataProduct.values());
	//		String option = "";
	//
	//		switch (filterName) {
	//			case "Name A to Z":
	//			case "Name Z to A":
	//				option = "NAME";
	//				Collections.sort(expectedProductNames);
	//				if ("Name Z to A".equals(filterName)) {
	//					Collections.reverse(expectedProductNames);
	//				}
	//				break;
	//			case "Price (low to high)":
	//				option = "PRICE";
	//				Collections.sort(expectedProductPrices);
	//				break;
	//			case "Price (high to low)":
	//				option = "PRICE";
	//				Collections.sort(expectedProductPrices, Collections.reverseOrder());
	//				break;
	//		}
	//
	//		ArrayList<String> actualProduct = new ArrayList<>();
	//
	//		if (option.equals("NAME")) {
	//			for (TestObject element : findTestObject('Object Repository/02. MPG-Main/MPG_text_Products Name general')) {
	//				String text = WebUI.getText(element);
	//				actualProduct.add(text);
	//			}
	//			List<String> expectedNamesSubset = expectedProductNames.subList(0, actualProduct.size());
	//			assertEquals(expectedNamesSubset, actualProduct)
	//		} else if (option.equals("PRICE")) {
	//			for (TestObject element : findTestObject('Object Repository/02. MPG-Main/MPG_text_Products Price general')) {
	//				String text = WebUI.getText(element);
	//				String cleanedPrice = text.replaceAll("[^\\d.]", "");
	//				actualProduct.add(cleanedPrice);
	//			}
	//			List<Double> expectedPricesSubset = expectedProductPrices.subList(0, actualProduct.size())
	//					.collect { it.toDouble() }
	//		}
	//	}
	//
	//	@When("Click Menu sidebar")
	//	public void clickMenuSidebar() {
	//
	//		WebUI.click(findTestObject('Object Repository/02. MPG-Main/MPG_button_Sidebar/MPG_button_Menu'))
	//	}
	//
	//	@And("Click {string} submenu")
	//	public void clickSidebarSubmenu(String option) {
	//
	//		switch(option) {
	//			case "Logout":
	//				WebUI.click(findTestObject('Object Repository/02. MPG-Main/MPG_button_Sidebar/MPG_button_submenu Logout'))
	//				break
	//			case "About":
	//				WebUI.click(findTestObject('Object Repository/02. MPG-Main/MPG_button_Sidebar/MPG_button_submenu About'))
	//				break
	//			case "Reset App State":
	//				WebUI.click(findTestObject('Object Repository/02. MPG-Main/MPG_button_Sidebar/MPG_button_submenu Reset App State'))
	//				break
	//		}
	//	}
	//
	//	@Then("User {string}")
	//	public void validateActionSubmenu(String result) {
	//
	//		try {
	//			if(result.equals("successfully logged out and will be directed back to the login page")) {
	//				String expectedUrl = "https://www.saucedemo.com/"
	//				String currentUrl = DriverFactory.getWebDriver().getCurrentUrl()
	//				WebUI.verifyEqual(currentUrl, expectedUrl)
	//			} else if(result.equals("will be directed to the company information page")) {
	//				String expectedUrl = "https://saucelabs.com/"
	//				String currentUrl = DriverFactory.getWebDriver().getCurrentUrl()
	//				WebUI.verifyEqual(currentUrl, expectedUrl)
	//			}
	//		}
	//		catch(Exception e) {
	//			System.out.println("Error! The current link was " + DriverFactory.getWebDriver().getCurrentUrl())
	//		}
	//	}
	//
	//	@When("Click {string} on footer")
	//	public void clickFooterButton(String option) {
	//
	//		System.out.println("Before click")
	//
	//		switch(option) {
	//			case("Twitter"):
	//				WebUI.click(findTestObject('Object Repository/02. MPG-Main/MPG_button_footer/MPG_footer_Twitter'))
	//				break
	//			case("Facebook"):
	//				WebUI.click(findTestObject('Object Repository/02. MPG-Main/MPG_button_footer/MPG_footer_Facebook'))
	//				break
	//			case("Linkedin"):
	//				WebUI.click(findTestObject('Object Repository/02. MPG-Main/MPG_button_footer/MPG_footer_Linkedin'))
	//				break
	//		}
	//		System.out.println("After click")
	//	}
	//
	//	@Then("User will be directed to the {string} account")
	//	public void validateFooterNavigates(String option) {
	//
	//		System.out.println("Before")
	//
	//		WebUI.switchToWindowIndex(1)
	//		if(option.equals("Twitter")) {
	//			WebUI.verifyElementPresent(findTestObject('Object Repository/02. MPG-Main/MPG_button_footer/MPG_footer_Twitter Validation'), 10)
	//		} else if(option.equals("Facebook")) {
	//			WebUI.verifyElementPresent(findTestObject('Object Repository/02. MPG-Main/MPG_button_footer/MPG_footer_Facebook Validation'), 10)
	//		} else if(option.equals("Linkedin")) {
	//			WebUI.verifyElementPresent(findTestObject('Object Repository/02. MPG-Main/MPG_button_footer/MPG_footer_Linkedin Validation'), 10)
	//		}
	//		System.out.println("After")
	//	}
	//
	//	@And("Click Close button")
	//	public void clickCloseButton() {
	//		WebUI.click(findTestObject('Object Repository/02. MPG-Main/MPG_button_Sidebar/MPG_button_X'))
	//	}
	//
	//	@Then("The quantity of the product will be increases")
	//	public void validateQuantityIncreases() {
	//		WebUI.verifyElementText(findTestObject('Object Repository/03. CRT-Cart/CRT_text_Quantity'), '2', FailureHandling.STOP_ON_FAILURE)
	//	}
	//
	//	@And("Click Remove button")
	//	public void clickRemoveButton() {
	//		WebUI.click(findTestObject('Object Repository/03. CRT-Cart/CRT_button_Remove Sauce Labs Backpack'))
	//	}
}

