-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 24, 2023 at 11:14 AM
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
-- Table structure for table `related_blogs`
--

CREATE TABLE `related_blogs` (
  `id` int(11) NOT NULL,
  `relatedBlogId` int(11) NOT NULL,
  `blogId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `related_blogs`
--

INSERT INTO `related_blogs` (`id`, `relatedBlogId`, `blogId`, `createdAt`, `updatedAt`) VALUES
(36, 26, 27, '2023-08-11 16:47:16', '2023-08-11 16:47:16'),
(37, 26, 28, '2023-08-11 16:48:32', '2023-08-11 16:48:32'),
(38, 27, 28, '2023-08-11 16:48:32', '2023-08-11 16:48:32'),
(39, 28, 29, '2023-08-11 16:49:38', '2023-08-11 16:49:38'),
(40, 26, 29, '2023-08-11 16:49:38', '2023-08-11 16:49:38'),
(41, 28, 30, '2023-08-11 16:50:57', '2023-08-11 16:50:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `related_blogs`
--
ALTER TABLE `related_blogs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `relatedBlogId` (`relatedBlogId`),
  ADD KEY `blogId` (`blogId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `related_blogs`
--
ALTER TABLE `related_blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `related_blogs`
--
ALTER TABLE `related_blogs`
  ADD CONSTRAINT `related_blogs_ibfk_1` FOREIGN KEY (`relatedBlogId`) REFERENCES `blogs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `related_blogs_ibfk_2` FOREIGN KEY (`blogId`) REFERENCES `blogs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
