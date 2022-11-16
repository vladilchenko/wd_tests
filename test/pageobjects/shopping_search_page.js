const Page = require('./page');

class ShopSearchPage extends Page {
    openShop() {
        return super.openShop('search');
    }

    get searchResult () {
            return $('div[class*="collection-main-body-inner"]');
    }

    get searchResultCount () {
        return $('//span[contains(@class,"usf-sr-summary")]');
    }

    get searchInputField () {
        return $('input[aria-label="Search our store"]');
    }

    get firstItaminTheList () {
        return $('#collection-grid');
    }

    async AllItemsinSearch (num) {
        await expect(this.searchResultCount).toBeExisting();
        await expect(this.searchResultCount).toHaveText(`${num} products`)
    }

    async ItemsinSearch (num) {
        await expect(this.searchResultCount).toBeExisting();
        await expect(this.searchResultCount).toHaveTextContaining(`${num} results for`)
    }

    async SerchRequest (product_name) {
        await this.searchInputField.setValue(product_name);
        await browser.keys(['Enter'])
        await browser.pause(2000);
    }

    async OpenFirstItam () {
        await this.firstItaminTheList.click();
        await browser.pause(2000);
    }

}
module.exports = new ShopSearchPage();