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

    test("should display products in Name A to Z order by default", async ({ ProductPage }) => {
        await test.step("Verify default sort is Name A to Z without applying any sort", async () => {
            const names = await ProductPage.getProductNames();
            expect(names).toEqual([...names].sort());
        });
    });

    test("should keep product count unchanged after each sort", async ({ ProductPage }) => {
        const initialCount = await ProductPage.getProductCount();

        for (const option of ['az', 'za', 'lohi', 'hilo'] as const) {
            await test.step(`Verify product count after sort: ${option}`, async () => {
                await ProductPage.sortBy(option);
                const count = await ProductPage.getProductCount();
                expect(count).toBe(initialCount);
            });
        }
    });

    test("should show cheapest product first after price low to high sort", async ({ ProductPage }) => {
        await test.step("Apply sort: Price (low to high)", async () => {
            await ProductPage.sortBy('lohi');
        });

        await test.step("Verify first product has the lowest price", async () => {
            const prices = await ProductPage.getProductPrices();
            expect(prices[0]).toBe(Math.min(...prices));
        });
    });

    test("should show most expensive product first after price high to low sort", async ({ ProductPage }) => {
        await test.step("Apply sort: Price (high to low)", async () => {
            await ProductPage.sortBy('hilo');
        });

        await test.step("Verify first product has the highest price", async () => {
            const prices = await ProductPage.getProductPrices();
            expect(prices[0]).toBe(Math.max(...prices));
        });
    });

    test("should have exactly 4 options in the sort dropdown", async ({ ProductPage }) => {
        await test.step("Verify sort dropdown contains all 4 expected options", async () => {
            const options = await ProductPage.getSortOptions();
            expect(options).toHaveLength(4);
            expect(options).toEqual([
                'Name (A to Z)',
                'Name (Z to A)',
                'Price (low to high)',
                'Price (high to low)',
            ]);
        });
    });
});
