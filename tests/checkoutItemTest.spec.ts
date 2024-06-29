import {test, expect} from "../fixtures/pomFixtures";
import {loginUrl} from "../config";
import { describe } from "node:test";
describe('Test Suit',async()=>{
    test('Test Secenerio One -P1',async({ page,LoginPage,ProductPage,YourCartPage,CheckoutPage })=>{
        await page.goto(loginUrl);
        await LoginPage.login("standard_user","secret_sauce");
        await ProductPage.addToCart();
        await ProductPage.cart();
        const actualText = await ProductPage.getTheiTemTextinProduct();
        const expectedText = await YourCartPage.getTheiTemTextinCart();
        expect(actualText).toBe(expectedText);
        await YourCartPage.clickCheckoutBtn();
        await CheckoutPage.inputYourInfo("Yy","tt","1212");
        await CheckoutPage.clickContinueBtn();
        await CheckoutPage.clickFinishBtn();
        const actualText1 = await CheckoutPage.finish();
        expect(actualText1).toBe("THANK YOU FOR YOUR ORDER");
        await page.close();
    })
})