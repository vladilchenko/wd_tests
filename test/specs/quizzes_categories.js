const QuizzePage = require('../pageobjects/quizzes_page');


describe ( 'Quizzes', () => {
    it('should read Marvel in popular categories', async () =>{
        await QuizzePage.open();

        await QuizzePage.check_marvel_cat();
    } );
});