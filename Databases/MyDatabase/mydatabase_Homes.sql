-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (x86_64)
--
-- Host: 127.0.0.1    Database: mydatabase
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Homes`
--

DROP TABLE IF EXISTS `Homes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Homes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mainHeading` text NOT NULL,
  `mainSubHeading` text NOT NULL,
  `mainAbout` text NOT NULL,
  `mainEstablish` text NOT NULL,
  `mainDescription` text NOT NULL,
  `mainAim` text NOT NULL,
  `mainResearchImage` varchar(255) DEFAULT NULL,
  `mainResearchTitle` text NOT NULL,
  `mainResearchDescription` text NOT NULL,
  `card1Heading` text NOT NULL,
  `card1Image` varchar(255) DEFAULT NULL,
  `card1Title` text NOT NULL,
  `card1Description` text NOT NULL,
  `card1InsideImage` varchar(255) DEFAULT NULL,
  `card2Heading` text NOT NULL,
  `card2Image` varchar(255) DEFAULT NULL,
  `card2Title` text NOT NULL,
  `card2Description` text NOT NULL,
  `card2InsideImage` varchar(255) DEFAULT NULL,
  `card3Heading` text NOT NULL,
  `card3Image` varchar(255) DEFAULT NULL,
  `card3Title` text NOT NULL,
  `card3Description` text NOT NULL,
  `card3InsideImage` varchar(255) DEFAULT NULL,
  `card4Heading` text NOT NULL,
  `card4Image` varchar(255) DEFAULT NULL,
  `card4Title` text NOT NULL,
  `card4Description` text NOT NULL,
  `card4InsideImage` varchar(255) DEFAULT NULL,
  `cardGuidelineDescription` text NOT NULL,
  `contactHeading` varchar(255) NOT NULL,
  `contactEmail` varchar(255) NOT NULL,
  `contactMailchimpKey` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Homes`
--

LOCK TABLES `Homes` WRITE;
/*!40000 ALTER TABLE `Homes` DISABLE KEYS */;
INSERT INTO `Homes` VALUES (1,'Testing','Testing','Testing','Testing','<p>Testing</p>','Aim','http://localhost:4500/uploads/1691840590563-blog-image1.jpeg','Testing','<p>Testing</p>','Testing','http://localhost:4500/uploads/1691840590565-blog-image1.jpeg','Testing','<p>Testing</p>','http://localhost:4500/uploads/1691840590565-blog-image1.jpeg','Testing','http://localhost:4500/uploads/1691840590566-blog-image1.jpeg','Testing','<p>Testing</p>','http://localhost:4500/uploads/1691840590567-blog-image1.jpeg','Testing','http://localhost:4500/uploads/1691840590568-blog-image1.jpeg','Testing','<p>Testing</p>','http://localhost:4500/uploads/1691840590568-blog-image1.jpeg','Testing','http://localhost:4500/uploads/1691840590574-blog-image1.jpeg','Testing','<p>Testing</p>','http://localhost:4500/uploads/1691840590581-blog-image1.jpeg','<p>Testing</p>','Testing','Testing','Testing','2023-08-05 08:48:59','2023-08-12 11:43:10');
/*!40000 ALTER TABLE `Homes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-24 14:10:36
