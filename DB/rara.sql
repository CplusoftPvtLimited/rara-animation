-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 13, 2023 at 08:02 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rara`
--

-- --------------------------------------------------------

--
-- Table structure for table `banktransfers`
--

CREATE TABLE `banktransfers` (
  `id` int(11) NOT NULL,
  `bankTransfer` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `banktransfers`
--

INSERT INTO `banktransfers` (`id`, `bankTransfer`, `active`, `createdAt`, `updatedAt`) VALUES
(1, '<p><strong>userName:</strong>Abdullah 123</p><p><strong>password:</strong>khan</p>', 1, '2023-08-16 16:28:41', '2023-08-17 18:17:25');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `imagePath` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `fellow` int(11) DEFAULT NULL,
  `associatedFellow` int(11) DEFAULT NULL,
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
(1, 'http://localhost:4500/uploads\\1692976841088-blog1.jpg', '小西聡フェローが組織委員長を務める国際学会Transducers 2023が開催され、高橋政代フェローが基調講演を行う', '<p>小西聡フェローが組織委員長を務めた国際学会Transducers 2023が、2023年6月25日から29日にかけて国立京都国際会館で開催されました。Transducersは、機械・電気・科学・物理など多岐にわたる技術を駆使した、センサ、アクチュエータおよびそれらの材料、製造、組み立てに関する分野を幅広く扱う学際的な国際会議であり、世界各国で隔年開催されています。</p>', 1, 1, '18', 'United States', '小西聡フェローが組織委員長を務める国際学会Transducers 2023が開催され、高橋政代フェローが基調講演を行う', '2023-08-25 15:20:41', '2023-08-25 15:20:41', '2023-08-25 15:20:41', '2023-08-25 15:20:41'),
(2, 'http://localhost:4500/uploads\\1692976932254-takahashi_slide1-1.jpg', '高橋政代フェローがEMBOと神戸アイセンターが主催するバーチャルレクチャーに登壇', '<p>高橋政代フェローがEMBO(European Molecular Biology Organization)と神戸アイセンターが主催するバーチャルレクチャーに登壇します。<br>「Molecular and clinical approaches to restoring visual function」と題して、視覚路の構造・機能及び治療に関する研究が専門のBotond Roska氏、網膜疾患治療の開発を進める高橋政代フェローと増田智浩氏が登壇し、モデレーターを前田忠郎氏が務めます。プログラムの詳細は<a href=\"https://embo-org.zoom.us/webinar/register/WN_2xGDhpeKSzW-aXKcuVwgDA\">こちら</a>からご覧ください。</p>', 1, 1, '18', 'Pakistan', '高橋政代フェローがEMBOと神戸アイセンターが主催するバーチャルレクチャーに登壇', '2023-08-25 15:22:12', '2023-08-25 15:22:12', '2023-08-25 15:22:12', '2023-08-25 15:22:12'),
(3, 'http://localhost:4500/uploads\\1692977003785-takahashi_slide1-1.jpg', '「ロボティックバイオロジーで加速する再生医療事業」の講演を行いました', '<p>立命館科学技術振興会（ASTER）特別講演会「ロボティックバイオロジーで加速する再生医療事業」で講演を行いました。講演概要は<a href=\"https://www.ritsumei.ac.jp/file.jsp?id=539750\">こちら</a>をご覧ください</p>', 1, 1, '18', 'Pakistan', '「ロボティックバイオロジーで加速する再生医療事業」の講演を行いました', '2023-08-25 15:23:23', '2023-08-25 15:23:23', '2023-08-25 15:23:23', '2023-08-25 15:23:23'),
(4, 'http://localhost:4500/uploads\\1692977100528-blog4.jpg', '佐伯和人フェローが立命館大学宇宙地球探査研究センター（ESEC）初主催イベントに登壇', '<p>佐伯和人フェローがセンター長を務める立命館大学宇宙地球探査研究センター（ESEC）は8月8日に初となる主催イベントを日本科学未来館（東京・お台場）で開催します。</p><p>&nbsp;</p><p>佐伯フェローは本大学ESEC所属研究者2名とともに登壇し、各自の切り口で「私が切り拓く最新宇宙フロンティア」をテーマにショートプレゼンテーションを行い、その後ゲストとして迎える日本初の宇宙ベンチャーである株式会社ispaceの袴田武史CEOと日本の宇宙開発の現在地やアカデミアとビジネスの多様なコラボレーションの可能性について対話します。</p><p>&nbsp;</p><p>本イベントは佐伯フェローが監修し、日本科学未来館で開催中の特別展「NEO月でくらす展～宇宙開発は、月面移住の新時代へ！～」をきっかけに実現しました。</p><p>&nbsp;</p><p>詳しくは<a href=\"https://www.ritsumei.ac.jp/profile/pressrelease_detail/?id=886\">こちら</a>をご覧ください。</p>', 2, 2, '15', 'United Kingdom', '佐伯和人フェローが立命館大学宇宙地球探査研究センター（ESEC）初主催イベントに登壇', '2023-08-25 15:25:00', '2023-08-25 15:25:00', '2023-08-25 15:25:00', '2023-08-25 15:25:00'),
(5, 'http://localhost:4500/uploads\\1692977177035-blog5.jpg', '佐伯和人フェローが立命館大学宇宙地球探査研究センター（ESEC）初代センター長に就任', '<p>佐伯和人フェローが2023年7月1日に設置予定の立命館大学宇宙地球探査研究センター（英語名称：Earth &amp; Space Exploration Center(ESEC)）の初代センター長に就任し、6月29日に行われた記者会見に出席しました。</p><p>&nbsp;</p><p>会見で佐伯フェローはESECが月・惑星における人類の生存圏拡張と、将来的な居住・生活圏構築に先駆けた探査拠点となる宇宙開発・インフラ構築に取り組む日本初の研究組織として、「人類の生存圏の維持と拡大に貢献する」というビジョン実現に挑むことを宣言し、JAXAが計画し佐伯フェローらが主要メンバーとして参画する小型月着陸実証機プロジェクト（SLIM）や、月極域における水資源の存在・利用可能性の調査に向けた月極域探査ミッション（LUPEX）の搭載機器の開発・運用をはじめ、月・惑星における測量、地質・地盤調査技術や月面基地建設に関する研究を推進するなど今後の活動計画を紹介しました。</p><p>&nbsp;</p><p>詳細は<a href=\"https://www.ritsumei.ac.jp/profile/pressrelease_detail/?id=867\">こちら</a>をご覧ください。</p>', 2, 2, '18', 'Pakistan', '佐伯和人フェローが立命館大学宇宙地球探査研究センター（ESEC）初代センター長に就任', '2023-08-25 15:26:17', '2023-08-25 15:26:17', '2023-08-25 15:26:17', '2023-08-25 15:26:17'),
(6, 'http://localhost:4500/uploads\\1692977286728-blog14.jpg', '佐伯和人フェロー監修 特別展「NEO月でくらす展～宇宙開発は、月面移住の新時代へ！～」開催中です', '<p>佐伯和人フェローが監修を務める特別展「NEO月でくらす展～宇宙開発は、月面移住の新時代へ！～」が日本科学未来館（東京・お台場）で4月28日から９月３日まで開催されています。<br>本展は、月が秘める無限の可能性とそれが人類に与えるインパクト、そして何より宇宙開発への夢をかきたてながら、未来の月面での生活を疑似体験できる新感覚の体験型展覧会です。ぜひ、月での生活を疑似体験してみてください。</p><p>&nbsp;</p><p>詳細については<a href=\"https://tsukidekurasu.com/\">こちら</a>をご覧ください</p>', 2, 2, '15', 'Pakistan', '佐伯和人フェロー監修 特別展「NEO月でくらす展～宇宙開発は、月面移住の新時代へ！～」開催中です', '2023-08-25 15:28:06', '2023-08-25 15:28:06', '2023-08-25 15:28:06', '2023-08-25 15:28:06'),
(7, 'http://localhost:4500/uploads\\1692977415782-blog15.jpg', '定藤規弘フェロー、持丸正明フェローが立命館大学スポーツ健康科学総合研究所シンポジウム「Well-beingの実現に向けたスポーツ健康科学」で講演', '<p>立命館大学スポーツ健康科学総合研究所の発足を記念し、2023年6月26日にシンポジウム「Well-beingの実現に向けたスポーツ健康科学」が開催されました。</p><p>定藤規弘フェローが「個人のWell-being実現に向けて：脳神経科学の観点から」と題する講演でWell-beingが「快適」という知覚的側面と「やりがい」という主観的・心理的側面から構成されることや、人を褒めることで内発的動機付けを喚起することができ、Well-beingが学習可能であることなどを、先行研究に触れ説明しました。</p>', 3, 3, '18', 'Canada', '定藤規弘フェロー、持丸正明フェローが立命館大学スポーツ健康科学総合研究所シンポジウム「Well-beingの実現に向けたスポーツ健康科学」で講演', '2023-08-25 15:30:15', '2023-08-25 15:30:15', '2023-08-25 15:30:15', '2023-08-25 15:30:15'),
(8, 'http://localhost:4500/uploads\\1692977519358-blog16.jpg', 'スポーツ健康科学総合研究所設立記念シンポジウム 〖Well-beingの実現に向けたスポーツ健康科学〗を開催', '<p>スポーツ健康科学総合研究所の発足を記念して「Well-beingの実現に向けたスポーツ健康科学」が開催されます。</p><p>今回のシンポジウムでは、定藤規弘フェローが、個人のWell-being実現に向けて脳神経科学の観点から講演され、持丸正明フェローが、これから拡張するメタバース、インターバースの世界、未来におけるWell-beingはどのように捉えていくかを講演されます。<br>それに加え、岡田志麻フェローらが心理学的観点、社会学的観点、ロボティクス学的観点からおふたりと共にディスカッションされます。</p><p>&nbsp;</p><p>日時：6/23（金）13:30～16:30<br>場所：びわこ・くさつキャンパス＆ZOOM</p><p>詳細・お申込みは<a href=\"https://www.ritsumei.ac.jp/events/detail/?id=1356\">こちら</a>から</p>', 3, 3, '15', 'Canada', 'スポーツ健康科学総合研究所設立記念シンポジウム 〖Well-beingの実現に向けたスポーツ健康科学〗を開催', '2023-08-25 15:31:59', '2023-08-25 15:31:59', '2023-08-25 15:31:59', '2023-08-25 15:31:59'),
(9, 'http://localhost:4500/uploads\\1692977671892-blog17.jpeg', '持丸正明フェローが「バーチャルエコノミーの拡大がもたらす未来」に登壇', '<p>持丸正明フェローは、内閣府の<a href=\"https://www8.cao.go.jp/cstp/gaiyo/sip/index.html\">戦略的イノベーション創造プログラム（次期SIP）</a>の採択課題である「バーチャルエコノミー拡大に向けた基盤技術・ルールの整備」において、プログラム・ディレクター候補を務めています。</p><p>&nbsp;</p><p>この度、本課題の検討タスクフォースが、無料ウェビナー「バーチャルエコノミーの拡大がもたらす未来」を開催します。</p><p>持丸フェローをはじめ、玉城絵美氏（H2L, Inc., CEO）、望月康則氏（NEC）をゲストに迎え、中核コンセプトである「インターバース」を主題に据えた講演・パネルディスカッションが行われる予定です。</p><p>&nbsp;</p><p>詳細ならびに申込につきましては、<a href=\"https://www.moguravr.com/webinar-the-future-of-the-expanding-virtual-economy/\">こちら</a>をご覧ください</p>', 3, 3, '15', 'Germany', '持丸正明フェローが「バーチャルエコノミーの拡大がもたらす未来」に登壇', '2023-08-25 15:34:32', '2023-08-25 15:34:32', '2023-08-25 15:34:32', '2023-08-25 15:34:32'),
(11, 'http://localhost:4500/uploads\\1692978299644-blog18.jpg', '金子健太郎フェローが研究統括を務める発表内容が応用物理学会の注目講演に選出＆講演奨励賞受賞', '<p>金子健太郎フェローが研究統括を務めている発表内容が第70回応用物理学会春季学術講演会にて注目講演として取り上げられ、その講演内容に対して講演発表者である京都大学の高根倫史さんが第54回応用物理学会講演奨励賞を受賞しました。</p><p>&nbsp;</p><p>金子フェローが研究開拓を行っている新しいパワー半導体材料であるルチル型酸化ゲルマニウム(r-GeO2)は、電気自動車(EV)やパソコン等への応用による大幅な省エネ効果が期待されています。本発表は、このr-GeO2のバンドギャップ変調において重要な材料である酸化スズ(r-SnO2)の成長メカニズムを解明しました。この結果は将来的にヘテロ接合デバイスを作製する際の重要な指針となるものです。</p><p>&nbsp;</p><p>詳しくは<a href=\"https://www.jsap.or.jp/docs/pressrelease/JSAP-2023spring-chumoku-10.pdf\">プレスリリース</a>及び<a href=\"https://www.jsap.or.jp/young-scientist-presentation-award/recipients54\">受賞者一覧</a>をご覧ください。</p>', 4, 4, '18', 'United Kingdom', '金子健太郎フェローが研究統括を務める発表内容が応用物理学会の注目講演に選出＆講演奨励賞受賞', '2023-08-25 15:44:59', '2023-08-25 15:44:59', '2023-08-25 15:44:59', '2023-08-25 15:44:59'),
(12, 'http://localhost:4500/uploads\\1692978454876-blog2.jpg', '金子健太郎フェローの二酸化ゲルマニウム(GeO2)の開発記事が日経クロステックに掲載', '<p>金子健太郎フェローが研究統括を務める、二酸化ゲルマニウム(GeO2)の開発記事が日経クロステックに掲載されました。<br>立命館大学発の新しい半導体材料である事が記載されています。</p><p>記事は<a href=\"https://xtech.nikkei.com/atcl/nxt/column/18/02262/122800007/\">こちら</a>からご覧ください。</p>', 4, 4, '18', 'United Kingdom', '金子健太郎フェローの二酸化ゲルマニウム(GeO2)の開発記事が日経クロステックに掲載', '2023-08-25 15:47:34', '2023-08-25 15:47:34', '2023-08-25 15:47:34', '2023-08-25 15:47:34'),
(13, 'http://localhost:4500/uploads\\1692978527492-blog2.jpg', '金子健太郎フェローが Patentix（パテンティクス）株式会社を創業', '<p>金子健太郎フェローが共同創業者・取締役CTOを務める、新しい半導体材料の開発と知財戦略を柱とする新しいディープテックベンチャー Patentix（パテンティクス）株式会社を創業しました。</p><p>&nbsp;</p><p>金子フェローは、2011年に酸化ガリウムパワーデバイスのディープテックベンチャーである<a href=\"https://flosfia.com/\">株式会社FLOSFIA</a>を共同創業し、現在も共同創業者株主を務めています。同社は、現在京都市内に自社の研究開発センターを構えております。</p><p>この度、2社目のディープテックベンチャーとして、立命館大学発のスタートアップである Patentix（パテンティクス）株式会社を創業いたしました。</p><p>&nbsp;</p><p>今後の展開にご期待ください</p>', 4, 4, '18', 'United States', '金子健太郎フェローが Patentix（パテンティクス）株式会社を創業', '2023-08-25 15:48:47', '2023-08-25 15:48:47', '2023-08-25 15:48:47', '2023-08-25 15:48:47'),
(14, 'http://localhost:4500/uploads\\1692978651434-blog15.jpg', '定藤規弘フェロー、持丸正明フェローが立命館大学スポーツ健康科学総合研究所シンポジウム「Well-beingの実現に向けたスポーツ健康科学」で講演', '<p>立命館大学スポーツ健康科学総合研究所の発足を記念し、2023年6月26日にシンポジウム「Well-beingの実現に向けたスポーツ健康科学」が開催されました。</p><p>定藤規弘フェローが「個人のWell-being実現に向けて：脳神経科学の観点から」と題する講演でWell-beingが「快適」という知覚的側面と「やりがい」という主観的・心理的側面から構成されることや、人を褒めることで内発的動機付けを喚起することができ、Well-beingが学習可能であることなどを、先行研究に触れ説明しました</p>', 5, 5, '18', 'Australia', '定藤規弘フェロー、持丸正明フェローが立命館大学スポーツ健康科学総合研究所シンポジウム「Well-beingの実現に向けたスポーツ健康科学」で講演', '2023-08-25 15:50:51', '2023-08-25 15:50:51', '2023-08-25 15:50:51', '2023-08-25 15:50:51'),
(15, 'http://localhost:4500/uploads\\1692978721696-blog16.jpg', 'スポーツ健康科学総合研究所設立記念シンポジウム 〖Well-beingの実現に向けたスポーツ健康科学〗を開催', '<p>スポーツ健康科学総合研究所の発足を記念して「Well-beingの実現に向けたスポーツ健康科学」が開催されます。</p><p>今回のシンポジウムでは、定藤規弘フェローが、個人のWell-being実現に向けて脳神経科学の観点から講演され、持丸正明フェローが、これから拡張するメタバース、インターバースの世界、未来におけるWell-beingはどのように捉えていくかを講演されます。<br>それに加え、岡田志麻フェローらが心理学的観点、社会学的観点、ロボティクス学的観点からおふたりと共にディスカッションされます。</p><p>&nbsp;</p><p>日時：6/23（金）13:30～16:30<br>場所：びわこ・くさつキャンパス＆ZOOM</p><p>詳細・お申込みは<a href=\"https://www.ritsumei.ac.jp/events/detail/?id=1356\">こちら</a>から</p>', 5, 5, '15', 'United States', 'スポーツ健康科学総合研究所設立記念シンポジウム 〖Well-beingの実現に向けたスポーツ健康科学〗を開催', '2023-08-25 15:52:01', '2023-08-25 15:52:01', '2023-08-25 15:52:01', '2023-08-25 15:52:01'),
(16, 'http://localhost:4500/uploads\\1692978796046-okada1.jpg', '岡田志麻研究室が取り組む研究活動のご紹介', '<p>岡田志麻フェローの研究室では、市販のカメラで対面相手の動画を計測し、逐次的に画像解析することで、自律神経の反応（血管の情報や脈拍など）、表情、行動（体動、うなずき動作など）を抽出し、対話の中での相手の本当の感情や気持ちを推定する技術を開発しています。<br>写真は、そのテスト実験における計測結果のAR（Augmented Reality）表示をしたものです。</p><p>&nbsp;</p><p>表情の情報に加え、自律神経や体動情報を参照することで、マスクで表情の一部が隠れていても感情の推定が可能です。また、表情に出にくい感情や表情とは異なる感情（笑いながら怒る、悲しいけど怒る）も推定することが可能になりました。<br>この技術を活用して、多様な相手と対話する際に、うかがい知れない相手の本当の感情を知り、意図しない諍いを低減することを目指しています</p>', 5, 5, '18', 'Canada', '岡田志麻研究室が取り組む研究活動のご紹介', '2023-08-25 15:53:16', '2023-08-25 15:53:16', '2023-08-25 15:53:16', '2023-08-25 15:53:16'),
(17, 'http://localhost:4500/uploads\\1692979149210-blog7.jpg', '藤田聡アソシエイトフェローがABEMAヒルズに出演', '<p>藤田聡アソシエイトフェローらの研究グループがポーラ化成工業と共同で研究を行い、世界で初めて筋力トレーニングが肌の若返りに効果的であることを明らかにしました。</p><p>&nbsp;</p><p>本研究成果は2023年7月25日にABEMAニュース番組ABEMAヒルズで紹介され、藤田アソシエイトフェローがリモートで出演しました。</p><p>&nbsp;</p><p>本研究では筋力トレーニングが真皮と呼ばれるコラーゲン等を含む皮膚の層の厚みを増加させる効果があることがわかりました。<br>有酸素運動と筋力トレーニングが肌に与える効果を観察した結果、両方とも真皮の弾力性と構造を改善する効果があるものの、厚みの増加は筋力トレーニングのみに見られました。</p><p>&nbsp;</p><p>真皮の厚みは年齢とともに薄くなり見た目年齢に影響する部分で、筋力トレーニングが肌に与える美容効果が人々の運動促進に繋がることが期待されます。</p><p>&nbsp;</p><p>なお、本研究成果は2023年6月23日付でScientifc Reportsに掲載され、ワシントンポスト紙や産経新聞にも取り上げられました。</p><p>&nbsp;</p><p>詳しくは<a href=\"https://www.nature.com/articles/s41598-023-37207-9\">こちら</a>より論文をご覧ください</p>', 6, 6, '18', 'Canada', '藤田聡アソシエイトフェローがABEMAヒルズに出演', '2023-08-25 15:59:09', '2023-08-25 15:59:09', '2023-08-25 15:59:09', '2023-08-25 15:59:09'),
(18, 'http://localhost:4500/uploads\\1692979226413-blog9.jpg', '藤田聡 RARAアソシエイトフェローがNHK総合「あさいち」に出演', '<p>藤田聡 RARAアソシエイトフェローが、<br>NHK総合「あさいち」『新生活がみちがえる!たんぱく質ライフのすすめ』</p><p>に出演されます。</p><p>日時：5月22日（月）午前8：15～9：55</p><p>番組に関する情報は<a href=\"https://www.nhk.jp/p/asaichi/ts/KV93JMQRY8/schedule/te/K2932QPNP4/\">こちら</a></p>', 6, 6, '15', 'United States', '藤田聡 RARAアソシエイトフェローがNHK総合「あさいち」に出演', '2023-08-25 16:00:26', '2023-08-25 16:00:26', '2023-08-25 16:00:26', '2023-08-25 16:00:26'),
(19, 'http://localhost:4500/uploads\\1692979325446-blog10.jpg', '野坂秀之アソシエイトフェローが「フォトニックネットワーク研究会」に招待講演として登壇', '<p>2023年3月1日～2日に沖縄県立博物館にて開催された「フォトニックネットワーク研究会」において、「Beyond 5Gに向けた高速ビームステアリング技術」をテーマに、招待講演を行いました。</p><p>プログラムは<a href=\"https://ken.ieice.org/ken/program/index.php?tgs_regid=37804c8ff0ef29adbf201e48822124a4fa58ddb596912f3ec577caa901ad239a&amp;tgid=IEICE-PN\">こちら</a>からご覧いただけます。</p>', 6, 6, '18', 'Australia', '野坂秀之アソシエイトフェローが「フォトニックネットワーク研究会」に招待講演として登壇', '2023-08-25 16:02:05', '2023-08-25 16:02:05', '2023-08-25 16:02:05', '2023-08-25 16:02:05'),
(20, 'http://localhost:4500/uploads\\1692979384745-blog2.jpg', '野坂秀之アソシエイトフェローが情報通信研究機構の委託研究に採択', '<p>野坂秀之アソシエイトフェローらが、情報通信研究機構（NICT）の委託研究「Beyond 5G機能実現型プログラム」のうち一般課題」に採択されました。</p><p>今後「サイバーフィジカルインフラに向けた高信頼シームレスアクセスネットワークに関する研究開発」をテーマに研究活動を行い、野坂アソシエイトフェローは大容量通信デバイスの研究を担当します。</p><p>&nbsp;</p><p>本件に関する本大学プレスリリースは<a href=\"https://www.ritsumei.ac.jp/profile/pressrelease_detail/?id=781\">こちら</a>からご覧いただけます。</p>', 7, 7, '18', 'Canada', '野坂秀之アソシエイトフェローが情報通信研究機構の委託研究に採択', '2023-08-25 16:03:04', '2023-08-25 16:03:04', '2023-08-25 16:03:04', '2023-08-25 16:03:04'),
(21, 'http://localhost:4500/uploads\\1692979472468-blog11.png', '林勇吾アソシエイトフェローがGeneral Chairを務める国際会議を開催予定', '<p>林勇吾アソシエイトフェローがGeneral Chairを務める国際会議「29th International Conference on Collaboration Technologies and Social Computing （CollabTech 2023）」が、2023年8月29日～9月1日の期間、本大学大阪いばらきキャンパスで開催を予定しております。</p><p>&nbsp;</p><p>論文投稿についても受付を行っています。詳細については<a href=\"http://www.hayashilab.cp.ritsumei.ac.jp/collabtech2023/\">こちら</a>をご覧ください</p>', 7, 7, '15', 'Germany', '林勇吾アソシエイトフェローがGeneral Chairを務める国際会議を開催予定', '2023-08-25 16:04:32', '2023-08-25 16:04:32', '2023-08-25 16:04:32', '2023-08-25 16:04:32'),
(22, 'http://localhost:4500/uploads\\1692979550176-blog12.jpg', '「リアルタイム視線フィードバックと教育用会話エージェントを用いた協調的学習支援」に関する研究紹介', '<p>アクティブラーニングに代表されるように，学習者が他者と協調的に話し合いながら学ぶことは，単独で学習するよりもより深い理解へとつながるとされています。しかし、初学習者には，うまく知識を再構成するためのメタ認知や共通理解の構築に失敗することがあります。</p><p><br>本研究では、学習支援システムを用いて学習活動を支援するためにどういったインタフェースを組み合わせると有効なのかを検討しました。学習者が遠隔で協調的に説明活動を行うオンライン場面を想定して，2種類のインタフェースを考案しています。</p><p><br>それは、</p><ul><li>PC画面に相手の視線情報がリアルタイムに表示され，相手のアウェアネス（存在感）を喚起させるインタフェースと、</li><li>学習者の発言内容に応じてメタ認知を喚起させるファシリテーションを提示する会話エージェントでした。</li></ul><p>実験の結果，両者を組み合わせて用いることで学習内容に関する理解度が向上することが明らかになりました。この結果は、オンライン学習が増えている現代においてどういったインタフェース技術が有効なのかを心理学実験により示すことができました。</p><p>&nbsp;</p><p>論文は<a href=\"https://link.springer.com/article/10.1007/s11412-020-09333-3\">こちら</a>からご覧ください</p>', 7, 7, '18', 'Canada', '「リアルタイム視線フィードバックと教育用会話エージェントを用いた協調的学習支援」に関する研究紹介', '2023-08-25 16:05:50', '2023-08-25 16:05:50', '2023-08-25 16:05:50', '2023-08-25 16:05:50'),
(23, 'http://localhost:4500/uploads\\1692979628946-hayashi01.jpg', 'AIを用いた仮想パートナーとの集団問題解決に関する研究状況について', '<p>本研究では、集団での協同問題解決において、グループのどのような振る舞いが、新しい視点を発見して問題の解決に有効なのかを実験的に検討しました。</p><p><br>本研究では、錯視の原理を応用した規則発見課題（林・三輪・森田，2007, 認知科学）を題材として、5名の仮想的なグループメンバー（会話エージェント）が チャットを通じて実験参加者1名と一緒に問題解決を行います。この実験では、社会心理学の分野で批判的な思考や創造性を促進するうえで有用とされている異なる意見を提示する「少数派」の存在が問題解決にどのような影響を及ぼすのかを検討しました。</p><p><br>実験の結果、1名の異なる意見を提示する少数派条件のほうが3名の異なる意見を提示する対立条件よりも問題解決における視点取得のプロセスを促進することが明らかになりました。この結果は，人の集団問題解決で知識創発にどういったインタラクションの要因が有効かを示すことができました。</p><p>&nbsp;</p><p>論文は<a href=\"https://onlinelibrary.wiley.com/doi/10.1111/cogs.12587\">こちら</a>からご覧ください。</p>', 8, 8, '18', 'Australia', 'AIを用いた仮想パートナーとの集団問題解決に関する研究状況について', '2023-08-25 16:07:08', '2023-08-25 16:07:08', '2023-08-25 16:07:08', '2023-08-25 16:07:08'),
(24, 'http://localhost:4500/uploads\\1692979720142-hirono_youtube.jpg', '廣野美和アソシエイトフェローがKDDIの動画オンデマンドサービス「リベラルアーツプログラム for Business」にて一帯一路を解説', '<p>KDDIが開設するビジネスパーソン向けのオンデマンドサービス「リベラルアーツプログラム&nbsp;for Business」にて廣野美和アソシエイトフェローの動画が公開されました。この動画では中国の国際関係を専門とする廣野アソシエイトフェローが中国の経済圏構想である一帯一路の実態を解説します。</p><p>&nbsp;</p><p>ダイジェスト版の動画は<a href=\"https://www.youtube.com/watch?v=jykb8yFRvS8\">こちら</a>をご覧ください。</p><p>「リベラルアーツプログラム&nbsp;for Business」は<a href=\"https://aeonconnect.jp/liberal_arts/\">こちら</a></p>', 8, 8, '18', 'United States', '廣野美和アソシエイトフェローがKDDIの動画オンデマンドサービス「リベラルアーツプログラム for Business」にて一帯一路を解説', '2023-08-25 16:08:40', '2023-08-25 16:08:40', '2023-08-25 16:08:40', '2023-08-25 16:08:40'),
(25, 'http://localhost:4500/uploads\\1692979824973-blog2.jpg', 'ネパールでの若手育成事業の活動レポートについて', '<p>廣野美和アソシエイトフェローが、ネパールの開発問題と大国の役割に関する理論や既存研究、フィールドワークの方法について、現地の国際機関やNGOと協力して、若手育成事業を実施しました。</p><p>次世代リーダーの卵である若者同士が共同で課題解決を目指すプロジェクトを実行しました。</p><p>&nbsp;</p><p>取り組みが注目され、主要メディアThe Kathmandu Postでも取り上げられました。記事は<a href=\"https://kathmandupost.com/art-culture/2023/02/15/a-transformative-educational-trip\">こちら</a>からご覧いただけます。</p><p>また本大学の<a href=\"https://www.ritsumei.ac.jp/news/detail/?id=3070\">Webサイト</a>でも紹介されています。</p>', 9, 9, '18', 'Canada', 'ネパールでの若手育成事業の活動レポートについて', '2023-08-25 16:10:24', '2023-08-25 16:10:24', '2023-08-25 16:10:24', '2023-08-25 16:10:24'),
(26, 'http://localhost:4500/uploads\\1692979886831-blog2.jpg', '廣野美和アソシエイトフェローの共著が公開', '<p>廣野美和アソシエイトフェローがJICA緒方貞子平和開発研究所が実施したプロジェクト「持続的な平和に向けた国際協力の再検討：適応的平和構築とは何か」の一環で取り組んだ共著e-book<i> Adaptive Peacebuilding: A New Approach to Sustaining Peace in the 21st Century </i>が公開されました。廣野アソシエイトフェローが担当した章<i>“</i>China’s Peacebuilding in South Sudan: ‘Top-down’ Adaptation and Its Effectiveness” では中国が南スーダンで平和構築活動を展開する際に、自らのイデオロギーに基づいた一方向的なものであったか、あるいは現地に適応的（Adaptive）な平和構築アプローチであったか、そして中国のアプローチが平和構築にどう有効であったかを分析しています。</p><p>&nbsp;</p><p>廣野アソシエイトフェローの担当章は<a href=\"https://link.springer.com/chapter/10.1007/978-3-031-18219-8_9\">こちら</a>からご覧ください。</p>', 9, 9, '18', 'United Kingdom', '廣野美和アソシエイトフェローの共著が公開', '2023-08-25 16:11:26', '2023-08-25 16:11:26', '2023-08-25 16:11:26', '2023-08-25 16:11:26'),
(27, 'http://localhost:4500/uploads\\1692979966378-kobayasih_slide04.jpg', '論文がECS Journal of Solid State Science and Technologyに掲載', '<p>近赤外光で電子移動を起こす有機無機複合ナノ材料に関する論文（Near-Infrared-Light Triggered Electron Transfer from Ag2S Nanocrystals to Perylene Bisimide）が、ECS Journal of Solid State Science and Technologyに掲載されました。</p><p>&nbsp;</p><p>論文は<a href=\"https://doi.org/10.1149/2162-8777/ac93b2\">こちら</a>からご覧いただけます。</p>', 10, 0, '18', 'United States', '論文がECS Journal of Solid State Science and Technologyに掲載', '2023-08-25 16:12:46', '2023-08-25 16:12:46', '2023-08-25 16:12:46', '2023-08-25 17:28:01');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`, `createdAt`, `updatedAt`) VALUES
(14, 'RARA Commons', '2023-08-08 08:57:48', '2023-08-08 08:57:48'),
(15, 'お知らせ', '2023-08-08 08:57:56', '2023-08-25 13:21:43'),
(16, 'column', '2023-08-08 08:58:05', '2023-08-08 08:58:05'),
(17, 'update information', '2023-08-08 08:58:16', '2023-08-08 08:58:16'),
(18, '研究活動レポート', '2023-08-08 08:58:38', '2023-08-25 12:59:25');

