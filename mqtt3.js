var mqtt = require('mqtt');
var topic ='sjoerdMessage'
var client = mqtt.connect('mqtt://broker.mqtt-dashboard.com');

client.on('connect', ()=> {
    client.subscribe(topic);
})

client.on('message', (topic, message)=>{
    message = message.toString()
    console.log(message);
})