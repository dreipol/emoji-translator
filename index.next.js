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
export default function create(vocabulary) {
    if (!vocabulary) {
        throw new Error('Please make sure to provide a valid object vocabulary');
    }

    const keys = Object.keys(vocabulary);

    if (!keys.length) {
        throw new Error('Your emoji vocabulary seems to be empty');
    }

    const regex = new RegExp(`${ keys.join('|') }`, 'g');

    return function translate(string) {
        return string.replace(regex, match => vocabulary[match]);
    };
}