-- --------------------------------------------------------

--
-- Table structure for table `coinbases`
--

CREATE TABLE `coinbases` (
  `id` int(11) NOT NULL,
  `checkoutId` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `homes`
--

CREATE TABLE `homes` (
  `id` int(11) NOT NULL,
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
  `fellows` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`fellows`)),
  `blogs` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`blogs`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `homes`
--

INSERT INTO `homes` (`id`, `mainHeading`, `mainSubHeading`, `mainAbout`, `mainEstablish`, `mainDescription`, `mainAim`, `mainResearchImage`, `mainResearchTitle`, `mainResearchDescription`, `card1Heading`, `card1Image`, `card1Title`, `card1Description`, `card1InsideImage`, `card2Heading`, `card2Image`, `card2Title`, `card2Description`, `card2InsideImage`, `card3Heading`, `card3Image`, `card3Title`, `card3Description`, `card3InsideImage`, `card4Heading`, `card4Image`, `card4Title`, `card4Description`, `card4InsideImage`, `cardGuidelineDescription`, `contactHeading`, `contactEmail`, `contactMailchimpKey`, `createdAt`, `updatedAt`, `fellows`, `blogs`) VALUES
(1, 'Testing', 'Testing', 'Testing', 'Testing', '<p>Testing</p>', 'Aim', 'http://localhost:4500/uploads/1691840590563-blog-image1.jpeg', 'Testing', '<p>Testing</p>', 'Testing', 'http://localhost:4500/uploads/1691840590565-blog-image1.jpeg', 'Testing', '<p>Testing</p>', 'http://localhost:4500/uploads/1691840590565-blog-image1.jpeg', 'Testing', 'http://localhost:4500/uploads/1691840590566-blog-image1.jpeg', 'Testing', '<p>Testing</p>', 'http://localhost:4500/uploads/1691840590567-blog-image1.jpeg', 'Testing', 'http://localhost:4500/uploads/1691840590568-blog-image1.jpeg', 'Testing', '<p>Testing</p>', 'http://localhost:4500/uploads/1691840590568-blog-image1.jpeg', 'Testing', 'http://localhost:4500/uploads/1691840590574-blog-image1.jpeg', 'Testing', '<p>Testing</p>', 'http://localhost:4500/uploads/1691840590581-blog-image1.jpeg', '<p>Testing</p>', 'Testing', 'Testing', 'Testing', '2023-08-05 08:48:59', '2023-08-26 22:39:46', '\"9,10\"', '\"17,3\"');

