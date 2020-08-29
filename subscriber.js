const redis = require('redis');
const subscriber = redis.createClient();

subscriber.on('message', function (channel, message) {
    console.log('Channel: ' + channel);
    console.log('Message: ' + message);
});

subscriber.subscribe('Notifications');