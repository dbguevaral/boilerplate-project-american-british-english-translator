const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    const stripTags = str => str.replace(/<[^>]+>/g, '');

    //Test #1
    test("Translation with text and locale fields: POST request to /api/translate", (done) => {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({
                text: 'Mangoes are my favorite fruit.',
                locale: 'american-to-british'
            })
            .end((err, res) => {
                assert.equal(stripTags(res.body.translation), "Mangoes are my favourite fruit.");
                done();
            });
    });

    //Test #2
    test("Translation with text and invalid locale field: POST request to /api/translate", (done) => {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({
                text: '1323'
            })
            .end((err, res) => {
                assert.equal(res.body.error, 'Required field(s) missing');
                done();
            });
    });

    //Test #3
    test("Translation with missing text field: POST request to /api/translate", (done) => {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({
                locale: 'american-to-british'
            })
            .end((err, res) => {
                assert.equal(stripTags(res.body.error), "Required field(s) missing");
                done();
            });
    });

    //Test #4
    test("Translation with missing locale field: POST request to /api/translate", (done) => {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({
                text: 'Ahua!'
            })
            .end((err, res) => {
                assert.equal(stripTags(res.body.error), "Required field(s) missing");
                done();
            });
    });

    //Test #5
    test("Translation with missing text field: POST request to /api/translate", (done) => {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({
                text: '',
                locale: 'american-to-british'
            })
            .end((err, res) => {
                assert.equal(stripTags(res.body.error), "No text to translate");
                done();
            });
    });

    //Test #6
    test("Translation with missing text field: POST request to /api/translate", (done) => {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({
                text: 'Hello',
                locale: 'american-to-british'
            })
            .end((err, res) => {
                assert.equal(stripTags(res.body.translation), "Everything looks good to me!");
                done();
            });
    });


});
