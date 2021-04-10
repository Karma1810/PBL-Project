-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 10, 2021 at 05:27 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rentmyhouses`
--

-- --------------------------------------------------------

--
-- Table structure for table `property_list`
--

CREATE TABLE `property_list` (
  `House_No` int(3) NOT NULL,
  `p_name` varchar(255) NOT NULL,
  `p_address` varchar(255) NOT NULL,
  `p_info` varchar(255) NOT NULL,
  `p_buildArea` varchar(255) NOT NULL,
  `p_price` varchar(255) NOT NULL,
  `p_photo1` varchar(255) NOT NULL,
  `p_photo2` varchar(255) NOT NULL,
  `p_photo3` varchar(255) NOT NULL,
  `dp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `property_list`
--

INSERT INTO `property_list` (`House_No`, `p_name`, `p_address`, `p_info`, `p_buildArea`, `p_price`, `p_photo1`, `p_photo2`, `p_photo3`, `dp`) VALUES
(1, 'Roshan Villa', 'Vikas Nagar,Mumbai-400001', '123456789', '3000 Sq.ft', '20000$', './img/banner.jpg', './img/banner.jpg', './img/banner.jpg', './img/customer1.jpg'),
(2, 'Roshan Villa', 'Vikas Nagar,Mumbai-400001', '123456789', '3000 Sq.ft', '20000$', './img/banner.jpg', './img/banner.jpg', './img/banner.jpg', './img/customer1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(3) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `Password`) VALUES
(1, 'Atul', 'atul@atul.com', '202cb962ac59075b964b07152d234b70'),
(2, 'rishit', '123@123', '202cb962ac59075b964b07152d234b70');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `property_list`
--
ALTER TABLE `property_list`
  ADD PRIMARY KEY (`House_No`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `property_list`
--
ALTER TABLE `property_list`
  MODIFY `House_No` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
