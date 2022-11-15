const LoginPage = require('../pageobjects/login.page');
const DashboardPage = require('../pageobjects/dashboard');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        LoginPage.open('');
        await LoginPage.login('kirnybob@gmail.com', 'BuzzFeed123!');
        await DashboardPage.checkUsername('autonya');
    });
});


