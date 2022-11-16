const LoginPage = require('../pageobjects/login.page');
const DashboardPage = require('../pageobjects/dashboard');
const ShoppingPage = require('../pageobjects/shopping_page');
const ShopSearchPage = require('../pageobjects/shopping_search_page');
const ProductPage = require('../pageobjects/product_page');

describe('Shopping page', () => {
    it('should open shopping page', async () => {
        LoginPage.open( );
        await LoginPage.login('kirnybob@gmail.com', 'BuzzFeed123!');
        await DashboardPage.openShop();
  
    });

    it('serch item via search icon in top menu', async () => {
        ShoppingPage.openShop();
        await ShoppingPage.SerchInRightTabBar('bag');
        await expect(ShoppingPage.searchResult).toBeExisting();
        
    });

    it('serch item via search page', async () => {
        ShopSearchPage.openShop();
        await expect(ShopSearchPage.searchResult).toBeExisting();
        await ShopSearchPage.AllItemsinSearch('534');
        await ShopSearchPage.SerchRequest('bag');
        await ShopSearchPage.ItemsinSearch('18');

    });

   it('add item to the cart', async () => {
       await ShopSearchPage.OpenFirstItam();
       await expect(ProductPage.quantity).toHaveAttr('value', '1')
       let expected_name = await ProductPage.titleProduct.getText();
       await ProductPage.AddItamToCart(expected_name)
    });

   it('remove item from the cart', async () => {
      await ProductPage.RemoveItamFromCart();
      await ProductPage.CheckCartIsEmpty();
    });
});