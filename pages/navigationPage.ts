import { Locator, Page } from "@playwright/test";

export class navigationPage {
    private readonly page: Page;
    private readonly burgerMenuBtn: Locator;
    private readonly logoutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.burgerMenuBtn = page.locator('#react-burger-menu-btn');
        this.logoutLink = page.locator('#logout_sidebar_link');
    }

    async logout() {
        await this.burgerMenuBtn.click();
        await this.logoutLink.click();
    }

    async getCurrentUrl(): Promise<string> {
        return this.page.url();
    }
}
