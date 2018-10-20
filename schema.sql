DROP DATABASE IF EXISTS reservations;

CREATE DATABASE reservations;

USE reservations;


CREATE TABLE reservation (
    id int NOT NULL AUTO_INCREMENT,
    attraction_id int NOT NULL,
    cost_per_person int NOT NULL,
    booked_date Datetime NOT NULL,
    total_cost int NOT NULL,
    guest_count int NOT NULL,
    user_id int NOT NULL,
    PRIMARY KEY (id)
  }
)