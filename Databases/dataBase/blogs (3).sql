-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 24, 2023 at 11:10 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `abdullah`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `imagePath` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `fellow` text DEFAULT NULL,
  `associatedFellow` text DEFAULT NULL,
  `category` text DEFAULT NULL,
  `region` text DEFAULT NULL,
  `profile` varchar(255) DEFAULT NULL,
  `activationDate` datetime DEFAULT NULL,
  `publicationDate` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `imagePath`, `title`, `content`, `fellow`, `associatedFellow`, `category`, `region`, `profile`, `activationDate`, `publicationDate`, `createdAt`, `updatedAt`) VALUES
(26, 'http://localhost:4500/uploads\\1691772376881-Ainvoer Black Hand & Shoulder Bag With Scarf Tassel.jpg', 'Blog title', '<p>blog content</p>', 'khan', 'khan', 'update information', 'United States', 'new Profile', '2023-08-11 16:46:16', '2023-08-11 16:46:16', '2023-08-11 16:46:16', '2023-08-11 16:46:16'),
(27, 'http://localhost:4500/uploads\\1691772436274-Ainvoer Pink Hand & Shoulder Bag With Scarf Tassel.jpg', 'new Blog', '<p>Blog content</p>', 'Abdullah Khan', 'khan', 'update information', 'United Kingdom', 'new Profile', '2023-08-11 16:47:16', '2023-08-11 16:47:16', '2023-08-11 16:47:16', '2023-08-11 16:47:16'),
(28, 'http://localhost:4500/uploads\\1691772512280-ALDO Women\'s Legoirii Tote Bag.jpg', 'ALDO Women\'s Legoirii Tote Bag', '<p>content</p>', 'khan', 'khan', 'notice', 'France', 'khan brother', '2023-08-11 16:48:32', '2023-08-11 16:48:32', '2023-08-11 16:48:32', '2023-08-11 16:48:32'),
(29, 'http://localhost:4500/uploads\\1691772578142-COACH Dempsey Carryall In Signature Jacquard With Stripe Patch.jpg', 'COACH Dempsey Carryall In Signature Jacquard With Stripe Patch', '<p>content</p>', 'khan', 'khan', 'Research activity report', 'Italy', 'khan brother', '2023-08-11 16:49:38', '2023-08-11 16:49:38', '2023-08-11 16:49:38', '2023-08-11 16:49:38'),
(30, 'http://localhost:4500/uploads\\1691772657937-Fancy Criss Cross Pattern PU Leather Handbag with Shoe Tassel.jpg', 'Fancy Criss Cross Pattern PU Leather Handbag with Shoe Tassel', '<p>Content</p>', 'khan', 'khan', 'notice', 'Australia', 'Khan', '2023-08-11 16:50:57', '2023-08-11 16:50:57', '2023-08-11 16:50:57', '2023-08-11 16:50:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
