module.exports = {
    token: process.env.BOT_TOKEN || '',
    polling: {
        allowed_updates: ['message'],
        timeout: 30,
    },
};
