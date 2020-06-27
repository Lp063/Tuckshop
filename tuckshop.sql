-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 27, 2020 at 09:42 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tuckshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_event`
--

CREATE TABLE `tbl_event` (
  `id` int(225) NOT NULL,
  `name` varchar(225) NOT NULL,
  `manager_id` int(225) NOT NULL,
  `fooditem_list_id` int(225) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `active` varchar(225) NOT NULL,
  `ended_on` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_event`
--

INSERT INTO `tbl_event` (`id`, `name`, `manager_id`, `fooditem_list_id`, `created_on`, `active`, `ended_on`) VALUES
(1, 'Sales Day Sunday', 2, 0, '2020-06-27 07:12:23', '1', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_items`
--

CREATE TABLE `tbl_items` (
  `id` int(225) NOT NULL,
  `event_id` int(225) NOT NULL,
  `name` varchar(225) NOT NULL,
  `price` varchar(225) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `serving` varchar(225) NOT NULL,
  `currency` varchar(225) NOT NULL DEFAULT 'inr'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_items`
--

INSERT INTO `tbl_items` (`id`, `event_id`, `name`, `price`, `created_on`, `serving`, `currency`) VALUES
(1, 1, 'Chocolate Doughnuts', '30', '2020-06-27 07:14:25', '2/plate', 'USD'),
(2, 1, 'Cupcakes', '50', '2020-06-27 07:14:25', '2/plate', 'USD'),
(3, 1, 'Casserolls', '30', '2020-06-27 19:13:25', '2/plate', 'USD'),
(4, 1, 'Quesadilla', '50', '2020-06-27 19:13:25', '2/plate', 'USD'),
(5, 1, 'Croquettes', '30', '2020-06-27 19:14:12', '3/plate', 'USD');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id` int(255) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `tbl_user_type_id` int(255) NOT NULL,
  `senior_id` int(225) NOT NULL,
  `creation_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `username`, `password`, `email`, `tbl_user_type_id`, `senior_id`, `creation_time`, `update_time`) VALUES
(1, 'superadmin', 'superadmin123', 'superadmin@gmail.com', 1, 0, '2020-06-23 08:04:31', '2020-06-27 07:00:21'),
(2, 'manager', 'manager123', 'manager@gmail.com', 2, 1, '2020-06-23 08:04:31', '2020-06-27 07:00:21'),
(3, 'waiter', 'waiter123', 'waiter@yahoo.com', 3, 2, '2020-06-23 08:07:16', '2020-06-27 07:28:23');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_type`
--

CREATE TABLE `tbl_user_type` (
  `id` int(225) NOT NULL,
  `type` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user_type`
--

INSERT INTO `tbl_user_type` (`id`, `type`) VALUES
(1, 'superadmin'),
(2, 'manager'),
(3, 'waiter');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_event`
--
ALTER TABLE `tbl_event`
  ADD PRIMARY KEY (`id`),
  ADD KEY `manager_fk` (`manager_id`);

--
-- Indexes for table `tbl_items`
--
ALTER TABLE `tbl_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `event_fk` (`event_id`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_usertype` (`tbl_user_type_id`);

--
-- Indexes for table `tbl_user_type`
--
ALTER TABLE `tbl_user_type`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_event`
--
ALTER TABLE `tbl_event`
  MODIFY `id` int(225) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tbl_items`
--
ALTER TABLE `tbl_items`
  MODIFY `id` int(225) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `tbl_user_type`
--
ALTER TABLE `tbl_user_type`
  MODIFY `id` int(225) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_event`
--
ALTER TABLE `tbl_event`
  ADD CONSTRAINT `manager_fk` FOREIGN KEY (`manager_id`) REFERENCES `tbl_users` (`id`);

--
-- Constraints for table `tbl_items`
--
ALTER TABLE `tbl_items`
  ADD CONSTRAINT `event_fk` FOREIGN KEY (`event_id`) REFERENCES `tbl_event` (`id`);

--
-- Constraints for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD CONSTRAINT `fk_usertype` FOREIGN KEY (`tbl_user_type_id`) REFERENCES `tbl_user_type` (`id`),
  ADD CONSTRAINT `tbl_users_ibfk_1` FOREIGN KEY (`tbl_user_type_id`) REFERENCES `tbl_user_type` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
