const assert = require('assert');
const emojiTranslator = require('./');

/* eslint-disable max-nested-callbacks */

describe('emoji-translator', function() {
    const vocabulary = {
        '🍏': 'Apple',
        '🍋': 'Lemon',
        '🍌': 'Banana',
    };

    it('It should throw if no vocabulary will be provided', () => {
        assert.throws(() => emojiTranslator());
    });

    it('It should throw if an empty vocabulary will be provided', () => {
        assert.throws(() => emojiTranslator({}));
    });

    it('It replaces emojis having received a custom vocabulary', () => {
        const translate = emojiTranslator(vocabulary);

        assert.equal(translate('Hello 🍏'), 'Hello Apple');
    });
});
