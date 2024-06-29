import { Locator, Page} from "@playwright/test";

export class productPage{
    private readonly page:Page;
    private readonly sauceLabsBackpackText:Locator;
    private readonly AddToCart:Locator;
    private readonly Cart:Locator;

    constructor(page:Page){
        this.sauceLabsBackpackText = page.locator('a#item_4_title_link > div.inventory_item_name');
        this.AddToCart = page.locator('button.btn_primary.btn_inventory').first();
        this.Cart = page.locator('#shopping_cart_container');
    }

    async getTheiTemTextinProduct(){
        return await this.sauceLabsBackpackText.textContent();
    }
    async addToCart(){
        await this.AddToCart.click();
    }
    async cart(){
        await this.Cart.click();
    }
  
}