import buble from 'rollup-plugin-buble';

export default {
    input: 'index.next.js',
    plugins: [
        buble(),
    ],
    output: [
        {
            file: 'dist/umd.emoji-translator.js',
            name: 'emojiTranslator',
            format: 'umd',
        },
        {
            file: 'dist/cjs.emoji-translator.js',
            format: 'cjs',
        },
    ],
};