-- --------------------------------------------------------

--
-- Table structure for table `keys`
--

CREATE TABLE `keys` (
  `id` int(11) NOT NULL,
  `secretKey` varchar(255) NOT NULL,
  `clientKey` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `keys`
--

INSERT INTO `keys` (`id`, `secretKey`, `clientKey`, `active`, `createdAt`, `updatedAt`) VALUES
(1, 'sk_test_51KYPqJLdgPiiadryDucPyp4OIBv1lCoVB4xgWyhD5jUWnit3TdwjrGWnbENcguF9fnovzLDPPzYB1ma1SDmsFJsV00wV73oDTj', 'pk_test_51KYPqJLdgPiiadryliSCj8R0YZ9rYVnOIECcgxmOy11EYLoIresrd5sygDAnGfN5F2rxA7t1qnT6SwPkISmDAecJ00FtNIJOiq', 1, '2023-08-16 10:02:16', '2023-08-16 18:08:43');

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nameEnglish` varchar(255) DEFAULT NULL,
  `tagLine` text DEFAULT NULL,
  `thumbnailPath` varchar(255) DEFAULT NULL,
  `imagePath` varchar(255) DEFAULT NULL,
  `animatedImage` varchar(255) DEFAULT NULL,
  `jobPost` varchar(255) DEFAULT NULL,
  `profileDesc` text DEFAULT NULL,
  `websiteUrl` varchar(255) DEFAULT NULL,
  `heading` text DEFAULT NULL,
  `paragraph` text DEFAULT NULL,
  `featuredImage` varchar(255) DEFAULT NULL,
  `graphic1` varchar(255) DEFAULT NULL,
  `graphic2` varchar(255) DEFAULT NULL,
  `graphic3` varchar(255) DEFAULT NULL,
  `pictureSlider` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`pictureSlider`)),
  `facebookUrl` varchar(255) DEFAULT NULL,
  `twitterUrl` varchar(255) DEFAULT NULL,
  `ritsumeiUrl` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`id`, `name`, `nameEnglish`, `tagLine`, `thumbnailPath`, `imagePath`, `animatedImage`, `jobPost`, `profileDesc`, `websiteUrl`, `heading`, `paragraph`, `featuredImage`, `graphic1`, `graphic2`, `graphic3`, `pictureSlider`, `facebookUrl`, `twitterUrl`, `ritsumeiUrl`, `createdAt`, `updatedAt`) VALUES
(1, '高橋 政代', 'Masayo Takahashi', '次世代の視覚再建', 'http://localhost:4500/uploads/1692967941542-takahashi-thumbnail.jpg', 'http://localhost:4500/uploads/1692967941533-takahashi_imagepath.jpg', 'http://localhost:4500/uploads/1692967941540-takahashi_imagepath.jpg', 'RARA Fellow', '<p>1986年京都大学医学部卒業、1992年同大学大学院医学研究科修了。医学博士。<br>京都大学医学部附属病院眼科助手、アメリカ・ソーク研究所研究員、京都大学医学部附属病院探索医療センター開発部助教授を経て、（独）理化学研究所において、発生・再生科学総合研究センター　網膜再生医療研究チーム　チームリーダー、網膜再生医療研究開発プロジェクト　プロジェクトリーダーを歴任。<br>2019年より（株）ビジョンケア　代表取締役社長（現職）。</p>', 'https://www.vision-care.jp/', '網膜変性疾患による中途失明者に、もう一度光を取り戻す希望を', '<p>視覚再建を実現するために、iPS細胞から網膜組織を作製し、それを患者網膜に移植する再生医療の実現を目指しています。視覚再建の実現には、移植組織の改良だけでなく、治療後リハビリテーションや新しい検査法など患者側要因を含む周辺技術の開発、さらには再生以外の新しい視機能向上をもたらす技術の開発が必要です。本研究では、視覚の学術基盤を確立し、科学に基づく新しい技術を創出することを目的にしています。</p><p>&nbsp;</p><p>これまで、網膜変性疾患による中途失明者に対し、iPS細胞から分化誘導した網膜組織の移植による視機能回復の臨床応用研究を実施してきました。臨床研究で得られた学術的・臨床知見は高い評価を得ていますが、再生医療の世界的定着には再生組織の高度化・最適化および再生組織の効果を最大化する周辺技術の開発実装が急務であり、各技術の学術基盤の確立が必須であると考えていることから、今回の研究テーマに取り組むことにいたしました。</p><p>&nbsp;</p><p>本研究では、世界が享受する先進的医療を創造するための土台作りとして、視覚再建に向けたシーズの創出、シーズ開発早期からの産業化に向けた環境整備、国際的協働の基盤整備を目指す予定です。</p><p>我々のビジョンは、日本に限ることなく、すべての患者さんのために、あらゆる解決策を提供することです。</p><p>&nbsp;</p><p>今後の活動に向けては、次世代の視覚再建にむけて研究体制の整備を行います。特に、視覚再建に向けたシーズの創出、シーズ開発早期からの産業化に向けた環境整備、国際的協働の基盤整備を行う予定です。また、再生医療や周辺技術の研究を進め、同時に産業化を視野に、学内の関連学部と連携しシーズの特許申請に備えていきたいと考えています。国際的協働にむけては、国際協力機関と合同研究会を開催し、研究・医療・産業化に関する連携体制の礎を築いてまいります。</p><p>&nbsp;</p><p>本研究を通じて、産学連携の新しいモデルを創造することにより、視覚研究と網膜医療を円滑に循環させ、世界で享受される先進的医療の提供・実現を目指します。それは次世代の社会を作っていくことであり、あらゆる分野に寄与できると考えています。</p><p>&nbsp;</p><p>――パートナーシップについて</p><p>視覚科学に携わる研究者との協働はもちろんのこと、開発した技術の事業化には、特許を含む知財スペシャリストとの連携が必要です。本学発の技術を世界に届けていくために、学内の知財教育担当者と定期的な交流連携のもとで戦略会議・研究活動を推進していきたい。</p><p>このような取り組みはこれまでの研究室ではほとんど行われていませんが、今後の積極的な研究開発・産学連携にむけて必要な取り組みであると考えています。</p><p>&nbsp;</p><p>――研究連携で大切にしていること</p><p>様々な分野の研究者がそれぞれの得意を持ち寄り、視覚再建の実現という同一のビジョンを共有しながらの協働を促進したいです。一方で、参加メンバーが強制されて動くのではなく、やりがいを感じて自発的にプロジェクトに参加できる環境を整えていきたいと考えています。</p><p>&nbsp;</p>', 'http://localhost:4500/uploads/1692967941544-sub_takahashi-featured.jpg', 'http://localhost:4500/uploads/1692967941551-graphic1.png', 'http://localhost:4500/uploads/1692967941552-graphic2.png', 'http://localhost:4500/uploads/1692967941552-graphic4.png', '\"[\\\"http://localhost:4500/uploads/1692967941554-takahashi_1.jpg\\\",\\\"http://localhost:4500/uploads/1692967941554-takahashi_2.jpg\\\",\\\"http://localhost:4500/uploads/1692967941559-takahasi_3.jpg\\\",\\\"http://localhost:4500/uploads/1692967941560-takahashi_4.jpg\\\"]\"', '', 'https://twitter.com/masayomasayo', '', '2023-08-25 12:52:21', '2023-08-25 12:52:21'),
(2, '佐伯 和人', 'Kazuto Saiki', '人類の月や火星進出を推進する月の水資源探査研究', 'http://localhost:4500/uploads/1692969883834-fellows_saeki.jpg', 'http://localhost:4500/uploads/1692969883819-saeki_image.jpg', 'http://localhost:4500/uploads/1692969883825-saeki_image.jpg', 'RARA Fellow', '<p>1995年、東京大学大学院理学系研究科鉱物学教室で博士(理学)取得。<br>ブレーズパスカル大学（フランス）研究員、秋田大学 助手・講師、大阪大学 准教授を経て、立命館大学総合科学技術研究機構 教授（現職）。<br>JAXA月探査「かぐや」計画をはじめとする複数の月探査プロジェクトに参加。月の科学に関する著書が複数あり、 『月はぼくらの宇宙港』（新日本出版社）は2017年度の青少年読書感想文全国コンクールの課題図書（中学校の部）に選定。</p>', '', '月の水資源観測機器を開発、月の氷鉱山で「宇宙資源学」を創出し、  人類の太陽系進出をサポートする', '<p>人類史上初めての商用宇宙資源となる月の極域の水資源の探査と採掘がまもなく始まります。 この水資源の探査を行い、水分子蓄積メカニズム解明をすることを皮切りに「宇宙資源学」を創出し、人類の月・火星進出を強力にサポートしたいと考えています。</p><p>&nbsp;</p><p>今、人類は大航海時代と産業革命が同時に起きるような人類史上の大転換期にいます。 かつての産業革命を推進した資源は、鉄鉱石、石灰岩、石炭の三種の岩石でした。 今日の宇宙大航海時代の鍵となる資源は月の極域にある水の氷です。この氷をロケット燃料に転換することで、人類の太陽系進出が加速します。 水の起源や移動・濃集メカニズムの解明は、太陽系の天体での生命の起源を解明することにもつながります。</p><p>&nbsp;</p><p>鉱山開発は地質学を産み出し、そこで発見された化石世界の研究から進化論も産まれました。 私は日本の鉱山で地質学を勉強させてもらいましたが、月の氷鉱山フィールドで、人類が新たな知や価値観を得ることを、 「宇宙資源学」を創出することにより手助けできれば幸いです。また、月の水資源を核として太陽系の国際地図が作り始められる時に、 日本が平和な宇宙秩序をつくるリーダーとなれるよう、宇宙資源学でサポートしたいと考えています。</p><p>&nbsp;</p><p>2023年度には月着陸実証機SLIM計画が月面へのピンポイント着陸技術を実証し、 2024年度以降に月極域探査機LUPEX計画によって月の極域での水資源探査が始まります。 私はその両方に観測機器の開発・運用で参加しているので、月探査の最新データを取得しつつ、水資源の濃集メカニズムを解明する室内実験を併行して行います。 そして最先端のデータを取得している優位性を活用して宇宙資源学の研究グループを組織したいと考えています。</p><p>&nbsp;</p><p>かつての石油開発ではセブンシスターズが世界経済を動かし、その裏で多国籍企業シュルンベルジェが世界の油田を科学探査して開発の動向を左右しました。 月の水資源は人類が生活の場を太陽系に拡げる時代の鍵を握る地下資源です。この資源開発に係わる分野は、無人・有人月探査、燃料製造プラント建設、 宇宙資源商用化の法整備、宇宙資源の経済学、など、多様です。かつて鉱山には様々な分野の知恵が結集されました。宇宙の鉱山も同じです。</p><p>&nbsp;</p><p>―― パートナーシップについて<br>地球の資源開発の技術を宇宙に転用するというのは、私にとっても初めての試みです。 地球の自然を相手に観測や採掘をしている方々のノウハウを勉強させていただきたいし、地球での活動を月や火星に転用したいと考えている研究者や企業の方々とは、 ともにその方法を開発できればと思います。また宇宙という極限環境での観測をするノウハウは、地球の極限環境での観測に役に立つとも考えています。</p><p>&nbsp;</p><p>―― 研究連携で大切にしていること<br>人跡未踏の地、人跡未踏の分野に挑むフロンティアスピリッツを共有できる方が良いですね。それぞれの専門分野でたがいに刺激しあい、 楽しい興奮の中で協働作業を行えたら最高です。また、単なる知識の交換ではなく、何らかの成果となる物や事がつくられる具体的な目標、 失敗か成功かが明確に定義できるような緊張感のある目標設定が、協働作業を成功させるために重要だと考えています。</p>', 'http://localhost:4500/uploads/1692969883835-saeki_featured.jpg', 'http://localhost:4500/uploads/1692969883839-saeki1.png', 'http://localhost:4500/uploads/1692969883839-saeki2.png', 'http://localhost:4500/uploads/1692969883839-graphic4.png', '\"[\\\"http://localhost:4500/uploads/1692969883839-slider-1.jpg\\\",\\\"http://localhost:4500/uploads/1692969883842-slider- 2 .jpg\\\",\\\"http://localhost:4500/uploads/1692969883842-slide - 3 .jpg\\\",\\\"http://localhost:4500/uploads/1692969883843-slider-4.jpg\\\",\\\"http://localhost:4500/uploads/1692969883843-5.jpg\\\"]\"', '', '', 'https://www.isas.jaxa.jp/home/slim/SLIM/index.html', '2023-08-25 13:24:43', '2023-08-25 13:24:43'),
(3, '持丸 正明', 'Masaaki Mochimaru', 'スポーツトレーニングのDXに関する研究', 'http://localhost:4500/uploads/1692970923182-fellows_mochimaru.jpg', 'http://localhost:4500/uploads/1692970923172-motimaru.jpg', 'http://localhost:4500/uploads/1692970923177-motimaru.jpg', 'RARA Fellow', '<p>1993年慶應義塾大学大学院博士課程 生体医工学専攻修了。博士（工学）。<br>同年、工業技術院生命工学工業技術研究所 入所。<br>2001年、改組により、産業技術総合研究所 デジタルヒューマン研究ラボ 副ラボ長。<br>2018年より、人間拡張研究センター センター長（現職）。専門は人間工学、バイオメカニクス、サービス工学。<br>現在、ISO TC 324および PC329国際議長。消費者安全調査委員会・委員長代理。</p>', 'https://unit.aist.go.jp/harc/', 'スポーツトレーニングに、人間拡張技術の新しい風を吹き込む', '<p>デジタルデータとスポーツ科学に基づく個人対応のトレーニングプロセスへの変換を目指し、従来のスポーツ科学に先端的人間拡張技術を統合し、アスリート個人の状態や履歴のデジタルデータに応じた効果的なトレーニング介入方法の開発と効果の検証、効果をもたらす生体原理の解明を行っています。実験室レベルでのデータ収集だけでなく、企業と連携したトレーニングサービスによる実社会でのデータ収集を目指しています。</p><p>&nbsp;</p><p>スポーツ科学においては、怪我を低減しパフォーマンスを向上させる方法が研究され、トレーニング手法やスポーツ用具に活かされてきました。しかし、アスリートの個人差や履歴に応じた効果的なトレーニング手法の確立には至っていません。そこで、スポーツ科学に、ウェアラブルセンシング、VR、電気刺激、ロボットなどの人間拡張技術とビッグデータ解析技術を統合した個人対応の新たなトレーニングプロセスの開発を行うことにしました。</p><p>&nbsp;</p><p>近年のスポーツトレーニングは科学的な基盤に基づいていますが、個人の特性や履歴に応じたトレーニングプロセスにはトレーナーの観察と経験が大きく作用しています。ここに人間拡張技術を投入し、トレーニングプロセスをデジタル記録すると共に、身体のデジタルツインを活用した科学的パーソナライズを実現したいと考えています。</p><p>&nbsp;</p><p>今後のロードマップとしては３つの重点課題を設定しています。第一は実験室研究による個人対応トレーニング介入の開発と効果検証、第二はヒト・動物実験によるトレーニング介入効果の原理解明、そして第三はウェアラブルセンシング技術を活用したトレーニングサービスの開発と社会実証です。基礎研究が中心となる第一、第二の課題を当初２年間で実施し、学術成果をまとめていきます。この成果を元に企業と連携し、後半３年で第三課題に取り組んでいきたいと考えています。</p><p>&nbsp;</p><p>本研究は、デジタルデータと科学に基づく個人対応のトレーニングプロセスへの変換を目指しており、これをスポーツトレーニングのDXと呼んでいます。これを実現することはトップアスリートに限らず、レクレーショナルアスリートにとっての能力増進、意欲増進につながり、社会の健康増進に資するものになります。また、ビジネスを通じて蓄積されるトレーニングログが、新しいスポーツ科学の基盤をなす知識資産の形成に繋がると考えています。</p><p>&nbsp;</p><p>―― パートナーシップについて<br>ウェアラブルセンシング技術を実用化する繊維・アパレル企業、デバイス企業の他、デジタル化された個別トレーニング支援サービスを担うスポーツ用品企業、フィットネス企業などとの連携を進めていきたいと考えています。さらに、トレーニング効果の実証については、大学や自治体との連携も必要だと考えています。また、製造業がトレーニング支援サービスに乗り出すに当たっては製造業のサービス化を研究する経営学研究者との連携も模索していきたいです。</p><p>&nbsp;</p><p>―― 研究連携で大切にしていること<br>本務である産業技術総合研究所・人間拡張研究センターとは積極的な連携、融合を進めていきます。特に、ウェアラブルセンシング技術や介入技術については、研究センターの成果物を積極活用していきます。その他にも、立命館大学が有する健康・スポーツ科学に関する評価技術、大学内外での実証フィールドを活かして、国内外の大学や研究機関の独創的な介入手法の効果検証や科学的解明で連携を図っていきたいと考えています。</p><p>&nbsp;</p>', 'http://localhost:4500/uploads/1692970923188-mochimaru_main-scaled.jpg', 'http://localhost:4500/uploads/1692970923189-graphic03.png', 'http://localhost:4500/uploads/1692970923189-graphic04.png', 'http://localhost:4500/uploads/1692970923191-graphic4.png', '\"[\\\"http://localhost:4500/uploads/1692970923192-Gym.png\\\",\\\"http://localhost:4500/uploads/1692970923194-mochimaru_slide2.jpg\\\",\\\"http://localhost:4500/uploads/1692970923194-mochimaru_slide3.jpg\\\",\\\"http://localhost:4500/uploads/1692970923195-mochimaru_slide4.jpg\\\"]\"', '', '', '', '2023-08-25 13:42:03', '2023-08-25 13:42:03'),
(4, '立岩 真也', 'Shinya Tateiwa', '「叢書身体×社会」「アーカイブ身体×社会」', 'http://localhost:4500/uploads/1692971477416-Tateiwa_Thumbnail.jpg', 'http://localhost:4500/uploads/1692971477414-tateiwa_profile.jpg', 'http://localhost:4500/uploads/1692971477416-tateiwa_profile.jpg', 'RARA Fellow', '<p>1990年東京大学大学院社会学研究科 社会学（Ａ）博士課程 単位取得退学。千葉大学 文学部 助手、信州大学医療技術短期大学部 助教授等を経て、2004年より 立命館大学大学院 先端総合学術研究科 教授（現職）。　日本社会学会 理事（2021年～）、日本生命倫理学会 理事（2021年～）等を歴任。著書に『人命の特別を言わず／言う』（筑摩書房）など。</p>', 'http://www.arsvi.com/index.htm', '【叢書身体×社会】', '<p>この100年、身体と社会を巡って起こったこと、思考されるべきこととして現れたことについて、多くの大学院生・修了者・研究員他と仕事をし、今年創刊した年６回刊行の雑誌『遡航』等に300余の論文・報告を掲載し、これまでに加えあと約50の博士論文執筆・提出を支援し、私と修了者・大学院生が共編者となる20冊以上の書籍をこの５年の間に刊行していきます。</p><p>&nbsp;</p><p>全体の構想は<strong>《叢書 身体×社会》</strong>にあります。むろん研究者個々の主題を受けその思いを尊重しますが、しかしみなの研究の対象は、つまりは同じ社会・時代であり、人間だから、そこに必ず連関もあります。それを示すことで、研究を発展・展開させる。作業の全体をその都度公開しつつ（→【アーカイブ身体×社会】）、研究の塊を多く作り出し、個々の研究がぽつぽつとなされるだけでは到底対応できない社会の課題に応えていきます。</p><p>&nbsp;</p><p>【アーカイブ身体×社会】</p><p>【叢書身体×社会】はおもには成果を書籍にします。</p><p>アーカイブは、物理的空間としてのライブラリーとオンライン上に公開される情報群により構成されます（<a href=\"http://www.arsvi.com/a/arc.htm\">「生を辿り途を探す」</a>にその準備段階のものがあります）。</p><p>&nbsp;</p><p>集積自体が必要とされているのです。</p><p>変革のために遡ること（遡航）がなされねばならないのです。あと20年も経てば不可能になる、前世紀から生きてきた人たちへのインタビュー記録の公開を現在の約500から1000に増やしていきます。むろんそれは【叢書身体×社会】の研究の基礎となります。そして、集積・公開の方向を考え、仕組みを作るその営為自体が研究であり、成果は上記の叢書の一部となると考えます。その仕組の確立のために10年を想定しており、私が取り組んでいる科学研究費・基盤研究（Ａ）「生を辿り途を探す――身体×社会アーカイブの構築」が、前半の５年間行なわれることになります。</p><p>&nbsp;</p><p>今記録し集めないとけっして残らないものがあるから、大きな規模の急ぎの作業を要します。</p><p>大学院生・修了者等は、科研費分担研究者他の多領域の研究者の助力も得てその作業に関わり、人文社会科学の基本的技術を学び、自らの研究成果ともすることを目指していきます。</p><p>&nbsp;</p>', 'http://localhost:4500/uploads/1692971477419-mochimaru_main-scaled.jpg', 'http://localhost:4500/uploads/1692971477421-b-fellows_circle02.png', 'http://localhost:4500/uploads/1692971477422-b-fellows_circle01.png', 'http://localhost:4500/uploads/1692971477422-graphic4.png', '\"[\\\"http://localhost:4500/uploads/1692971477422-tateiwa_slide1.jpg\\\",\\\"http://localhost:4500/uploads/1692971477423-tateiwa_slide2.jpg\\\"]\"', '', 'https://twitter.com/ShinyaTateiwa', 'https://research-db.ritsumei.ac.jp/rithp/k03/resid/S000094', '2023-08-25 13:51:17', '2023-08-25 13:51:17'),
(5, '金子 健太郎', 'Kentaro Kaneko', '究極の省エネルギーパワーデバイス材料：GeO2の創生', 'http://localhost:4500/uploads/1692971883004-b-fellows_kaneko_nor.jpg', 'http://localhost:4500/uploads/1692972055680-Kaneko_top.jpg', 'http://localhost:4500/uploads/1692972055689-Kaneko_top.jpg', 'RARA Fellow', '<p>2013年京都大学大学院 工学研究科 電子工学専攻 博士課程 修了。博士(工学)。<br>2014年京都大学 工学研究科 助教、2018年同講師を経て、2022年7月より立命館大学 総合科学技術研究機構 教授(現職)。<br>大学院在籍時にパワー半導体ベンチャーである株式会社FLOSFIA(2011年)を共同創業(初代CTO)。 そして立命館大学着任後にPATENTIX株式会社(2022年)を共同創業(CTO)。<br>文部科学大臣若手科学者賞など、これまで23の賞を授与されている。</p>', 'https://kaneko-lab.ritsumei.ac.jp/', 'パワー半導体新材料GeO2（二酸化ゲルマニウム）を実用化し、  世界の省エネルギー化に貢献したい', '<p>半導体の歴史の中で新材料の出現は常に大きなパラダイムシフトを伴うものでした。 二酸化ゲルマニウム(GeO2)がもつパワー半導体としての性能はこれまで殆ど知られていませんでしたが、 安価で基板合成が出来る事やp型とn型のキャリアタイプ制御が可能である事、そして巨大なバンドギャップ(4.6 eV)をもつ事から、 産業応用可能な高性能パワー半導体としての重要な要素をバランス良く兼ね備えています。</p><p>&nbsp;</p><p>私が学部4回生として研究室に入った時期から、日本の半導体産業の凋落が顕著になりました。 しかしながら、半導体材料開発の分野はまだまだ未発見や未解明の材料が眠っている宝の山です。 私は学生の時に新しいパワー半導体材料のスタートアップを起業し、大学教員かつ共同創業者として研究を進めてきました。 立命館大学では、新たにGeO2という新しいパワー半導体材料を生み出し、基礎研究と産業応用の両面で取り組みたいと思います。</p><p>&nbsp;</p><p>新しく生み出したGeO2を社会実装し、世界の省エネルギー化に貢献する事が大きな夢です。 大学での基礎開発から社会実装までの研究開発を行う事で、半導体の研究にはまだまだ面白くて夢のある部分が残っている事を今の若い人たちに示したいです。 また、大学院生の時に半導体ベンチャーを起業し社会実装に至った経験を、後の世代に伝えて行く事も重要な役割だと思っています。</p><p>&nbsp;</p><p>新材料の社会実装までの開発研究には非常に多くの人たちの力が必要になります。私のような薄膜合成や物性評価を行う研究者だけでなく、 大型の結晶バルクを作製出来る企業、半導体の実装技術の研究者、得られた知見を特許化して知財を守ってくれる人たち等です。 特に材料の基礎開発から最初の数年間は知財の確保と基礎的な研究開発が大変重要になりますので、そこに重点を置いて進めたいと思います。</p><p>&nbsp;</p><p>大袈裟な表現ですが、大学教員が主体となって社会実装までの研究開発を主導する事が可能である事を示せればと思います。 アメリカの大学では大学教員が自分の研究のための会社を所有している事は随分前から当たり前になっていますが、日本ではまだまだ浸透していません。 次世代の(日本の)大学、社会では必ずそれが当たり前になっていると信じていますので、そのロールモデルとなるように頑張ります。</p><p>&nbsp;</p><p>―― パートナーシップについて<br>新しい半導体材料の研究に興味や情熱をもつ、全ての人たちと協力したいと思います。それは研究者や企業、知財の専門家だけでなく、 各省庁の関係者や投資家などです。半導体研究はまさに総力戦ですので、とても重要な点です。 また、日本発の材料ですので、「オールジャパン」体制で取り組み事も大切ですが、研究に国境はありませんので、 新しい人類の英知の共有のために全世界の人々と協力したいと思います。</p><p>&nbsp;</p><p>―― 研究連携で大切にしていること<br>一つの研究室が得られる成果は本当に限られていますので、研究分野や領域が異なる多くの人たちと知見を共有しながら進めたいと思います。 研究や研究者としての多様性を大切にしたいと思います。</p><p>&nbsp;</p>', 'http://localhost:4500/uploads/1692971883004-kaneko_main.jpg', 'http://localhost:4500/uploads/1692971883007-kaneko01.png', 'http://localhost:4500/uploads/1692971883008-kaneko02.png', 'http://localhost:4500/uploads/1692971883008-graphic4.png', '\"[\\\"http://localhost:4500/uploads/1692971883008-kaneko_slide1.jpg\\\",\\\"http://localhost:4500/uploads/1692971883013-kaneko_slide2.jpg\\\",\\\"http://localhost:4500/uploads/1692971883014-kaneko_slide3.jpg\\\",\\\"http://localhost:4500/uploads/1692971883014-kaneko_slide4.jpg\\\",\\\"http://localhost:4500/uploads/1692971883016-kaneko_slide5.jpg\\\"]\"', '', '', 'https://research-db.ritsumei.ac.jp/rithp/k03/resid/S002551', '2023-08-25 13:58:03', '2023-08-25 14:00:55'),
(6, '藤田聡', 'Satoshi Fujita', '新規の栄養・運動介入をつうじたサルコペニア予防策の開発', 'http://localhost:4500/uploads/1692972422133-Fujita_Thumbnail.jpg', 'http://localhost:4500/uploads/1692972422129-satoshi_fuji_top.jpg', 'http://localhost:4500/uploads/1692972422130-satoshi_fuji_top.jpg', 'RARA Associate Fellow', '<p>1993年ファイファー大学（アメリカ）スポーツ医学・マネジメント学部卒業、2002年南カリフォルニア大学（アメリカ）大学院博士課程修了。博士(運動生理学)。<br>2006年テキサス大学医学部内科講師、2007年東京大学大学院新領域創成科学研究科特任助教を経て、2009年に立命館大学に着任。2012年より立命館大学スポーツ健康科学部教授（現職）。</p><p>2021年、株式会社OnMotionを設立。</p>', 'https://onmotion.co.jp/', '加齢による筋量・筋機能の低下現象の原因を解き明かし、改善・予防策を開発する', '<p>加齢に伴う筋量と筋機能の低下現象（サルコペニア）は、転倒リスクを増加させるだけでなく、糖質・脂質代謝の障害を引き起こし、生活習慣病のリスクが増加します。しかし、サルコペニアを引き起こす原因は未だはっきりと分かっていません。国際的な共同研究の強化と異分野融合をつうじて、基礎研究の観点と、疫学研究・介入研究からサルコペニア発症の機序解明とその改善・予防方法の開発に取り組みます。</p><p>&nbsp;</p><p>骨格筋は日常生活の動作を司るだけでなく、体内の代謝を調節する重要な臓器です。加齢に伴う筋量と筋機能の低下現象（サルコペニア）はその原因として運動習慣や食生活などの生活習慣の関与が指摘されています。しかし生活習慣は国ごとに大きく異なるため、それぞれの国における生活習慣の違いが骨格筋に及ぼす影響を調査することで、より根本的な原因を突き止めることが可能であると考え、今回のテーマを選択しました。</p><p>&nbsp;</p><p>本研究をつうじて立命館大学が骨格筋のタンパク質代謝に関する研究の世界的な拠点、すなわち「知のNode」となることで、世界で活躍する研究者が本学に集まり共創する場を構築したいと考えています。将来的には海外の大学院生や研究者との交流をつうじて、本学の院生・研究員が多様な価値観や文化、習慣を尊重しながら国際的な研究力の向上に取り組める研究・教育環境を整備したいと思います。</p><p>&nbsp;</p><p>フィンランドのユバスキュラ大学とは、ユバスキュラ大学が保有するコホートデータを用いて、中高年女性のデータから、サルコペニアを引き起こす食生活・運動習慣の要因を抽出し、日本国内での臨床試験にてその要因を検証します。英国ノッティンガム大学とは基礎研究の観点から、骨格筋たんぱく質の代謝を評価する新しい手法の開発と検証に取り組みます。これらの研究は各大学の研究者･院生の交流をつうじて実施する予定です。</p><p>&nbsp;</p><p>本研究をつうじて立命館大学が国際的な研究拠点として機能することで、産学連携もより活発になることが期待できます。また、大学院生のみならず、学部生も国際的な共同研究を身近に感じることで、スポーツ健康分野における研究開発がどのように基礎研究と応用研究をつなぎ、商品・サービスの開発に繋がるかを観察・体験できます。これらの経験をつうじて学生がより高いレベルでの問題発見・解決力を養うことが可能なると考えます。</p><p>&nbsp;</p><p>―― パートナーシップについて<br>国内外の医薬品や食品メーカーと協働してサルコペニア予防・改善に向けた薬品や食品の開発をしたいと考えています。</p><p>&nbsp;</p><p>―― 研究連携で大切にしていること<br>共同研究をする際にまず協働によるお互いのメリットとデメリットを明確にし、両者にメリットが得られる目標設定を協議することです。</p>', 'http://localhost:4500/uploads/1692972422135-fuji_main.jpg', 'http://localhost:4500/uploads/1692972422138-b-fellows_circle02 .png', 'http://localhost:4500/uploads/1692972422144-b-fellows_circle.png', 'http://localhost:4500/uploads/1692972422144-graphic4.png', '\"[\\\"http://localhost:4500/uploads/1692972422144-fuji_slide01.jpg\\\",\\\"http://localhost:4500/uploads/1692972422144-fuji_slide02.jpg\\\",\\\"http://localhost:4500/uploads/1692972422145-fuji_slide03.jpg\\\"]\"', 'https://www.facebook.com/safujita', 'https://twitter.com/SFujita77', 'https://research-db.ritsumei.ac.jp/rithp/k03/resid/S000664', '2023-08-25 14:07:02', '2023-08-25 14:07:02'),
(7, '野坂秀之', 'Hideyuki Nosaka', '任意位相周波数合成による適応ビーム制御技術の研究 ～6G時代の「切れない無線」の実現～', 'http://localhost:4500/uploads/1692972669902-Nosaka_Thumbnail.jpg', 'http://localhost:4500/uploads/1692972669898-nosaka_top.jpg', 'http://localhost:4500/uploads/1692972669900-nosaka_top.jpg', 'RARA Associate Fellow', '<p>1993年慶応義塾大学理工学部卒業、1995年同大学大学院理工学研究科修了。博士（工学）。<br>日本電信電話株式会社 主幹研究員を経て、2021年より立命館大学理工学部教授（現職）。</p>', 'https://www.ritsumei.ac.jp/~nosaka/', '6G時代の「切れない無線」を実現、波動工学で人々の生活をより豊かにしたい', '<p>2030年頃に実用化が予想される第６世代移動通信システム（6G）に向けて、高速大容量通信を実現するためにミリ波やテラヘルツ波などの高周波数帯の利用が検討されています。この未開拓の周波数を利用するために、波の位相、周波数、振幅を自由自在に制御する革新的なアナログ新回路アーキテクチャの研究に取り組んでいます。</p><p>&nbsp;</p><p>これまでにアナログとデジタルの境界技術であるミックストシグナル回路や、超高周波アナログ回路の研究に携わってきました。2020年に第5世代移動通信システム(5G)のサービスが開始され、世界ではすでにその次のシステム(Beyond 5G または 6G)の研究開発が進められています。この分野では日本が世界に先行している研究領域もあり、今後日本が勝っていかなければならない、そして勝っていける研究領域の一つだと信じています。</p><p>&nbsp;</p><p>高速大容量通信を実現するために、ミリ波やテラヘルツ波などの高周波数帯の利用が検討されています。高い周波数帯では、電波の回折が減少し、無線セル半径が小さくなるため、無線リンクが途切れやすくなる課題があります。本研究では、位相を制御して狙った方向にビームを形成したり、伝搬環境のより良い波長に切り替えたり、柔軟に波を制御する「波動工学」技術の確立を目指します。</p><p>&nbsp;</p><p>今後は、電波のエネルギーを特定の方向に集中させるビームフォーミング技術や、チャネルの伝搬環境を高速にモニタするハンドオーバーの高度化技術など、6Gに向けて競争力のある要素回路技術の確立を目指します。さらに、高速移動体のビームトラッキングなど、上位機能の研究を進めていきます。</p><p>&nbsp;</p><p>本研究の適用先は 6G に留まらず、食品分析・病巣分析・危険物探知・レーダーなどのイメージング、宇宙資源探索・気象予報などのセンシング、トリリオンセンサ時代の IoT 通信、ワイヤレス給電にも広がります。新しい回路技術の創出とこれを用いた波動工学により、我々の生活をより豊かにしていきたいと考えています。</p><p>&nbsp;</p><p>―― パートナーシップについて<br>このようなさまざまな応用先や利用先を連携パートナーの皆さまとご一緒に具現化し、独創的かつ創造的な技術を世の中に実装してくことにより、産業の発展に貢献していきたいと考えています。</p><p>&nbsp;</p><p>―― 研究連携で大切にしていること<br>連携にあたっては、それぞれの組織の強みを活かして大きなうねりを生み出すことを大切にしたいと思います。また、異なる土壌の組織の連携による、シナジー効果の発揮に期待したいと思います。</p>', 'http://localhost:4500/uploads/1692972669904-nosaka_main.jpg', 'http://localhost:4500/uploads/1692972669906-b-fellows_circle02 .png', 'http://localhost:4500/uploads/1692972669908-b-fellows_circle.png', 'http://localhost:4500/uploads/1692972669908-graphic4.png', '\"[\\\"http://localhost:4500/uploads/1692972669908-nosaka_slide01.jpg\\\",\\\"http://localhost:4500/uploads/1692972669908-nosaka_slide02.jpg\\\",\\\"http://localhost:4500/uploads/1692972669909-nosaka_slide03.jpg\\\",\\\"http://localhost:4500/uploads/1692972669909-nosaka_slide04.jpg\\\",\\\"http://localhost:4500/uploads/1692972669910-nosaka_slide05.jpg\\\"]\"', '', '', 'https://research-db.ritsumei.ac.jp/rithp/k03/resid/S002373', '2023-08-25 14:11:09', '2023-08-25 14:11:09'),
(8, '林 勇吾', 'Yugo Hayashi', '「認知的コラボレーションと支援」に関する学術融合研究： 心理学と情報科学の融合', 'http://localhost:4500/uploads/1692972999620-Hayashi_Thumbnail.jpg', 'http://localhost:4500/uploads/1692972999600-Hayashi_top.jpg', 'http://localhost:4500/uploads/1692972999613-Hayashi_top.jpg', 'RARA Associate Fellow', '<p>2009年名古屋大学大学院情報科学研究科修了。博士(情報科学)。</p><p>立命館大学情報理工学部助手、筑波大学図書館情報メディア系特任助教、立命館大学文学部および総合心理学部准教授を経て、2021年より総合心理学部教授（現職）。<br>2017～2018年、カーネギーメロン大学（アメリカ） Human-Computer Interaction Instituteにおいて客員教員(Visiting Faculty)。</p>', 'http://www.hayashilab.jp/', '心理学と情報学を融合して、協調的学習を支援する方法を開発する', '<p>人と人、人と人工物、人工物を介した人とのコラボレーションにおける人の認知行動メカニズムを解明し、その知見をもとに工学的支援を行うことを目指します。</p><p>その研究手法として、①認知行動メカニズムを心理学実験により解明し、②認知科学の手法により計算機上で認知モデルを作り、③協同活動を支援する情報システムの開発を循環的に検討しています。これまでに、会話エージェントを用いた協同問題解決の実験や学習支援システムの開発などを行ってきました。</p><p>&nbsp;</p><p>学部生の時に社会学や社会心理学を学び、大学院では認知科学や人工知能を学び心理学と情報学の文理融合に関する研究を行ってきました。幼少期や高校をアメリカのカリフォルニアで過ごした経験もあり、異文化や異分野の融合というものに長く関心がありました。また、科学の世界でもブレイクスルーやパラダイム構築には、異なる視点による洞察は重要ですし，博士の学位論文から多様性や融合を大きなテーマとして取り組んできました。</p><p>&nbsp;</p><p>RARAでの研究活動には、学内外の若手研究者・大学院生を巻き込んで研究を進めていきたいと思います。心理学系だけでなく、情報工学などの分野でRARA学生フェローや、リサーチアシスタントとも積極的に研究を進めていきたいです。特に、私の研究室で開発している人-人のコラボレーションに関する認知科学的研究や、AIエージェントを用いた協調的学習支援に関する研究を一緒に取り組んでいきたいと考えています。また、大学生や附属校の学生や児童などを対象とした調査や国際比較研究にも展開していきたいと考えています。</p><p>この目標を実現するまでのロードマップとして、初年度は，現状のシステムのアップデートや新規のシステム開発を研究員やスタッフとともに進めていく予定です。そして、RARA学生フェローやリサーチアシスタントと協働して、大学生を対象としたデータの収集・解析を通じて研究基盤を構築していきます。その後、大学生以外の幅広い年齢層を対象としたデータの収集、さらに国際的な研究交流も行いながらグローバルに研究を展開したいと思います。</p><p>&nbsp;</p><p>立命館大学には，国際性の強い学部もあり全国的にリードしている分野もあります。次世代の研究大学に向けては、やはり海外に向けた研究力の発信と海外の大学との連携も加速していく必要があります。本大学には，日本最大級の心理学部や最先端のAIやヒューマンインタフェースの研究をしている自然科学系の研究者が多くいます。これらの研究者が協働することで大学だけでなく、社会にも大きく寄与できると思います。</p><p>&nbsp;</p><p>―― パートナーシップについて<br>私は2010年から2013年まで情報理工学部で助手をしていました。本研究を推進するにあたっては，今いる総合心理学部だけでなく，情報理工学部や理工学部をはじめとした、学部を超えた研究者とのパートナーシップを結んで研究を進めていきたいです。</p><p>また、学内の外国人教員との共同研究も助手時代から行っており，現在もグローバル教養学部の研究者と研究をしています。</p><p>&nbsp;</p><p>―― 研究連携で大切にしていること<br>国内外の研究者との協働で，良いシナジーを生み出すには、まずは研究テーマに関する一定の共通理解を構築することは必要だと思います。そして、研究者の強みが十分に発揮できるよう、お互いのことを十分に知り、信頼関係を築くプロセスを大事にしたいです。お互いの役割を明瞭にして、コミュニケーションを図りながら，インパクトのあるジャーナルやトップカンファレンスを目指して取り組みたいです。</p>', 'http://localhost:4500/uploads/1692972999625-hayashi_main.jpg', 'http://localhost:4500/uploads/1692972999627-b-fellows_circle02 .png', 'http://localhost:4500/uploads/1692972999628-b-fellows_circle.png', 'http://localhost:4500/uploads/1692972999637-graphic4.png', '\"[\\\"http://localhost:4500/uploads/1692972999637-hayasih_slide01.jpg\\\",\\\"http://localhost:4500/uploads/1692972999638-hayasih_slide03.jpg\\\",\\\"http://localhost:4500/uploads/1692972999638-hayasih_slide04.jpg\\\",\\\"http://localhost:4500/uploads/1692972999638-hayasih_slide02.jpg\\\",\\\"http://localhost:4500/uploads/1692972999639-hayasihslide2.jpg\\\"]\"', 'https://www.facebook.com/ritsumeikanpsyhayashilab', 'https://twitter.com/HayashiLabo?lang=ja', 'https://research-db.ritsumei.ac.jp/rithp/k03/resid/S000813', '2023-08-25 14:16:39', '2023-08-25 14:16:39'),
(9, '廣野美和', 'Miwa Hirono', '途上国の研究者コミュニティーとともに目指す  「グローバル中国研究拠点」の構築', 'http://localhost:4500/uploads/1692973249679-Hirono_Thumbnail.jpg', 'http://localhost:4500/uploads/1692973249661-Hirono_top.jpg', 'http://localhost:4500/uploads/1692973249661-Hirono_top.jpg', 'RARA Associate Fellow', '<p>2007年 オーストラリア国立大学 国際関係学科 国際関係学 博士課程 修了。博士 （国際関係学）。2019年より立命館大学グローバル教養学部教授（現職）。ノッティンガム大学（イギリス）で英国理事研究員（2008-15）、ハーバード大学（アメリカ）ケネディースクールでフルブライトフェロー（2018-19）、中国社会科学院で訪問研究員（2003-04）等を歴任。主要作に『一帯一路は何をもたらしたのか：中国問題と投資のジレンマ』（勁草書房、2021年）、<i>China’s Evolving Approach to Peacekeeping</i> (Routledge, 2012) 等。</p>', 'https://www.fulbright.jp/scholarship/story/34.html', '中国の国際的プレゼンスを途上国の視点から研究する  「グローバル中国研究拠点」をつくる', '<p>イデオロギーを中心に、どの考え方が正義でどの考え方が悪、という思い込みが世間を風靡しています。大国中国はその文脈で語られる。そういう議論が先進国の大都市のアナリストによって行われているのと対照的に、世界の大半を占める途上国では、イデオロギーとは別の、現実的な世界（それは自らの暮らしを向上させたり利益を追求したりする）が広がっており、拡大する中国の活動はイデオロギー中心の見方とはかなり違った様相が見られます。このような「人」を中心とした現実の姿を通してこそ本物の中国像がわかるという信念により、この研究テーマを選択しました。</p><p>&nbsp;</p><p>女性、難民、貧困層など、途上国の弱者は常に社会のひずみの影響を直に受けます。これらの方々が、自国における中国プレゼンスにどのような影響を受け、どのような改善を望んでいるのか。研究を通して、彼らの声なき声を国際社会で代弁し、国際的な社会変革を巻き起こす研究をしたい。それこそが、中国グローバル研究の意義でもあります。</p><p>&nbsp;</p><p>RARAコロキアムやコモンズも十二分に活用、また貢献しながら、当面はグローバル中国研究の代表作といえる研究の礎を築き、今後のグローバル中国研究を前進させる新方法論を開発します。同時に、センターの形成を通して拠点の形成準備を行い、今後20年間で世界屈指のグローバル中国拠点へと成熟させることを目指します。</p><p>&nbsp;</p><p>この研究活動を通した社会貢献として、まずはProject-based learning等を通した若手育成を実施します。次世代研究者に対して、国際関係学を肌で学んでもらいながら、途上国出身の次世代研究者と協働して共通する課題解決に取り組んでいきます。その際に、途上国の弱者に焦点をあて、そこに中国のプレゼンスはどのように関わっているのかも加味しながら、現地での研究にこだわります。そしてイデオロギーを排した途上国における現実の中国像に関する知見を企業やNGOに提供していくことにも、この活動を通じて取り組んでいきたいと思っています。</p><p>&nbsp;</p><p>―― パートナーシップについて<br>途上国の弱者コミュニティーを最も重要なパートナーと捉えています。彼らと共に研究を進め、国際的な社会変革を巻き起こす研究を目指します。同様に重要なのは、途上国の研究者コミュニティーとのパートナーシップです。彼らの貴重な知見を研究に反映させると同時に、途上国の若手研究者に対しては、学術経験を積み上げ、共同研究の質を上げるベースアップを行っていきたいと考えています。また、途上国に関心がある企業・NGO・シンクタンクや、中国研究者コミュニティーともパートナーシップを強化していきます。</p><p>&nbsp;</p><p>―― 研究連携で大切にしているこ<br>女性・難民・貧困層など、忘れられやすい途上国の弱者を、「研究対象」ではなく「研究パートナー」として捉え、共に政策提言を実施していくことを大切にしています。また、日本における中国研究の豊富な蓄積をふまえながら、海外とのネットワークの強さを活かして、その研究蓄積を国際共同研究に反映させられるように留意しています。</p><p>&nbsp;</p>', 'http://localhost:4500/uploads/1692973249702-hirono_main.jpg', 'http://localhost:4500/uploads/1692973249707-b-fellows_circle02 .png', 'http://localhost:4500/uploads/1692973249707-b-fellows_circle.png', 'http://localhost:4500/uploads/1692973249707-graphic4.png', '\"[\\\"http://localhost:4500/uploads/1692973249710-hiron_slide1.jpg\\\",\\\"http://localhost:4500/uploads/1692973249712-hiron_slide2.jpg\\\",\\\"http://localhost:4500/uploads/1692973249715-hiron_slide3.jpg\\\",\\\"http://localhost:4500/uploads/1692973249716-hiron_slide4.jpg\\\",\\\"http://localhost:4500/uploads/1692973249716-hiron_slide5.jpg\\\"]\"', '', '', 'https://research-db.ritsumei.ac.jp/rithp/k03/resid/S001323', '2023-08-25 14:20:49', '2023-08-25 14:21:35'),
(10, '小林洋一', 'Yoichi Kobayashi', '難分解性化学物質を循環資源に変える温和な光化学反応の実現', 'http://localhost:4500/uploads/1692973618402-Kobayashi_Thumbnail.jpg', 'http://localhost:4500/uploads/1692973618386-Kobayashi_Top.jpg', 'http://localhost:4500/uploads/1692973618397-Kobayashi_Top.jpg', 'RARA Associate Fellow', '<p>2007年 関西学院大学理工学部卒業、2009年同大学大学院理工学研究科化学専攻博士課程後期課程修了（早期）。博士（理学）。<br>トロント大学JSPS海外特別研究員、青山学院大学理工学部助教を経て、2017年より立命館大学生命科学部准教授（現職）。<br>2022年より現在に至るまで、JST さきがけ研究者「持続可能な材料設計に向けた確実な結合とやさしい分解」領域を兼任。</p>', 'https://www.ritsumei.ac.jp/lifescience/achem/kbys/index.html', '持続可能な循環型社会のために、フッ素化合物の温和な分解・リサイクル技術を開発する', '<p>私の研究テーマは、太陽光などの再生可能エネルギーを用いてテフロンなどに代表される極めて安定なフッ素化合物を資源循環可能な原材料にまで温和に分解できる新しい材料や技術を創出することです。フッ素化合物は冷媒、樹脂、表面処理剤、医薬品など、我々の豊かな生活を支える必要不可欠な材料です。これらを温和に分解、リサイクルする技術を確立することにより、持続可能な循環型社会に貢献します。</p><p>&nbsp;</p><p>SDGsが世界的に提唱される中、これに関連した研究をしたいという思いは以前からあった一方、私のこれまでの研究は基礎的な光化学に関するものであり、どのように展開するかを考えあぐねていました。あるとき、紫外線の光を当てるときわめて強い還元材を生成する化合物をふと発見しました。こんなにも強い還元剤を光で作り出せるのであれば、難分解性の化合物も光で温和に分解できるのではないかと考え、本テーマを着想しました。</p><p>&nbsp;</p><p>テフロンやナフィオンなど、社会で広く活用され、かつ極めて強靭なフッ素樹脂を可視光で温和に分解できる新材料および技術を創出します。そして、企業などとの積極的な連携を通じて、フッ素樹脂の温和なリサイクルシステムを実現したいです。</p><p>&nbsp;</p><p>数十種類の光反応を一度に評価できるハイスループット光反応解析技術の確立、そして統計解析や人工知能（AI）技術を活用した新材料探索を初めの数年で行い、基盤となる技術、材料を確立します。それと並行して、フッ素材料をよく取り扱う企業と積極的に連携し、実用フッ素樹脂の光分解反応の検討や大スケール化をすすめます。法律や政策に関わる文系学部の先生方や自治体とも連携し、最終的に実社会の廃棄物処理技術へと発展させたいです。</p><p>&nbsp;</p><p>本研究は、新材料、新分析技術を用いて豊かな生活を支えるフッ素の資源循環の実現を目指すものなので、持続可能な循環型社会にむけて直接的に貢献できると考えます。また、このような社会的に重要度の高く且つ困難な課題に大学研究室の学生とともに取り組むことにより、問題解決能力と社会問題や環境に関する意識の高い次世代の社会を担う人材の育成にも貢献できると考えます。</p><p>&nbsp;</p><p>―― パートナーシップについて<br>材料開発においてはAIを用いた解析に詳しい情報科学者の方、分解反応においては実用フッ素材料を製造しておられる企業の方、また環境科学関連分野の方と積極的に連携したいと考えています。</p><p>&nbsp;</p><p>―― 研究連携で大切にしていること<br>自分の専門分野をできる限りわかりやすい言葉で丁寧に説明し、自分の考えの意図やビジョンを共有できるよう心がけています。また、学ぶこと、知ることの楽しみや、研究が発展することの喜びを共感できるような人間関係の構築にも努めていきたいと思います。</p><p>&nbsp;</p>', 'http://localhost:4500/uploads/1692973618411-kobayashi_main.jpg', 'http://localhost:4500/uploads/1692973618413-b-fellows_circle02 .png', 'http://localhost:4500/uploads/1692973618413-b-fellows_circle.png', 'http://localhost:4500/uploads/1692973618414-graphic4.png', '\"[\\\"http://localhost:4500/uploads/1692973618414-kobayashi_slide01.jpg\\\",\\\"http://localhost:4500/uploads/1692973618416-kobayasih_slide02.jpg\\\",\\\"http://localhost:4500/uploads/1692973618417-kobayasih_slide03.jpg\\\"]\"', '', 'https://twitter.com/cjx91704', 'https://research-db.ritsumei.ac.jp/rithp/k03/resid/S001491', '2023-08-25 14:26:58', '2023-08-25 14:26:58');

-- --------------------------------------------------------

--
-- Table structure for table `relatedblogs`
--

CREATE TABLE `relatedblogs` (
  `id` int(11) NOT NULL,
  `relatedBlogId` int(11) NOT NULL,
  `blogId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `relatedblogs`
--

INSERT INTO `relatedblogs` (`id`, `relatedBlogId`, `blogId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2, '2023-08-25 15:22:12', '2023-08-25 15:22:12'),
(2, 2, 3, '2023-08-25 15:23:23', '2023-08-25 15:23:23'),
(3, 3, 4, '2023-08-25 15:25:00', '2023-08-25 15:25:00'),
(4, 3, 5, '2023-08-25 15:26:17', '2023-08-25 15:26:17'),
(5, 4, 6, '2023-08-25 15:28:06', '2023-08-25 15:28:06'),
(6, 5, 7, '2023-08-25 15:30:15', '2023-08-25 15:30:15'),
(7, 6, 8, '2023-08-25 15:31:59', '2023-08-25 15:31:59'),
(8, 9, 11, '2023-08-25 15:44:59', '2023-08-25 15:44:59'),
(9, 9, 12, '2023-08-25 15:47:34', '2023-08-25 15:47:34'),
(10, 11, 13, '2023-08-25 15:48:47', '2023-08-25 15:48:47'),
(11, 12, 14, '2023-08-25 15:50:51', '2023-08-25 15:50:51'),
(12, 13, 15, '2023-08-25 15:52:01', '2023-08-25 15:52:01'),
(13, 13, 16, '2023-08-25 15:53:16', '2023-08-25 15:53:16'),
(14, 15, 17, '2023-08-25 15:59:09', '2023-08-25 15:59:09'),
(15, 16, 18, '2023-08-25 16:00:26', '2023-08-25 16:00:26'),
(16, 16, 19, '2023-08-25 16:02:05', '2023-08-25 16:02:05'),
(17, 17, 19, '2023-08-25 16:02:05', '2023-08-25 16:02:05'),
(18, 18, 20, '2023-08-25 16:03:04', '2023-08-25 16:03:04'),
(19, 17, 20, '2023-08-25 16:03:04', '2023-08-25 16:03:04'),
(20, 19, 21, '2023-08-25 16:04:32', '2023-08-25 16:04:32'),
(21, 19, 22, '2023-08-25 16:05:50', '2023-08-25 16:05:50'),
(22, 20, 23, '2023-08-25 16:07:08', '2023-08-25 16:07:08'),
(23, 22, 24, '2023-08-25 16:08:40', '2023-08-25 16:08:40'),
(24, 22, 25, '2023-08-25 16:10:24', '2023-08-25 16:10:24'),
(25, 24, 26, '2023-08-25 16:11:26', '2023-08-25 16:11:26'),
(29, 22, 27, '2023-08-25 17:28:01', '2023-08-25 17:28:01'),
(30, 24, 27, '2023-08-25 17:28:01', '2023-08-25 17:28:01'),
(31, 25, 27, '2023-08-25 17:28:01', '2023-08-25 17:28:01');

-- --------------------------------------------------------

--
-- Table structure for table `springs`
--

CREATE TABLE `springs` (
  `id` int(11) NOT NULL,
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
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `springs`
--

INSERT INTO `springs` (`id`, `about`, `program`, `businessPassage`, `specializedField`, `externalCommittee`, `outline`, `targetAudience`, `responsibilities`, `recruitment`, `createdAt`, `updatedAt`) VALUES
(1, 'New About', 'The Test', 'Test2', 'Test3', 'Test4', 'Test5', 'Test6', 'Test7', 'Test8', '2023-08-21 15:40:25', '2023-08-21 16:05:50');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
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
  `aboutBottom` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `about`, `program`, `businessPassage`, `specializedField`, `externalCommittee`, `outline`, `targetAudience`, `responsibilities`, `recruitment`, `createdAt`, `updatedAt`, `aboutBottom`) VALUES
(1, '<p>Ritsumeikan Advanced Research Academy（RARA）とは、Ritsumeikan Knowledge Nodes（RKN）構想を実現し、本⼤学の先導的・先進的研究拠点の形成に向けてリーダーシップを発揮することが期待される中核研究者の集まり（アカデミー）のことです。RARAを基盤にする研究者は、新たな価値を生み出す先導的な学際研究拠点を創成するとともに、その成果を発信し、社会課題解決に向けた貢献を目指していきます。</p><p>&nbsp;</p>', '<p>立命館大学では、R2030チャレンジ・デザインにおいて「新たな価値を創造する次世代研究大学」と「イノベーション・創発性人材を生み出す大学」を目指すべき姿として掲げています。 本大学では、「立命館先進研究アカデミー」（Ritsumeikan Advanced Research Academy （RARA））を設置し、大学院生を含む若手研究者から中核研究者までの研究者のキャリアパスに応じた研究環境の抜本的充実を図っています。本プログラムは、RARAを基盤に、国際社会で活躍できる資質と能力を兼ね備えた博士人材を「RARA学生フェロー」に任命し、挑戦的・融合的な研究を支援するプログラムです。 ※本プログラムは、JST（国立研究開発法人科学技術振興機構）「次世代研究者挑戦的研究プログラム」の採択を受け、2021年度より実施するものです。</p><p>&nbsp;</p>', '<p>副学長（研究・学術情報・国際連携・D&amp;I・起業事業化推進 担当）、経営学部教授<br>&nbsp;</p>', '<p>経営戦略論、イノベーション論</p>', '<p>国際ビジネス研究学会（理事）、研究・イノベーション学会（理事）、グリーンイノベーション基金 技術社会実装推進委員会（委員長）、EURAS（European Academy for Standardization）</p>', '<p>RARA学⽣フェローはRARAの構成員として、将来を担う若⼿研究者として必要とされる⼒量形成に繋がる機会（RARAコロキアム、RARAコモンズ）が与えられ、これに参加することが求められます。 研究活動支援金として月額180,000円（年額216万円）、および研究費として年額最大34万円を大学より支給します。給付期間は、標準修業年限の期間とします。</p>', '<p>博士課程後期課程に在学する学生 募集人数および申請資格については最新の募集要項を確認してください。</p>', '<p>RARA学生フェローとしての自覚と責任を持ち、研究活動に取り組むこと。 研究部が主宰または指定するプログラム、セミナー等に参加および発表すること。 別に定められた書類を指定の期日までに提出すること。 立命館大学研究倫理指針に基づき、高い倫理観を保持し、研究活動に携わるとともに、不正行為を行わないこと。なお、研究不正疑義発生時の対応は、「立命館大学研究活動不正行為防止規程」に基づいて行う。 研究活動支援金の執行にあたっては、「立命館大学における公的研究費の管理に関する規程」に基づき、適正に執行すること。</p>', '<p>最新の募集要項および申請書は 本大学 研究部HPを確認してください。</p><p>&nbsp;</p>', '2023-08-21 16:25:59', '2023-08-23 15:50:39', '<p>RARAは、本大学の先進研究を牽引する中核研究者である「RARAフェロー」、中核研究者へのステップアップに向け実績を積み重ねる「RARAアソシエイトフェロー」、次世代の研究者として活躍が期待される「RARA学生フェロー」から主に構成されます。RARA 学生フェローとして選抜された博士後期課程学生には、RARAを基盤に、個々の研究力を向上させ、分野の異なる国内外の研究者と交わる中で、国際性と学際性、さらに複眼的視野を兼ね備えた博士人材へと成長していくことを期待します。</p><p>&nbsp;</p>');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banktransfers`
--
ALTER TABLE `banktransfers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coinbases`
--
ALTER TABLE `coinbases`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `homes`
--
ALTER TABLE `homes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `keys`
--
ALTER TABLE `keys`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `relatedblogs`
--
ALTER TABLE `relatedblogs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `relatedBlogId` (`relatedBlogId`),
  ADD KEY `blogId` (`blogId`);

--
-- Indexes for table `springs`
--
ALTER TABLE `springs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banktransfers`
--
ALTER TABLE `banktransfers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `coinbases`
--
ALTER TABLE `coinbases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `homes`
--
ALTER TABLE `homes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `keys`
--
ALTER TABLE `keys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `relatedblogs`
--
ALTER TABLE `relatedblogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `springs`
--
ALTER TABLE `springs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `relatedblogs`
--
ALTER TABLE `relatedblogs`
  ADD CONSTRAINT `relatedblogs_ibfk_1` FOREIGN KEY (`relatedBlogId`) REFERENCES `blogs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `relatedblogs_ibfk_2` FOREIGN KEY (`blogId`) REFERENCES `blogs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;