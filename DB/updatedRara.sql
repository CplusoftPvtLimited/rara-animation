-- MySQL dump 10.13  Distrib 8.1.0, for macos13.3 (arm64)
--
-- Host: localhost    Database: rara
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `banktransfers`
--

DROP TABLE IF EXISTS `banktransfers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banktransfers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bankTransfer` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banktransfers`
--

LOCK TABLES `banktransfers` WRITE;
/*!40000 ALTER TABLE `banktransfers` DISABLE KEYS */;
INSERT INTO `banktransfers` VALUES (1,'<p><strong>userName:</strong>Abdullah 123</p><p><strong>password:</strong>khan</p>',1,'2023-08-16 16:28:41','2023-08-17 18:17:25');
/*!40000 ALTER TABLE `banktransfers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs` (
  `id` int NOT NULL,
  `imagePath` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_general_ci,
  `fellow` int DEFAULT NULL,
  `associatedFellow` int DEFAULT NULL,
  `category` text COLLATE utf8mb4_general_ci,
  `region` text COLLATE utf8mb4_general_ci,
  `profile` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `activationDate` datetime DEFAULT NULL,
  `publicationDate` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (1,'http://localhost:4500/uploads\\1692976841088-blog1.jpg','小西聡フェローが組織委員長を務める国際学会Transducers 2023が開催され、高橋政代フェローが基調講演を行う','<p>小西聡フェローが組織委員長を務めた国際学会Transducers 2023が、2023年6月25日から29日にかけて国立京都国際会館で開催されました。Transducersは、機械・電気・科学・物理など多岐にわたる技術を駆使した、センサ、アクチュエータおよびそれらの材料、製造、組み立てに関する分野を幅広く扱う学際的な国際会議であり、世界各国で隔年開催されています。</p>',1,1,'18','United States','小西聡フェローが組織委員長を務める国際学会Transducers 2023が開催され、高橋政代フェローが基調講演を行う','2023-08-25 15:20:41','2023-08-25 15:20:41','2023-08-25 15:20:41','2023-08-25 15:20:41'),(2,'http://localhost:4500/uploads\\1692976932254-takahashi_slide1-1.jpg','高橋政代フェローがEMBOと神戸アイセンターが主催するバーチャルレクチャーに登壇','<p>高橋政代フェローがEMBO(European Molecular Biology Organization)と神戸アイセンターが主催するバーチャルレクチャーに登壇します。<br>「Molecular and clinical approaches to restoring visual function」と題して、視覚路の構造・機能及び治療に関する研究が専門のBotond Roska氏、網膜疾患治療の開発を進める高橋政代フェローと増田智浩氏が登壇し、モデレーターを前田忠郎氏が務めます。プログラムの詳細は<a href=\"https://embo-org.zoom.us/webinar/register/WN_2xGDhpeKSzW-aXKcuVwgDA\">こちら</a>からご覧ください。</p>',1,1,'18','Pakistan','高橋政代フェローがEMBOと神戸アイセンターが主催するバーチャルレクチャーに登壇','2023-08-25 15:22:12','2023-08-25 15:22:12','2023-08-25 15:22:12','2023-08-25 15:22:12'),(3,'http://localhost:4500/uploads\\1692977003785-takahashi_slide1-1.jpg','「ロボティックバイオロジーで加速する再生医療事業」の講演を行いました','<p>立命館科学技術振興会（ASTER）特別講演会「ロボティックバイオロジーで加速する再生医療事業」で講演を行いました。講演概要は<a href=\"https://www.ritsumei.ac.jp/file.jsp?id=539750\">こちら</a>をご覧ください</p>',1,1,'18','Pakistan','「ロボティックバイオロジーで加速する再生医療事業」の講演を行いました','2023-08-25 15:23:23','2023-08-25 15:23:23','2023-08-25 15:23:23','2023-08-25 15:23:23'),(4,'http://localhost:4500/uploads\\1692977100528-blog4.jpg','佐伯和人フェローが立命館大学宇宙地球探査研究センター（ESEC）初主催イベントに登壇','<p>佐伯和人フェローがセンター長を務める立命館大学宇宙地球探査研究センター（ESEC）は8月8日に初となる主催イベントを日本科学未来館（東京・お台場）で開催します。</p><p>&nbsp;</p><p>佐伯フェローは本大学ESEC所属研究者2名とともに登壇し、各自の切り口で「私が切り拓く最新宇宙フロンティア」をテーマにショートプレゼンテーションを行い、その後ゲストとして迎える日本初の宇宙ベンチャーである株式会社ispaceの袴田武史CEOと日本の宇宙開発の現在地やアカデミアとビジネスの多様なコラボレーションの可能性について対話します。</p><p>&nbsp;</p><p>本イベントは佐伯フェローが監修し、日本科学未来館で開催中の特別展「NEO月でくらす展～宇宙開発は、月面移住の新時代へ！～」をきっかけに実現しました。</p><p>&nbsp;</p><p>詳しくは<a href=\"https://www.ritsumei.ac.jp/profile/pressrelease_detail/?id=886\">こちら</a>をご覧ください。</p>',2,2,'15','United Kingdom','佐伯和人フェローが立命館大学宇宙地球探査研究センター（ESEC）初主催イベントに登壇','2023-08-25 15:25:00','2023-08-25 15:25:00','2023-08-25 15:25:00','2023-08-25 15:25:00'),(5,'http://localhost:4500/uploads\\1692977177035-blog5.jpg','佐伯和人フェローが立命館大学宇宙地球探査研究センター（ESEC）初代センター長に就任','<p>佐伯和人フェローが2023年7月1日に設置予定の立命館大学宇宙地球探査研究センター（英語名称：Earth &amp; Space Exploration Center(ESEC)）の初代センター長に就任し、6月29日に行われた記者会見に出席しました。</p><p>&nbsp;</p><p>会見で佐伯フェローはESECが月・惑星における人類の生存圏拡張と、将来的な居住・生活圏構築に先駆けた探査拠点となる宇宙開発・インフラ構築に取り組む日本初の研究組織として、「人類の生存圏の維持と拡大に貢献する」というビジョン実現に挑むことを宣言し、JAXAが計画し佐伯フェローらが主要メンバーとして参画する小型月着陸実証機プロジェクト（SLIM）や、月極域における水資源の存在・利用可能性の調査に向けた月極域探査ミッション（LUPEX）の搭載機器の開発・運用をはじめ、月・惑星における測量、地質・地盤調査技術や月面基地建設に関する研究を推進するなど今後の活動計画を紹介しました。</p><p>&nbsp;</p><p>詳細は<a href=\"https://www.ritsumei.ac.jp/profile/pressrelease_detail/?id=867\">こちら</a>をご覧ください。</p>',2,2,'18','Pakistan','佐伯和人フェローが立命館大学宇宙地球探査研究センター（ESEC）初代センター長に就任','2023-08-25 15:26:17','2023-08-25 15:26:17','2023-08-25 15:26:17','2023-08-25 15:26:17'),(6,'http://localhost:4500/uploads\\1692977286728-blog14.jpg','佐伯和人フェロー監修 特別展「NEO月でくらす展～宇宙開発は、月面移住の新時代へ！～」開催中です','<p>佐伯和人フェローが監修を務める特別展「NEO月でくらす展～宇宙開発は、月面移住の新時代へ！～」が日本科学未来館（東京・お台場）で4月28日から９月３日まで開催されています。<br>本展は、月が秘める無限の可能性とそれが人類に与えるインパクト、そして何より宇宙開発への夢をかきたてながら、未来の月面での生活を疑似体験できる新感覚の体験型展覧会です。ぜひ、月での生活を疑似体験してみてください。</p><p>&nbsp;</p><p>詳細については<a href=\"https://tsukidekurasu.com/\">こちら</a>をご覧ください</p>',2,2,'15','Pakistan','佐伯和人フェロー監修 特別展「NEO月でくらす展～宇宙開発は、月面移住の新時代へ！～」開催中です','2023-08-25 15:28:06','2023-08-25 15:28:06','2023-08-25 15:28:06','2023-08-25 15:28:06'),(7,'http://localhost:4500/uploads\\1692977415782-blog15.jpg','定藤規弘フェロー、持丸正明フェローが立命館大学スポーツ健康科学総合研究所シンポジウム「Well-beingの実現に向けたスポーツ健康科学」で講演','<p>立命館大学スポーツ健康科学総合研究所の発足を記念し、2023年6月26日にシンポジウム「Well-beingの実現に向けたスポーツ健康科学」が開催されました。</p><p>定藤規弘フェローが「個人のWell-being実現に向けて：脳神経科学の観点から」と題する講演でWell-beingが「快適」という知覚的側面と「やりがい」という主観的・心理的側面から構成されることや、人を褒めることで内発的動機付けを喚起することができ、Well-beingが学習可能であることなどを、先行研究に触れ説明しました。</p>',3,3,'18','Canada','定藤規弘フェロー、持丸正明フェローが立命館大学スポーツ健康科学総合研究所シンポジウム「Well-beingの実現に向けたスポーツ健康科学」で講演','2023-08-25 15:30:15','2023-08-25 15:30:15','2023-08-25 15:30:15','2023-08-25 15:30:15'),(8,'http://localhost:4500/uploads\\1692977519358-blog16.jpg','スポーツ健康科学総合研究所設立記念シンポジウム 〖Well-beingの実現に向けたスポーツ健康科学〗を開催','<p>スポーツ健康科学総合研究所の発足を記念して「Well-beingの実現に向けたスポーツ健康科学」が開催されます。</p><p>今回のシンポジウムでは、定藤規弘フェローが、個人のWell-being実現に向けて脳神経科学の観点から講演され、持丸正明フェローが、これから拡張するメタバース、インターバースの世界、未来におけるWell-beingはどのように捉えていくかを講演されます。<br>それに加え、岡田志麻フェローらが心理学的観点、社会学的観点、ロボティクス学的観点からおふたりと共にディスカッションされます。</p><p>&nbsp;</p><p>日時：6/23（金）13:30～16:30<br>場所：びわこ・くさつキャンパス＆ZOOM</p><p>詳細・お申込みは<a href=\"https://www.ritsumei.ac.jp/events/detail/?id=1356\">こちら</a>から</p>',3,3,'15','Canada','スポーツ健康科学総合研究所設立記念シンポジウム 〖Well-beingの実現に向けたスポーツ健康科学〗を開催','2023-08-25 15:31:59','2023-08-25 15:31:59','2023-08-25 15:31:59','2023-08-25 15:31:59'),(9,'http://localhost:4500/uploads\\1692977671892-blog17.jpeg','持丸正明フェローが「バーチャルエコノミーの拡大がもたらす未来」に登壇','<p>持丸正明フェローは、内閣府の<a href=\"https://www8.cao.go.jp/cstp/gaiyo/sip/index.html\">戦略的イノベーション創造プログラム（次期SIP）</a>の採択課題である「バーチャルエコノミー拡大に向けた基盤技術・ルールの整備」において、プログラム・ディレクター候補を務めています。</p><p>&nbsp;</p><p>この度、本課題の検討タスクフォースが、無料ウェビナー「バーチャルエコノミーの拡大がもたらす未来」を開催します。</p><p>持丸フェローをはじめ、玉城絵美氏（H2L, Inc., CEO）、望月康則氏（NEC）をゲストに迎え、中核コンセプトである「インターバース」を主題に据えた講演・パネルディスカッションが行われる予定です。</p><p>&nbsp;</p><p>詳細ならびに申込につきましては、<a href=\"https://www.moguravr.com/webinar-the-future-of-the-expanding-virtual-economy/\">こちら</a>をご覧ください</p>',3,3,'15','Germany','持丸正明フェローが「バーチャルエコノミーの拡大がもたらす未来」に登壇','2023-08-25 15:34:32','2023-08-25 15:34:32','2023-08-25 15:34:32','2023-08-25 15:34:32'),(11,'http://localhost:4500/uploads\\1692978299644-blog18.jpg','金子健太郎フェローが研究統括を務める発表内容が応用物理学会の注目講演に選出＆講演奨励賞受賞','<p>金子健太郎フェローが研究統括を務めている発表内容が第70回応用物理学会春季学術講演会にて注目講演として取り上げられ、その講演内容に対して講演発表者である京都大学の高根倫史さんが第54回応用物理学会講演奨励賞を受賞しました。</p><p>&nbsp;</p><p>金子フェローが研究開拓を行っている新しいパワー半導体材料であるルチル型酸化ゲルマニウム(r-GeO2)は、電気自動車(EV)やパソコン等への応用による大幅な省エネ効果が期待されています。本発表は、このr-GeO2のバンドギャップ変調において重要な材料である酸化スズ(r-SnO2)の成長メカニズムを解明しました。この結果は将来的にヘテロ接合デバイスを作製する際の重要な指針となるものです。</p><p>&nbsp;</p><p>詳しくは<a href=\"https://www.jsap.or.jp/docs/pressrelease/JSAP-2023spring-chumoku-10.pdf\">プレスリリース</a>及び<a href=\"https://www.jsap.or.jp/young-scientist-presentation-award/recipients54\">受賞者一覧</a>をご覧ください。</p>',4,4,'18','United Kingdom','金子健太郎フェローが研究統括を務める発表内容が応用物理学会の注目講演に選出＆講演奨励賞受賞','2023-08-25 15:44:59','2023-08-25 15:44:59','2023-08-25 15:44:59','2023-08-25 15:44:59'),(12,'http://localhost:4500/uploads\\1692978454876-blog2.jpg','金子健太郎フェローの二酸化ゲルマニウム(GeO2)の開発記事が日経クロステックに掲載','<p>金子健太郎フェローが研究統括を務める、二酸化ゲルマニウム(GeO2)の開発記事が日経クロステックに掲載されました。<br>立命館大学発の新しい半導体材料である事が記載されています。</p><p>記事は<a href=\"https://xtech.nikkei.com/atcl/nxt/column/18/02262/122800007/\">こちら</a>からご覧ください。</p>',4,4,'18','United Kingdom','金子健太郎フェローの二酸化ゲルマニウム(GeO2)の開発記事が日経クロステックに掲載','2023-08-25 15:47:34','2023-08-25 15:47:34','2023-08-25 15:47:34','2023-08-25 15:47:34'),(13,'http://localhost:4500/uploads\\1692978527492-blog2.jpg','金子健太郎フェローが Patentix（パテンティクス）株式会社を創業','<p>金子健太郎フェローが共同創業者・取締役CTOを務める、新しい半導体材料の開発と知財戦略を柱とする新しいディープテックベンチャー Patentix（パテンティクス）株式会社を創業しました。</p><p>&nbsp;</p><p>金子フェローは、2011年に酸化ガリウムパワーデバイスのディープテックベンチャーである<a href=\"https://flosfia.com/\">株式会社FLOSFIA</a>を共同創業し、現在も共同創業者株主を務めています。同社は、現在京都市内に自社の研究開発センターを構えております。</p><p>この度、2社目のディープテックベンチャーとして、立命館大学発のスタートアップである Patentix（パテンティクス）株式会社を創業いたしました。</p><p>&nbsp;</p><p>今後の展開にご期待ください</p>',4,4,'18','United States','金子健太郎フェローが Patentix（パテンティクス）株式会社を創業','2023-08-25 15:48:47','2023-08-25 15:48:47','2023-08-25 15:48:47','2023-08-25 15:48:47'),(14,'http://localhost:4500/uploads\\1692978651434-blog15.jpg','定藤規弘フェロー、持丸正明フェローが立命館大学スポーツ健康科学総合研究所シンポジウム「Well-beingの実現に向けたスポーツ健康科学」で講演','<p>立命館大学スポーツ健康科学総合研究所の発足を記念し、2023年6月26日にシンポジウム「Well-beingの実現に向けたスポーツ健康科学」が開催されました。</p><p>定藤規弘フェローが「個人のWell-being実現に向けて：脳神経科学の観点から」と題する講演でWell-beingが「快適」という知覚的側面と「やりがい」という主観的・心理的側面から構成されることや、人を褒めることで内発的動機付けを喚起することができ、Well-beingが学習可能であることなどを、先行研究に触れ説明しました</p>',5,5,'18','Australia','定藤規弘フェロー、持丸正明フェローが立命館大学スポーツ健康科学総合研究所シンポジウム「Well-beingの実現に向けたスポーツ健康科学」で講演','2023-08-25 15:50:51','2023-08-25 15:50:51','2023-08-25 15:50:51','2023-08-25 15:50:51'),(15,'http://localhost:4500/uploads\\1692978721696-blog16.jpg','スポーツ健康科学総合研究所設立記念シンポジウム 〖Well-beingの実現に向けたスポーツ健康科学〗を開催','<p>スポーツ健康科学総合研究所の発足を記念して「Well-beingの実現に向けたスポーツ健康科学」が開催されます。</p><p>今回のシンポジウムでは、定藤規弘フェローが、個人のWell-being実現に向けて脳神経科学の観点から講演され、持丸正明フェローが、これから拡張するメタバース、インターバースの世界、未来におけるWell-beingはどのように捉えていくかを講演されます。<br>それに加え、岡田志麻フェローらが心理学的観点、社会学的観点、ロボティクス学的観点からおふたりと共にディスカッションされます。</p><p>&nbsp;</p><p>日時：6/23（金）13:30～16:30<br>場所：びわこ・くさつキャンパス＆ZOOM</p><p>詳細・お申込みは<a href=\"https://www.ritsumei.ac.jp/events/detail/?id=1356\">こちら</a>から</p>',5,5,'15','United States','スポーツ健康科学総合研究所設立記念シンポジウム 〖Well-beingの実現に向けたスポーツ健康科学〗を開催','2023-08-25 15:52:01','2023-08-25 15:52:01','2023-08-25 15:52:01','2023-08-25 15:52:01'),(16,'http://localhost:4500/uploads\\1692978796046-okada1.jpg','岡田志麻研究室が取り組む研究活動のご紹介','<p>岡田志麻フェローの研究室では、市販のカメラで対面相手の動画を計測し、逐次的に画像解析することで、自律神経の反応（血管の情報や脈拍など）、表情、行動（体動、うなずき動作など）を抽出し、対話の中での相手の本当の感情や気持ちを推定する技術を開発しています。<br>写真は、そのテスト実験における計測結果のAR（Augmented Reality）表示をしたものです。</p><p>&nbsp;</p><p>表情の情報に加え、自律神経や体動情報を参照することで、マスクで表情の一部が隠れていても感情の推定が可能です。また、表情に出にくい感情や表情とは異なる感情（笑いながら怒る、悲しいけど怒る）も推定することが可能になりました。<br>この技術を活用して、多様な相手と対話する際に、うかがい知れない相手の本当の感情を知り、意図しない諍いを低減することを目指しています</p>',5,5,'18','Canada','岡田志麻研究室が取り組む研究活動のご紹介','2023-08-25 15:53:16','2023-08-25 15:53:16','2023-08-25 15:53:16','2023-08-25 15:53:16'),(17,'http://localhost:4500/uploads\\1692979149210-blog7.jpg','藤田聡アソシエイトフェローがABEMAヒルズに出演','<p>藤田聡アソシエイトフェローらの研究グループがポーラ化成工業と共同で研究を行い、世界で初めて筋力トレーニングが肌の若返りに効果的であることを明らかにしました。</p><p>&nbsp;</p><p>本研究成果は2023年7月25日にABEMAニュース番組ABEMAヒルズで紹介され、藤田アソシエイトフェローがリモートで出演しました。</p><p>&nbsp;</p><p>本研究では筋力トレーニングが真皮と呼ばれるコラーゲン等を含む皮膚の層の厚みを増加させる効果があることがわかりました。<br>有酸素運動と筋力トレーニングが肌に与える効果を観察した結果、両方とも真皮の弾力性と構造を改善する効果があるものの、厚みの増加は筋力トレーニングのみに見られました。</p><p>&nbsp;</p><p>真皮の厚みは年齢とともに薄くなり見た目年齢に影響する部分で、筋力トレーニングが肌に与える美容効果が人々の運動促進に繋がることが期待されます。</p><p>&nbsp;</p><p>なお、本研究成果は2023年6月23日付でScientifc Reportsに掲載され、ワシントンポスト紙や産経新聞にも取り上げられました。</p><p>&nbsp;</p><p>詳しくは<a href=\"https://www.nature.com/articles/s41598-023-37207-9\">こちら</a>より論文をご覧ください</p>',6,6,'18','Canada','藤田聡アソシエイトフェローがABEMAヒルズに出演','2023-08-25 15:59:09','2023-08-25 15:59:09','2023-08-25 15:59:09','2023-08-25 15:59:09'),(18,'http://localhost:4500/uploads\\1692979226413-blog9.jpg','藤田聡 RARAアソシエイトフェローがNHK総合「あさいち」に出演','<p>藤田聡 RARAアソシエイトフェローが、<br>NHK総合「あさいち」『新生活がみちがえる!たんぱく質ライフのすすめ』</p><p>に出演されます。</p><p>日時：5月22日（月）午前8：15～9：55</p><p>番組に関する情報は<a href=\"https://www.nhk.jp/p/asaichi/ts/KV93JMQRY8/schedule/te/K2932QPNP4/\">こちら</a></p>',6,6,'15','United States','藤田聡 RARAアソシエイトフェローがNHK総合「あさいち」に出演','2023-08-25 16:00:26','2023-08-25 16:00:26','2023-08-25 16:00:26','2023-08-25 16:00:26'),(19,'http://localhost:4500/uploads\\1692979325446-blog10.jpg','野坂秀之アソシエイトフェローが「フォトニックネットワーク研究会」に招待講演として登壇','<p>2023年3月1日～2日に沖縄県立博物館にて開催された「フォトニックネットワーク研究会」において、「Beyond 5Gに向けた高速ビームステアリング技術」をテーマに、招待講演を行いました。</p><p>プログラムは<a href=\"https://ken.ieice.org/ken/program/index.php?tgs_regid=37804c8ff0ef29adbf201e48822124a4fa58ddb596912f3ec577caa901ad239a&amp;tgid=IEICE-PN\">こちら</a>からご覧いただけます。</p>',6,6,'18','Australia','野坂秀之アソシエイトフェローが「フォトニックネットワーク研究会」に招待講演として登壇','2023-08-25 16:02:05','2023-08-25 16:02:05','2023-08-25 16:02:05','2023-08-25 16:02:05'),(20,'http://localhost:4500/uploads\\1692979384745-blog2.jpg','野坂秀之アソシエイトフェローが情報通信研究機構の委託研究に採択','<p>野坂秀之アソシエイトフェローらが、情報通信研究機構（NICT）の委託研究「Beyond 5G機能実現型プログラム」のうち一般課題」に採択されました。</p><p>今後「サイバーフィジカルインフラに向けた高信頼シームレスアクセスネットワークに関する研究開発」をテーマに研究活動を行い、野坂アソシエイトフェローは大容量通信デバイスの研究を担当します。</p><p>&nbsp;</p><p>本件に関する本大学プレスリリースは<a href=\"https://www.ritsumei.ac.jp/profile/pressrelease_detail/?id=781\">こちら</a>からご覧いただけます。</p>',7,7,'18','Canada','野坂秀之アソシエイトフェローが情報通信研究機構の委託研究に採択','2023-08-25 16:03:04','2023-08-25 16:03:04','2023-08-25 16:03:04','2023-08-25 16:03:04'),(21,'http://localhost:4500/uploads\\1692979472468-blog11.png','林勇吾アソシエイトフェローがGeneral Chairを務める国際会議を開催予定','<p>林勇吾アソシエイトフェローがGeneral Chairを務める国際会議「29th International Conference on Collaboration Technologies and Social Computing （CollabTech 2023）」が、2023年8月29日～9月1日の期間、本大学大阪いばらきキャンパスで開催を予定しております。</p><p>&nbsp;</p><p>論文投稿についても受付を行っています。詳細については<a href=\"http://www.hayashilab.cp.ritsumei.ac.jp/collabtech2023/\">こちら</a>をご覧ください</p>',7,7,'15','Germany','林勇吾アソシエイトフェローがGeneral Chairを務める国際会議を開催予定','2023-08-25 16:04:32','2023-08-25 16:04:32','2023-08-25 16:04:32','2023-08-25 16:04:32'),(22,'http://localhost:4500/uploads\\1692979550176-blog12.jpg','「リアルタイム視線フィードバックと教育用会話エージェントを用いた協調的学習支援」に関する研究紹介','<p>アクティブラーニングに代表されるように，学習者が他者と協調的に話し合いながら学ぶことは，単独で学習するよりもより深い理解へとつながるとされています。しかし、初学習者には，うまく知識を再構成するためのメタ認知や共通理解の構築に失敗することがあります。</p><p><br>本研究では、学習支援システムを用いて学習活動を支援するためにどういったインタフェースを組み合わせると有効なのかを検討しました。学習者が遠隔で協調的に説明活動を行うオンライン場面を想定して，2種類のインタフェースを考案しています。</p><p><br>それは、</p><ul><li>PC画面に相手の視線情報がリアルタイムに表示され，相手のアウェアネス（存在感）を喚起させるインタフェースと、</li><li>学習者の発言内容に応じてメタ認知を喚起させるファシリテーションを提示する会話エージェントでした。</li></ul><p>実験の結果，両者を組み合わせて用いることで学習内容に関する理解度が向上することが明らかになりました。この結果は、オンライン学習が増えている現代においてどういったインタフェース技術が有効なのかを心理学実験により示すことができました。</p><p>&nbsp;</p><p>論文は<a href=\"https://link.springer.com/article/10.1007/s11412-020-09333-3\">こちら</a>からご覧ください</p>',7,7,'18','Canada','「リアルタイム視線フィードバックと教育用会話エージェントを用いた協調的学習支援」に関する研究紹介','2023-08-25 16:05:50','2023-08-25 16:05:50','2023-08-25 16:05:50','2023-08-25 16:05:50'),(23,'http://localhost:4500/uploads\\1692979628946-hayashi01.jpg','AIを用いた仮想パートナーとの集団問題解決に関する研究状況について','<p>本研究では、集団での協同問題解決において、グループのどのような振る舞いが、新しい視点を発見して問題の解決に有効なのかを実験的に検討しました。</p><p><br>本研究では、錯視の原理を応用した規則発見課題（林・三輪・森田，2007, 認知科学）を題材として、5名の仮想的なグループメンバー（会話エージェント）が チャットを通じて実験参加者1名と一緒に問題解決を行います。この実験では、社会心理学の分野で批判的な思考や創造性を促進するうえで有用とされている異なる意見を提示する「少数派」の存在が問題解決にどのような影響を及ぼすのかを検討しました。</p><p><br>実験の結果、1名の異なる意見を提示する少数派条件のほうが3名の異なる意見を提示する対立条件よりも問題解決における視点取得のプロセスを促進することが明らかになりました。この結果は，人の集団問題解決で知識創発にどういったインタラクションの要因が有効かを示すことができました。</p><p>&nbsp;</p><p>論文は<a href=\"https://onlinelibrary.wiley.com/doi/10.1111/cogs.12587\">こちら</a>からご覧ください。</p>',8,8,'18','Australia','AIを用いた仮想パートナーとの集団問題解決に関する研究状況について','2023-08-25 16:07:08','2023-08-25 16:07:08','2023-08-25 16:07:08','2023-08-25 16:07:08'),(24,'http://localhost:4500/uploads\\1692979720142-hirono_youtube.jpg','廣野美和アソシエイトフェローがKDDIの動画オンデマンドサービス「リベラルアーツプログラム for Business」にて一帯一路を解説','<p>KDDIが開設するビジネスパーソン向けのオンデマンドサービス「リベラルアーツプログラム&nbsp;for Business」にて廣野美和アソシエイトフェローの動画が公開されました。この動画では中国の国際関係を専門とする廣野アソシエイトフェローが中国の経済圏構想である一帯一路の実態を解説します。</p><p>&nbsp;</p><p>ダイジェスト版の動画は<a href=\"https://www.youtube.com/watch?v=jykb8yFRvS8\">こちら</a>をご覧ください。</p><p>「リベラルアーツプログラム&nbsp;for Business」は<a href=\"https://aeonconnect.jp/liberal_arts/\">こちら</a></p>',8,8,'18','United States','廣野美和アソシエイトフェローがKDDIの動画オンデマンドサービス「リベラルアーツプログラム for Business」にて一帯一路を解説','2023-08-25 16:08:40','2023-08-25 16:08:40','2023-08-25 16:08:40','2023-08-25 16:08:40'),(25,'http://localhost:4500/uploads\\1692979824973-blog2.jpg','ネパールでの若手育成事業の活動レポートについて','<p>廣野美和アソシエイトフェローが、ネパールの開発問題と大国の役割に関する理論や既存研究、フィールドワークの方法について、現地の国際機関やNGOと協力して、若手育成事業を実施しました。</p><p>次世代リーダーの卵である若者同士が共同で課題解決を目指すプロジェクトを実行しました。</p><p>&nbsp;</p><p>取り組みが注目され、主要メディアThe Kathmandu Postでも取り上げられました。記事は<a href=\"https://kathmandupost.com/art-culture/2023/02/15/a-transformative-educational-trip\">こちら</a>からご覧いただけます。</p><p>また本大学の<a href=\"https://www.ritsumei.ac.jp/news/detail/?id=3070\">Webサイト</a>でも紹介されています。</p>',9,9,'18','Canada','ネパールでの若手育成事業の活動レポートについて','2023-08-25 16:10:24','2023-08-25 16:10:24','2023-08-25 16:10:24','2023-08-25 16:10:24'),(26,'http://localhost:4500/uploads\\1692979886831-blog2.jpg','廣野美和アソシエイトフェローの共著が公開','<p>廣野美和アソシエイトフェローがJICA緒方貞子平和開発研究所が実施したプロジェクト「持続的な平和に向けた国際協力の再検討：適応的平和構築とは何か」の一環で取り組んだ共著e-book<i> Adaptive Peacebuilding: A New Approach to Sustaining Peace in the 21st Century </i>が公開されました。廣野アソシエイトフェローが担当した章<i>“</i>China’s Peacebuilding in South Sudan: ‘Top-down’ Adaptation and Its Effectiveness” では中国が南スーダンで平和構築活動を展開する際に、自らのイデオロギーに基づいた一方向的なものであったか、あるいは現地に適応的（Adaptive）な平和構築アプローチであったか、そして中国のアプローチが平和構築にどう有効であったかを分析しています。</p><p>&nbsp;</p><p>廣野アソシエイトフェローの担当章は<a href=\"https://link.springer.com/chapter/10.1007/978-3-031-18219-8_9\">こちら</a>からご覧ください。</p>',9,9,'18','United Kingdom','廣野美和アソシエイトフェローの共著が公開','2023-08-25 16:11:26','2023-08-25 16:11:26','2023-08-25 16:11:26','2023-08-25 16:11:26'),(27,'http://localhost:4500/uploads\\1692979966378-kobayasih_slide04.jpg','論文がECS Journal of Solid State Science and Technologyに掲載','<p>近赤外光で電子移動を起こす有機無機複合ナノ材料に関する論文（Near-Infrared-Light Triggered Electron Transfer from Ag2S Nanocrystals to Perylene Bisimide）が、ECS Journal of Solid State Science and Technologyに掲載されました。</p><p>&nbsp;</p><p>論文は<a href=\"https://doi.org/10.1149/2162-8777/ac93b2\">こちら</a>からご覧いただけます。</p>',10,0,'18','United States','論文がECS Journal of Solid State Science and Technologyに掲載','2023-08-25 16:12:46','2023-08-25 16:12:46','2023-08-25 16:12:46','2023-08-25 17:28:01');
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `captions`
--

DROP TABLE IF EXISTS `captions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `captions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `videoId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `text` varchar(111) COLLATE utf8mb4_general_ci NOT NULL,
  `startTime` float NOT NULL,
  `endTime` float NOT NULL,
  `min` float DEFAULT NULL,
  `max` float DEFAULT NULL,
  `emoji` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=201 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `captions`
