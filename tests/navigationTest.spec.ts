import { test, expect } from "../fixtures/pomFixtures";
import { loginUrl, credentials } from "../utils/config";

test.describe("Navigation", () => {
    test.beforeEach(async ({ page, LoginPage }) => {
        await page.goto(loginUrl);
        await LoginPage.login(credentials.username, credentials.password);
    });

    test("should logout and redirect to login page", async ({ NavigationPage }) => {
        await test.step("Logout via burger menu", async () => {
            await NavigationPage.logout();
        });
    });
});
