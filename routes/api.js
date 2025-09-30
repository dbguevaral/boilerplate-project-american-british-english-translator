'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const {locale, text} = req.body;
      const cleanText = text ? text.trim() : ''; 
      let translated;

      if (text === '') 
        return res.json({ error: 'No text to translate' });

      if (!locale || text == undefined) 
        return res.json({ error: 'Required field(s) missing' });

      if (locale !== 'american-to-british' && locale !== 'british-to-american') 
        return res.json({ error: 'Invalid value for locale field' });

      if (locale === 'american-to-british') {
        translated = translator.americanToBritish(cleanText);
        
        if (translated === cleanText || !translated)
          return res.json({ text: cleanText, translation: "Everything looks good to me!"});
      }

      else if (locale === 'british-to-american') {
        translated = translator.britishToAmerican(cleanText);

        if (translated === cleanText || !translated)
          return res.json({ text: cleanText, translation: "Everything looks good to me!"});
      }
      
      return res.json({ text: cleanText, translation: translated });

    });
};