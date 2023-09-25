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
-- Table structure for table `Students`
--

DROP TABLE IF EXISTS `Students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `about` text NOT NULL,
  `program` text NOT NULL,
  `businessPassage` text NOT NULL,
  `specializedField` text NOT NULL,
  `externalCommittee` text NOT NULL,
  `outline` text NOT NULL,
  `targetAudience` text NOT NULL,
  `responsibilities` text NOT NULL,
  `recruitment` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `aboutBottom` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Students`
--

LOCK TABLES `Students` WRITE;
/*!40000 ALTER TABLE `Students` DISABLE KEYS */;
INSERT INTO `Students` VALUES (1,'<p>Ritsumeikan Advanced Research Academy（RARA）とは、Ritsumeikan Knowledge Nodes（RKN）構想を実現し、本⼤学の先導的・先進的研究拠点の形成に向けてリーダーシップを発揮することが期待される中核研究者の集まり（アカデミー）のことです。RARAを基盤にする研究者は、新たな価値を生み出す先導的な学際研究拠点を創成するとともに、その成果を発信し、社会課題解決に向けた貢献を目指していきます。</p><p>&nbsp;</p>','<p>立命館大学では、R2030チャレンジ・デザインにおいて「新たな価値を創造する次世代研究大学」と「イノベーション・創発性人材を生み出す大学」を目指すべき姿として掲げています。 本大学では、「立命館先進研究アカデミー」（Ritsumeikan Advanced Research Academy （RARA））を設置し、大学院生を含む若手研究者から中核研究者までの研究者のキャリアパスに応じた研究環境の抜本的充実を図っています。本プログラムは、RARAを基盤に、国際社会で活躍できる資質と能力を兼ね備えた博士人材を「RARA学生フェロー」に任命し、挑戦的・融合的な研究を支援するプログラムです。 ※本プログラムは、JST（国立研究開発法人科学技術振興機構）「次世代研究者挑戦的研究プログラム」の採択を受け、2021年度より実施するものです。</p><p>&nbsp;</p>','<p>副学長（研究・学術情報・国際連携・D&amp;I・起業事業化推進 担当）、経営学部教授<br>&nbsp;</p>','<p>経営戦略論、イノベーション論</p>','<p>国際ビジネス研究学会（理事）、研究・イノベーション学会（理事）、グリーンイノベーション基金 技術社会実装推進委員会（委員長）、EURAS（European Academy for Standardization）</p>','<p>RARA学⽣フェローはRARAの構成員として、将来を担う若⼿研究者として必要とされる⼒量形成に繋がる機会（RARAコロキアム、RARAコモンズ）が与えられ、これに参加することが求められます。 研究活動支援金として月額180,000円（年額216万円）、および研究費として年額最大34万円を大学より支給します。給付期間は、標準修業年限の期間とします。</p>','<p>博士課程後期課程に在学する学生 募集人数および申請資格については最新の募集要項を確認してください。</p>','<p>RARA学生フェローとしての自覚と責任を持ち、研究活動に取り組むこと。 研究部が主宰または指定するプログラム、セミナー等に参加および発表すること。 別に定められた書類を指定の期日までに提出すること。 立命館大学研究倫理指針に基づき、高い倫理観を保持し、研究活動に携わるとともに、不正行為を行わないこと。なお、研究不正疑義発生時の対応は、「立命館大学研究活動不正行為防止規程」に基づいて行う。 研究活動支援金の執行にあたっては、「立命館大学における公的研究費の管理に関する規程」に基づき、適正に執行すること。</p>','<p>最新の募集要項および申請書は 本大学 研究部HPを確認してください。</p><p>&nbsp;</p>','2023-08-21 16:25:59','2023-08-23 15:50:39','<p>RARAは、本大学の先進研究を牽引する中核研究者である「RARAフェロー」、中核研究者へのステップアップに向け実績を積み重ねる「RARAアソシエイトフェロー」、次世代の研究者として活躍が期待される「RARA学生フェロー」から主に構成されます。RARA 学生フェローとして選抜された博士後期課程学生には、RARAを基盤に、個々の研究力を向上させ、分野の異なる国内外の研究者と交わる中で、国際性と学際性、さらに複眼的視野を兼ね備えた博士人材へと成長していくことを期待します。</p><p>&nbsp;</p>');
/*!40000 ALTER TABLE `Students` ENABLE KEYS */;
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
