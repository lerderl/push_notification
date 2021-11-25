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

//storing the keys in variables
const publicVapidKey = 'BLJp1PLhneKlN9YzfnRIotMv3GQZPLNeFoLPUr5pujdG8xw6nLqyJeYpSMncubz2ho2xOfeI1JAA5spVwIIn2Lg';
const privateVapidKey = 'V5kGt30uEhPQx6eJBD06f8dEL4YP87tAPuN28BghxFU';

//setting vapid keys details
webpush.setVapidDetails('mailto:josepholukunle1107@gmail.com', publicVapidKey,privateVapidKey);
