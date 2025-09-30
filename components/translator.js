const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    americanToBritish (text) {
        const words = text.split(/\s+/);
        const regex = /^[0-9]*:[0-9]*$/;
        const capitalizeFirst = str => str.charAt(0).toUpperCase() + str.slice(1);
        const sentence = words.map(word => {
            for (const obj of [americanOnly, americanToBritishSpelling, americanToBritishTitles]) {
                const entry = Object.entries(obj).find(([key, _]) => key === word.toLowerCase());   
                if (entry) {
                    if (obj === americanToBritishTitles) return `<span class="highlight">${capitalizeFirst(entry[1])}</span>`
                    return `<span class="highlight">${entry[1]}</span>`
                }
            }

            if (regex.test(word)) return `<span class="highlight">${word.replace(':', '.')}</span>`
            return word;
        })
        return sentence.join(' ');
    }

    britishToAmerican (text) {
        const words = text.split(/\s+/);
        const regex = /^[0-9]*\.[0-9]*$/;
        const capitalizeFirst = str => str.charAt(0).toUpperCase() + str.slice(1);
        const sentence = words.map(word => {
            const britishInverted = Object.fromEntries(Object.entries(britishOnly).map(([key, value]) => [value, key]));
            for (const obj of [britishInverted, americanToBritishSpelling, americanToBritishTitles]) {
                const entry = Object.entries(obj).find(([key, value]) => value === word.toLowerCase());
                if (entry) {
                    if (obj === americanToBritishTitles) return `<span class="highlight">${capitalizeFirst(entry[0])}</span>`
                    return `<span class="highlight">${entry[0]}</span>`
                }
            }
            
            if (regex.test(word)) return `<span class="highlight">${word.replace('.', ':')}</span>`
            return word;
        })
        return sentence.join(' ');
    }
}

module.exports = Translator;