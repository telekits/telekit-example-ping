/**
 * The example of bot that built with telkit;
 *
 * @module telekit-example-ping
 * @author Denis Maslennikov <mrdenniska@gmail.com> (nofach.com)
 * @license MIT
 */

/** Dependencies */
const telekit = require('telekit');
const config = require('./config.js');

/** Implementation */
telekit(config).on('message', (context) => {
    if (context.update.text) {
        if (context.update.text.indexOf('/ping') > -1) {
            context.chat.sendMessage({
                text: '/pong',
            });
        }

        if (context.update.text.indexOf('/pong') > -1) {
            context.chat.sendMessage({
                text: '/ping',
            });
        }

        if (context.update.text.indexOf('/help') > -1) {
            context.chat.sendMessage({
                text: 'Source code on [github](https://github.com/telekits/telekit-example-ping) 😊',
                parse_mode: 'markdown',
            });
        }
    }
});
