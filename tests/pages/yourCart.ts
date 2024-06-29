import { Locator, Page} from "@playwright/test";

export class yourcartPage{
    private readonly page:Page;
    private readonly sauceLabsBackpackText:Locator;
    private readonly checkoutBtn:Locator;

    constructor(page:Page){
        this.sauceLabsBackpackText = page.locator('.inventory_item_name');
        this.checkoutBtn = page.locator('.btn_action.checkout_button');
    }

    async getTheiTemTextinCart(){
        return await this.sauceLabsBackpackText.textContent();
    }
    async clickCheckoutBtn(){
        await this.checkoutBtn.click();
    }
}