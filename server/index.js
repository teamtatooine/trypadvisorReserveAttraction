const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

console.log(__dirname + '/../client/dist');
app.use(express.static(__dirname + '/../client/dist'));


app.get('/api/:id/bookinadvance/calendar', function(req, res) {

  // cost_per_person: price
  // booked_dates: date
      // BLOCKED Rating: Number
      // BLOCKED ReviewCount: Number
  db.getAvailableDates(function(err, result) {
    if (err || !result.length) {
      console.log(err);
    }
    console.log('👌🏻 + ', result);
  });
});

app.post('/api/:id/bookinadvance/book', function(req, res) {


  // Reservation = {
    //   Date: Datetime,
    //   GuestCount: Number,
    //   TotalCost: Number
    // }


  db.reserveAttraction(function(err, result) {
    if (err || !result.length) {
      console.log(err);
    }
    console.log('✌🏻 + ', result);
  });
});


// app.put('/api/:id/bookinadvance/editreservation', function(req, res) {
//   // Reservation = {
//   //   Date: Datetime,
//   //   GuestCount: Number,
//   //   TotalCost: Number
//   // }

//   db.editExistingReservation(function(err, result) {

//   });

// });

// app.delete('/api/:id/bookinadvance/deletereservation', function(req, res) {

//   // Reservation = {
//   //   Date: Datetime,
//   //   GuestCount: Number,
//   //   TotalCost: Number,
//   // }

//   db.cancelReservation(function(err, result) {

//   });

// });


let port = 8000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
})


