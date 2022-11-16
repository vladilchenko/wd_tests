const Page = require('./page');

class DashboardPage extends Page {
    get mainMenu () {
        return $('button[aria-label="open menu to see more links"]');
    }

    get dropDownMainMenu () {
        return $('#js-more-nav');
    }

    get merchMenu() {
        return this.dropDownMainMenu.$('//li[contains(.,"Merch")]')
    }

    get username () {
        return $('#buzz-content');
    }

    get accountMenu () {
        //return $('//div[contains(@class,"bellContainer")]');
        return $('div[class*="bellContainer"]');
    }

    get dropDownMenu () {
        return $('#js-user-menu');
    }

    get menuNewPost() {
        return this.dropDownMenu.$('//li[contains(.,"New Post")]')
    }

    get menuMyDraft() {
        return this.dropDownMenu.$('//li[contains(.,"My Drafts")]')
    }

    get menuDashboard() {
        return this.dropDownMenu.$('//li[contains(.,"Dashboard")]')
    }

    get menulogOut() {
        return this.dropDownMenu.$('//li[contains(.,"Log Out")]')
    }


    async checkUsername (name) {
        await expect(this.username).toHaveText(name);
    }

    async checkMenu () {
        await expect(this.menuNewPost).toBeExisting();
        await expect(this.menuMyDraft).toBeExisting();
        await expect(this.menuDashboard).toBeExisting();
        await expect(this.menulogOut).toBeExisting();
    }

    async openShop () {
        await this.mainMenu.click();
        await expect(this.merchMenu).toBeExisting();
        await this.merchMenu.click();
    }


}
module.exports = new DashboardPage();