import { Locator, Page} from "@playwright/test";

export class checkoutPage{
    private readonly page:Page;
    private readonly firstName:Locator;
    private readonly lastName:Locator;
    private readonly zipCode:Locator;
    private readonly continueBtn:Locator;
    private readonly finishBtn:Locator;
    private readonly thankYouText:Locator;

    constructor(page:Page){
       this.firstName = page.locator('#first-name');
       this.lastName = page.locator('#last-name');
       this.zipCode = page.locator('#postal-code');
       this.continueBtn = page.locator('.cart_button');
       this.finishBtn = page.locator('.cart_button');
       this.thankYouText = page.locator('.complete-header');
    }

    async inputYourInfo(firstName:string,lastName:string,zipCode:string){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.zipCode.fill(zipCode);
    }
    async clickContinueBtn(){
        await this.continueBtn.click();
    }
    async clickFinishBtn(){
        await this.continueBtn.click();
    }
    async finish(){
        return await this.thankYouText.textContent();
    }
    
  
}