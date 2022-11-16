const Page = require('./page');

class ShoppingPage extends Page {
    openShop() {
        return super.openShop('');
    }

    get searchIcon () {
        return $('a[class*="search-button"]');
    }

    get searchField () {
        return $('#SearchContainer');
    } 

    get searchInputField () {
        return $('#search-input');
    }

    get searchResult () {
            return $('div[class*="collection-main-body-inner"]');
    }

    get searchResultCount () {
        return $('div[class*="usf-sr-summary"]');
    }

    get merchMenu() {
        return this.dropDownMainMenu.$('//b[contains(.,"Merch")]')
    }

    async SerchInRightTabBar (product_name) {
        await this.searchIcon.click()
        await expect(this.searchField).toBeExisting();
        await this.searchInputField.setValue(product_name);
        await browser.keys(['Enter'])
    }

    
}
module.exports = new ShoppingPage();