--

LOCK TABLES `captions` WRITE;
/*!40000 ALTER TABLE `captions` DISABLE KEYS */;
INSERT INTO `captions` VALUES (174,1,'2023-09-05 17:23:05',NULL,'Thywwis \n i44s',0,1,NULL,NULL,'😃'),(175,1,'2023-09-05 17:23:05',NULL,'ho2s4w \n t65o',1,2,NULL,NULL,'😃'),(176,1,'2023-09-05 17:23:05',NULL,'learn pump',2,3,NULL,NULL,'😃'),(177,1,'2023-09-05 17:23:05',NULL,'falling in',3,4,NULL,NULL,'😃'),(178,1,'2023-09-05 17:23:05',NULL,'three steps.',4,5,NULL,NULL,'😃'),(179,1,'2023-09-05 17:23:05',NULL,'First you',5,6,NULL,NULL,'😃'),(180,1,'2023-09-05 17:23:05',NULL,'want to jump onto the board only.',6,6,NULL,NULL,'😃'),(181,1,'2023-09-05 17:23:05',NULL,'Second you want',7,8,NULL,NULL,'😃'),(182,1,'2023-09-05 17:23:05',NULL,'to glide as',8,9,NULL,NULL,'😃'),(183,1,'2023-09-05 17:23:05',NULL,'far as possible',9,10,NULL,NULL,'😃'),(184,1,'2023-09-05 17:23:05',NULL,'without falling off',10,11,NULL,NULL,'😃'),(185,1,'2023-09-05 17:23:05',NULL,'the board.',11,11,NULL,NULL,'😃'),(186,1,'2023-09-05 17:23:05',NULL,'The key is',11,12,NULL,NULL,'😃'),(187,1,'2023-09-05 17:23:05',NULL,'to sink like',12,13,NULL,NULL,'😃'),(188,1,'2023-09-05 17:23:05',NULL,'Captain Jack Sparrow',13,14,NULL,NULL,'😃'),(189,1,'2023-09-05 17:23:05',NULL,'in Pirates of',14,15,NULL,NULL,'😃'),(190,1,'2023-09-05 17:23:05',NULL,'the Caribbean.',15,16,NULL,NULL,'😃'),(191,1,'2023-09-05 17:23:05',NULL,'And third you',16,17,NULL,NULL,'😃'),(192,1,'2023-09-05 17:23:05',NULL,'want to get',17,18,NULL,NULL,'😃'),(193,1,'2023-09-05 17:23:05',NULL,'into the pumping rhythm.',18,19,NULL,NULL,'😃'),(194,1,'2023-09-05 17:23:05',NULL,'Try it out',19,20,NULL,NULL,'😃'),(195,1,'2023-09-05 17:23:05',NULL,'step by step',20,21,NULL,NULL,'😃'),(196,1,'2023-09-05 17:23:05',NULL,'and you will',21,22,NULL,NULL,'😃'),(197,1,'2023-09-05 17:23:05',NULL,'see you will',22,23,NULL,NULL,'😃'),(198,1,'2023-09-05 17:23:05',NULL,'progress. And share',23,24,NULL,NULL,'😃'),(199,1,'2023-09-05 17:23:05',NULL,'this video with your friends',24,24,NULL,NULL,'😃'),(200,1,'2023-09-05 17:23:05',NULL,'you want to learn it',24,25,NULL,NULL,'😃');
/*!40000 ALTER TABLE `captions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (14,'RARA Commons','2023-08-08 08:57:48','2023-08-08 08:57:48'),(15,'お知らせ','2023-08-08 08:57:56','2023-08-25 13:21:43'),(16,'column','2023-08-08 08:58:05','2023-08-08 08:58:05'),(17,'update information','2023-08-08 08:58:16','2023-08-08 08:58:16'),(18,'研究活動レポート','2023-08-08 08:58:38','2023-08-25 12:59:25');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chatkeys`
--

DROP TABLE IF EXISTS `chatkeys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chatkeys` (
  `id` int NOT NULL AUTO_INCREMENT,
  `crispKey` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chatkeys`
--

LOCK TABLES `chatkeys` WRITE;
/*!40000 ALTER TABLE `chatkeys` DISABLE KEYS */;
/*!40000 ALTER TABLE `chatkeys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coinbases`
--

DROP TABLE IF EXISTS `coinbases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coinbases` (
  `id` int NOT NULL AUTO_INCREMENT,
  `checkoutId` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coinbases`
--

LOCK TABLES `coinbases` WRITE;
/*!40000 ALTER TABLE `coinbases` DISABLE KEYS */;
/*!40000 ALTER TABLE `coinbases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `currentcaptionsstyling`
--

DROP TABLE IF EXISTS `currentcaptionsstyling`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `currentcaptionsstyling` (
  `id` int NOT NULL AUTO_INCREMENT,
  `styling` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `videoId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `currentcaptionsstyling_chk_1` CHECK (json_valid(`styling`))
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `currentcaptionsstyling`
--

LOCK TABLES `currentcaptionsstyling` WRITE;
/*!40000 ALTER TABLE `currentcaptionsstyling` DISABLE KEYS */;
INSERT INTO `currentcaptionsstyling` VALUES (3,'{\"position\":\"absolute\",\"color\":\"rgb(93, 53, 176, 1)\",\"colorDefault\":{\"r\":93,\"g\":53,\"b\":176,\"a\":1},\"colorThird\":{\"r\":5,\"g\":180,\"b\":189,\"a\":1},\"colorSecond\":{\"r\":5,\"g\":180,\"b\":70,\"a\":1},\"mainColor\":{\"r\":255,\"g\":241,\"b\":118,\"a\":1},\"fontSize\":\"31px\",\"fontFamily\":\"Montserrat\",\"fontWeight\":\"900\",\"textTransform\":\"uppercase\",\"selectedTheme\":1,\"textShadow\":\"0 0 8px #000,0 0 9px #000,0 0 10px #000,0 0 11px #000,0 0 12px #000,0 0 13px #000,0 0 14px #000,0 0 15px #000,0 0 16px #000,0 0 17px #000\",\"animation\":\"rotation\",\"left\":\"20%\",\"top\":\"213.9px\",\"width\":\"300px\",\"displayWordSpeed\":\"1 line\",\"whiteSpace\":\"pre-line\",\"autoHighlight\":\"yes\",\"emojis\":\"top\",\"videoId\":1,\"spanIds\":[{\"color\":\"rgba(255, 241, 118, 1)\",\"id\":\"span01\"},{\"color\":\"rgba(5, 180, 70, 1)\",\"id\":\"span02\"},{\"color\":\"rgba(5, 180, 189, 1)\",\"id\":\"span11\"},{\"color\":\"rgba(255, 241, 118, 1)\",\"id\":\"span12\"}]}',1,'2023-09-05 14:51:30','2023-09-05 17:23:05');
/*!40000 ALTER TABLE `currentcaptionsstyling` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customthemes`
--

DROP TABLE IF EXISTS `customthemes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customthemes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `styling` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `videoId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `videoIdContraintz` (`videoId`),
  CONSTRAINT `videoIdContraintz` FOREIGN KEY (`videoId`) REFERENCES `videos` (`id`),
  CONSTRAINT `customthemes_chk_1` CHECK (json_valid(`styling`))
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customthemes`
--

LOCK TABLES `customthemes` WRITE;
/*!40000 ALTER TABLE `customthemes` DISABLE KEYS */;
INSERT INTO `customthemes` VALUES (10,'[{\"position\":\"absolute\",\"color\":\"rgba(252, 192, 46, 1)\",\"colorDefault\":{\"r\":252,\"g\":192,\"b\":46,\"a\":1},\"colorThird\":{\"r\":64,\"g\":164,\"b\":164,\"a\":1},\"colorSecond\":{\"r\":5,\"g\":220,\"b\":22,\"a\":22},\"mainColor\":{\"r\":99,\"g\":9,\"b\":110,\"a\":1},\"fontSize\":\"32px\",\"fontFamily\":\"TheBold\",\"fontWeight\":\"300\",\"textTransform\":\"none\",\"selectedTheme\":6,\"textShadow\":\"0 0 1px #000,0 0 2px #000,0 0 3px #000,0 0 4px #000,0 0 5px #000,0 0 6px #000,0 0 7px #000,0 0 8px #000\",\"animation\":\"none\",\"left\":\"20%\",\"top\":\"520px\",\"width\":\"300px\",\"displayWordSpeed\":\"1 line\",\"whiteSpace\":\"pre-line\",\"autoHighlight\":\"yes\",\"emojis\":\"top\",\"themeName\":\"41212 EWQWA\",\"videoId\":1},{\"position\":\"absolute\",\"color\":\"rgb(5, 160, 69, 1)\",\"colorDefault\":{\"r\":5,\"g\":160,\"b\":69,\"a\":1},\"colorThird\":{\"r\":64,\"g\":164,\"b\":164,\"a\":1},\"colorSecond\":{\"r\":5,\"g\":220,\"b\":22,\"a\":22},\"mainColor\":{\"r\":99,\"g\":9,\"b\":110,\"a\":1},\"fontSize\":\"32px\",\"fontFamily\":\"TheBold\",\"fontWeight\":\"300\",\"textTransform\":\"none\",\"selectedTheme\":6,\"textShadow\":\"0 0 1px #000,0 0 2px #000,0 0 3px #000,0 0 4px #000,0 0 5px #000,0 0 6px #000,0 0 7px #000,0 0 8px #000\",\"animation\":\"none\",\"left\":\"20%\",\"top\":\"520px\",\"width\":\"300px\",\"displayWordSpeed\":\"1 line\",\"whiteSpace\":\"pre-line\",\"autoHighlight\":\"yes\",\"emojis\":\"top\",\"themeName\":\"ddd zvv\",\"videoId\":1}]',1,'2023-09-01 20:48:24','2023-09-01 20:49:09');
/*!40000 ALTER TABLE `customthemes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `homes`
--

DROP TABLE IF EXISTS `homes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `homes` (
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
  `fellows` json NOT NULL,
  `blogs` json NOT NULL,
  `contactEmail` varchar(255) NOT NULL,
  `contactMailchimpKey` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `homes`
--

LOCK TABLES `homes` WRITE;
/*!40000 ALTER TABLE `homes` DISABLE KEYS */;
INSERT INTO `homes` VALUES (1,'Test','Test','Pecunia Institute is at the forefront of a financial revolution with a vision deeply rooted in societal change. Founded on the belief that finance holds the key to building a more socially connected and sustainable world, we are dedicated to pioneering innovative solutions that transcend traditional financial boundaries. Our multidisciplinary team of experts, known as Fellows, is committed to exploring the vast potential of social finance as a catalyst for positive global transformation.','At Pecunia, our mission is to empower individuals, organizations, and communities to harness the power of finance for social impact. Our relentless pursuit of groundbreaking research, coupled with a dedication to sharing knowledge, forms the cornerstone of our work. Through our extensive network and partnerships, we create and disseminate cutting-edge insights, equipping decision-makers with the tools they need to navigate the evolving landscape of finance.','Central to our mission is the Pecunia Endowment Fund that                 embodies our long-term vision for change. This endowment fund                 serves as a financial engine for sustainable transformation. It                 aims to provide the necessary resources, stability, and                 continuity to support our initiatives in perpetuity. Through                 prudent investment and strategic allocation of funds, we ensure                 that our impact continues to grow over time. The endowment fund                 is not merely a financial vehicle; it is a commitment to the                 enduring legacy of our mission. It enables us to remain at the                 forefront of pioneering research, innovative financial                 solutions, and collaborations that truly make a difference in  communities worldwide.','Aim','http://localhost:4500/uploads/1691840590563-blog-image1.jpeg','At Pecunia, our overarching mission is deeply rooted in the belief that finance can serve as a catalyst for positive global change. We strive to create a world where the potential of finance is harnessed not just for profit, but for the greater good. Our commitment extends to empowering communities, particularly those that have been marginalized or overlooked, and fostering a sense of inclusivity that transcends socioeconomic boundaries. We aim to address the most pressing challenges faced by these communities, thereby contributing to a more equitable and sustainable global landscape.','<p>Central to our mission is the Pecunia Endowment Fund that embodies our long-term vision for change. This endowment fund serves as a financial engine for sustainable transformation. It aims to provide the necessary resources, stability, and continuity to support our initiatives in perpetuity. Through prudent investment and strategic allocation of funds, we ensure that our impact continues to grow over time. The endowment fund is not merely a financial vehicle; it is a commitment to the enduring legacy of our mission. It enables us to remain at the forefront of pioneering research, innovative financial solutions, and collaborations that truly make a difference in communities worldwide.</p>','Testing','http://localhost:4500/uploads/1697494676285-b-guideline_illust01.png','Testing','<p>Examining how cognitive biases and psychological factors influence financial decision-making while aiming to develop strategies that help individuals make more informed and responsible financial choices.</p><p>&nbsp;</p>','http://localhost:4500/uploads/1691840590565-blog-image1.jpeg','Testing','http://localhost:4500/uploads/1697494878097-b-guideline_illust02.png','Testing','<p>Exploring innovative ways to create inclusive financial systems by designing financial products that cater to unique needs of underserved and marginalized communities.</p><p>&nbsp;</p>','http://localhost:4500/uploads/1691840590567-blog-image1.jpeg','Testing','http://localhost:4500/uploads/1697494878098-b-guideline_illust03.png','Testing','<p>Researching ethical banking practices, ethical investment vehicles, and how financial institutions can integrate ethical principles into their operations while maintaining profitability.</p>','http://localhost:4500/uploads/1691840590568-blog-image1.jpeg','Testing','http://localhost:4500/uploads/1697494878099-b-guideline_illust04.png','Testing','<p>Pecunia focuses on research related to financing sustainable development goals (SDGs). This includes examining financial instruments, policies, and partnerships that can mobilize capital for projects aligned with the SDGs.</p>','http://localhost:4500/uploads/1691840590581-blog-image1.jpeg','<p>Through the RARA initiative, Ritsumeikan University will promote research in unexplored areas, disseminate the results internationally, and have an impact on society by connecting<br>diverse top researchers who are strong individuals and leaders in an interdisciplinary and international manner. We will strive to provide the following.</p>','Testing','\"5,4,3,2,1\"','\"26,27\"','Testing','Testing','2023-08-05 08:48:59','2023-10-19 23:39:44');
/*!40000 ALTER TABLE `homes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `keys`
--

DROP TABLE IF EXISTS `keys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `keys` (
  `id` int NOT NULL AUTO_INCREMENT,
  `secretKey` varchar(255) NOT NULL,
  `clientKey` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keys`
--

LOCK TABLES `keys` WRITE;
/*!40000 ALTER TABLE `keys` DISABLE KEYS */;
INSERT INTO `keys` VALUES (1,'sk_test_51KYPqJLdgPiiadryDucPyp4OIBv1lCoVB4xgWyhD5jUWnit3TdwjrGWnbENcguF9fnovzLDPPzYB1ma1SDmsFJsV00wV73oDTj','pk_test_51KYPqJLdgPiiadryliSCj8R0YZ9rYVnOIECcgxmOy11EYLoIresrd5sygDAnGfN5F2rxA7t1qnT6SwPkISmDAecJ00FtNIJOiq',1,'2023-08-16 10:02:16','2023-08-16 18:08:43');
/*!40000 ALTER TABLE `keys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Profile`
--

DROP TABLE IF EXISTS `Profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Profile` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `nameEnglish` varchar(255) DEFAULT NULL,
  `tagLine` text,
  `thumbnailPath` varchar(255) NOT NULL,
  `imagePath` varchar(255) NOT NULL,
  `animatedImage` varchar(255) NOT NULL,
  `jobPost` varchar(255) DEFAULT NULL,
  `profileDesc` text,
  `websiteUrl` varchar(255) DEFAULT NULL,
  `heading` text,
  `paragraph` text,
  `featuredImage` varchar(255) DEFAULT NULL,
  `graphic1` varchar(255) DEFAULT NULL,
  `graphic2` varchar(255) DEFAULT NULL,
  `graphic3` varchar(255) DEFAULT NULL,
  `pictureSlider` json DEFAULT NULL,
  `facebookUrl` varchar(255) DEFAULT NULL,
  `twitterUrl` varchar(255) DEFAULT NULL,
  `ritsumeiUrl` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Profile`
--

LOCK TABLES `Profile` WRITE;
/*!40000 ALTER TABLE `Profile` DISABLE KEYS */;
/*!40000 ALTER TABLE `Profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profiles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `nameEnglish` varchar(255) DEFAULT NULL,
  `tagLine` text,
  `thumbnailPath` varchar(255) DEFAULT NULL,
  `imagePath` varchar(255) DEFAULT NULL,
  `animatedImage` varchar(255) DEFAULT NULL,
  `jobPost` varchar(255) DEFAULT NULL,
  `profileDesc` text,
  `websiteUrl` varchar(255) DEFAULT NULL,
  `heading` text,
  `paragraph` text,
  `featuredImage` varchar(255) DEFAULT NULL,
  `graphic1` varchar(255) DEFAULT NULL,
  `graphic2` varchar(255) DEFAULT NULL,
  `graphic3` varchar(255) DEFAULT NULL,
  `pictureSlider` json DEFAULT NULL,
  `facebookUrl` varchar(255) DEFAULT NULL,
  `twitterUrl` varchar(255) DEFAULT NULL,
  `ritsumeiUrl` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL,
  `clothAnimatedImage` varchar(255) DEFAULT NULL,
  `firstGraphicImage` varchar(255) DEFAULT NULL,
  `secondGraphicImage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

LOCK TABLES `profiles` WRITE;
/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
INSERT INTO `profiles` VALUES (1,'高橋 政代','Mr. Dominick Mitchell','次世代の視覚再建','http://localhost:4500/uploads/1697719847716-d_mitchell.9d5435b8a904d60aaea1.jpg','http://localhost:4500/uploads/1697719847723-d_mitchell.9d5435b8a904d60aaea1.jpg','http://localhost:4500/uploads/1697719847723-d_mitchell.9d5435b8a904d60aaea1.jpg','RARA Fellow','<p>1986年京都大学医学部卒業、1992年同大学大学院医学研究科修了。医学博士。<br>京都大学医学部附属病院眼科助手、アメリカ・ソーク研究所研究員、京都大学医学部附属病院探索医療センター開発部助教授を経て、（独）理化学研究所において、発生・再生科学総合研究センター　網膜再生医療研究チーム　チームリーダー、網膜再生医療研究開発プロジェクト　プロジェクトリーダーを歴任。<br>2019年より（株）ビジョンケア　代表取締役社長（現職）。</p>','https://www.vision-care.jp/','網膜変性疾患による中途失明者に、もう一度光を取り戻す希望を','<p>Dominick Mitchell, Founder and President is a distinguished member of our Pecunia Fellows, and brings a wealth of expertise and experience in the dynamic realm of Sustainable Development Finance. Dominick holds a pivotal role as the Finance Officer of the UN Global Compact Network Canada, where he championed initiatives that epitomize responsible finance practices. His career spans over a 8 years, marked by a relentless commitment to ethical and impactful financial strategies.</p><p>&nbsp;</p><p>Throughout his career, Dominick has been at the forefront of projects that have redefined responsible investing, clean energy adoption, and educational advancement. His collaborative work with major NGOs, governments, and multilateral organizations has left an indelible mark on the financial landscape, providing a light on the potential of finance to drive positive social and environmental change.</p><p>&nbsp;</p><p>At Pecunia, Dominick\'s research endeavors are a testament to his unwavering dedication to the Sustainable Development Goals (SDGs) and economic empowerment. He delves into intricate strategies aimed at broadening access to financial services, especially for those who have historically been underserved and marginalized. His work not only explores theoretical frameworks but also offers practical solutions to the pressing challenges faced by communities striving for aligning with the SDGs.</p><p>&nbsp;</p><p>Dominick Mitchell\'s work within the fellowship exemplifies our core mission: to empower finance for a socially connected and sustainable world. His background, expertise, and fervor for transformative finance serve as an invaluable asset as we collectively shape the future of social finance.&nbsp;</p>','http://localhost:4500/uploads/1692967941544-sub_takahashi-featured.jpg','http://localhost:4500/uploads/1692967941551-graphic1.png','http://localhost:4500/uploads/1692967941552-graphic2.png','http://localhost:4500/uploads/1692967941552-graphic4.png','\"[\\\"http://localhost:4500/uploads/1692967941554-takahashi_1.jpg\\\",\\\"http://localhost:4500/uploads/1692967941554-takahashi_2.jpg\\\",\\\"http://localhost:4500/uploads/1692967941559-takahasi_3.jpg\\\",\\\"http://localhost:4500/uploads/1692967941560-takahashi_4.jpg\\\"]\"','','https://twitter.com/masayomasayo','','2023-08-25 12:52:21','2023-10-19 14:13:18','http://localhost:4500/uploads/1697723987788-d_mitchell_animated.3648134f06c588c4f1ff.jpg','http://localhost:4500/uploads/1697724798796-graphic01-6.png','http://localhost:4500/uploads/1697724798796-graphic02-6.png'),(2,'佐伯 和人','Professor David Chen','Behavioral Economics and Financial Decision-Making','http://localhost:4500/uploads/1692969883834-fellows_saeki.jpg','http://localhost:4500/uploads/1697725126907-david_chen.jpg','http://localhost:4500/uploads/1697725126907-david_chen.jpg','RARA Fellow','<p>1986年京都大学医学部卒業、1992年同大学大学院医学研究科修了。医学博士。<br>京都大学医学部附属病院眼科助手、アメリカ・ソーク研究所研究員、京都大学医学部附属病院探索医療センター開発部助教授を経て、（独）理化学研究所において、発生・再生科学総合研究センター　網膜再生医療研究チーム　チームリーダー、網膜再生医療研究開発プロジェクト　プロジェクトリーダーを歴任。<br>2019年より（株）ビジョンケア　代表取締役社長（現職）。</p>','','月の水資源観測機器を開発、月の氷鉱山で「宇宙資源学」を創出し、  人類の太陽系進出をサポートする','<p>Professor David Chen is an economist whose pioneering work in the field of behavioral economics has earned him international recognition. His presence as a Pecunia Fellow adds a profound dimension to our research landscape. With a career spanning decades, Professor Chen has been at the forefront of reshaping our understanding of how psychological factors influence financial decisions.</p><p>&nbsp;</p><p>Throughout his career, Professor Chen has delved deep into the intricacies of human behavior in financial contexts. His research is a compelling exploration of the drivers behind financial decisions, unraveling the cognitive biases and psychological quirks that often guide individuals\' choices in the world of finance. His work has not only broadened our knowledge but also sparked a transformative shift in how we approach ethical and responsible financial behavior.</p><p>&nbsp;</p><p>At Pecunia, Professor Chen\'s research ventures transcend mere academic inquiry. He actively designs interventions and strategies aimed at encouraging ethical financial behavior. Through his work, he empowers individuals to make informed and responsible financial choices, contributing to a more socially connected and ethically sound financial landscape.</p><p>&nbsp;</p><p>Professor David Chen\'s fellowship at Pecunia signifies our unwavering commitment to advancing the frontiers of social finance through a deeper understanding of human behavior. His insights and interventions are invaluable as we collectively strive to create a world where finance is a powerful tool for positive change, guided by ethical and responsible choices.</p>','http://localhost:4500/uploads/1692969883835-saeki_featured.jpg','http://localhost:4500/uploads/1692969883839-saeki1.png','http://localhost:4500/uploads/1692969883839-saeki2.png','http://localhost:4500/uploads/1692969883839-graphic4.png','\"[\\\"http://localhost:4500/uploads/1692969883839-slider-1.jpg\\\",\\\"http://localhost:4500/uploads/1692969883842-slider- 2 .jpg\\\",\\\"http://localhost:4500/uploads/1692969883842-slide - 3 .jpg\\\",\\\"http://localhost:4500/uploads/1692969883843-slider-4.jpg\\\",\\\"http://localhost:4500/uploads/1692969883843-5.jpg\\\"]\"','','','https://www.isas.jaxa.jp/home/slim/SLIM/index.html','2023-08-25 13:24:43','2023-10-19 14:18:46','http://localhost:4500/uploads/1697725126908-david_chen_animated.jpg','http://localhost:4500/uploads/1697703914572-graphic09.png','http://localhost:4500/uploads/1697703948974-graphic09.png'),(3,'持丸 正明','Dr. Maria Hernandez','Ethical Banking and Finance','http://localhost:4500/uploads/1692970923182-fellows_mochimaru.jpg','http://localhost:4500/uploads/1697724903004-download01.jpeg','http://localhost:4500/uploads/1697720249193-tamaki_patel_animated.0570e2a8a4466481c92f.jpg','RARA Fellow','<p>1993年慶應義塾大学大学院博士課程 生体医工学専攻修了。博士（工学）。<br>同年、工業技術院生命工学工業技術研究所 入所。<br>2001年、改組により、産業技術総合研究所 デジタルヒューマン研究ラボ 副ラボ長。<br>2018年より、人間拡張研究センター センター長（現職）。専門は人間工学、バイオメカニクス、サービス工学。<br>現在、ISO TC 324および PC329国際議長。消費者安全調査委員会・委員長代理。</p>','https://unit.aist.go.jp/harc/','スポーツトレーニングに、人間拡張技術の新しい風を吹き込む','<p>Dr. Maria Hernandez brings a wealth of knowledge and experience to her role as a Pecunia Think Tank Fellow. Her distinguished career has seen her serve as a trusted advisor to major financial institutions, guiding them in the delicate yet crucial task of integrating ethical principles into their operations.</p><p>&nbsp;</p><p>Dr. Hernandez\'s journey in the financial industry has been marked by a profound commitment to the convergence of profitability and ethics. She understands that finance need not be divorced from social and environmental responsibility; rather, it can be a powerful instrument for positive change. Her advisory role to leading financial entities has exemplified this, as she navigates the complex landscape of ethical banking practices, sustainable investments, and responsible lending.</p><p>&nbsp;</p><p>At Pecunia, Dr. Hernandez\'s research takes center stage in exploring the intricate balance between ethical finance and profitability. Through her dedication to this pivotal research, Dr. Hernandez reinforces Pecunia\'s commitment to shaping a financial world where ethical principles and profitability coexist harmoniously.</p><p>&nbsp;</p><p>Dr. Maria Hernandez\'s fellowship at Pecunia stands as a testament to our mission. Her expertise not only enriches our research endeavors but also propels us toward a future where ethical finance is not merely an aspiration but a tangible and profitable reality.</p>','http://localhost:4500/uploads/1692970923188-mochimaru_main-scaled.jpg','http://localhost:4500/uploads/1692970923189-graphic03.png','http://localhost:4500/uploads/1692970923189-graphic04.png','http://localhost:4500/uploads/1692970923191-graphic4.png','\"[\\\"http://localhost:4500/uploads/1692970923192-Gym.png\\\",\\\"http://localhost:4500/uploads/1692970923194-mochimaru_slide2.jpg\\\",\\\"http://localhost:4500/uploads/1692970923194-mochimaru_slide3.jpg\\\",\\\"http://localhost:4500/uploads/1692970923195-mochimaru_slide4.jpg\\\"]\"','','','','2023-08-25 13:42:03','2023-10-19 14:15:03','http://localhost:4500/uploads/1697724903005-download01.jpeg','http://localhost:4500/uploads/1697703916192-graphic09.png','http://localhost:4500/uploads/1697703949777-graphic09.png'),(4,'立岩 真也','Mrs. Tamaki Patel','Impact Investing and Measurement','http://localhost:4500/uploads/1692971477416-Tateiwa_Thumbnail.jpg','http://localhost:4500/uploads/1697725166701-tamaki_patel.jpg','http://localhost:4500/uploads/1697720256448-doran_reynolds.f0f182ee34f0ebbb5766.jpg','RARA Fellow','<p>1990年東京大学大学院社会学研究科 社会学（Ａ）博士課程 単位取得退学。千葉大学 文学部 助手、信州大学医療技術短期大学部 助教授等を経て、2004年より 立命館大学大学院 先端総合学術研究科 教授（現職）。　日本社会学会 理事（2021年～）、日本生命倫理学会 理事（2021年～）等を歴任。著書に『人命の特別を言わず／言う』（筑摩書房）など。</p>','http://www.arsvi.com/index.htm','【叢書身体×社会】','<p>Mrs. Tamaki Patel, a distinguished member of Pecunia Think Tank\'s fellowship, and brings a wealth of expertise in the intricate field of Impact Investing and Measurement. Her career, characterized by a relentless pursuit of financial strategies that blend returns with positive social impact, adds a dynamic dimension to our research community.</p><p>&nbsp;</p><p>Tamaki’s journey in finance has seen her worn many hats as a certified analyst. With a commitment to making a difference, she has steered portfolios that seek to achieve not only financial returns but also meaningful social impact. Her career\'s hallmark has been the art of balancing the scales between profit and purpose, investing in ventures and initiatives that deliver tangible benefits to society.</p><p>&nbsp;</p><p>At Pecunia, Tamaki’s research plays a pivotal role in assessing the effectiveness of impact investments. Her work goes beyond the balance sheet, delving deep into the outcomes and influence of investments on social and environmental causes. Through her discerning analysis and keen insights, she contributes to our mission of empowering finance for a socially connected and sustainable world.</p><p>&nbsp;</p><p>Mrs. Tamaki Patel\'s fellowship at Pecunia exemplifies our commitment to explore and pioneer innovative financial practices that create positive ripples beyond the financial realm. Her expertise, fueled by a passion for impactful finance, is instrumental in our collective journey to transform finance into a potent force for social good and financial returns.</p>','http://localhost:4500/uploads/1692971477419-mochimaru_main-scaled.jpg','http://localhost:4500/uploads/1692971477421-b-fellows_circle02.png','http://localhost:4500/uploads/1692971477422-b-fellows_circle01.png','http://localhost:4500/uploads/1692971477422-graphic4.png','\"[\\\"http://localhost:4500/uploads/1692971477422-tateiwa_slide1.jpg\\\",\\\"http://localhost:4500/uploads/1692971477423-tateiwa_slide2.jpg\\\"]\"','','https://twitter.com/ShinyaTateiwa','https://research-db.ritsumei.ac.jp/rithp/k03/resid/S000094','2023-08-25 13:51:17','2023-10-19 14:19:26','http://localhost:4500/uploads/1697725166701-tamaki_patel_animated.jpg','http://localhost:4500/uploads/1697703917493-graphic09.png','http://localhost:4500/uploads/1697703950610-graphic09.png'),(5,'金子 健太郎','Sir. Doran Reynolds','Inclusive Financial Systems','http://localhost:4500/uploads/1692971883004-b-fellows_kaneko_nor.jpg','http://localhost:4500/uploads/1697725375720-doran_reynolds.jpg','http://localhost:4500/uploads/1697720264454-d_mitchell.9d5435b8a904d60aaea1.jpg','RARA Fellow','<p>2013年京都大学大学院 工学研究科 電子工学専攻 博士課程 修了。博士(工学)。<br>2014年京都大学 工学研究科 助教、2018年同講師を経て、2022年7月より立命館大学 総合科学技術研究機構 教授(現職)。<br>大学院在籍時にパワー半導体ベンチャーである株式会社FLOSFIA(2011年)を共同創業(初代CTO)。 そして立命館大学着任後にPATENTIX株式会社(2022年)を共同創業(CTO)。<br>文部科学大臣若手科学者賞など、これまで23の賞を授与されている。</p>','https://kaneko-lab.ritsumei.ac.jp/','パワー半導体新材料GeO2（二酸化ゲルマニウム）を実用化し、  世界の省エネルギー化に貢献したい','<p>Sir. Doran Reynolds is a prominent voice in the advocacy for inclusive financial systems, and his presence as a Pecunia Think Tank Fellow resonates deeply with our commitment to empower finance for a socially connected and sustainable world. With an career marked by tireless efforts to extend the benefits of financial services to marginalized communities, Sir. Reynolds is an exemplary advocate for financial inclusion.</p><p>&nbsp;</p><p>Throughout his career, Sir. Reynolds has spearheaded impactful microfinance programs, spanning continents and reaching communities often overlooked by traditional financial institutions. His work has brought economic empowerment and financial stability to countless individuals and families, showcasing the transformative potential of inclusive financial systems.</p><p>&nbsp;</p><p>At Pecunia, Sir. Reynolds continues his mission by conducting research that focuses on the scaling of inclusive financial systems. His work is dedicated to designing tailored financial products that cater to the unique needs and aspirations of marginalized populations. By collaborating with international experts and organizations, he contributes to the development of strategies that not only broaden access to financial services but also foster economic growth and social upliftment.</p>','http://localhost:4500/uploads/1692971883004-kaneko_main.jpg','http://localhost:4500/uploads/1692971883007-kaneko01.png','http://localhost:4500/uploads/1692971883008-kaneko02.png','http://localhost:4500/uploads/1692971883008-graphic4.png','\"[\\\"http://localhost:4500/uploads/1692971883008-kaneko_slide1.jpg\\\",\\\"http://localhost:4500/uploads/1692971883013-kaneko_slide2.jpg\\\",\\\"http://localhost:4500/uploads/1692971883014-kaneko_slide3.jpg\\\",\\\"http://localhost:4500/uploads/1692971883014-kaneko_slide4.jpg\\\",\\\"http://localhost:4500/uploads/1692971883016-kaneko_slide5.jpg\\\"]\"','','','https://research-db.ritsumei.ac.jp/rithp/k03/resid/S002551','2023-08-25 13:58:03','2023-10-19 14:22:55','http://localhost:4500/uploads/1697725375723-doran_reynolds.jpg','http://localhost:4500/uploads/1697703918453-graphic09.png','http://localhost:4500/uploads/1697703951313-graphic09.png'),(6,'Mr. Dominick Mitchell','Mr. Dominick Mitchell','Sustainable Development Finance','https://backend.pecunia.institute/uploads/1697727362784-d_mitchell.9d5435b8a904d60aaea1.jpg','https://backend.pecunia.institute/uploads/1697727362782-download01.jpeg','https://backend.pecunia.institute/uploads/1697727362794-graphic09.png','RARA Fellow','Dominick Mitchell, Founder and President is a distinguished member of our Pecunia Fellows, and brings a wealth of expertise and experience in the dynamic realm of Sustainable Development Finance. Dominick holds a pivotal role as the Finance Officer of the UN Global Compact Network Canada, where he championed initiatives that epitomize responsible finance practices. His career spans over a 8 years, marked by a relentless commitment to ethical and impactful financial strategies.',NULL,'網膜変性疾患による中途失明者に、もう一度光を取り戻す希望を','Throughout his career, Dominick has been at the forefront of projects that have redefined responsible investing, clean energy adoption, and educational advancement. His collaborative work with major NGOs, governments, and multilateral organizations has left an indelible mark on the financial landscape, providing a light on the potential of finance to drive positive social and environmental change.\n\nAt Pecunia, Dominick\'s research endeavors are a testament to his unwavering dedication to the Sustainable Development Goals (SDGs) and economic empowerment. He delves into intricate strategies aimed at broadening access to financial services, especially for those who have historically been underserved and marginalized. His work not only explores theoretical frameworks but also offers practical solutions to the pressing challenges faced by communities striving for aligning with the SDGs.\n\nDominick Mitchell\'s work within the fellowship exemplifies our core mission: to empower finance for a socially connected and sustainable world. His background, expertise, and fervor for transformative finance serve as an invaluable asset as we collectively shape the future of social finance. \n','https://backend.pecunia.institute/uploads/1697727362783-download01.jpeg','https://backend.pecunia.institute/uploads/1697727362790-download.jpeg','https://backend.pecunia.institute/uploads/1697727362790-d_mitchell.9d5435b8a904d60aaea1.jpg','https://backend.pecunia.institute/uploads/1697727362794-graphic09.png','\"[\\\"https://backend.pecunia.institute/uploads/1697727362783-tamaki_patel_animated.0570e2a8a4466481c92f (1).jpg\\\"]\"',NULL,NULL,NULL,'2023-10-19 14:56:02','2023-10-19 14:56:02','https://backend.pecunia.institute/uploads/1697727362794-graphic02-6.png','https://backend.pecunia.institute/uploads/1697727362795-doran_reynolds.f0f182ee34f0ebbb5766.jpg','https://backend.pecunia.institute/uploads/1697727362795-tamaki_patel_animated.0570e2a8a4466481c92f.jpg'),(7,'Mr. Dominick Mitchell','Mr. Dominick Mitchell','Sustainable Development Finance','https://backend.pecunia.institute/uploads/1697727368386-d_mitchell.9d5435b8a904d60aaea1.jpg','https://backend.pecunia.institute/uploads/1697727368385-download01.jpeg','https://backend.pecunia.institute/uploads/1697727368395-graphic09.png','RARA Fellow','Dominick Mitchell, Founder and President is a distinguished member of our Pecunia Fellows, and brings a wealth of expertise and experience in the dynamic realm of Sustainable Development Finance. Dominick holds a pivotal role as the Finance Officer of the UN Global Compact Network Canada, where he championed initiatives that epitomize responsible finance practices. His career spans over a 8 years, marked by a relentless commitment to ethical and impactful financial strategies.',NULL,'網膜変性疾患による中途失明者に、もう一度光を取り戻す希望を','Throughout his career, Dominick has been at the forefront of projects that have redefined responsible investing, clean energy adoption, and educational advancement. His collaborative work with major NGOs, governments, and multilateral organizations has left an indelible mark on the financial landscape, providing a light on the potential of finance to drive positive social and environmental change.\n\nAt Pecunia, Dominick\'s research endeavors are a testament to his unwavering dedication to the Sustainable Development Goals (SDGs) and economic empowerment. He delves into intricate strategies aimed at broadening access to financial services, especially for those who have historically been underserved and marginalized. His work not only explores theoretical frameworks but also offers practical solutions to the pressing challenges faced by communities striving for aligning with the SDGs.\n\nDominick Mitchell\'s work within the fellowship exemplifies our core mission: to empower finance for a socially connected and sustainable world. His background, expertise, and fervor for transformative finance serve as an invaluable asset as we collectively shape the future of social finance. \n','https://backend.pecunia.institute/uploads/1697727368385-download01.jpeg','https://backend.pecunia.institute/uploads/1697727368391-download.jpeg','https://backend.pecunia.institute/uploads/1697727368391-d_mitchell.9d5435b8a904d60aaea1.jpg','https://backend.pecunia.institute/uploads/1697727368395-graphic09.png','\"[\\\"https://backend.pecunia.institute/uploads/1697727368385-tamaki_patel_animated.0570e2a8a4466481c92f (1).jpg\\\"]\"',NULL,NULL,NULL,'2023-10-19 14:56:08','2023-10-19 14:56:08','https://backend.pecunia.institute/uploads/1697727368395-graphic02-6.png','https://backend.pecunia.institute/uploads/1697727368395-doran_reynolds.f0f182ee34f0ebbb5766.jpg','https://backend.pecunia.institute/uploads/1697727368396-tamaki_patel_animated.0570e2a8a4466481c92f.jpg'),(8,'Mr. Dominick Mitchell','Mr. Dominick Mitchell','Sustainable Development Finance','https://backend.pecunia.institute/uploads/1697727368979-d_mitchell.9d5435b8a904d60aaea1.jpg','https://backend.pecunia.institute/uploads/1697727368978-download01.jpeg','https://backend.pecunia.institute/uploads/1697727368988-graphic09.png','RARA Fellow','Dominick Mitchell, Founder and President is a distinguished member of our Pecunia Fellows, and brings a wealth of expertise and experience in the dynamic realm of Sustainable Development Finance. Dominick holds a pivotal role as the Finance Officer of the UN Global Compact Network Canada, where he championed initiatives that epitomize responsible finance practices. His career spans over a 8 years, marked by a relentless commitment to ethical and impactful financial strategies.',NULL,'網膜変性疾患による中途失明者に、もう一度光を取り戻す希望を','Throughout his career, Dominick has been at the forefront of projects that have redefined responsible investing, clean energy adoption, and educational advancement. His collaborative work with major NGOs, governments, and multilateral organizations has left an indelible mark on the financial landscape, providing a light on the potential of finance to drive positive social and environmental change.\n\nAt Pecunia, Dominick\'s research endeavors are a testament to his unwavering dedication to the Sustainable Development Goals (SDGs) and economic empowerment. He delves into intricate strategies aimed at broadening access to financial services, especially for those who have historically been underserved and marginalized. His work not only explores theoretical frameworks but also offers practical solutions to the pressing challenges faced by communities striving for aligning with the SDGs.\n\nDominick Mitchell\'s work within the fellowship exemplifies our core mission: to empower finance for a socially connected and sustainable world. His background, expertise, and fervor for transformative finance serve as an invaluable asset as we collectively shape the future of social finance. \n','https://backend.pecunia.institute/uploads/1697727368979-download01.jpeg','https://backend.pecunia.institute/uploads/1697727368983-download.jpeg','https://backend.pecunia.institute/uploads/1697727368984-d_mitchell.9d5435b8a904d60aaea1.jpg','https://backend.pecunia.institute/uploads/1697727368987-graphic09.png','\"[\\\"https://backend.pecunia.institute/uploads/1697727368979-tamaki_patel_animated.0570e2a8a4466481c92f (1).jpg\\\"]\"',NULL,NULL,NULL,'2023-10-19 14:56:08','2023-10-19 14:56:08','https://backend.pecunia.institute/uploads/1697727368988-graphic02-6.png','https://backend.pecunia.institute/uploads/1697727368988-doran_reynolds.f0f182ee34f0ebbb5766.jpg','https://backend.pecunia.institute/uploads/1697727368988-tamaki_patel_animated.0570e2a8a4466481c92f.jpg'),(9,'Mr. Dominick Mitchell','Mr. Dominick Mitchell','Sustainable Development Finance','https://backend.pecunia.institute/uploads/1697728420891-d_mitchell.9d5435b8a904d60aaea1.jpg','https://backend.pecunia.institute/uploads/1697728420890-download01.jpeg','https://backend.pecunia.institute/uploads/1697728420901-graphic09.png','RARA Fellow','Dominick Mitchell, Founder and President is a distinguished member of our Pecunia Fellows, and brings a wealth of expertise and experience in the dynamic realm of Sustainable Development Finance. Dominick holds a pivotal role as the Finance Officer of the UN Global Compact Network Canada, where he championed initiatives that epitomize responsible finance practices. His career spans over a 8 years, marked by a relentless commitment to ethical and impactful financial strategies.',NULL,'網膜変性疾患による中途失明者に、もう一度光を取り戻す希望を','Throughout his career, Dominick has been at the forefront of projects that have redefined responsible investing, clean energy adoption, and educational advancement. His collaborative work with major NGOs, governments, and multilateral organizations has left an indelible mark on the financial landscape, providing a light on the potential of finance to drive positive social and environmental change.\n\nAt Pecunia, Dominick\'s research endeavors are a testament to his unwavering dedication to the Sustainable Development Goals (SDGs) and economic empowerment. He delves into intricate strategies aimed at broadening access to financial services, especially for those who have historically been underserved and marginalized. His work not only explores theoretical frameworks but also offers practical solutions to the pressing challenges faced by communities striving for aligning with the SDGs.\n\nDominick Mitchell\'s work within the fellowship exemplifies our core mission: to empower finance for a socially connected and sustainable world. His background, expertise, and fervor for transformative finance serve as an invaluable asset as we collectively shape the future of social finance. \n','https://backend.pecunia.institute/uploads/1697728420890-download01.jpeg','https://backend.pecunia.institute/uploads/1697728420896-download.jpeg','https://backend.pecunia.institute/uploads/1697728420896-d_mitchell.9d5435b8a904d60aaea1.jpg','https://backend.pecunia.institute/uploads/1697728420900-graphic09.png','\"[\\\"https://backend.pecunia.institute/uploads/1697728420890-tamaki_patel_animated.0570e2a8a4466481c92f (1).jpg\\\"]\"',NULL,NULL,NULL,'2023-10-19 15:13:40','2023-10-19 15:13:40','https://backend.pecunia.institute/uploads/1697728420901-graphic02-6.png','https://backend.pecunia.institute/uploads/1697728420901-doran_reynolds.f0f182ee34f0ebbb5766.jpg','https://backend.pecunia.institute/uploads/1697728420901-tamaki_patel_animated.0570e2a8a4466481c92f.jpg'),(10,'Mr. Dominick Mitchell','Mr. Dominick Mitchell','Sustainable Development Finance','https://backend.pecunia.institute/uploads/1697728895220-d_mitchell.9d5435b8a904d60aaea1.jpg','https://backend.pecunia.institute/uploads/1697728895207-download01.jpeg','https://backend.pecunia.institute/uploads/1697728895229-graphic09.png','RARA Fellow','Dominick Mitchell, Founder and President is a distinguished member of our Pecunia Fellows, and brings a wealth of expertise and experience in the dynamic realm of Sustainable Development Finance. Dominick holds a pivotal role as the Finance Officer of the UN Global Compact Network Canada, where he championed initiatives that epitomize responsible finance practices. His career spans over a 8 years, marked by a relentless commitment to ethical and impactful financial strategies.',NULL,'網膜変性疾患による中途失明者に、もう一度光を取り戻す希望を','Throughout his career, Dominick has been at the forefront of projects that have redefined responsible investing, clean energy adoption, and educational advancement. His collaborative work with major NGOs, governments, and multilateral organizations has left an indelible mark on the financial landscape, providing a light on the potential of finance to drive positive social and environmental change.\n\nAt Pecunia, Dominick\'s research endeavors are a testament to his unwavering dedication to the Sustainable Development Goals (SDGs) and economic empowerment. He delves into intricate strategies aimed at broadening access to financial services, especially for those who have historically been underserved and marginalized. His work not only explores theoretical frameworks but also offers practical solutions to the pressing challenges faced by communities striving for aligning with the SDGs.\n\nDominick Mitchell\'s work within the fellowship exemplifies our core mission: to empower finance for a socially connected and sustainable world. His background, expertise, and fervor for transformative finance serve as an invaluable asset as we collectively shape the future of social finance. \n','https://backend.pecunia.institute/uploads/1697728895208-download01.jpeg','https://backend.pecunia.institute/uploads/1697728895225-download.jpeg','https://backend.pecunia.institute/uploads/1697728895225-d_mitchell.9d5435b8a904d60aaea1.jpg','https://backend.pecunia.institute/uploads/1697728895228-graphic09.png','\"[\\\"https://backend.pecunia.institute/uploads/1697728895209-tamaki_patel_animated.0570e2a8a4466481c92f (1).jpg\\\"]\"',NULL,NULL,NULL,'2023-10-19 15:21:35','2023-10-19 15:21:35','https://backend.pecunia.institute/uploads/1697728895229-graphic02-6.png','https://backend.pecunia.institute/uploads/1697728895229-doran_reynolds.f0f182ee34f0ebbb5766.jpg','https://backend.pecunia.institute/uploads/1697728895229-tamaki_patel_animated.0570e2a8a4466481c92f.jpg'),(22,'Mr. Dominick Mitchell','Mr. Dominick Mitchell','Sustainable Development Finance','https://backend.pecunia.institute/uploads/1697728896305-d_mitchell.9d5435b8a904d60aaea1.jpg','https://backend.pecunia.institute/uploads/1697728896305-download01.jpeg','https://backend.pecunia.institute/uploads/1697728896309-graphic09.png','RARA Fellow','Dominick Mitchell, Founder and President is a distinguished member of our Pecunia Fellows, and brings a wealth of expertise and experience in the dynamic realm of Sustainable Development Finance. Dominick holds a pivotal role as the Finance Officer of the UN Global Compact Network Canada, where he championed initiatives that epitomize responsible finance practices. His career spans over a 8 years, marked by a relentless commitment to ethical and impactful financial strategies.',NULL,'網膜変性疾患による中途失明者に、もう一度光を取り戻す希望を','Throughout his career, Dominick has been at the forefront of projects that have redefined responsible investing, clean energy adoption, and educational advancement. His collaborative work with major NGOs, governments, and multilateral organizations has left an indelible mark on the financial landscape, providing a light on the potential of finance to drive positive social and environmental change.\n\nAt Pecunia, Dominick\'s research endeavors are a testament to his unwavering dedication to the Sustainable Development Goals (SDGs) and economic empowerment. He delves into intricate strategies aimed at broadening access to financial services, especially for those who have historically been underserved and marginalized. His work not only explores theoretical frameworks but also offers practical solutions to the pressing challenges faced by communities striving for aligning with the SDGs.\n\nDominick Mitchell\'s work within the fellowship exemplifies our core mission: to empower finance for a socially connected and sustainable world. His background, expertise, and fervor for transformative finance serve as an invaluable asset as we collectively shape the future of social finance. \n','https://backend.pecunia.institute/uploads/1697728896305-download01.jpeg','https://backend.pecunia.institute/uploads/1697728896308-download.jpeg','https://backend.pecunia.institute/uploads/1697728896308-d_mitchell.9d5435b8a904d60aaea1.jpg','https://backend.pecunia.institute/uploads/1697728896309-graphic09.png','\"[\\\"https://backend.pecunia.institute/uploads/1697728896305-tamaki_patel_animated.0570e2a8a4466481c92f (1).jpg\\\"]\"',NULL,NULL,NULL,'2023-10-19 15:21:36','2023-10-19 15:21:36','https://backend.pecunia.institute/uploads/1697728896309-graphic02-6.png','https://backend.pecunia.institute/uploads/1697728896310-doran_reynolds.f0f182ee34f0ebbb5766.jpg','https://backend.pecunia.institute/uploads/1697728896310-tamaki_patel_animated.0570e2a8a4466481c92f.jpg'),(23,'Mr. Dominick Mitchell','Mr. Dominick Mitchell','Sustainable Development Finance','https://backend.pecunia.institute/uploads/1697728917310-d_mitchell.9d5435b8a904d60aaea1.jpg','https://backend.pecunia.institute/uploads/1697728917308-download01.jpeg','https://backend.pecunia.institute/uploads/1697728917319-graphic09.png','RARA Fellow','Dominick Mitchell, Founder and President is a distinguished member of our Pecunia Fellows, and brings a wealth of expertise and experience in the dynamic realm of Sustainable Development Finance. Dominick holds a pivotal role as the Finance Officer of the UN Global Compact Network Canada, where he championed initiatives that epitomize responsible finance practices. His career spans over a 8 years, marked by a relentless commitment to ethical and impactful financial strategies.',NULL,'網膜変性疾患による中途失明者に、もう一度光を取り戻す希望を','Throughout his career, Dominick has been at the forefront of projects that have redefined responsible investing, clean energy adoption, and educational advancement. His collaborative work with major NGOs, governments, and multilateral organizations has left an indelible mark on the financial landscape, providing a light on the potential of finance to drive positive social and environmental change.\n\nAt Pecunia, Dominick\'s research endeavors are a testament to his unwavering dedication to the Sustainable Development Goals (SDGs) and economic empowerment. He delves into intricate strategies aimed at broadening access to financial services, especially for those who have historically been underserved and marginalized. His work not only explores theoretical frameworks but also offers practical solutions to the pressing challenges faced by communities striving for aligning with the SDGs.\n\nDominick Mitchell\'s work within the fellowship exemplifies our core mission: to empower finance for a socially connected and sustainable world. His background, expertise, and fervor for transformative finance serve as an invaluable asset as we collectively shape the future of social finance. \n','https://backend.pecunia.institute/uploads/1697728917309-download01.jpeg','https://backend.pecunia.institute/uploads/1697728917315-download.jpeg','https://backend.pecunia.institute/uploads/1697728917315-d_mitchell.9d5435b8a904d60aaea1.jpg','https://backend.pecunia.institute/uploads/1697728917319-graphic09.png','\"[\\\"https://backend.pecunia.institute/uploads/1697728917310-tamaki_patel_animated.0570e2a8a4466481c92f (1).jpg\\\"]\"',NULL,NULL,NULL,'2023-10-19 15:21:57','2023-10-19 15:21:57','https://backend.pecunia.institute/uploads/1697728917319-graphic02-6.png','https://backend.pecunia.institute/uploads/1697728917319-doran_reynolds.f0f182ee34f0ebbb5766.jpg','https://backend.pecunia.institute/uploads/1697728917319-tamaki_patel_animated.0570e2a8a4466481c92f.jpg');
/*!40000 ALTER TABLE `profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `relatedblogs`
--

DROP TABLE IF EXISTS `relatedblogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `relatedblogs` (
  `id` int NOT NULL,
  `relatedBlogId` int NOT NULL,
  `blogId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `relatedblogs`
--

LOCK TABLES `relatedblogs` WRITE;
/*!40000 ALTER TABLE `relatedblogs` DISABLE KEYS */;
INSERT INTO `relatedblogs` VALUES (1,1,2,'2023-08-25 15:22:12','2023-08-25 15:22:12'),(2,2,3,'2023-08-25 15:23:23','2023-08-25 15:23:23'),(3,3,4,'2023-08-25 15:25:00','2023-08-25 15:25:00'),(4,3,5,'2023-08-25 15:26:17','2023-08-25 15:26:17'),(5,4,6,'2023-08-25 15:28:06','2023-08-25 15:28:06'),(6,5,7,'2023-08-25 15:30:15','2023-08-25 15:30:15'),(7,6,8,'2023-08-25 15:31:59','2023-08-25 15:31:59'),(8,9,11,'2023-08-25 15:44:59','2023-08-25 15:44:59'),(9,9,12,'2023-08-25 15:47:34','2023-08-25 15:47:34'),(10,11,13,'2023-08-25 15:48:47','2023-08-25 15:48:47'),(11,12,14,'2023-08-25 15:50:51','2023-08-25 15:50:51'),(12,13,15,'2023-08-25 15:52:01','2023-08-25 15:52:01'),(13,13,16,'2023-08-25 15:53:16','2023-08-25 15:53:16'),(14,15,17,'2023-08-25 15:59:09','2023-08-25 15:59:09'),(15,16,18,'2023-08-25 16:00:26','2023-08-25 16:00:26'),(16,16,19,'2023-08-25 16:02:05','2023-08-25 16:02:05'),(17,17,19,'2023-08-25 16:02:05','2023-08-25 16:02:05'),(18,18,20,'2023-08-25 16:03:04','2023-08-25 16:03:04'),(19,17,20,'2023-08-25 16:03:04','2023-08-25 16:03:04'),(20,19,21,'2023-08-25 16:04:32','2023-08-25 16:04:32'),(21,19,22,'2023-08-25 16:05:50','2023-08-25 16:05:50'),(22,20,23,'2023-08-25 16:07:08','2023-08-25 16:07:08'),(23,22,24,'2023-08-25 16:08:40','2023-08-25 16:08:40'),(24,22,25,'2023-08-25 16:10:24','2023-08-25 16:10:24'),(25,24,26,'2023-08-25 16:11:26','2023-08-25 16:11:26'),(29,22,27,'2023-08-25 17:28:01','2023-08-25 17:28:01'),(30,24,27,'2023-08-25 17:28:01','2023-08-25 17:28:01'),(31,25,27,'2023-08-25 17:28:01','2023-08-25 17:28:01');
/*!40000 ALTER TABLE `relatedblogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `secretkeys`
--

DROP TABLE IF EXISTS `secretkeys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `secretkeys` (
  `id` int NOT NULL AUTO_INCREMENT,
  `secretKey` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `clientKey` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `secretkeys`
--

LOCK TABLES `secretkeys` WRITE;
/*!40000 ALTER TABLE `secretkeys` DISABLE KEYS */;
INSERT INTO `secretkeys` VALUES (1,'sk_test_51KYPqJLdgPiiadryDucPyp4OIBv1lCoVB4xgWyhD5jUWnit3TdwjrGWnbENcguF9fnovzLDPPzYB1ma1SDmsFJsV00wV73oDTj','pk_test_51KYPqJLdgPiiadryliSCj8R0YZ9rYVnOIECcgxmOy11EYLoIresrd5sygDAnGfN5F2rxA7t1qnT6SwPkISmDAecJ00FtNIJOiq','2023-08-29 08:27:00','2023-08-31 10:35:21');
/*!40000 ALTER TABLE `secretkeys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20231018180546-add-fields-to-profiles.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `springs`
--

DROP TABLE IF EXISTS `springs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `springs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `about` text COLLATE utf8mb4_general_ci NOT NULL,
  `program` text COLLATE utf8mb4_general_ci NOT NULL,
  `businessPassage` text COLLATE utf8mb4_general_ci NOT NULL,
  `specializedField` text COLLATE utf8mb4_general_ci NOT NULL,
  `externalCommittee` text COLLATE utf8mb4_general_ci NOT NULL,
  `outline` text COLLATE utf8mb4_general_ci NOT NULL,
  `targetAudience` text COLLATE utf8mb4_general_ci NOT NULL,
  `responsibilities` text COLLATE utf8mb4_general_ci NOT NULL,
  `recruitment` text COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `springs`
--

LOCK TABLES `springs` WRITE;
/*!40000 ALTER TABLE `springs` DISABLE KEYS */;
INSERT INTO `springs` VALUES (1,'New About','The Test','Test2','Test3','Test4','Test5','Test6','Test7','Test8','2023-08-21 15:40:25','2023-08-21 16:05:50');
/*!40000 ALTER TABLE `springs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'<p>The Pecunia Endowment Fund stands as a beacon of financial strength and commitment to our mission. It represents a reservoir of resources dedicated to shaping a future where finance serves as a force for social and environmental good. This fund not only provides us with financial stability, enabling us to conduct impactful research, but it also aligns with our values of ethical and responsible finance.</p>','<p><strong>1. A Commitment to Long-Term Impact:</strong> By becoming a part of our Endowment Fund, you are investing in a sustainable legacy. Your contribution doesn\'t just impact today; it paves the way for lasting change, supporting our initiatives for generations to come.</p><p>&nbsp;</p><p><strong>2. Financial Stability, Endless Possibilities:</strong> The Endowment Fund provides financial stability, ensuring that we have the resources needed to continue our research, advocacy, and projects. With this stability, we can explore uncharted territories in social finance and seize opportunities as they arise.</p><p>&nbsp;</p><p><strong>3. Aligning Values with Investments:</strong> Our Endowment Fund prioritizes ethical and socially responsible investments. Your participation not only helps grow your wealth but also contributes to investments that align with your values, fostering a financial landscape that is both profitable and ethical.Contributing to Our Impact: Your investment in our Endowment Fund fuels our ability to make meaningful changes in the world. It supports research, projects, and advocacy that address critical global challenges, from sustainable development to financial inclusion.</p>','<p>副学長（研究・学術情報・国際連携・D&amp;I・起業事業化推進 担当）、経営学部教授<br>&nbsp;</p>','<p>経営戦略論、イノベーション論</p>','<p>国際ビジネス研究学会（理事）、研究・イノベーション学会（理事）、グリーンイノベーション基金 技術社会実装推進委員会（委員長）、EURAS（European Academy for Standardization）</p>','<p>Our Endowment Fund is structured to ensure sustainability and responsible stewardship of funds. It adheres to sound financial management practices, with a focus on ethical and sustainable investments. The Fund is overseen by a dedicated committee of financial experts and ethical investment advisors who guide its activities.</p><p>&nbsp;</p><p>The Fund\'s portfolio is thoughtfully curated to encompass a diverse range of assets, including ethical investments in sectors such as sustainable energy, responsible banking, and socially impactful ventures. These investments reflect our unwavering commitment to both financial growth and positive social and environmental outcomes.</p>','<p><strong>1. Research Excellence:</strong> The Endowment Fund supports cutting-edge research in various social finance domains, enabling us to develop innovative solutions and insights that drive positive change.</p><p>&nbsp;</p><p><strong>2. Community Initiatives: </strong>A significant portion of the Fund goes towards community-driven projects aimed at fostering financial inclusion, education, and empowerment, particularly among underserved populations.</p><p>&nbsp;</p><p><strong>3. Advocacy and Outreach:</strong> We use the Fund to advocate for ethical and sustainable finance practices, engaging with policymakers, financial institutions, and the public to promote positive change in the financial landscape.</p>','<p>RARA学生フェローとしての自覚と責任を持ち、研究活動に取り組むこと。 研究部が主宰または指定するプログラム、セミナー等に参加および発表すること。 別に定められた書類を指定の期日までに提出すること。 立命館大学研究倫理指針に基づき、高い倫理観を保持し、研究活動に携わるとともに、不正行為を行わないこと。なお、研究不正疑義発生時の対応は、「立命館大学研究活動不正行為防止規程」に基づいて行う。 研究活動支援金の執行にあたっては、「立命館大学における公的研究費の管理に関する規程」に基づき、適正に執行すること。</p>','<p>Joining our Endowment Fund is a testament to your commitment to reshaping finance for the betterment of society and the planet. To embark on this journey with us, reach out to our team today. We\'ll guide you through the process, answer your questions, and provide all the information you need to make a significant and lasting impact.</p><p>&nbsp;</p><p>Invest in a sustainable future. Join our Endowment Fund and be part of the change you want to see in the world. Together, we can empower finance for a socially connected and sustainable world.</p>','2023-08-21 16:25:59','2023-09-21 14:45:14','<p>&nbsp;It is an embodiment of our vision for long-lasting change, a testament to the enduring impact we seek to create. By investing in our Endowment Fund, you become a partner in our journey to empower finance for a socially connected and sustainable world, leaving a legacy of positive transformation for generations to come.</p>');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscriptions`
--

DROP TABLE IF EXISTS `subscriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subscriptions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_general_ci,
  `price` text COLLATE utf8mb4_general_ci,
  `programDuration` text COLLATE utf8mb4_general_ci,
  `programType` text COLLATE utf8mb4_general_ci,
  `description` text COLLATE utf8mb4_general_ci,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscriptions`
--

LOCK TABLES `subscriptions` WRITE;
/*!40000 ALTER TABLE `subscriptions` DISABLE KEYS */;
INSERT INTO `subscriptions` VALUES (1,'Ideal if your are just starting in content creation','content','10','monthly','basic','<p>description</p><p>&nbsp;</p>','2023-08-30 10:25:14','2023-08-30 11:20:44'),(2,'Skyrocket your audience and increase retention','Content 2','20','monthly','pro','<p>Description</p>','2023-08-30 10:33:48','2023-08-30 11:42:51'),(3,'Ideal if your are just starting in content creation','billed annually','16','year','basic','<p>Description</p>','2023-08-30 10:34:23','2023-08-30 11:46:10'),(4,'Skyrocket your audience and increase retention','billed annually','40','year','pro','<p>Description</p>','2023-08-30 10:34:58','2023-08-30 11:46:22'),(5,'ewkkejf','fldklajlkafds','25','monthly','basic','<p>kkjgjhjhgkhgjhgj</p>','2023-09-01 16:37:52','2023-09-01 16:37:52');
/*!40000 ALTER TABLE `subscriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `email` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `activationToken` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `status` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('cs45@yopmail.com','12345678','2023-08-30 19:48:01.428','963072d6-85ea-45b4-856c-f2fda1754722','active',1),('cs46@yopmail.com','12345678','2023-08-30 20:20:07.120','952084b0-14f2-4cd1-bd28-7fee1d413234','active',2),('cs47@yopmail.com','12345678','2023-08-30 20:27:44.116','1e39d285-9697-4370-8619-97081a5cee31','active',3);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `videos`
--

DROP TABLE IF EXISTS `videos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `videos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `videoUrl` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `fileName` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `language` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `duration` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videos`
--

LOCK TABLES `videos` WRITE;
/*!40000 ALTER TABLE `videos` DISABLE KEYS */;
INSERT INTO `videos` VALUES (1,'uploads\\1693571285055-WhatsApp Video 2023-08-23 at 15.30.12.mp4','WhatsApp Video 2023-08-23 at 15','German','24.775692','2023-09-01 12:28:05','2023-09-01 12:28:05');
/*!40000 ALTER TABLE `videos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-20 11:46:10
