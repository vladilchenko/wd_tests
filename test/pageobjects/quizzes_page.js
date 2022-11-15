const Page = require('./page');

class QuizzePage extends Page {
    get quiz_cat_filter () {
        return $('//ul[@aria-label="quizzes filter"]');
    }

    get quiz_cat_marvel() {
        return this.quiz_cat_filter.$('//li[contains(.,"Marvel")]')

    }
    open() {
        return super.open('ca/quizzes');
    }

    async check_marvel_cat () {
        await expect(this.quiz_cat_marvel).toBeExisting();

    }
}
module.exports = new QuizzePage();