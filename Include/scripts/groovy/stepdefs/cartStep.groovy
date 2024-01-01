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
import pages.cartPage


class cartStep {

	@Then("All product will be removed from the cart")
	public void validateCartIsEmpty() {
		cartPage.validationAddToCartIsDisplayed()
		cartPage.validationCartEmpty()
	}

	@And("Click Cart button")
	public void clickCartButton() {
		cartPage.clickCart()
	}

	@Then("The chosen product will show up in the cart {string}")
	public void validateProducstAppear(String counts) {
		cartPage.validationProductsDisplayedOnCart(counts)
	}

	@Then("{string} will show up in the cart")
	public void validateProductNameOnCart(String productName) {
		cartPage.validationPerProductName(productName)
	}

	@Then("The cart page is displayed")
	public void validateCartPageDisplayed() {
		cartPage.validationOnCartPage()
	}

	@Then("The product successfully removed from the cart")
	public void validateCartNull() {
		cartPage.validationCartEmpty()
	}

	@And("Click Continue Shopping button")
	public void clickContinueShoppingButton() {
		cartPage.clickContinueShopping()
	}

	@And("Click Back To Products button")
	public void clickBackToProductsButton() {
		cartPage.clickBackToProducts()
	}

	@Then("User will be directed to the Cart page")
	public void directedToTheCartPage() {
		cartPage.validationOnCartPage()
	}
	
	@Then("The quantity of the product will be increases")
	public void validateQuantityIncreases() {
		cartPage.validationOfQuantity()
	}





	//ADD TO CART FROM THE HOME PAGE-----------------------------

	@When("Click Add To Cart button for {string} product")
	public void clickAddToCartButtonWithCounts(String count) {
		cartPage.clickAddToCartWithCounts(count)
	}





	//ADD TO CART FROM THE DETAIL PRODUCT PAGE-------------------

	@When("Click {string} product name")
	public void clickProductName(String productName) {
		cartPage.clickProduct(productName)
	}


	@And("Click Add To Cart button")
	public void clickAddToCartButtonDPP() {
		cartPage.clickAddToCartOnDPP()
	}
}