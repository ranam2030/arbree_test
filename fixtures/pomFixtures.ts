import {test as baseTest} from '@playwright/test';
import { loginPage } from "../pages/loginPage";
import { productPage} from "../pages/productsPage";
import { yourcartPage } from "../pages/yourCart";
import { checkoutPage } from '../pages/checkoutPage';
import { navigationPage } from '../pages/navigationPage';

type pages = {
    LoginPage: loginPage,
    ProductPage:productPage,
    YourCartPage:yourcartPage,
    CheckoutPage:checkoutPage,
    NavigationPage:navigationPage,
}

const testPages = baseTest.extend<pages>({
    LoginPage: async({page}, use)=>{
        await use(new loginPage(page));
    },
    ProductPage: async({page},use)=>{
        await use(new productPage(page));
    },
    YourCartPage: async({page},use)=>{
        await use(new yourcartPage(page));
    },
    CheckoutPage: async({page},use)=>{
        await use(new checkoutPage(page));
    },
    NavigationPage: async({page},use)=>{
        await use(new navigationPage(page));
    },
})

export const test = testPages;
export const expect = testPages.expect;