CREATE TABLE `Users` (
  `user_id` integer PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(50) UNIQUE NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `mobile_number` bigint UNIQUE NOT NULL,
  `email_id` varchar(50) UNIQUE NOT NULL,
  `role` enum(user,admin) DEFAULT 'user',
  `password` varchar(255) NOT NULL,
  `created_at` timestamp DEFAULT 'current_timestamp'
);

CREATE TABLE `Playgrounds` (
  `playground_id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `city` VARCHAR(50) NOT NULL,
  `state` VARCHAR(50),
  `zip_code` VARCHAR(6),
  `description` TEXT,
  `opening_hours` VARCHAR(100),
  `latitude` DECIMAL(9,6),
  `longitude` DECIMAL(10,6),
  `created_at` TIMESTAMP DEFAULT (current_timestamp),
  `updated_at` TIMESTAMP DEFAULT (current_timestamp)
);

CREATE TABLE `Facilities` (
  `facility_id` INT PRIMARY KEY AUTO_INCREMENT,
  `playground_id` INT,
  `name` VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE `Reviews` (
  `review_id` INT PRIMARY KEY AUTO_INCREMENT,
  `playground_id` INT,
  `user_id` INT,
  `rating` INT NOT NULL COMMENT '1 to 5',
  `comment` TEXT,
  `created_at` TIMESTAMP DEFAULT (current_timestamp)
);

CREATE TABLE `Photos` (
  `photo_id` INT PRIMARY KEY AUTO_INCREMENT,
  `playground_id` INT,
  `photo_url` VARCHAR(255) NOT NULL,
  `uploaded_at` TIMESTAMP DEFAULT (current_timestamp)
);

CREATE TABLE `Bookings` (
  `booking_id` INT PRIMARY KEY AUTO_INCREMENT,
  `playground_id` INT,
  `user_id` INT,
  `booking_date` DATE NOT NULL,
  `booking_time` TIME NOT NULL,
  `status` ENUM(pending,confirmed,cancelled) DEFAULT 'pending',
  `created_at` TIMESTAMP DEFAULT (current_timestamp)
);

ALTER TABLE `Facilities` ADD FOREIGN KEY (`playground_id`) REFERENCES `Playgrounds` (`playground_id`);

ALTER TABLE `Reviews` ADD FOREIGN KEY (`playground_id`) REFERENCES `Playgrounds` (`playground_id`);

ALTER TABLE `Reviews` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`);

ALTER TABLE `Photos` ADD FOREIGN KEY (`playground_id`) REFERENCES `Playgrounds` (`playground_id`);

ALTER TABLE `Bookings` ADD FOREIGN KEY (`playground_id`) REFERENCES `Playgrounds` (`playground_id`);

ALTER TABLE `Bookings` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`);
