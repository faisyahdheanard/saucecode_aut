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

import org.openqa.selenium.By as By
import org.openqa.selenium.WebElement as WebElement
import com.kms.katalon.core.webui.driver.DriverFactory as DriverFactory
import org.openqa.selenium.WebDriver as WebDriver
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.ConditionType

import internal.GlobalVariable
import pages.utils

public class cartPage {

	public static void validationOnCartPage() {
		WebUI.verifyElementPresent(findTestObject('Object Repository/05. TRS-Transaction/TRS_text_Your Cart'), 10)
	}

	public static void validationOfQuantity() {
		WebUI.verifyElementText(findTestObject('Object Repository/03. CRT-Cart/CRT_text_Quantity'), '2')
	}

	public static void clickCart() {
		WebUI.click(findTestObject('Object Repository/03. CRT-Cart/CRT_button_Cart'))
	}

	public static void validationProductsDisplayedOnCart(String counts) {
		WebUI.verifyElementPresent(findTestObject("Object Repository/03. CRT-Cart/CRT_text_Product Names general on cart"), 10);
		if (counts.equals("one")) {
			// PRODUCT = SAUCE LABS BACKPACK
			assert WebUI.verifyElementText(findTestObject("Object Repository/03. CRT-Cart/CRT_text_Product Names general on cart"), "Sauce Labs Backpack");
		} else if (counts.equals("all")) {
			WebDriver driver = DriverFactory.getWebDriver();

			Map<String, String> dataProduct = utils.getProductDataSec();
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

	public static void validationPerProductName(String productName) {
		TestObject productObject = new TestObject()
				.addProperty("xpath", ConditionType.EQUALS, "//*[contains(text(), '" + productName + "')]")
		WebUI.verifyElementPresent(productObject, 2)
	}

	public static void validationCartEmpty() {
		WebUI.verifyElementNotPresent(findTestObject('Object Repository/03. CRT-Cart/CRT_text_Product Names general on cart'), 10)
	}

	public static void clickContinueShopping() {
		WebUI.click(findTestObject('Object Repository/03. CRT-Cart/CRT_button_Continue Shopping'))
	}

	public static void clickBackToProducts() {
		WebUI.click(findTestObject('Object Repository/04. DPP-Detail Product/DPP_button_Back to products'))
	}

	public static void validationAddToCartIsDisplayed() {
		WebUI.verifyElementPresent(findTestObject('Object Repository/03. CRT-Cart/CRT_button_Add To cart General'), 10)
	}




	//ADD TO CART FROM THE DETAIL PRODUCT PAGE---------------------

	public static void clickProduct(String productName) {
		TestObject productObject = new TestObject()
				.addProperty("xpath", ConditionType.EQUALS, "//*[contains(text(), '" + productName + "')]")
		WebUI.click(productObject);
	}

	public static void clickAddToCartOnDPP() {
		TestObject addToCartButton = new TestObject()
				.addProperty("xpath", ConditionType.EQUALS, "//*[contains(text(), 'Add to cart')]")
		WebUI.click(addToCartButton)
	}





	//ADD TO CART FROM THE HOME PAGE-----------------------------

	public static void clickAddToCartWithCounts(String count) {
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



}
