package pages;
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData;
import com.kms.katalon.core.testdata.TestData;
import java.util.Map;
import java.util.HashMap;
import java.io.IOException;

public class utils {

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