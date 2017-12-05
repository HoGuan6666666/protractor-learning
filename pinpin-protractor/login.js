
//Jasmine describe statement : Describes the test
describe('APP LOGIN:', function() {
    //before Each :  This piece of code executes before all it statement
    beforeEach(function() {
        browser.get('https://www.pinpineat.com/#!/');
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
    });
    //Jasmine it statement : What "it" will do.
    it('Verify that the user is logged in', function() {
        //Delete all cookies
        browser.driver.manage().deleteAllCookies();
        //click login button
        element.all(by.xpath('//a[@href="#!/login"]')).click();
        //Enter UserName
        element(by.model('user.name')).sendKeys('hoggg@gmail.com');
        //Enter Password
        element(by.model('user.password')).sendKeys('123456');
        //Click Submit button
        element(by.xpath('//button[@type=\'submit\']')).click();

        //Jasmine expect statement : compare actual and expected value
        expect(browser.getCurrentUrl()).toEqual('https://www.pinpineat.com/#!/');

        //search restaurant by post code
        element(by.id('mapsearchInput')).sendKeys('H3H');
        element(by.id('mapsearchbtn')).click();

        //locate a restaurant
        var imgLoc = "//img[@ng-src=\"https://pinpinmarket.s3.amazonaws.com/i/shop63_%E9%AB%98%E8%80%81%E5%BA%84shop_image.png\"]";
        var imgOut = "//img[@ng-src=\"https://pinpinmarket.s3.amazonaws.com/i/shop88_shop68_thai_shop_image.png\"]";
        element(by.xpath(imgOut)).click();

        //switch driver to the new tab (loacted restaurant)
        browser.getAllWindowHandles().then(function (handles) {
            newWindowHandle = handles[1]; // this is your new window
            browser.switchTo().window(newWindowHandle).then(function () {
                expect(browser.getCurrentUrl()).toEqual('https://www.pinpineat.com/#!/shop');
            });
        });

        //add a dish to the shop cart
        element(by.css('span.glyphicon.glyphicon-plus')).click();
        element(by.css('span.glyphicon.glyphicon-plus')).click();
        element(by.css('span.glyphicon.glyphicon-plus')).click();
        element(by.css('span.glyphicon.glyphicon-plus')).click();
        element(by.css('span.glyphicon.glyphicon-plus')).click();
        element(by.css('span.glyphicon.glyphicon-plus')).click();
        element(by.css('span.glyphicon.glyphicon-plus')).click();
        element(by.css('span.glyphicon.glyphicon-plus')).click();
        //submit order
        element(by.css('[ng-click="submitcart()"]')).click();

        expect(browser.getCurrentUrl()).toEqual('https://www.pinpineat.com/#!/checkout');
        element(by.model('aptinput')).sendKeys("2302");
        element(by.model('streetinput')).sendKeys("1411 du Fort Street");
        element(by.model('cityinput')).sendKeys("Montreal");
        element(by.model('postalinput')).sendKeys("H3H2N7");
        element(by.model('postalinput')).sendKeys("H3H2N7");
        element(by.xpath("//button[@id=\"step1btn\"]")).click();

        element(by.model('fnameinput')).sendKeys('Ho');
        element(by.model('lnameinput')).sendKeys('GGG');
        element(by.model('phoneinput')).sendKeys('5149999999');
        element(by.model('emailinput')).sendKeys('hoggg@gmail.com');
        element(by.xpath("//button[@id=\"step2btn\"]")).click();

        var toggle = element(by.xpath('/html/body/div/div[1]/div/div[2]/div/div[3]/div[1]/h4/a'));
        toggle.getText().then(function (text) {
            expect(text =='3. PAYMENT');
            console.log('LOOK AT HERE!!!!!' + text);
        });
    });
});