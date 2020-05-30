var options = {
    clientId: 'd45ec0d7-28c3-4b76-86db-31e8dc182b52',
    connectTimeout: 30000,
    hostname: 'broker.mqtt-dashboard.com',
    topic: 'sjoerdMessage',
    path: '/mqtt'
};

var mqtt = require('mqtt');

var client = mqtt.connect(options);

client.on('connect', function () {
    client.subscribe(topic);
});

client.on('message', function (topic, message) {
    console.log(message.toString());
});