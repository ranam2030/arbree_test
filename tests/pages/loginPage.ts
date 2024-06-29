import { Locator, Page} from "@playwright/test";

export class loginPage{
    private readonly page:Page;
    private readonly userNameInput:Locator;
    private readonly passwordInput:Locator;
    private readonly loginBtn:Locator;

    constructor(page:Page){
        this.userNameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginBtn = page.locator('#login-button');
    }
    async login(username:string,password:string){
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }
}