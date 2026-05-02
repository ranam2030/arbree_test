import { Locator, Page} from "@playwright/test";

export type SortOption = 'az' | 'za' | 'lohi' | 'hilo';

export class productPage{
    private readonly page:Page;
    private readonly sauceLabsBackpackText:Locator;
    private readonly AddToCart:Locator;
    private readonly Cart:Locator;
    private readonly sortDropdown:Locator;
    private readonly sortOptions:Locator;
    private readonly productItems:Locator;
    private readonly productNames:Locator;
    private readonly productPrices:Locator;

    constructor(page:Page){
        this.page = page;
        this.sauceLabsBackpackText = page.locator('a#item_4_title_link > div.inventory_item_name');
        this.AddToCart = page.locator('button.btn_primary.btn_inventory').first();
        this.Cart = page.locator('#shopping_cart_container');
        this.sortDropdown = page.locator('.product_sort_container');
        this.sortOptions = page.locator('.product_sort_container option');
        this.productItems = page.locator('.inventory_item');
        this.productNames = page.locator('.inventory_item_name');
        this.productPrices = page.locator('.inventory_item_price');
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
    async sortBy(option: SortOption){
        await this.sortDropdown.selectOption(option);
    }
    async getProductNames(): Promise<string[]>{
        return await this.productNames.allTextContents();
    }
    async getProductPrices(): Promise<number[]>{
        const texts = await this.productPrices.allTextContents();
        return texts.map(t => parseFloat(t.replace('$', '')));
    }
    async getProductCount(): Promise<number>{
        return await this.productItems.count();
    }
    async getSortOptions(): Promise<string[]>{
        return await this.sortOptions.allTextContents();
    }
}