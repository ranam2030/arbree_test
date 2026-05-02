import { test, expect } from "../fixtures/pomFixtures";
import { loginUrl, credentials } from "../utils/config";

test.describe("Cart Management", () => {
    test.beforeEach(async ({ page, LoginPage }) => {
        await page.goto(loginUrl);
        await LoginPage.login(credentials.username, credentials.password);
    });

    test("should update cart badge count when item is added", async ({ ProductPage }) => {
        await test.step("Verify cart badge is not visible before adding any item", async () => {
            const isBadgeVisible = await ProductPage.isCartBadgeVisible();
            expect(isBadgeVisible).toBe(false);
        });

        await test.step("Add one item to cart", async () => {
            await ProductPage.addToCart();
        });

        await test.step("Verify cart badge shows count of 1", async () => {
            const badgeCount = await ProductPage.getCartBadgeCount();
            expect(badgeCount).toBe("1");
        });
    });

    test("should remove item from cart and clear the cart badge", async ({ ProductPage, YourCartPage }) => {
        await test.step("Add item to cart", async () => {
            await ProductPage.addToCart();
        });

        await test.step("Navigate to cart", async () => {
            await ProductPage.cart();
        });

        await test.step("Verify item is in the cart", async () => {
            const itemCount = await YourCartPage.getCartItemCount();
            expect(itemCount).toBe(1);
        });

        await test.step("Remove item from cart", async () => {
            await YourCartPage.removeItem();
        });

        await test.step("Verify cart is empty and badge is gone", async () => {
            const itemCount = await YourCartPage.getCartItemCount();
            expect(itemCount).toBe(0);
            const isBadgeVisible = await YourCartPage.isCartBadgeVisible();
            expect(isBadgeVisible).toBe(false);
        });
    });
});
