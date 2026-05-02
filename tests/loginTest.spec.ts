import { test, expect } from "../fixtures/pomFixtures";
import { loginUrl } from "../utils/config";

test.describe("Login Validation", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(loginUrl);
    });

    test("should show error message for invalid credentials", async ({ LoginPage }) => {
        await test.step("Attempt login with wrong password", async () => {
            await LoginPage.login("standard_user", "wrong_password");
        });

        await test.step("Verify error message is displayed", async () => {
            const errorMessage = await LoginPage.getErrorMessage();
            expect(errorMessage).toContain("Username and password do not match any user in this service");
        });
    });

    test("should show error message for locked out user", async ({ LoginPage }) => {
        await test.step("Attempt login with locked out user", async () => {
            await LoginPage.login("locked_out_user", "secret_sauce");
        });

        await test.step("Verify locked out error message is displayed", async () => {
            const errorMessage = await LoginPage.getErrorMessage();
            expect(errorMessage).toContain("Sorry, this user has been locked out");
        });
    });
});
