
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

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.io.IOException;



public class Utils {
	public static Map<String, String> getUserData(int row) throws IOException{
		TestData loginData = findTestData("Data Files/Login Data");
        String username = loginData.getValue(1, row);
        String password = loginData.getValue(2, row);
                
        Map<String, String> dataUser = new HashMap<>();
        dataUser.put("username", username);
        dataUser.put("password", password);
        
        return dataUser;
    }
	
	public static Map<String, String> getUserInfo(int row) throws IOException {
		TestData userInfo = findTestData("Data Files/Information Data");
        String firstName = userInfo.getValue(1, row);
        String lastName = userInfo.getValue(2, row);
        String postalCode = userInfo.getValue(3, row);
                
        Map<String, String> dataInfo = new HashMap<>();
        dataInfo.put("first name", firstName);
        dataInfo.put("last name", lastName);
        dataInfo.put("postal code", postalCode);

        return dataInfo;
	}
	
	public static Map<String, String> getProductData() throws IOException{
		TestData productData = findTestData("Data Files/Products Data");
		int totalRows = productData.getRowNumbers();
		
        Map<String, String> productsData = new HashMap<>();
		for(int row = 1; row <= totalRows; row++) { 
			String productName = productData.getValue(1, row);
	        String productPrice = productData.getValue(2, row);
	        
	        productsData.put("product name", productName);
		    productsData.put("product price", productPrice);   
		}
	       
	    return productsData;
	}
	
//	public static ArrayList<String> generateArrangedProduct(String option) throws IOException {
//	    Map<String, String> productData = getProductData();
//	    ArrayList<String> arrangedProduct = new ArrayList<>();
//
//	    if (option.equals("NAME")) {
//	        arrangedProduct.addAll(productData.keySet());
//	    } else if (option.equals("PRICE")) {
//	        arrangedProduct.addAll(productData.values());
//	    }
//
//	    return arrangedProduct;
//	}
	
	public static Map<String, String> getProductDataSec() throws IOException {
        TestData productData = findTestData("Data Files/Products Data");
        int totalRows = productData.getRowNumbers();

        Map<String, String> productsData = new HashMap<>();
        for (int row = 1; row <= totalRows; row++) {
            String productName = productData.getValue(1, row);
            String productPrice = productData.getValue(2, row);

            productsData.put(productName, productPrice);
        }

        return productsData;
	}
	
}