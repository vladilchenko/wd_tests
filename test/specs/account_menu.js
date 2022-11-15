const LoginPage = require('../pageobjects/login.page');
const DashboardPage = require('../pageobjects/dashboard');

describe('Account menu', () => {
    it('check menu items', async () => {
        LoginPage.open();
        await LoginPage.login('kirnybob@gmail.com', 'BuzzFeed123!');
        await DashboardPage.checkUsername('autonya');
        await DashboardPage.accountMenu.click();
        await DashboardPage.checkMenu();
    });
});


