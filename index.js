// const events = require("events");
// const eventEmitter = new events.EventEmitter();

// const eventHandler = () => {
//     console.log("I hear a scream");
// };


// eventEmitter.on("scream", eventHandler);
// eventEmitter.on("scream", eventHandler);

// eventEmitter.emit("scream");
// eventEmitter.emit("scream");

//EXAMPLE 2
const express = require('express');
const app = express();
const events = require('events');
const EventEmitter = new events();

let count = 0;
let homeAPICount = 0;
let aboutAPICount = 0;
let searchAPICount = 0;
const PORT = 3000;

EventEmitter.on("API called", () => {
    count++;
    console.log("API called:", count, " times");
});

EventEmitter.on("Home API called", () => {
    homeAPICount++;
    console.log("Home API called:", homeAPICount, " times");
});
EventEmitter.on("Search API called", () => {
    searchAPICount++;
    console.log("Search API called:", searchAPICount, " times");
});
EventEmitter.on("About API called", () => {
    aboutAPICount++;
    console.log("About API called:", aboutAPICount, " times");
});

app.get('/', (req, res) => {
    
    EventEmitter.emit("API called");
    EventEmitter.emit("Home API called");
    res.send({"API": "Home", "APIs called": `${count} times`});
});

app.get('/about', (req, res) => {
    
    EventEmitter.emit("API called");
    EventEmitter.emit("About API called");
    res.send({"API": "About", "APIs called": `${count} times`});
});

app.get('/search', (req, res) => {
    
    EventEmitter.emit("API called");
    EventEmitter.emit("Search API called");
    res.send({"API": "Search", "APIs called": `${count} times`});
})

app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`));