//Express
const express = require('express');

//web-push
const webpush = require('web-push');

//body-parser
const bodyParser = require('body-parser');

//path
const path = require('path');

//using express 
const app = express();

//using bodyparser
app.use(bodyParser.json())

//set the static path 
app.use(express.static(path.join(__dirname, "client")));

//storing the keys in variables
const publicVapidKey = 'BLJp1PLhneKlN9YzfnRIotMv3GQZPLNeFoLPUr5pujdG8xw6nLqyJeYpSMncubz2ho2xOfeI1JAA5spVwIIn2Lg';
const privateVapidKey = 'V5kGt30uEhPQx6eJBD06f8dEL4YP87tAPuN28BghxFU';

//setting vapid keys details
webpush.setVapidDetails('mailto:josepholukunle1107@gmail.com', publicVapidKey,privateVapidKey);

//subscribe route
app.post('/subscribe', (req, res)=>{
    //get push subscription object from the request
    const subscription = req.body;

    //send status 201 for the request
    res.status(201).json({})

    //create paylod: specified the details of the push notification
    const payload = JSON.stringify({title: 'My Push Notification' });

    //pass the object into sendNotification function and catch any error
    webpush.sendNotification(subscription, payload).catch(err=> console.error(err));
})
