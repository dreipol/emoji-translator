import buble from 'rollup-plugin-buble';

export default {
    input: 'index.next.js',
    name: 'emojiTranslator',
    plugins: [
        buble(),
    ],
    output: [
        {
            file: 'emoji-translator.js',
            format: 'umd',
        },
    ],
};
