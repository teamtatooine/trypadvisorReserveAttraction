const mysql = require('mysql');
const faker = require('faker');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const seedReservations = function() {
  for(var i = 0; i < 101; i++) {
    var attraction_id = faker.random.number();
    var cost_per_person = faker.commerce.price();
    var booked_date = faker.date.future();
    var total_cost = faker.commerce.price();
    var guest_count = faker.random.number();
    var user_id = faker.random.number();

    connection.query("INSERT INTO reservations (attraction_id, cost_per_person, booked_date, total_cost, guest_count, user_id) VALUES (?, ?, ?, ?, ?, ?)", function(err, result) {
      if(err) {
        console.log(err);
      }
      console.log('👍🏻 successfully added an entry');
    });
  }
}


const getAvailableDates = function(callback) {

  connection.query("SELECT cost_per_person, booked_date FROM reservations", function(err, result, fields) {
    if (err) {
      console.log('Calendar Error: ', err);
      return err;
    }
    callback(null, result);
  });
}

const reserveAttraction = function(callback) {
  // write to db
    // Reservation = {
      //   Date: Datetime,
      //   GuestCount: Number,
      //   TotalCost: Number
    // }

  connection.query("INSERT INTO reservations (attraction_id, cost_per_person, booked_date, total_cost, guest_count, user_id) VALUES ()", function(err, result) {
    if (err) {
      console.log('Reservation Error: ', err);
    }
    callback(null, result);
  })
}

// const editExistingReservation = function(callback) {
//   // amend existing data
//     // Reservation = {
//       //   Date: Datetime,
//       //   GuestCount: Number,
//       //   TotalCost: Number
//     // }
// }

// const cancelReservation = function(callback) {
//   // remove from db
//     // Reservation = {
//       //   Date: Datetime,
//       //   GuestCount: Number,
//       //   TotalCost: Number
//     // }
// }


module.exports = {
  getAvailableDates: getAvailableDates,
  reserveAttraction: reserveAttraction
  // , editExistingReservation: editExistingReservation,
  // cancelReservation: cancelReservation
};