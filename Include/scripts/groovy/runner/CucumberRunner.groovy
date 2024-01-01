package runner
import org.junit.runner.RunWith

import cucumber.api.CucumberOptions
import cucumber.api.junit.Cucumber

@RunWith(Cucumber.class)
@CucumberOptions(
features = "Include/features",
glue="",
plugin=["pretty",
	"html:ExtentReports/CucumberReports/cucumber.html",
	"json:ExtentReports/CucumberReports/cucumber.json"
]
)
public class CucumberRunner {
}
