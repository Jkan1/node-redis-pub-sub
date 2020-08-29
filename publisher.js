const redis = require('redis');
const publisher = redis.createClient();

const message = { message: "Hey there!" };

publisher.publish('Notifications', JSON.stringify(message), function () {
    process.exit(0);
});