-- MariaDB dump 10.19  Distrib 10.7.3-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: quiz
-- ------------------------------------------------------
-- Server version	10.7.3-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES
(1,'2014_10_12_000000_create_users_table',1),
(2,'2019_08_19_000000_create_failed_jobs_table',1),
(3,'2019_12_14_000001_create_personal_access_tokens_table',1),
(4,'2022_04_14_144104_create_question_types_table',1),
(5,'2022_04_14_150133_create_question_sessions_table',1),
(6,'2022_04_14_213947_create_questions_table',1),
(7,'2022_04_15_021507_create_roles_table',1),
(8,'2022_04_15_021817_update_users_table',1),
(9,'2022_04_15_022127_create_user_question_history_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES
(1,'App\\Models\\User',1,'token','7350894ae348c5dac995213909049bcdb282bdccdf8e98c5bfbcc3003c191fab','[\"*\"]','2022-04-28 12:08:43','2022-04-28 09:16:09','2022-04-28 12:08:43'),
(2,'App\\Models\\User',7,'token','9e6fc6193e5944689ff47dc4b85432ac2dd504d2bad8d198cbf891e9d5342247','[\"*\"]',NULL,'2022-04-28 14:08:00','2022-04-28 14:08:00'),
(3,'App\\Models\\User',8,'token','62f725622b88192af7ebbb8d5874d0a084e64359cc63db4efb4c848b7530c7df','[\"*\"]',NULL,'2022-04-28 14:08:53','2022-04-28 14:08:53'),
(4,'App\\Models\\User',11,'token','3bde70ed5cf9cccf5143d2e4a84d406e513067ddf7bc2a6474125acd9da983e9','[\"*\"]',NULL,'2022-04-28 14:24:04','2022-04-28 14:24:04'),
(5,'App\\Models\\User',1,'token','1bfa6a34a83f3e2b2e42dfaa35da19cc5b99456dfc3567faa55e954b971b6c00','[\"*\"]',NULL,'2022-04-29 00:42:49','2022-04-29 00:42:49'),
(6,'App\\Models\\User',1,'token','9d0387caa758abc9884e7ee7f5a11b3b91b8cd247f1191de105dd6b0b6463bbf','[\"*\"]',NULL,'2022-04-29 00:42:50','2022-04-29 00:42:50'),
(7,'App\\Models\\User',1,'token','d055fb413020614e9e2fc4770c6a017b14c565e6736574572ff167d3c435918e','[\"*\"]',NULL,'2022-04-29 00:42:53','2022-04-29 00:42:53'),
(8,'App\\Models\\User',1,'token','953d2551756927dbaedb5eff9848cb359539cfcca7c2fa0469f2a22e0396bc29','[\"*\"]',NULL,'2022-04-29 00:43:05','2022-04-29 00:43:05'),
(9,'App\\Models\\User',1,'token','63200bfbc0034bff18153a3b361fb9059ae535a890830e4cad7a8b8747c44d00','[\"*\"]','2022-04-29 01:52:25','2022-04-29 00:43:39','2022-04-29 01:52:25'),
(10,'App\\Models\\User',5,'token','868f09a5301f5acc23cf2eca9beb2373d10f3fc03985c46a8f90d93524cae5fd','[\"*\"]','2022-04-29 01:51:10','2022-04-29 01:06:45','2022-04-29 01:51:10');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_sessions`
--

DROP TABLE IF EXISTS `question_sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question_sessions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_sessions`
--

LOCK TABLES `question_sessions` WRITE;
/*!40000 ALTER TABLE `question_sessions` DISABLE KEYS */;
INSERT INTO `question_sessions` VALUES
(1,'trivia','2022-04-28 09:15:41','2022-04-28 09:15:41'),
(2,'math','2022-04-28 09:15:41','2022-04-28 09:15:41');
/*!40000 ALTER TABLE `question_sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_types`
--

DROP TABLE IF EXISTS `question_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question_types` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_types`
--

LOCK TABLES `question_types` WRITE;
/*!40000 ALTER TABLE `question_types` DISABLE KEYS */;
INSERT INTO `question_types` VALUES
(1,'Binary','2022-04-28 09:15:41','2022-04-28 09:15:41'),
(2,'Multi','2022-04-28 09:15:41','2022-04-28 09:15:41');
/*!40000 ALTER TABLE `question_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `question` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `answer1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `answer2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `answer3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `correct_answer` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_id` bigint(20) unsigned NOT NULL,
  `question_session_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `questions_type_id_foreign` (`type_id`),
  KEY `questions_question_session_id_foreign` (`question_session_id`),
  CONSTRAINT `questions_question_session_id_foreign` FOREIGN KEY (`question_session_id`) REFERENCES `question_sessions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `questions_type_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `question_types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES
(1,'test','test','test','test','1',1,1,'2022-04-28 09:15:41','2022-04-28 09:15:41'),
(2,'test','test','test','test','1',1,1,'2022-04-28 09:15:41','2022-04-28 09:15:41'),
(3,'test','test','test','test','1',1,1,'2022-04-28 09:15:41','2022-04-28 09:15:41'),
(4,'test','test','test','test','1',1,1,'2022-04-28 09:15:41','2022-04-28 09:15:41'),
(5,'test','test','test','test','1',1,1,'2022-04-28 09:15:41','2022-04-28 09:15:41'),
(6,'test','test','test','test','1',1,1,'2022-04-28 09:15:41','2022-04-28 09:15:41'),
(7,'test','test','test','test','1',1,1,'2022-04-28 09:15:41','2022-04-28 09:15:41'),
(8,'test','test','test','test','1',1,1,'2022-04-28 09:15:41','2022-04-28 09:15:41'),
(9,'test','test','test','test','1',1,1,'2022-04-28 09:15:41','2022-04-28 09:15:41'),
(10,'test','test','test','test','1',1,1,'2022-04-28 09:15:41','2022-04-28 09:15:41'),
(11,'test','test','test','test','2',2,2,'2022-04-28 09:15:41','2022-04-28 09:15:41'),
(12,'test','test','test','test','2',2,2,'2022-04-28 09:15:41','2022-04-28 09:15:41'),
(13,'test','test','test','test','2',2,2,'2022-04-28 09:15:41','2022-04-28 09:15:41'),
(14,'test','test','test','test','2',2,2,'2022-04-28 09:15:41','2022-04-28 09:15:41'),
(15,'test','test','test','test','2',2,2,'2022-04-28 09:15:41','2022-04-28 09:15:41'),
(16,'test','test','test','test','2',2,2,'2022-04-28 09:15:41','2022-04-28 09:15:41'),
(17,'test','test','test','test','2',2,2,'2022-04-28 09:15:41','2022-04-28 09:15:41'),
(18,'test','test','test','test','2',2,2,'2022-04-28 09:15:41','2022-04-28 09:15:41'),
(19,'test','test','test','test','2',2,2,'2022-04-28 09:15:41','2022-04-28 09:15:41'),
(20,'test','test','test','test','2',2,2,'2022-04-28 09:15:41','2022-04-28 09:15:41');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES
(1,'Admin','2022-04-28 09:15:41','2022-04-28 09:15:41'),
(2,'User','2022-04-28 09:15:41','2022-04-28 09:15:41');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_question_histories`
--

DROP TABLE IF EXISTS `user_question_histories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_question_histories` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `score` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `not_answered` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `time` int(10) unsigned NOT NULL,
  `submitted_at` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `question_session_id` bigint(20) unsigned NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_question_histories_question_session_id_foreign` (`question_session_id`),
  KEY `user_question_histories_user_id_foreign` (`user_id`),
  CONSTRAINT `user_question_histories_question_session_id_foreign` FOREIGN KEY (`question_session_id`) REFERENCES `question_sessions` (`id`),
  CONSTRAINT `user_question_histories_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_question_histories`
--

LOCK TABLES `user_question_histories` WRITE;
/*!40000 ALTER TABLE `user_question_histories` DISABLE KEYS */;
INSERT INTO `user_question_histories` VALUES
(1,'8','1',2234,'2022-04-28 13:18:24','2022-04-28 09:18:24','2022-04-28 09:18:24',1,1),
(2,'8','1',2234,'2022-04-28 13:23:54','2022-04-28 09:23:54','2022-04-28 09:23:54',1,1),
(3,'8','1',2234,'2022-04-28 13:24:06','2022-04-28 09:24:06','2022-04-28 09:24:06',1,1),
(4,'8','1',2234,'2022-04-28 14:27:44','2022-04-28 10:27:44','2022-04-28 10:27:44',1,1),
(5,'80','1',23,'2022-04-29 05:51:11','2022-04-29 01:51:11','2022-04-29 01:51:11',1,5),
(6,'10','9',101,'2022-04-29 05:51:35','2022-04-29 01:51:35','2022-04-29 01:51:35',1,1),
(7,'10','8',94,'2022-04-29 05:51:36','2022-04-29 01:51:36','2022-04-29 01:51:36',1,1),
(8,'10','7',86,'2022-04-29 05:51:38','2022-04-29 01:51:38','2022-04-29 01:51:38',1,1),
(9,'20','6',79,'2022-04-29 05:51:40','2022-04-29 01:51:40','2022-04-29 01:51:40',1,1),
(10,'20','5',71,'2022-04-29 05:51:42','2022-04-29 01:51:42','2022-04-29 01:51:42',1,1),
(11,'20','4',65,'2022-04-29 05:51:44','2022-04-29 01:51:44','2022-04-29 01:51:44',1,1),
(12,'30','3',58,'2022-04-29 05:51:45','2022-04-29 01:51:45','2022-04-29 01:51:45',1,1),
(13,'30','2',50,'2022-04-29 05:51:47','2022-04-29 01:51:47','2022-04-29 01:51:47',1,1),
(14,'40','1',39,'2022-04-29 05:51:50','2022-04-29 01:51:50','2022-04-29 01:51:50',1,1),
(15,'50','0',31,'2022-04-29 05:51:52','2022-04-29 01:51:52','2022-04-29 01:51:52',1,1),
(16,'50','0',0,'2022-04-29 05:52:00','2022-04-29 01:52:00','2022-04-29 01:52:00',1,1);
/*!40000 ALTER TABLE `user_question_histories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` bigint(20) unsigned NOT NULL DEFAULT 2,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `users_role_id_foreign` (`role_id`),
  CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(1,'admin','admin@gmail.com','$2y$10$sYT5YdzP0fSg1iI42Z2joO1wE3qz3QKpbn.QgfGmIKxiTHwiqAMyO',NULL,NULL,'admin',1),
(2,'user','user@gmail.com','$2y$10$NCTmwAIAF2oFfOYXDry9nOgnRQGgSFbmwBgvPg7uk5KDgAe.mbfUG',NULL,NULL,'user',2),
(3,'tesfds','tessdf@gmail.com','$2y$10$tYSbbr5BMJZ/qeyL2wrR2ONlEkpkZ61fa7yZvPizvTQu.J5Kq/lzm','2022-04-28 13:51:17','2022-04-28 13:51:17','tesfds',2),
(4,'tessfds','tesssdf@gmail.com','$2y$10$Uw7FBMyawSDaKjLx2vfIjuYg9FdleMtDIHZD.kt9w/BRR9XMlBlcW','2022-04-28 13:53:06','2022-04-28 13:53:06','tessfds',2),
(5,'tesdfsfds','tessdfsdfssdf@gmail.com','$2y$10$SC.Z1IaS5wsccdo2tQiKneGnNgX/yGMOShmznxAxbzPbH8yAXiTvC','2022-04-28 14:03:25','2022-04-28 14:03:25','tesdfsfds',2),
(6,'asd','asd@gmail.com','$2y$10$AnasHThYK8ida1xvBBOvvuEisPtraSqxTmBOL9jwEj6y5J7XpWUZy','2022-04-28 14:04:58','2022-04-28 14:04:58','asd',2),
(7,'asd','ttt@gmail.com','$2y$10$qM6nqO2klJ1dhAEwG3lyNuW7gcRQb/kYcM6ogJdBG3BCjGkdRaTY.','2022-04-28 14:08:00','2022-04-28 14:08:00','asd',2),
(8,'asd','ad@gmail.com','$2y$10$3feeWrmCzPcOK8zoUS4w4O4qvHUQUOe966Clll4JWwyBdX30GvNPq','2022-04-28 14:08:52','2022-04-28 14:08:52','asd',2),
(11,'fasd','zz@gmail.com','$2y$10$Qyh4dMsUXBhatWsnIG6cKeA5FzHPGnIiy9fzLRoG8SFinW5nq1tTu','2022-04-28 14:24:03','2022-04-28 14:24:03','fasd',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-29  9:53:42
