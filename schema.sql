-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: mariadb
-- Tiempo de generación: 05-12-2022 a las 12:11:13
-- Versión del servidor: 10.10.2-MariaDB-1:10.10.2+maria~ubu2204
-- Versión de PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tournament`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `groups`
--

CREATE TABLE `groups` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `matches`
--

CREATE TABLE `matches` (
  `id` int(10) UNSIGNED NOT NULL,
  `teamA` varchar(255) NOT NULL,
  `teamB` varchar(255) NOT NULL,
  `pointsSet1A` tinyint(3) UNSIGNED DEFAULT 0,
  `pointsSet1B` tinyint(3) UNSIGNED DEFAULT 0,
  `pointsSet2B` tinyint(3) UNSIGNED DEFAULT 0,
  `pointsSet3A` tinyint(3) UNSIGNED DEFAULT 0,
  `pointsSet3B` tinyint(3) UNSIGNED DEFAULT 0,
  `pointsFairPlayA` tinyint(3) UNSIGNED DEFAULT 0,
  `pointsFairPlayB` tinyint(3) UNSIGNED DEFAULT 0,
  `datetime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teams`
--

CREATE TABLE `teams` (
  `name` varchar(255) NOT NULL,
  `details` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `pointsMatches` smallint(5) UNSIGNED DEFAULT 0,
  `pointsSets` smallint(5) UNSIGNED DEFAULT 0,
  `pointsAchieved` smallint(5) UNSIGNED DEFAULT 0,
  `pointsAgainst` smallint(5) UNSIGNED DEFAULT 0,
  `pointsFairplay` smallint(5) UNSIGNED DEFAULT 0,
  `group` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`name`);

--
-- Indices de la tabla `matches`
--
ALTER TABLE `matches`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teamA` (`teamA`),
  ADD KEY `teamB` (`teamB`);

--
-- Indices de la tabla `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`name`,`group`),
  ADD KEY `group` (`group`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `matches`
--
ALTER TABLE `matches`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `matches`
--
ALTER TABLE `matches`
  ADD CONSTRAINT `matches_ibfk_1` FOREIGN KEY (`teamA`) REFERENCES `teams` (`name`),
  ADD CONSTRAINT `matches_ibfk_2` FOREIGN KEY (`teamB`) REFERENCES `teams` (`name`);

--
-- Filtros para la tabla `teams`
--
ALTER TABLE `teams`
  ADD CONSTRAINT `teams_ibfk_1` FOREIGN KEY (`group`) REFERENCES `groups` (`name`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
