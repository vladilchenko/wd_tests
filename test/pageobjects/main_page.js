const Page = require('./page');

class MainPage extends Page {
    get quizzesTab () {
        return $('//nav//a[contains(text(),"Quizzes")]');
    }

    open() {
        return super.open("ca");
    }

    async open_quizzes_tab () {
        await this.quizzesTab.click();
    }
}
module.exports = new MainPage();