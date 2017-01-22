/**
 * The example of bot that built with telekit;
 *
 * @module telekit-example-ping
 * @author Denis Maslennikov <mrdenniska@gmail.com> (nofach.com)
 * @license MIT
 */

/** Dependencies */
const telekit = require('telekit');
const $cmd = require('telekit-cmd');

const config = require('./config.js');

/** Implementation */
let bot = telekit(config);
bot.use($cmd);
bot.on('/ping', (context) => {
    context.chat.sendMessage({
        text: '/pong',
    });
}).on('/pong', (context) => {
    context.chat.sendMessage({
        text: '/ping',
    });
}).on('/help', (context) => {
    context.chat.sendMessage({
        text: 'Source code on [github](https://github.com/telekits/telekit-example-ping) 😊',
        parse_mode: 'markdown',
    });
});
