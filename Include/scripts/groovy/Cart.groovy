import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

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

import org.openqa.selenium.By as By
import org.openqa.selenium.WebElement as WebElement
import com.kms.katalon.core.webui.driver.DriverFactory as DriverFactory
import org.openqa.selenium.WebDriver as WebDriver
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.ConditionType


import Utils.*

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

import internal.GlobalVariable

public class Cart {

	@When("Click Add To Cart button for {string} product")
	public void clickAddToCartButtonWithCounts(String count) {

		if(count.equals("one")) {
			//ADD TO CART FOR SAUCE LABS BACKPACK
			WebUI.click(findTestObject('Object Repository/03. CRT-Cart/CRT_button_Add To Cart Sauce Labs Backpack'))
		} else if(count.equals("all")) {
			WebDriver driver = DriverFactory.getWebDriver();
			List<WebElement> addToCarts = driver.findElements(By.cssSelector('[class="btn btn_primary btn_small btn_inventory "'))
			for(int i = 1; i <= addToCarts.size(); i++) {
				By addToCartLocator = By.xpath("//div[2]//div[" + i + "]//div[2]//div[2]/button")
				WebElement addToCartElement = driver.findElement(addToCartLocator)
				addToCartElement.click()
			}
		}
	}

	@Then("All product will be removed from the cart")
	public void validateCartIsEmpty() {
		WebUI.verifyElementPresent(findTestObject('Object Repository/03. CRT-Cart/CRT_button_Add To cart General'), 2)
		WebUI.click(findTestObject('Object Repository/03. CRT-Cart/CRT_button_Cart'))
		assert WebUI.verifyElementNotPresent(findTestObject('Object Repository/02. MPG-Main/MPG_text_Products Name general'), 2)
	}

	@And("Click Cart button")
	public void clickCartButton() {
		WebUI.click(findTestObject('Object Repository/03. CRT-Cart/CRT_button_Cart'))
	}

	@Then("The chosen product will show up in the cart {string}")
	public void validateProductAppear(String counts) {
		WebUI.verifyElementPresent(findTestObject("Object Repository/03. CRT-Cart/CRT_text_Product Names general on cart"), 0);
		if (counts.equals("one")) {
			// PRODUCT = SAUCE LABS BACKPACK
			assert WebUI.verifyElementText(findTestObject("Object Repository/03. CRT-Cart/CRT_text_Product Names general on cart"), "Sauce Labs Backpack", FailureHandling.STOP_ON_FAILURE);
		} else if (counts.equals("all")) {
			WebDriver driver = DriverFactory.getWebDriver();

			Map<String, String> dataProduct = Utils.getProductDataSec();
			ArrayList<String> expectedProductNames = new ArrayList<>(dataProduct.keySet());
			ArrayList<String> actualProductNames = new ArrayList<>();

			List<WebElement> elemenNamaProduk = driver.findElements(By.cssSelector(".inventory_item_name"));

			for (WebElement elemenProduk : elemenNamaProduk) {
				actualProductNames.add(elemenProduk.getText());
			}

			assert expectedProductNames.size() == actualProductNames.size() : "Jumlah elemen tidak sama";
			assert actualProductNames.containsAll(expectedProductNames) : "Data yang diharapkan tidak ada dalam data aktual";
		}
	}

	@When("Click {string} product name")
	public void clickProductName(String productName) {
		TestObject productObject = new TestObject()
				.addProperty("xpath", ConditionType.EQUALS, "//*[contains(text(), '" + productName + "')]")
		WebUI.click(productObject);
	}

	@Then("{string} will show up in the cart")
	public void validateProductNameOnCart(String productName) {
		TestObject productObject = new TestObject()
				.addProperty("xpath", ConditionType.EQUALS, "//*[contains(text(), '" + productName + "')]")
		WebUI.verifyElementPresent(productObject, 2)
	}

	@And("Click Add To Cart button")
	public void clickAddToCartButton() {
		TestObject addToCartButton = new TestObject()
				.addProperty("xpath", ConditionType.EQUALS, "//*[contains(text(), 'Add to cart')]")
		WebUI.click(addToCartButton)
	}

	@Then("The cart page is displayed")
	public void validateCartPageDisplayed() {
		WebUI.verifyElementPresent(findTestObject('Object Repository/05. TRS-Transaction/TRS_text_Your Cart'), 2)
	}

	@Then("The product successfully removed from the cart")
	public void validateCartNull() {
		WebUI.verifyElementNotPresent(findTestObject('Object Repository/03. CRT-Cart/CRT_text_Product Names general on cart'), 2)
	}

	@And("Click Continue Shopping button")
	public void clickContinueShoppingButton() {
		WebUI.click(findTestObject('Object Repository/03. CRT-Cart/CRT_button_Continue Shopping'))
	}

	@And("Click Back To Products button")
	public void clickBackToProductsButton() {
		WebUI.click(findTestObject('Object Repository/04. DPP-Detail Product/DPP_button_Back to products'))
	}

	@Then("User will be directed to the Cart page")
	public void directedToTheCartPage() {
		WebUI.verifyElementPresent(findTestObject('Object Repository/05. TRS-Transaction/TRS_text_Your Cart'), 2)
	}
}

