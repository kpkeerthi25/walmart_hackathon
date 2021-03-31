-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: Mar 31, 2021 at 07:42 AM
-- Server version: 8.0.21
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `walmart_hack`
--

-- --------------------------------------------------------

--
-- Table structure for table `Product`
--

CREATE TABLE `Product` (
  `Product_ID` int NOT NULL,
  `Product_Name` varchar(128) NOT NULL,
  `Price` decimal(10,0) NOT NULL,
  `Category` varchar(128) NOT NULL,
  `Imported` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Product`
--

INSERT INTO `Product` (`Product_ID`, `Product_Name`, `Price`, `Category`, `Imported`) VALUES
(1, 'Orange (1kg)', '50', 'Food', 0),
(2, 'Iphone', '80000', 'Electronics\r\n', 1),
(3, 'mango (1kg)', '80', 'Food', 0),
(4, 'ipad air 4', '50000', 'Electronics', 1);

-- --------------------------------------------------------

--
-- Table structure for table `RefTable`
--

CREATE TABLE `RefTable` (
  `Reference_ID` int NOT NULL,
  `Ref_Type` varchar(128) NOT NULL,
  `Ref_Name` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `RefTable`
--

INSERT INTO `RefTable` (`Reference_ID`, `Ref_Type`, `Ref_Name`) VALUES
(1, 'cat', 'food'),
(2, 'cat', 'electronics');

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `User_ID` int NOT NULL,
  `Name` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`User_ID`, `Name`) VALUES
(1, 'person-A');

-- --------------------------------------------------------

--
-- Table structure for table `User-Product`
--

CREATE TABLE `User-Product` (
  `User_ID` int NOT NULL,
  `Product_ID` int NOT NULL,
  `Quantity` int NOT NULL,
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Discount` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `User-Product`
--

INSERT INTO `User-Product` (`User_ID`, `Product_ID`, `Quantity`, `Timestamp`, `Discount`) VALUES
(1, 4, 2, '2021-03-31 06:37:51', '5'),
(1, 3, 5, '2021-03-31 06:37:51', '10'),
(1, 1, 1, '2021-03-31 07:08:11', '5'),
(1, 2, 1, '2021-03-31 07:08:11', '10');

-- --------------------------------------------------------

--
-- Table structure for table `User-Product-Cart`
--

CREATE TABLE `User-Product-Cart` (
  `User_ID` int NOT NULL,
  `Product_ID` int NOT NULL,
  `InCart` tinyint(1) NOT NULL,
  `Timestamp` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Product`
--
ALTER TABLE `Product`
  ADD PRIMARY KEY (`Product_ID`),
  ADD KEY `category_Ref` (`Category`);

--
-- Indexes for table `RefTable`
--
ALTER TABLE `RefTable`
  ADD PRIMARY KEY (`Reference_ID`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`User_ID`);

--
-- Indexes for table `User-Product`
--
ALTER TABLE `User-Product`
  ADD KEY `User_ID_Ref` (`User_ID`),
  ADD KEY `Product_ID_Ref` (`Product_ID`);

--
-- Indexes for table `User-Product-Cart`
--
ALTER TABLE `User-Product-Cart`
  ADD KEY `User_ID_Ref1` (`User_ID`),
  ADD KEY `Product_ID_Ref1` (`Product_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Product`
--
ALTER TABLE `Product`
  MODIFY `Product_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `User_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `User-Product`
--
ALTER TABLE `User-Product`
  ADD CONSTRAINT `Product_ID_Ref` FOREIGN KEY (`Product_ID`) REFERENCES `Product` (`Product_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `User_ID_Ref` FOREIGN KEY (`User_ID`) REFERENCES `User` (`User_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `User-Product-Cart`
--
ALTER TABLE `User-Product-Cart`
  ADD CONSTRAINT `Product_ID_Ref1` FOREIGN KEY (`Product_ID`) REFERENCES `Product` (`Product_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `User_ID_Ref1` FOREIGN KEY (`User_ID`) REFERENCES `User` (`User_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
