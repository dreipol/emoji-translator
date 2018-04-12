import buble from 'rollup-plugin-buble';

export default {
    input: 'index.next.js',
    name: 'emojiTranslator',
    plugins: [
        buble(),
    ],
    output: [
        {
            file: 'dist/umd.emoji-translator.js',
            format: 'umd',
        },
        {
            file: 'dist/cjs.emoji-translator.js',
            format: 'cjs',
        },
    ],
};
