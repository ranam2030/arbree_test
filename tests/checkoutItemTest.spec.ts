import { test, expect } from "../fixtures/pomFixtures";
import { loginUrl, credentials } from "../utils/config";
import { userInfo } from "../utils/testData";

test.describe("Checkout Flow", () => {
    test.beforeEach(async ({ page, LoginPage }) => {
        await page.goto(loginUrl);
        await LoginPage.login(credentials.username, credentials.password);
    });

    test("should complete checkout and confirm order", async ({ ProductPage, YourCartPage, CheckoutPage }) => {
        let productItemText: string | null;

        await test.step("Add item to cart", async () => {
            await ProductPage.addToCart();
            productItemText = await ProductPage.getTheiTemTextinProduct();
        });

        await test.step("Verify cart item matches product", async () => {
            await ProductPage.cart();
            const cartItemText = await YourCartPage.getTheiTemTextinCart();
            expect(productItemText).toBe(cartItemText);
        });

        await test.step("Fill in checkout information", async () => {
            await YourCartPage.clickCheckoutBtn();
            await CheckoutPage.inputYourInfo(userInfo.firstName, userInfo.lastName, userInfo.zipCode);
            await CheckoutPage.clickContinueBtn();
        });

        await test.step("Confirm order", async () => {
            await CheckoutPage.clickFinishBtn();
            const confirmationText = await CheckoutPage.finish();
            expect(confirmationText).toBe("Thank you for your order!");
        });
    });
});
