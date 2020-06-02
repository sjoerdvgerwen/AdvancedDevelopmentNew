// MQTT Pub
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://Localhost:1234')
var topic = 'sjoerdMessage'
var message = "Huidig waterverbruik"

client.on('connect',()=>{
    setInterval(()=> {
        client.publish(topic, message)
        console.log('Bericht verzonden', message);
    }, 1000)
})



