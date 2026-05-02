import { test, expect } from "../fixtures/pomFixtures";
import { loginUrl, credentials } from "../utils/config";

test.describe("Product Sort", () => {
    test.beforeEach(async ({ page, LoginPage }) => {
        await page.goto(loginUrl);
        await LoginPage.login(credentials.username, credentials.password);
    });

    test("should sort products by name A to Z", async ({ ProductPage }) => {
        await test.step("Apply sort: Name (A to Z)", async () => {
            await ProductPage.sortBy('az');
        });

        await test.step("Verify products are in ascending alphabetical order", async () => {
            const names = await ProductPage.getProductNames();
            expect(names).toEqual([...names].sort());
        });
    });

    test("should sort products by name Z to A", async ({ ProductPage }) => {
        await test.step("Apply sort: Name (Z to A)", async () => {
            await ProductPage.sortBy('za');
        });

        await test.step("Verify products are in descending alphabetical order", async () => {
            const names = await ProductPage.getProductNames();
            expect(names).toEqual([...names].sort().reverse());
        });
    });

    test("should sort products by price low to high", async ({ ProductPage }) => {
        await test.step("Apply sort: Price (low to high)", async () => {
            await ProductPage.sortBy('lohi');
        });

        await test.step("Verify prices are in ascending order", async () => {
            const prices = await ProductPage.getProductPrices();
            expect(prices).toEqual([...prices].sort((a, b) => a - b));
        });
    });

    test("should sort products by price high to low", async ({ ProductPage }) => {
        await test.step("Apply sort: Price (high to low)", async () => {
            await ProductPage.sortBy('hilo');
        });

        await test.step("Verify prices are in descending order", async () => {
            const prices = await ProductPage.getProductPrices();
            expect(prices).toEqual([...prices].sort((a, b) => b - a));
        });
    });
});
