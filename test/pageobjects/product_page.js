const Page = require('./page');

class ProductPage extends Page {

    get titleProduct () {
        return $('h1[class*="product-details-product-title"]');
    }

    get addToCartButton () {
        return $('#AddToCart');
    }

    get quantity () {
        return $('#Quantity');
    }

    get cartContainer () {
        return $('#CartContainer');
    }

    get titleFirstProductinCart () {
        return this.cartContainer.$('a[class*="ajaxcart__product-name"]')
    }

    get removeFirstItem () {
        return this.cartContainer.$('button[class*="ajaxcart__qty-remove"]')
        //return this.cartContainer.$('//button[contains(@class,"ajaxcart__qty-remove")]');

    }

    get emptyCard () {
        return this.cartContainer.$('p[class*="empty-cart"]')
    }

    async AddItamToCart (name) {
        await this.addToCartButton.click();
        await expect(this.cartContainer).toBeExisting();
        let actual_name = await this.titleFirstProductinCart.getHTML(false);
        expect(actual_name).toEqual(name);
    }
 
    async CheckCartIsEmpty () {
        await expect(this.emptyCard).toHaveText('Your cart is currently empty.');
    }

//     async RemoveItamFromCart () {
//         await this.removeFirstItem.isClickable();
//         await this.removeFirstItem.click();
//     }
// }
module.exports = new ProductPage();