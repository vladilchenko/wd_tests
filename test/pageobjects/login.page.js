

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    open() {
        return super.open("");
    }

    get inputUsername () {
        return $('#input_identifier');
    }

    get inputPassword () {
        return $('#input_password');
    }

    get btnSubmit () {
        return $('#signin');
    }


    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }


    open () {
        return super.open('auth/signin');
    }
}

module.exports = new LoginPage();
