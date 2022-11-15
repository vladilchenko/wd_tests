const Page = require('./page');

class DashboardPage extends Page {
    get username () {
        return $('#buzz-content');
    }

    async checkUsername (name) {
        await expect(this.username).toHaveText(name);
    }
}
module.exports = new DashboardPage();