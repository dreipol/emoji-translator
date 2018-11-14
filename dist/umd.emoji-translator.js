(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.emojiTranslator = factory());
}(this, (function () { 'use strict';

    /**
     * Create a translator function that can be used to replace the emoji
     * @param   { object } vocabulary - emoji vocabulary map
     * @return { function } the translation function converting strings containing emoji to plain text
     * @example
     * import translator from 'emoji-translator';
     *
     * const vocabulary = { '🍏': 'Apple', '🍋': 'Lemon', '🍌': 'Banana' };
     * const translate = translator(vocabulary)
     * const string = translate('A 🍌 is normally sweeter than an 🍏')
     *
     * console.log(string) // A Banana is normally sweeter than an Apple
     */
    function create(vocabulary) {
        if (!vocabulary) {
            throw new Error('Please make sure to provide a valid object vocabulary');
        }

        var keys = Object.keys(vocabulary);

        if (!keys.length) {
            throw new Error('Your emoji vocabulary seems to be empty');
        }

        var regex = new RegExp(("" + (keys.join('|'))), 'g');

        return function translate(string) {
            return string.replace(regex, function (match) { return vocabulary[match]; });
        };
    }

    return create;

})));
