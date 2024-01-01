$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/01. Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LOG"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Navigate to the website",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.navigateToTheWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully logged in using valid username and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LOG"
    },
    {
      "name": "@LOG01"
    }
  ]
});
formatter.step({
  "name": "Input Username and Password fields with valid data",
  "keyword": "When "
});
formatter.match({
  "location": "loginStep.inputWithValidData()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginStep.clickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will be directed to the Main page",
  "keyword": "Then "
});
formatter.match({
  "location": "mainStep.directedToTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Ensure the error message is displayed using various invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LOG02"
    }
  ]
});
formatter.step({
  "name": "Input Username and Password fields with \"\u003cdata\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Login button",
  "keyword": "And "
});
formatter.step({
  "name": "There is an alert message displayed on the \"Login\" page, said \"\u003calert\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "data",
        "alert"
      ]
    },
    {
      "cells": [
        "empty username",
        "Epic sadface: Username is required"
      ]
    },
    {
      "cells": [
        "empty password",
        "Epic sadface: Password is required"
      ]
    },
    {
      "cells": [
        "empty data",
        "Epic sadface: Username and Password is required"
      ]
    },
    {
      "cells": [
        "invalid data",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    },
    {
      "cells": [
        "invalid username",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    },
    {
      "cells": [
        "invalid password",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    },
    {
      "cells": [
        "valid with space",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Navigate to the website",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.navigateToTheWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ensure the error message is displayed using various invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LOG"
    },
    {
      "name": "@LOG02"
    }
  ]
});
formatter.step({
  "name": "Input Username and Password fields with \"empty username\"",
  "keyword": "When "
});
formatter.match({
  "location": "loginStep.inputWithInvalidData(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginStep.clickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There is an alert message displayed on the \"Login\" page, said \"Epic sadface: Username is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStep.messagePopUp(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Navigate to the website",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.navigateToTheWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ensure the error message is displayed using various invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LOG"
    },
    {
      "name": "@LOG02"
    }
  ]
});
formatter.step({
  "name": "Input Username and Password fields with \"empty password\"",
  "keyword": "When "
});
formatter.match({
  "location": "loginStep.inputWithInvalidData(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginStep.clickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There is an alert message displayed on the \"Login\" page, said \"Epic sadface: Password is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStep.messagePopUp(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Navigate to the website",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.navigateToTheWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ensure the error message is displayed using various invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LOG"
    },
    {
      "name": "@LOG02"
    }
  ]
});
formatter.step({
  "name": "Input Username and Password fields with \"empty data\"",
  "keyword": "When "
});
formatter.match({
  "location": "loginStep.inputWithInvalidData(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginStep.clickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There is an alert message displayed on the \"Login\" page, said \"Epic sadface: Username and Password is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStep.messagePopUp(String,String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Verify element text of test object \u0027Object Repository/01. LOG-Login/LOG_alert\u0027 FAILED.\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.verifyElementText(VerifyElementTextKeyword.groovy:72)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.execute(VerifyElementTextKeyword.groovy:40)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementText(WebUiBuiltInKeywords.groovy:4749)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementText$4.call(Unknown Source)\n\tat pages.loginPage.alertMessage(loginPage.groovy:73)\n\tat pages.loginPage$alertMessage$3.call(Unknown Source)\n\tat stepdefs.loginStep.messagePopUp(loginStep.groovy:52)\n\tat ✽.There is an alert message displayed on the \"Login\" page, said \"Epic sadface: Username and Password is required\"(Include/features/01. Login.feature:24)\nCaused by: com.kms.katalon.core.exception.StepFailedException: Actual text \u0027Epic sadface: Username is required\u0027 and expected text \u0027Epic sadface: Username and Password is required\u0027 of test object \u0027Object Repository/01. LOG-Login/LOG_alert\u0027 are NOT matched.\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword$_verifyElementText_closure1.doCall(VerifyElementTextKeyword.groovy:57)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword$_verifyElementText_closure1.call(VerifyElementTextKeyword.groovy)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.verifyElementText(VerifyElementTextKeyword.groovy:72)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.execute(VerifyElementTextKeyword.groovy:40)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementText(WebUiBuiltInKeywords.groovy:4749)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementText$4.call(Unknown Source)\n\tat pages.loginPage.alertMessage(loginPage.groovy:73)\n\tat pages.loginPage$alertMessage$3.call(Unknown Source)\n\tat stepdefs.loginStep.messagePopUp(loginStep.groovy:52)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat runnerExtent.run(runnerExtent:21)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\n\tat TempTestCase1704111900706.run(TempTestCase1704111900706.groovy:25)\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Navigate to the website",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.navigateToTheWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ensure the error message is displayed using various invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LOG"
    },
    {
      "name": "@LOG02"
    }
  ]
});
formatter.step({
  "name": "Input Username and Password fields with \"invalid data\"",
  "keyword": "When "
});
formatter.match({
  "location": "loginStep.inputWithInvalidData(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginStep.clickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There is an alert message displayed on the \"Login\" page, said \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStep.messagePopUp(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Navigate to the website",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.navigateToTheWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ensure the error message is displayed using various invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LOG"
    },
    {
      "name": "@LOG02"
    }
  ]
});
formatter.step({
  "name": "Input Username and Password fields with \"invalid username\"",
  "keyword": "When "
});
formatter.match({
  "location": "loginStep.inputWithInvalidData(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginStep.clickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There is an alert message displayed on the \"Login\" page, said \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStep.messagePopUp(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Navigate to the website",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.navigateToTheWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ensure the error message is displayed using various invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LOG"
    },
    {
      "name": "@LOG02"
    }
  ]
});
formatter.step({
  "name": "Input Username and Password fields with \"invalid password\"",
  "keyword": "When "
});
formatter.match({
  "location": "loginStep.inputWithInvalidData(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginStep.clickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There is an alert message displayed on the \"Login\" page, said \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStep.messagePopUp(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Navigate to the website",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.navigateToTheWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ensure the error message is displayed using various invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LOG"
    },
    {
      "name": "@LOG02"
    }
  ]
});
formatter.step({
  "name": "Input Username and Password fields with \"valid with space\"",
  "keyword": "When "
});
formatter.match({
  "location": "loginStep.inputWithInvalidData(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginStep.clickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There is an alert message displayed on the \"Login\" page, said \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStep.messagePopUp(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/02. Cart.feature");
formatter.feature({
  "name": "Cart",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CRT"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the cart page is displayed when click Cart icon",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CRT"
    },
    {
      "name": "@CRT01"
    }
  ]
});
formatter.step({
  "name": "Click Cart button",
  "keyword": "When "
});
formatter.match({
  "location": "cartStep.clickCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The cart page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "cartStep.validateCartPageDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully removed the product from the cart on the cart page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CRT"
    },
    {
      "name": "@CRT02"
    }
  ]
});
formatter.step({
  "name": "Click Add To Cart button for \"one\" product",
  "keyword": "When "
});
formatter.match({
  "location": "cartStep.clickAddToCartButtonWithCounts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Remove button",
  "keyword": "And "
});
formatter.match({
  "location": "mainStep.clickRemoveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The product successfully removed from the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "cartStep.validateCartNull()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully navigated back from the cart page to the main page to continue shopping",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CRT"
    },
    {
      "name": "@CRT03"
    }
  ]
});
formatter.step({
  "name": "Click Cart button",
  "keyword": "When "
});
formatter.match({
  "location": "cartStep.clickCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Continue Shopping button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickContinueShoppingButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will be directed to the Main page",
  "keyword": "Then "
});
formatter.match({
  "location": "mainStep.directedToTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/03. Main.feature");
formatter.feature({
  "name": "Main Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@MPG"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Successfully added the product(s) to the cart from the main page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@MPG01"
    }
  ]
});
formatter.step({
  "name": "Click Add To Cart button for \"\u003ccounts\u003e\" product",
  "keyword": "When "
});
formatter.step({
  "name": "Click Cart button",
  "keyword": "And "
});
formatter.step({
  "name": "The chosen product will show up in the cart \"\u003ccounts\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "counts"
      ]
    },
    {
      "cells": [
        "one"
      ]
    },
    {
      "cells": [
        "all"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully added the product(s) to the cart from the main page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@MPG"
    },
    {
      "name": "@MPG01"
    }
  ]
});
formatter.step({
  "name": "Click Add To Cart button for \"one\" product",
  "keyword": "When "
});
formatter.match({
  "location": "cartStep.clickAddToCartButtonWithCounts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The chosen product will show up in the cart \"one\"",
  "keyword": "Then "
});
formatter.match({
  "location": "cartStep.validateProducstAppear(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully added the product(s) to the cart from the main page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@MPG"
    },
    {
      "name": "@MPG01"
    }
  ]
});
formatter.step({
  "name": "Click Add To Cart button for \"all\" product",
  "keyword": "When "
});
formatter.match({
  "location": "cartStep.clickAddToCartButtonWithCounts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The chosen product will show up in the cart \"all\"",
  "keyword": "Then "
});
formatter.match({
  "location": "cartStep.validateProducstAppear(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully added product quantity on the main page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MPG"
    },
    {
      "name": "@MPG03"
    }
  ]
});
formatter.step({
  "name": "Click Add To Cart button for \"one\" product",
  "keyword": "When "
});
formatter.match({
  "location": "cartStep.clickAddToCartButtonWithCounts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add To Cart button for \"one\" product",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickAddToCartButtonWithCounts(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to click on object \u0027Object Repository/03. CRT-Cart/CRT_button_Add To Cart Sauce Labs Backpack\u0027\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:40)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:620)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$2.call(Unknown Source)\n\tat pages.cartPage.clickAddToCartWithCounts(cartPage.groovy:116)\n\tat pages.cartPage$clickAddToCartWithCounts$1.call(Unknown Source)\n\tat stepdefs.cartStep.clickAddToCartButtonWithCounts(cartStep.groovy:91)\n\tat ✽.Click Add To Cart button for \"one\" product(Include/features/03. Main.feature:24)\nCaused by: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/03. CRT-Cart/CRT_button_Add To Cart Sauce Labs Backpack\u0027 located by \u0027[id\u003d\"add-to-cart-sauce-labs-backpack\"]\u0027 not found\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findWebElement(WebUiCommonHelper.java:1381)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:27)\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.doCall(ClickKeyword.groovy:65)\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.call(ClickKeyword.groovy)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:40)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:620)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$2.call(Unknown Source)\n\tat pages.cartPage.clickAddToCartWithCounts(cartPage.groovy:116)\n\tat pages.cartPage$clickAddToCartWithCounts$1.call(Unknown Source)\n\tat stepdefs.cartStep.clickAddToCartButtonWithCounts(cartStep.groovy:91)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat runnerExtent.run(runnerExtent:21)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\n\tat TempTestCase1704111900706.run(TempTestCase1704111900706.groovy:25)\n",
  "status": "failed"
});
formatter.step({
  "name": "The quantity of the product will be increases",
  "keyword": "Then "
});
formatter.match({
  "location": "cartStep.validateQuantityIncreases()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully removed the product from the cart on the main page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MPG"
    },
    {
      "name": "@MPG04"
    }
  ]
});
formatter.step({
  "name": "Click Add To Cart button for \"one\" product",
  "keyword": "When "
});
formatter.match({
  "location": "cartStep.clickAddToCartButtonWithCounts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Remove button",
  "keyword": "And "
});
formatter.match({
  "location": "mainStep.clickRemoveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The product successfully removed from the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "cartStep.validateCartNull()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/04. Detail product.feature");
formatter.feature({
  "name": "Detail Product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@DPP"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully added product to the cart from the detail page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DPP"
    },
    {
      "name": "@DPP01"
    }
  ]
});
formatter.step({
  "name": "Click \"Sauce Labs Backpack\" product name",
  "keyword": "When "
});
formatter.match({
  "location": "cartStep.clickProductName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add To Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickAddToCartButtonDPP()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Sauce Labs Backpack\" will show up in the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "cartStep.validateProductNameOnCart(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully added more than one product to the cart from the detail page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DPP"
    },
    {
      "name": "@DPP02"
    }
  ]
});
formatter.step({
  "name": "Click \"Sauce Labs Backpack\" product name",
  "keyword": "When "
});
formatter.match({
  "location": "cartStep.clickProductName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add To Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickAddToCartButtonDPP()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Back To Products button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickBackToProductsButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click \"Sauce Labs Bike Light\" product name",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickProductName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add To Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickAddToCartButtonDPP()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Sauce Labs Backpack\" will show up in the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "cartStep.validateProductNameOnCart(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Sauce Labs Bike Light\" will show up in the cart",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.validateProductNameOnCart(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully added product quantity on the detail page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DPP"
    },
    {
      "name": "@DPP03"
    }
  ]
});
formatter.step({
  "name": "Click \"Sauce Labs Backpack\" product name",
  "keyword": "When "
});
formatter.match({
  "location": "cartStep.clickProductName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add To Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickAddToCartButtonDPP()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add To Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickAddToCartButtonDPP()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to click on object \u0027\u0027\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:40)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:620)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$2.call(Unknown Source)\n\tat pages.cartPage.clickAddToCartOnDPP(cartPage.groovy:104)\n\tat pages.cartPage$clickAddToCartOnDPP$6.call(Unknown Source)\n\tat stepdefs.cartStep.clickAddToCartButtonDPP(cartStep.groovy:108)\n\tat ✽.Click Add To Cart button(Include/features/04. Detail product.feature:29)\nCaused by: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027\u0027 located by \u0027//*[contains(text(), \u0027Add to cart\u0027)]\u0027 not found\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findWebElement(WebUiCommonHelper.java:1381)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:27)\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.doCall(ClickKeyword.groovy:65)\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.call(ClickKeyword.groovy)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:40)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:620)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$2.call(Unknown Source)\n\tat pages.cartPage.clickAddToCartOnDPP(cartPage.groovy:104)\n\tat pages.cartPage$clickAddToCartOnDPP$6.call(Unknown Source)\n\tat stepdefs.cartStep.clickAddToCartButtonDPP(cartStep.groovy:108)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat runnerExtent.run(runnerExtent:21)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\n\tat TempTestCase1704111900706.run(TempTestCase1704111900706.groovy:25)\n",
  "status": "failed"
});
formatter.step({
  "name": "Click Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The quantity of the product will be increases",
  "keyword": "Then "
});
formatter.match({
  "location": "cartStep.validateQuantityIncreases()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully removed the product from the cart on the detail page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DPP"
    },
    {
      "name": "@DPP04"
    }
  ]
});
formatter.step({
  "name": "Click \"Sauce Labs Backpack\" product name",
  "keyword": "When "
});
formatter.match({
  "location": "cartStep.clickProductName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add To Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickAddToCartButtonDPP()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Remove button",
  "keyword": "And "
});
formatter.match({
  "location": "mainStep.clickRemoveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The product successfully removed from the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "cartStep.validateCartNull()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/05. Transaction.feature");
formatter.feature({
  "name": "Transaction",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TRS"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the checkout page is displayed when click Checkout button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TRS"
    },
    {
      "name": "@TRS01"
    }
  ]
});
formatter.step({
  "name": "Click Add To Cart button for \"one\" product",
  "keyword": "When "
});
formatter.match({
  "location": "cartStep.clickAddToCartButtonWithCounts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Checkout button",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.clickCheckoutButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Checkout page will be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "transactionStep.validateCheckoutPageDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully created transaction with valid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TRS"
    },
    {
      "name": "@TRS02"
    }
  ]
});
formatter.step({
  "name": "Click Add To Cart button for \"one\" product",
  "keyword": "When "
});
formatter.match({
  "location": "cartStep.clickAddToCartButtonWithCounts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Checkout button",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.clickCheckoutButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input First Name, Last Name, Postal Code fields with valid data",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.transactionValidData()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.clickContinueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Checkout overview page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "transactionStep.checkoutOverviewPageDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Finish button",
  "keyword": "When "
});
formatter.match({
  "location": "transactionStep.clickFinishButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The transaction is successful and there is a message said \"Thank you for your order!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "transactionStep.validatePaymentSuccessful(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ensure the error message is displayed when attempting to checkout with an empty cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TRS"
    },
    {
      "name": "@TRS03"
    }
  ]
});
formatter.step({
  "name": "Click Cart button",
  "keyword": "When "
});
formatter.match({
  "location": "cartStep.clickCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Checkout button",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.clickCheckoutButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There is an alert message displayed on the \"Cart\" page, said \"Error: Unable to proceed to checkout. Your shopping cart is empty. Please add items to your cart before continuing\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStep.messagePopUp(String,String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to verify object \u0027Object Repository/03. CRT-Cart/CRT_button_Alert\u0027 is present\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.verifyElementPresent(VerifyElementPresentKeyword.groovy:92)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.execute(VerifyElementPresentKeyword.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementPresent(WebUiBuiltInKeywords.groovy:1464)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementPresent$3.call(Unknown Source)\n\tat pages.loginPage.alertMessage(loginPage.groovy:78)\n\tat pages.loginPage$alertMessage$3.call(Unknown Source)\n\tat stepdefs.loginStep.messagePopUp(loginStep.groovy:52)\n\tat ✽.There is an alert message displayed on the \"Cart\" page, said \"Error: Unable to proceed to checkout. Your shopping cart is empty. Please add items to your cart before continuing\"(Include/features/05. Transaction.feature:29)\nCaused by: com.kms.katalon.core.exception.StepFailedException: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/03. CRT-Cart/CRT_button_Alert\u0027 located by \u0027[class\u003d\"error-message-container error\"]\u0027 not found\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword$_verifyElementPresent_closure1.doCall(VerifyElementPresentKeyword.groovy:85)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword$_verifyElementPresent_closure1.call(VerifyElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.verifyElementPresent(VerifyElementPresentKeyword.groovy:92)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.execute(VerifyElementPresentKeyword.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementPresent(WebUiBuiltInKeywords.groovy:1464)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementPresent$3.call(Unknown Source)\n\tat pages.loginPage.alertMessage(loginPage.groovy:78)\n\tat pages.loginPage$alertMessage$3.call(Unknown Source)\n\tat stepdefs.loginStep.messagePopUp(loginStep.groovy:52)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat runnerExtent.run(runnerExtent:21)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\n\tat TempTestCase1704111900706.run(TempTestCase1704111900706.groovy:25)\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Ensure the error message is displayed when input with various data field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TRS04"
    }
  ]
});
formatter.step({
  "name": "Click Add To Cart button for \"one\" product",
  "keyword": "When "
});
formatter.step({
  "name": "Click Cart button",
  "keyword": "And "
});
formatter.step({
  "name": "Click Checkout button",
  "keyword": "And "
});
formatter.step({
  "name": "Input First name, Last name, and Postal code with \"\u003cdata\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click Continue button",
  "keyword": "And "
});
formatter.step({
  "name": "There is an alert message displayed on the \"Transaction\" page, said \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "data",
        "message"
      ]
    },
    {
      "cells": [
        "blank data",
        "Error: First Name, Last Name, and Zip/Postal Code are required"
      ]
    },
    {
      "cells": [
        "empty first name",
        "Error: First Name is required"
      ]
    },
    {
      "cells": [
        "empty last name",
        "Error: Last Name is required"
      ]
    },
    {
      "cells": [
        "empty postal code",
        "Error: Postal Code is required"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ensure the error message is displayed when input with various data field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TRS"
    },
    {
      "name": "@TRS04"
    }
  ]
});
formatter.step({
  "name": "Click Add To Cart button for \"one\" product",
  "keyword": "When "
});
formatter.match({
  "location": "cartStep.clickAddToCartButtonWithCounts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Checkout button",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.clickCheckoutButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input First name, Last name, and Postal code with \"blank data\"",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.transactionInvalidData(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.clickContinueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There is an alert message displayed on the \"Transaction\" page, said \"Error: First Name, Last Name, and Zip/Postal Code are required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStep.messagePopUp(String,String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Verify element text of test object \u0027Object Repository/05. TRS-Transaction/TRS_text_alert Transaction\u0027 FAILED.\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.verifyElementText(VerifyElementTextKeyword.groovy:72)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.execute(VerifyElementTextKeyword.groovy:40)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementText(WebUiBuiltInKeywords.groovy:4749)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementText$4.call(Unknown Source)\n\tat pages.loginPage.alertMessage(loginPage.groovy:76)\n\tat pages.loginPage$alertMessage$3.call(Unknown Source)\n\tat stepdefs.loginStep.messagePopUp(loginStep.groovy:52)\n\tat ✽.There is an alert message displayed on the \"Transaction\" page, said \"Error: First Name, Last Name, and Zip/Postal Code are required\"(Include/features/05. Transaction.feature:42)\nCaused by: com.kms.katalon.core.exception.StepFailedException: Actual text \u0027Error: First Name is required\u0027 and expected text \u0027Error: First Name, Last Name, and Zip/Postal Code are required\u0027 of test object \u0027Object Repository/05. TRS-Transaction/TRS_text_alert Transaction\u0027 are NOT matched.\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword$_verifyElementText_closure1.doCall(VerifyElementTextKeyword.groovy:57)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword$_verifyElementText_closure1.call(VerifyElementTextKeyword.groovy)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.verifyElementText(VerifyElementTextKeyword.groovy:72)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.execute(VerifyElementTextKeyword.groovy:40)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementText(WebUiBuiltInKeywords.groovy:4749)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementText$4.call(Unknown Source)\n\tat pages.loginPage.alertMessage(loginPage.groovy:76)\n\tat pages.loginPage$alertMessage$3.call(Unknown Source)\n\tat stepdefs.loginStep.messagePopUp(loginStep.groovy:52)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat runnerExtent.run(runnerExtent:21)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\n\tat TempTestCase1704111900706.run(TempTestCase1704111900706.groovy:25)\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ensure the error message is displayed when input with various data field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TRS"
    },
    {
      "name": "@TRS04"
    }
  ]
});
formatter.step({
  "name": "Click Add To Cart button for \"one\" product",
  "keyword": "When "
});
formatter.match({
  "location": "cartStep.clickAddToCartButtonWithCounts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Checkout button",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.clickCheckoutButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input First name, Last name, and Postal code with \"empty first name\"",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.transactionInvalidData(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.clickContinueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There is an alert message displayed on the \"Transaction\" page, said \"Error: First Name is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStep.messagePopUp(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ensure the error message is displayed when input with various data field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TRS"
    },
    {
      "name": "@TRS04"
    }
  ]
});
formatter.step({
  "name": "Click Add To Cart button for \"one\" product",
  "keyword": "When "
});
formatter.match({
  "location": "cartStep.clickAddToCartButtonWithCounts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Checkout button",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.clickCheckoutButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input First name, Last name, and Postal code with \"empty last name\"",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.transactionInvalidData(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.clickContinueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There is an alert message displayed on the \"Transaction\" page, said \"Error: Last Name is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStep.messagePopUp(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ensure the error message is displayed when input with various data field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TRS"
    },
    {
      "name": "@TRS04"
    }
  ]
});
formatter.step({
  "name": "Click Add To Cart button for \"one\" product",
  "keyword": "When "
});
formatter.match({
  "location": "cartStep.clickAddToCartButtonWithCounts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Checkout button",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.clickCheckoutButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input First name, Last name, and Postal code with \"empty postal code\"",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.transactionInvalidData(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.clickContinueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There is an alert message displayed on the \"Transaction\" page, said \"Error: Postal Code is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStep.messagePopUp(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully navigated back from the Checkout:Your Information page to the cart page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TRS"
    },
    {
      "name": "@TRS08"
    }
  ]
});
formatter.step({
  "name": "Click Add To Cart button for \"one\" product",
  "keyword": "When "
});
formatter.match({
  "location": "cartStep.clickAddToCartButtonWithCounts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Checkout button",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.clickCheckoutButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Cancel button",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.clickCancelButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will be directed to the Cart page",
  "keyword": "Then "
});
formatter.match({
  "location": "cartStep.directedToTheCartPage()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully navigated back from the Checkout:Overview page to the main page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TRS"
    },
    {
      "name": "@TRS09"
    }
  ]
});
formatter.step({
  "name": "Click Add To Cart button for \"one\" product",
  "keyword": "When "
});
formatter.match({
  "location": "cartStep.clickAddToCartButtonWithCounts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Checkout button",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.clickCheckoutButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input First Name, Last Name, Postal Code fields with valid data",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.transactionValidData()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.clickContinueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Cancel button",
  "keyword": "And "
});
formatter.match({
  "location": "transactionStep.clickCancelButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will be directed to the Main page",
  "keyword": "Then "
});
formatter.match({
  "location": "mainStep.directedToTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/06. Sidebar.feature");
formatter.feature({
  "name": "Sidebar",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SDB"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully logged out",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SDB"
    },
    {
      "name": "@LGT01"
    }
  ]
});
formatter.step({
  "name": "Click Menu sidebar",
  "keyword": "When "
});
formatter.match({
  "location": "mainStep.clickMenuSidebar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click \"Logout\" submenu",
  "keyword": "And "
});
formatter.match({
  "location": "mainStep.clickSidebarSubmenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User \"successfully logged out and will be directed back to the login page\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "mainStep.validateActionSubmenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully navigated to the companys About",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SDB"
    },
    {
      "name": "@ABT01"
    }
  ]
});
formatter.step({
  "name": "Click Menu sidebar",
  "keyword": "When "
});
formatter.match({
  "location": "mainStep.clickMenuSidebar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click \"About\" submenu",
  "keyword": "And "
});
formatter.match({
  "location": "mainStep.clickSidebarSubmenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User \"will be directed to the company information page\"",
  "keyword": "Then "
});
formatter.match({
  "location": "mainStep.validateActionSubmenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ensure that the Reset app state button can reset all products that are already in the shopping cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SDB"
    },
    {
      "name": "@RST01"
    }
  ]
});
formatter.step({
  "name": "Click Add To Cart button for \"all\" product",
  "keyword": "When "
});
formatter.match({
  "location": "cartStep.clickAddToCartButtonWithCounts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Menu sidebar",
  "keyword": "And "
});
formatter.match({
  "location": "mainStep.clickMenuSidebar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click \"Reset App State\" submenu",
  "keyword": "And "
});
formatter.match({
  "location": "mainStep.clickSidebarSubmenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Close button",
  "keyword": "And "
});
formatter.match({
  "location": "mainStep.clickCloseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "cartStep.clickCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All product will be removed from the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "cartStep.validateCartIsEmpty()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to verify object \u0027Object Repository/03. CRT-Cart/CRT_button_Add To cart General\u0027 is present\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.verifyElementPresent(VerifyElementPresentKeyword.groovy:92)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.execute(VerifyElementPresentKeyword.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementPresent(WebUiBuiltInKeywords.groovy:1464)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementPresent$3.call(Unknown Source)\n\tat pages.cartPage.validationAddToCartIsDisplayed(cartPage.groovy:87)\n\tat pages.cartPage$validationAddToCartIsDisplayed$9.call(Unknown Source)\n\tat stepdefs.cartStep.validateCartIsEmpty(cartStep.groovy:34)\n\tat ✽.All product will be removed from the cart(Include/features/06. Sidebar.feature:26)\nCaused by: com.kms.katalon.core.exception.StepFailedException: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/03. CRT-Cart/CRT_button_Add To cart General\u0027 located by \u0027//*[contains(text(), \u0027Add to cart\u0027)]\u0027 not found\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword$_verifyElementPresent_closure1.doCall(VerifyElementPresentKeyword.groovy:85)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword$_verifyElementPresent_closure1.call(VerifyElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.verifyElementPresent(VerifyElementPresentKeyword.groovy:92)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.execute(VerifyElementPresentKeyword.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementPresent(WebUiBuiltInKeywords.groovy:1464)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementPresent$3.call(Unknown Source)\n\tat pages.cartPage.validationAddToCartIsDisplayed(cartPage.groovy:87)\n\tat pages.cartPage$validationAddToCartIsDisplayed$9.call(Unknown Source)\n\tat stepdefs.cartStep.validateCartIsEmpty(cartStep.groovy:34)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat runnerExtent.run(runnerExtent:21)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\n\tat TempTestCase1704111900706.run(TempTestCase1704111900706.groovy:25)\n",
  "status": "failed"
});
formatter.uri("Include/features/07. Filter.feature");
formatter.feature({
  "name": "Filter Application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FLT"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Successfully apply various filter to sort the products",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.step({
  "name": "Select Filter \"\u003cfilterOptions\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The products will be shown based on user filter choices \"\u003cfilterOptions\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "filterOptions"
      ]
    },
    {
      "cells": [
        "Name A to Z"
      ]
    },
    {
      "cells": [
        "Name Z to A"
      ]
    },
    {
      "cells": [
        "Price (low to high)"
      ]
    },
    {
      "cells": [
        "Price (high to low)"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successfully apply various filter to sort the products",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLT"
    }
  ]
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Filter \"Name A to Z\"",
  "keyword": "When "
});
formatter.match({
  "location": "mainStep.selectFilter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The products will be shown based on user filter choices \"Name A to Z\"",
  "keyword": "Then "
});
formatter.match({
  "location": "mainStep.validateProductAppear(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully apply various filter to sort the products",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLT"
    }
  ]
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Filter \"Name Z to A\"",
  "keyword": "When "
});
formatter.match({
  "location": "mainStep.selectFilter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The products will be shown based on user filter choices \"Name Z to A\"",
  "keyword": "Then "
});
formatter.match({
  "location": "mainStep.validateProductAppear(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully apply various filter to sort the products",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLT"
    }
  ]
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Filter \"Price (low to high)\"",
  "keyword": "When "
});
formatter.match({
  "location": "mainStep.selectFilter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The products will be shown based on user filter choices \"Price (low to high)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "mainStep.validateProductAppear(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully apply various filter to sort the products",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLT"
    }
  ]
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Filter \"Price (high to low)\"",
  "keyword": "When "
});
formatter.match({
  "location": "mainStep.selectFilter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The products will be shown based on user filter choices \"Price (high to low)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "mainStep.validateProductAppear(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/08. Footer.feature");
formatter.feature({
  "name": "Footer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FT0"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Successfully redirected to the company\u0027s account",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Click \"\u003caccount\u003e\" on footer",
  "keyword": "When "
});
formatter.step({
  "name": "User will be directed to the \"\u003caccount\u003e\" account",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "account"
      ]
    },
    {
      "cells": [
        "Twitter"
      ]
    },
    {
      "cells": [
        "Facebook"
      ]
    },
    {
      "cells": [
        "Linkedin"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully redirected to the company\u0027s account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FT0"
    }
  ]
});
formatter.step({
  "name": "Click \"Twitter\" on footer",
  "keyword": "When "
});
formatter.match({
  "location": "mainStep.clickFooterButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will be directed to the \"Twitter\" account",
  "keyword": "Then "
});
formatter.match({
  "location": "mainStep.validateFooterNavigates(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully redirected to the company\u0027s account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FT0"
    }
  ]
});
formatter.step({
  "name": "Click \"Facebook\" on footer",
  "keyword": "When "
});
formatter.match({
  "location": "mainStep.clickFooterButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will be directed to the \"Facebook\" account",
  "keyword": "Then "
});
formatter.match({
  "location": "mainStep.validateFooterNavigates(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStep.userAlreadyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully redirected to the company\u0027s account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FT0"
    }
  ]
});
formatter.step({
  "name": "Click \"Linkedin\" on footer",
  "keyword": "When "
});
formatter.match({
  "location": "mainStep.clickFooterButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will be directed to the \"Linkedin\" account",
  "keyword": "Then "
});
formatter.match({
  "location": "mainStep.validateFooterNavigates(String)"
});
formatter.result({
  "status": "passed"
});
});