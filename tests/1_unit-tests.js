const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translate = new Translator;

suite('Unit Tests', () => {
    const stripTags = str => str.replace(/<[^>]+>/g, '');
    //Test #1
    test('Translate "Mangoes are my favorite fruit." to British English', () => {
        assert.deepEqual(stripTags(translate.americanToBritish("Mangoes are my favorite fruit.")), "Mangoes are my favourite fruit.")
    })

    //Test #2
    test('Translate "I ate yogurt for breakfast." to British English', () => {
        assert.deepEqual(stripTags(translate.americanToBritish("I ate yogurt for breakfast.")), "I ate yoghurt for breakfast.")
    })

    //Test #3
    test("Translate We had a party at my friend's condo. to British English", () => {
        assert.deepEqual(stripTags(translate.americanToBritish("We had a party at my friend's condo.")), "We had a party at my friend's condo.")
    })

    //Test #4
    test('Translate "Can you toss this in the trashcan for me?" to British English', () => {
        assert.deepEqual(stripTags(translate.americanToBritish("Can you toss this in the trashcan for me?")), "Can you toss this in the bin for me?")
    })

    //Test #5
    test('Translate "The parking lot was full." to British English', () => {
        assert.deepEqual(stripTags(translate.americanToBritish("The parking lot was full.")), "The parking lot was full.")
    })

    //Test #6
    test('Like a high tech Rube Goldberg machine." to British English', () => {
        assert.deepEqual(stripTags(translate.americanToBritish("Like a high tech Rube Goldberg machine.")), "Like a high tech Rube Goldberg machine.")
    })

    //Test #7
    test('Translate "To play hooky means to skip class or work." to British English', () => {
        assert.deepEqual(stripTags(translate.americanToBritish("To play hooky means to skip class or work.")), "To play hooky means to skip class or work.")
    })

    //Test #8
    test('Translate "No Mr. Bond, I expect you to die." to British English', () => {
        assert.deepEqual(stripTags(translate.americanToBritish("No Mr. Bond, I expect you to die.")), "No Mr Bond, I expect you to die.")
    })

    //Test #9
    test('Translate "Dr. Grosh will see you now." to British English', () => {
        assert.deepEqual(stripTags(translate.americanToBritish("Dr. Grosh will see you now.")), "Dr Grosh will see you now.")
    })

    //Test #10
    test('Translate "We watched the footie match for a while." to American English', () => {
        assert.deepEqual(stripTags(translate.britishToAmerican("We watched the footie match for a while.")), "We watched the soccer match for a while.")
    })

    //Test #11
    test('Translate "Paracetamol takes up to an hour to work." to American English', () => {
        assert.deepEqual(stripTags(translate.britishToAmerican("Paracetamol takes up to an hour to work.")), "Tylenol takes up to an hour to work.")
    })

    //Test #12
    test('Translate "First, caramelise the onions." to American English', () => {
        assert.deepEqual(stripTags(translate.britishToAmerican("First, caramelise the onions.")), "First, caramelize the onions.")
    })

    //Test #13
    test('Translate "I spent the bank holiday at the funfair." to American English', () => {
        assert.deepEqual(stripTags(translate.britishToAmerican("I spent the bank holiday at the funfair.")), "I spent the bank holiday at the funfair.")
    })

    //Test #14
    test('Translate "I had a bicky then went to the chippy." to American English', () => {
        assert.deepEqual(stripTags(translate.britishToAmerican("I had a bicky then went to the chippy.")), "I had a bicky then went to the chippy.")
    })

    //Test #15
    test('Translate "Ive just got bits and bobs in my bum bag." to American English', () => {
        assert.deepEqual(stripTags(translate.britishToAmerican("Ive just got bits and bobs in my bum bag.")), "Ive just got bits and bobs in my bum bag.")
    })

    //Test #16
    test('Translate "The car boot sale at Boxted Airfield was called off." to American English', () => {
        assert.deepEqual(stripTags(translate.britishToAmerican("The car boot sale at Boxted Airfield was called off.")), "The car boot sale at Boxted Airfield was called off.")
    })

    //Test #17
    test('Translate "Have you met Mrs Kalyani?" to American English', () => {
        assert.deepEqual(stripTags(translate.britishToAmerican("Have you met Mrs Kalyani?")), "Have you met Mrs. Kalyani?")
    })

    //Test #18
    test('Translate "Prof Joyner of Kings College, London." to American English', () => {
        assert.deepEqual(stripTags(translate.britishToAmerican("Prof Joyner of Kings College, London.")), "Prof. Joyner of Kings College, London.")
    })

    //Test #19
    test('Translate "Tea time is usually around 4 or 4.30." to American English', () => {
        assert.deepEqual(stripTags(translate.britishToAmerican("Tea time is usually around 4 or 4.30.")), "Tea time is usually around 4 or 4.30.")
    })

    //Test #20
    test('Translate "Mangoes are my favorite fruit." to British English', () => {
        assert.deepEqual(stripTags(translate.americanToBritish("Mangoes are my favorite fruit.")), "Mangoes are my favourite fruit.")
    })

    //Test #21
    test('Highlight translation in Mangoes are my favorite fruit.', () => {
        assert.deepEqual(translate.americanToBritish("Mangoes are my favorite fruit."), `Mangoes are my <span class="highlight">favourite</span> fruit.`)
    })

    //Test #22
    test('Highlight translation in I ate yogurt for breakfast.', () => {
        assert.deepEqual(translate.americanToBritish("I ate yogurt for breakfast."), `I ate <span class="highlight">yoghurt</span> for breakfast.`)
    })

    //Test #23
    test('Highlight translation in We watched the footie match for a while.', () => {
        assert.deepEqual(translate.britishToAmerican("We watched the footie match for a while."), `We watched the <span class="highlight">soccer</span> match for a while.`)
    })

    //Test #24
    test('Highlight translation in Paracetamol takes up to an hour to work.', () => {
        assert.deepEqual(translate.britishToAmerican("Paracetamol takes up to an hour to work."), `<span class="highlight">Tylenol</span> takes up to an hour to work.`)
    })

});
