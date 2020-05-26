var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://broker.mqtt-dashboard.com')
var topic = 'sjoerdMessage'

client.on('message', (topic, message)=>{
    message = message.toString()
    console.log(message);
})

client.on('connect', ()=> {
    client.subscribe(topic);
})

document.getElementById("waterverbruik").innerHTML = 5 + 6;


