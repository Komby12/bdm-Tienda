-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2023 at 01:47 AM
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
-- Database: `bdmamazon`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CalificacionDelete` (IN `ID_Pro` INT(11), IN `ID_Usu` INT(11))   DELETE FROM calificacion 
WHERE ID_Producto = ID_Pro AND ID_Usuario = ID_Usu$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CalificacionInsert` (IN `ID_Pro` INT(11), IN `ID_Usu` INT(11), IN `Cal` INT(11), IN `Com` VARCHAR(400))   INSERT INTO calificacion (ID_Producto, ID_Usuario, Calificacion, Comentario) 
VALUES (ID_Pro, ID_Usu, Cal, Com )$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CalificacionSelect` (IN `ID_Pro` INT(11))   SELECT ID_Producto, Usuario, Calificacion, Comentario
FROM view_calificacionproducto
WHERE ID_Producto = ID_Pro$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CalificacionUpdate` (IN `ID_Pro` INT(11), IN `ID_Usu` INT(11), IN `Cal` INT(11), IN `Com` VARCHAR(400))   UPDATE calificacion SET Calificacion= Cal,Comentario= Com WHERE ID_Producto= ID_Pro AND ID_Usuario= ID_Usu$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CarritoDelete` (IN `ID_Usu` INT(11), IN `ID_Pro` INT(11))   DELETE FROM carrito
WHERE ID_Usuario = ID_Usu AND ID_Producto = ID_Pro$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CarritoInsert` (IN `ID_Usu` INT(11), IN `ID_Pro` INT(11), IN `Can` INT(11))   INSERT INTO carrito(ID_Usuario, ID_Producto, Cantidad) 
VALUES (ID_Usu, ID_Pro, Can)
ON DUPLICATE KEY UPDATE `Cantidad` = Can$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CarritoSelect` (IN `ID_Usu` INT(11))   SELECT ID_Producto, Nombre, Precio, Cantidad
FROM view_carrito
WHERE ID_Usuario = ID_Usu$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CategoriaInsert` (IN `Nom` VARCHAR(100), IN `Des` VARCHAR(400), IN `ID_Usu` INT(11))   INSERT INTO categoria(Nombre, Descripcion, ID_Usuario) 
VALUES (Nom, Des, ID_Usu)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CategoriaSelect` ()   SELECT ID_Categoria, Nombre, Descripcion, ID_Usuario FROM categoria$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CategoriaUpdate` (IN `ID_Cat` INT(11), IN `Nom` VARCHAR(100), IN `Des` VARCHAR(400))   UPDATE categoria SET Nombre = Nom, Descripcion = Des  
WHERE ID_CATEGORIA = ID_Cat$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CategoriaUsuario` (IN `ID_Usu` INT)   SELECT ID_Categoria, Nombre, Descripcion
FROM categoria
WHERE ID_Usuario = ID_Usu$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ChatCotizar` (IN `Tex` VARCHAR(400), IN `ID_Des` INT, IN `ID_Rem` INT, IN `ID_Pro` INT, IN `Can` INT, IN `Pre` DOUBLE)   INSERT INTO chat(Texto, ID_Destinatario, ID_Remitente, ID_Producto, Cantidad, Precio)
VALUES (Tex,ID_Des, ID_Rem, ID_Pro, Can, Pre)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ChatInsertar` (IN `Tex` VARCHAR(400), IN `ID_Des` INT, IN `ID_Rem` INT)   INSERT INTO chat(Texto, ID_Destinatario, ID_Remitente)
VALUES (Tex,ID_Des, ID_Rem)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ChatSelectConversacion` (IN `ID_Des` INT, IN `ID_Rem` INT)   SELECT ID_Mensaje, Texto, ID_Destinatario, ID_Remitente, Usuario, ID_Producto, Nombre, Cantidad, Precio
FROM viewCotizacion
WHERE ID_Destinatario = ID_Des AND ID_Remitente = ID_Rem OR (ID_Destinatario = ID_Rem AND ID_Remitente = ID_Des )$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ChatSelectID` (IN `ID_Men` INT)   SELECT ID_Mensaje, Texto, ID_Destinatario, ID_Remitente, Usuario, ID_Producto, Nombre, Cantidad, Precio
FROM viewCotizacion
WHERE ID_Mensaje = ID_Men$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ChatSelectRecibidos` (IN `ID_Des` INT)   SELECT ID_Mensaje, Texto, ID_Destinatario, ID_Remitente, Usuario, ID_Producto, Nombre, Cantidad, Precio
FROM viewCotizacion
WHERE ID_Destinatario = ID_Des
ORDER BY ID_Mensaje DESC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CompraHistorial` (IN `ID_Usu` INT)   SELECT ID_Usuario, ID_Compra, Total, Fecha, ID_Metodopago, ID_Producto, Cantidad, Precio, Nombre, ID_Categoria, Categoria, Existencia, Calificacion
FROM view_compras
WHERE ID_Usuario = ID_Usu$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CompraHistorialCategoria` (IN `ID_Usu` INT, IN `ID_Cat` INT)   SELECT ID_Usuario, ID_Compra, Total, Fecha, ID_Metodopago, ID_Producto, Cantidad, Precio, Nombre, ID_Categoria, Categoria, Existencia, Calificacion
FROM view_compras
WHERE ID_Usuario = ID_Usu AND ID_Categoria = ID_Cat$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CompraHistorialCategoriaFecha` (IN `ID_Usu` INT, IN `ID_Cat` INT, IN `FechaInicial` DATE, IN `FechaFinal` DATE)   SELECT ID_Usuario, ID_Compra, Total, Fecha, ID_Metodopago, ID_Producto, Cantidad, Precio, Nombre, ID_Categoria, Categoria, Existencia, Calificacion
FROM view_compras
WHERE ID_Usuario = ID_Usu AND ID_Categoria = ID_Cat AND Fecha BETWEEN FechaInicial AND FechaFinal$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CompraHistorialFecha` (IN `ID_Usu` INT, IN `FechaInicial` DATE, IN `FechaFinal` DATE)   SELECT ID_Usuario, ID_Compra, Total, Fecha, ID_Metodopago, ID_Producto, Cantidad, Precio, Nombre, ID_Categoria, Categoria, Existencia, Calificacion
FROM view_compras
WHERE ID_Usuario = ID_Usu AND Fecha BETWEEN FechaInicial AND FechaFinal$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CompraInsert` (IN `ID_Usu` INT(11))   INSERT INTO compra(ID_Usuario) VALUES (ID_Usu)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CompraTerminar` (IN `ID_Com` INT(11), IN `Dir` VARCHAR(100), IN `ID_Met` INT(11))   UPDATE compra SET Total = totalCompra(ID_Com), Fecha = NOW(), Direccion = Dir, ID_Metodopago = ID_Met  
WHERE  ID_Compra = ID_Com$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CompraVenta` (IN `ID_Usu` INT)   Select Fecha, Categoria, Nombre, Precio, Calificacion, Ventas, Existencia 
FROM view_ventas
WHERE ID_Usuario = ID_Usu$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CompraVentaAgrupada` (IN `ID_Usu` INT)   Select DATE_FORMAT(Fecha, '%Y/%m') Fecha, Categoria, SUM(Ventas) Ventas
FROM view_ventas
WHERE ID_Usuario = ID_Usu
GROUP BY YEAR(Fecha), MONTH(Fecha), Categoria$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CompraVentaAgrupadaCategoria` (IN `ID_Usu` INT, IN `ID_Cat` INT)   Select DATE_FORMAT(Fecha, '%Y/%m') Fecha, Categoria, SUM(Ventas) Ventas
FROM view_ventas
WHERE ID_Usuario = ID_Usu AND ID_Categoria = ID_Cat
GROUP BY YEAR(Fecha), MONTH(Fecha), Categoria$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CompraVentaAgrupadaCategoriaFecha` (IN `ID_Usu` INT, IN `ID_Cat` INT, IN `FechaInicial` DATE, IN `FechaFinal` DATE)   Select DATE_FORMAT(Fecha, '%Y/%m') Fecha, Categoria, SUM(Ventas) Ventas
FROM view_ventas
WHERE ID_Usuario = ID_Usu AND ID_Categoria = ID_Cat AND Fecha BETWEEN FechaInicial AND FechaFinal
GROUP BY YEAR(Fecha), MONTH(Fecha), Categoria$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CompraVentaAgrupadaFecha` (IN `ID_Usu` INT, IN `FechaInicial` DATE, IN `FechaFinal` DATE)   Select DATE_FORMAT(Fecha, '%Y/%m') Fecha, Categoria, SUM(Ventas) Ventas
FROM view_ventas
WHERE ID_Usuario = ID_Usu AND Fecha BETWEEN FechaInicial AND FechaFinal
GROUP BY YEAR(Fecha), MONTH(Fecha), Categoria$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CompraVentaCategoria` (IN `ID_Usu` INT, IN `ID_Cat` INT)   Select Fecha, Categoria, Nombre, Precio, Calificacion, Ventas, Existencia 
FROM view_ventas
WHERE ID_Usuario = ID_Usu AND ID_Categoria = ID_Cat$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CompraVentaCategoriaFecha` (IN `ID_Usu` INT, IN `ID_Cat` INT, IN `FechaInicial` DATE, IN `FechaFinal` DATE)   Select Fecha, Categoria, Nombre, Precio, Calificacion, Ventas, Existencia 
FROM view_ventas
WHERE ID_Usuario = ID_Usu AND ID_Categoria = ID_Cat AND Fecha BETWEEN FechaInicial AND FechaFinal$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CompraVentaFecha` (IN `ID_Usu` INT, IN `FechaInicial` DATE, IN `FechaFinal` DATE)   Select Fecha, Categoria, Nombre, Precio, Calificacion, Ventas, Existencia 
FROM view_ventas
WHERE ID_Usuario = ID_Usu AND Fecha BETWEEN FechaInicial AND FechaFinal$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ListaDelete` (IN `ID_Lis` INT)   BEGIN
DELETE FROM lista WHERE ID_Lista = ID_Lis;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ListaInsert` (IN `Nom` VARCHAR(100), IN `Des` VARCHAR(400), IN `Pub` TINYINT(1), IN `ID_Usu` INT(11))   INSERT INTO lista(Nombre, Descripcion, Publica, ID_Usuario) VALUES (Nom, Des, Pub, ID_Usu)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ListaSelectUsuario` (IN `ID_Usu` INT(11))   Select ID_Lista, Nombre, Descripcion, Publica, ID_Usuario 
FROM lista
WHERE ID_Usuario = ID_Usu AND Publica = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ListaSelectUsuarioTodas` (IN `ID_Usu` INT)   Select ID_Lista, Nombre, Descripcion, Publica, ID_Usuario 
FROM lista
WHERE ID_Usuario = ID_Usu$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ListaUpdate` (IN `ID_Lis` INT(11), IN `Nom` VARCHAR(100), IN `Des` VARCHAR(400), IN `Pub` TINYINT(1))   UPDATE lista SET Nombre= Nom, Descripcion= Des, Publica= Pub WHERE ID_LISTA= ID_Lis$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_MetodopagoSelect` ()   SELECT ID_Metodopago, Nombre
FROM metodopago$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ProductoAprobar` (IN `ID_Pro` INT(11), IN `ID_Adm` INT(11))   UPDATE producto
SET Aprobado = 1, ID_Administrador = ID_Adm
WHERE ID_Producto = ID_Pro$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ProductoBusquedaMayorPrecio` (IN `Nom` VARCHAR(100))   Select ID_Producto, Nombre, Precio, Categoria, Calificacion, Vendedor
FROM view_productosaprobados
WHERE Nombre LIKE CONCAT('%', Nom, '%') OR Vendedor LIKE CONCAT('%', Nom, '%')
ORDER BY Precio DESC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ProductoBusquedaMejorCalificacion` (IN `Nom` VARCHAR(100))   Select ID_Producto, Nombre, Precio, Categoria, Calificacion, Vendedor
FROM view_productosaprobados
WHERE Nombre LIKE CONCAT('%', Nom, '%') OR Vendedor LIKE CONCAT('%', Nom, '%')
ORDER BY Calificacion DESC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ProductoBusquedaMenorPrecio` (IN `Nom` VARCHAR(100))   Select ID_Producto, Nombre, Precio, Categoria, Calificacion, Vendedor
FROM view_productosaprobados
WHERE Nombre LIKE CONCAT('%', Nom, '%') OR Vendedor LIKE CONCAT('%', Nom, '%')
ORDER BY Precio ASC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ProductoBusquedaMenu` ()   Select ID_Producto, Nombre, Precio, Categoria, Calificacion, Vendedor
FROM view_productosaprobados
ORDER BY ID_Producto DESC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ProductoBusquedaNoAprobado` (IN `Nom` VARCHAR(100))   Select ID_Producto, Nombre, Precio, Categoria, Calificacion, Vendedor
FROM view_productosnoaprobados
WHERE Nombre LIKE CONCAT('%', Nom, '%') OR Vendedor LIKE CONCAT('%', Nom, '%')$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ProductoBusquedaNombre` (IN `Nom` VARCHAR(100))   Select ID_Producto, Nombre, Precio, Categoria, Calificacion, Vendedor
FROM view_productosaprobados
WHERE Nombre LIKE CONCAT('%', Nom, '%') OR Vendedor LIKE CONCAT('%', Nom, '%')$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ProductoCompraInsert` (IN `ID_Com` INT(11), IN `ID_Pro` INT(11), IN `Can` INT(11), IN `Pre` DOUBLE)   INSERT INTO productocompra(ID_Compra, ID_Producto, Cantidad, Precio) VALUES (ID_Com, ID_Pro, Can, Pre )$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ProductoInsert` (IN `Nom` VARCHAR(100), IN `Des` VARCHAR(400), IN `Pre` DOUBLE, IN `Exi` INT(11), IN `Cot` TINYINT(1), IN `ID_Cat` INT(11), IN `ID_Usu` INT(11))   INSERT INTO `producto`(`Nombre`, `Descripcion`, `Precio`, `Existencia`, `Cotizar`, `ID_Usuario`, `ID_Categoria`) VALUES (Nom, Des, Pre, Exi, Cot, ID_Usu, ID_Cat )$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ProductolistaDelete` (IN `ID_Lis` INT(11), IN `ID_Pro` INT(11))   DELETE FROM productolista WHERE ID_Lista = ID_Lis AND ID_Producto = ID_Pro$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ProductolistaInsert` (IN `ID_Lis` INT(11), IN `ID_Pro` INT(11))   INSERT INTO productolista(ID_Lista, ID_Producto) VALUES (ID_Lis, ID_Pro)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ProductoListaSelect` (IN `ID_Lis` INT)   SELECT  ID_Lista, ID_Producto,Nombre, Precio
FROM view_productolista
WHERE ID_Lista = ID_Lis$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ProductoPagina` (IN `ID_Pro` INT(11))   Select ID_Producto, Nombre, Descripcion, Precio, Existencia, Cotizar, Usuario
FROM view_paginaproducto
WHERE ID_Producto = ID_Pro$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ProductoSelectCotizar` (IN `ID_Usu` INT)   SELECT ID_Producto, Nombre 
FROM producto
WHERE ID_Usuario = ID_Usu AND Aprobado = 1 AND Cotizar = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ProductoUpdate` (IN `ID_Pro` INT, IN `Nom` VARCHAR(100), IN `Des` VARCHAR(400), IN `Pre` DOUBLE, IN `Can` INT, IN `Cot` TINYINT(1), IN `ID_Cat` INT)   UPDATE producto SET Nombre= Nom, Descripcion = Des, Existencia = Can, Precio = Pre, Cotizar = Cot, ID_Categoria = ID_Cat WHERE ID_Producto = ID_Pro$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ProductoUsuario` (IN `ID_Usu` INT)   Select ID_Producto, Nombre, Descripcion, Precio, Existencia
FROM producto
WHERE ID_Usuario = ID_Usu$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_UsuarioInsert` (IN `usu` VARCHAR(100), IN `nom` VARCHAR(100), IN `con` VARCHAR(100), IN `fen` DATE, IN `ema` VARCHAR(100), IN `ima` VARCHAR(400), IN `sex` VARCHAR(1), IN `pub` TINYINT, IN `ro` INT)   BEGIN
INSERT INTO usuario(Usuario, Nombre, Contrasena, FechaNacimiento, FechaIngreso, Email, Imagen, Sexo, Publico, Rol)
 VALUES (usu, nom, con, fen, NOW(), ema, ima, sex, pub, ro );
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_UsuarioLogin` (IN `Usu` VARCHAR(100), IN `Con` VARCHAR(100))   SELECT ID_Usuario, Usuario, Nombre, Contrasena, Imagen, Rol 
FROM usuario
WHERE Usuario = Usu AND Contrasena = Con
LIMIT 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_UsuarioPerfil` (IN `ID_Usu` INT(11))   SELECT ID_Usuario, Usuario, Nombre, Contrasena, FechaNacimiento, FechaIngreso, Email, Imagen, Sexo, Publico, Rol 
FROM usuario
WHERE ID_Usuario = ID_Usu$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_UsuarioSelect` (IN `Usu` VARCHAR(100))   SELECT ID_Usuario, Usuario, Imagen, Rol, Publico
FROM usuario
WHERE Usuario LIKE CONCAT('%', Usu, '%')$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_UsuarioSelectID` (IN `ID_Usu` INT)   SELECT ID_Usuario, Usuario, Nombre, Contrasena, Imagen, FechaNacimiento, FechaIngreso, Email, Rol, Publico
FROM usuario
WHERE ID_Usuario = ID_Usu$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_UsuarioUpdate` (IN `ID_Usu` INT(11), IN `Usu` VARCHAR(100), IN `Nom` VARCHAR(100), IN `Con` VARCHAR(100), IN `Ima` VARCHAR(400))   UPDATE usuario
SET Usuario = Usu, Nombre = Nom, Contrasena = Con, Imagen = Ima 
WHERE ID_Usuario = ID_Usu$$

--
-- Functions
--
CREATE DEFINER=`root`@`localhost` FUNCTION `comprareciente` (`ID_Usu` INT(11)) RETURNS INT(11)  BEGIN
DECLARE result INT;
SET result = (SELECT ID_Compra 
FROM compra
WHERE ID_Usuario = ID_Usu
ORDER BY ID_Compra DESC
LIMIT 1);
RETURN result;
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `promediocalificacion` (`IDP` INT) RETURNS DOUBLE  BEGIN
DECLARE nota DOUBLE;
SET nota =
(Select AVG(Calificacion) FROM calificacion
WHERE ID_Producto = IDP);
RETURN nota;
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `totalcarrito` (`ID_Usu` INT) RETURNS DOUBLE  BEGIN
DECLARE total double;
SET total =
(SELECT SUM(Precio * Cantidad)
FROM view_carrito
WHERE ID_Usuario = ID_Usu);
RETURN total;
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `totalcompra` (`ID_Com` INT(11)) RETURNS DOUBLE  BEGIN
DECLARE total double;
SET total =
(SELECT SUM(Precio * Cantidad)
FROM productocompra
WHERE ID_Compra = ID_Com);
RETURN total;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `calificacion`
--

CREATE TABLE `calificacion` (
  `ID_Producto` int(11) NOT NULL,
  `ID_Usuario` int(11) NOT NULL,
  `Calificacion` int(11) DEFAULT NULL,
  `Comentario` varchar(400) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `calificacion`
--

INSERT INTO `calificacion` (`ID_Producto`, `ID_Usuario`, `Calificacion`, `Comentario`) VALUES
(1, 2, 8, 'Gud'),
(4, 2, 10, 'Es lo mejor!'),
(7, 2, 8, 'Genial!!');

-- --------------------------------------------------------

--
-- Table structure for table `carrito`
--

CREATE TABLE `carrito` (
  `ID_Usuario` int(11) NOT NULL,
  `ID_Producto` int(11) NOT NULL,
  `Cantidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `carrito`
--

INSERT INTO `carrito` (`ID_Usuario`, `ID_Producto`, `Cantidad`) VALUES
(3, 1, 4),
(4, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `categoria`
--

CREATE TABLE `categoria` (
  `ID_Categoria` int(11) NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Descripcion` varchar(400) DEFAULT NULL,
  `ID_Usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categoria`
--

INSERT INTO `categoria` (`ID_Categoria`, `Nombre`, `Descripcion`, `ID_Usuario`) VALUES
(1, 'Robotica', 'Metal, lo mejor que existe!', 2),
(2, 'Herramienta', 'Duras y de calidad.', 2),
(3, 'Juguetes', 'Juejuwjuw', 2),
(4, 'Ropa', 'Prendas vestir', 2);

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `ID_Mensaje` int(11) NOT NULL,
  `Texto` varchar(400) DEFAULT NULL,
  `ID_Destinatario` int(11) NOT NULL,
  `ID_Remitente` int(11) NOT NULL,
  `ID_Producto` int(11) DEFAULT NULL,
  `Cantidad` int(11) DEFAULT NULL,
  `Precio` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`ID_Mensaje`, `Texto`, `ID_Destinatario`, `ID_Remitente`, `ID_Producto`, `Cantidad`, `Precio`) VALUES
(2, 'Saludos, humano!', 3, 2, NULL, NULL, NULL),
(3, 'No.', 2, 3, NULL, NULL, NULL),
(4, 'Te lo pondre de todos modos!', 3, 2, 2, 3, 40),
(11, 'De nuevo!', 3, 2, 2, 1, 35),
(12, 'Genial, no?', 3, 2, 2, 2, 50);

-- --------------------------------------------------------

--
-- Table structure for table `compra`
--

CREATE TABLE `compra` (
  `ID_Compra` int(11) NOT NULL,
  `Total` double DEFAULT NULL,
  `Fecha` datetime DEFAULT NULL,
  `Direccion` varchar(100) DEFAULT NULL,
  `ID_Usuario` int(11) DEFAULT NULL,
  `ID_Metodopago` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `compra`
--

INSERT INTO `compra` (`ID_Compra`, `Total`, `Fecha`, `Direccion`, `ID_Usuario`, `ID_Metodopago`) VALUES
(1, 375, '2023-11-29 20:24:05', 'Ningun lugar', 3, 1),
(3, 225, '2023-12-02 01:28:30', 'Futurama', 2, 2),
(4, 575, '2023-12-02 10:29:31', '', 2, 3),
(5, 40, '2023-12-02 11:10:09', '', 2, 3),
(6, 120, '2023-12-04 08:38:55', 'Ningun lugar.', 3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `imagenproducto`
--

CREATE TABLE `imagenproducto` (
  `ID_Producto` int(11) NOT NULL,
  `Imagen` varchar(400) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lista`
--

CREATE TABLE `lista` (
  `ID_Lista` int(11) NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Descripcion` varchar(400) DEFAULT NULL,
  `Publica` tinyint(4) DEFAULT NULL,
  `ID_Usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lista`
--

INSERT INTO `lista` (`ID_Lista`, `Nombre`, `Descripcion`, `Publica`, `ID_Usuario`) VALUES
(1, 'Mi segunda lista', 'Esta no esta eliminada!', 1, 3),
(2, 'Robotica Favorita', 'Mis cosas robot favoritas!', 1, 3),
(3, 'Bobo', 'Bobobobobo', 1, 2),
(5, 'Camisa', 'camisa supreme', 0, 2),
(6, 'cinta', 'Lo arregla todo!', 0, 2);

-- --------------------------------------------------------

--
-- Table structure for table `metodopago`
--

CREATE TABLE `metodopago` (
  `ID_Metodopago` int(11) NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `metodopago`
--

INSERT INTO `metodopago` (`ID_Metodopago`, `Nombre`) VALUES
(1, 'Efectivo'),
(2, 'Tarjeta'),
(3, 'Paypal');

-- --------------------------------------------------------

--
-- Table structure for table `producto`
--

CREATE TABLE `producto` (
  `ID_Producto` int(11) NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Descripcion` varchar(400) DEFAULT NULL,
  `Precio` double DEFAULT NULL,
  `Existencia` int(11) DEFAULT NULL,
  `Cotizar` tinyint(4) DEFAULT NULL,
  `Aprobado` tinyint(1) DEFAULT 0,
  `ID_Categoria` int(11) DEFAULT NULL,
  `ID_Usuario` int(11) DEFAULT NULL,
  `ID_Administrador` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `producto`
--

INSERT INTO `producto` (`ID_Producto`, `Nombre`, `Descripcion`, `Precio`, `Existencia`, `Cotizar`, `Aprobado`, `ID_Categoria`, `ID_Usuario`, `ID_Administrador`) VALUES
(1, 'Equipo de reparacion', 'Curacion robotica.', 75, 47, 0, 1, 1, 2, NULL),
(2, 'Llave inglesa', 'Dura y pesada!', 0, 96, 1, 1, 1, 2, 1),
(3, 'Cinta', 'Lo arregla todo!', 20, 388, 0, 1, 2, 2, 1),
(4, 'Figura de mi', 'Soy fantastico!', 2000, 5, 0, 1, 1, 2, 1),
(5, 'Camisa', 'Prenda superior supreme', 12000, 10, 0, 0, 4, 2, NULL),
(6, 'Robot de juguete', 'Divertido robot!', 20, 60, 1, 0, 3, 2, NULL),
(7, 'Camisa de Bender', 'Se genial como yo!', 40, 200, 1, 1, 4, 2, 11);

-- --------------------------------------------------------

--
-- Table structure for table `productocompra`
--

CREATE TABLE `productocompra` (
  `ID_Compra` int(11) NOT NULL,
  `ID_Producto` int(11) NOT NULL,
  `Cantidad` int(11) DEFAULT NULL,
  `Precio` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `productocompra`
--

INSERT INTO `productocompra` (`ID_Compra`, `ID_Producto`, `Cantidad`, `Precio`) VALUES
(1, 1, 5, 75),
(3, 1, 3, 75),
(4, 1, 5, 75),
(4, 3, 10, 20),
(5, 2, 1, 0),
(5, 3, 2, 20),
(6, 2, 3, 40);

--
-- Triggers `productocompra`
--
DELIMITER $$
CREATE TRIGGER `productocompra_borrar_carrito` AFTER INSERT ON `productocompra` FOR EACH ROW BEGIN
DECLARE usu INT;
SET usu = (Select ID_Usuario from compra where ID_Compra = New.ID_Compra);
DELETE C FROM carrito C
WHERE C.ID_Producto = New.ID_Producto AND C.ID_Usuario = usu;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `productocompra_restar_existencia` AFTER INSERT ON `productocompra` FOR EACH ROW BEGIN
UPDATE producto P
SET P.Existencia = (P.Existencia - NEW.cantidad)
WHERE P.ID_Producto = NEW.ID_Producto;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `productolista`
--

CREATE TABLE `productolista` (
  `ID_Lista` int(11) NOT NULL,
  `ID_Producto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `productolista`
--

INSERT INTO `productolista` (`ID_Lista`, `ID_Producto`) VALUES
(1, 1),
(5, 2),
(5, 7),
(6, 1);

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `ID_Usuario` int(11) NOT NULL,
  `Usuario` varchar(100) DEFAULT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Contrasena` varchar(100) DEFAULT NULL,
  `FechaNacimiento` date DEFAULT NULL,
  `FechaIngreso` date DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Imagen` varchar(400) DEFAULT NULL,
  `Sexo` varchar(1) DEFAULT NULL,
  `Publico` tinyint(4) DEFAULT NULL,
  `Rol` enum('Cliente','Vendedor','Administrador') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`ID_Usuario`, `Usuario`, `Nombre`, `Contrasena`, `FechaNacimiento`, `FechaIngreso`, `Email`, `Imagen`, `Sexo`, `Publico`, `Rol`) VALUES
(1, 'ElAdmin', 'Coronel Sandalias', 'KFC', '1980-12-10', '2023-11-26', 'KFC@pollo.com', 'https://2.bp.blogspot.com/-1ehEyAqAbRw/TlN_Nw3qv0I/AAAAAAAAFck/INrE6IO6ac0/s1600/KFC.png', 'H', 0, 'Administrador'),
(2, 'Bender', 'Bender Big', 'Robotrules', '1990-09-20', '2023-11-26', 'Bender@bot.com', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3701eb7d-9af3-447f-a23d-058c8fed279d/d873epm-c2f34d57-d891-4706-9281-6df967c84d5d.jpg/v1/fill/w_1016,h_787,q_75,strp/bender_by_leburritogrande-d873epm.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1', 'H', 1, 'Vendedor'),
(3, 'Triste', 'Tristan McGuffin', 'Trist@n11', '0000-00-00', '2023-11-26', 'https://www.giantbomb.com/a/uploads/scale_medium/0/9320/535395-chocobo_baby.jpg', 'H', '2', 1, 'Cliente'),
(4, 'Mango', 'Pera', 'Mango11!', '0000-00-00', '2023-11-29', 'https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-0', 'H', '2', 1, 'Cliente'),
(11, 'Manzanita', 'Manza', 'Ninguna00@', '2000-12-12', '2023-11-29', 'no@hotmail.com', 'ninguna.png', 'M', 1, 'Administrador'),
(12, 'Manzan', 'Manzano', 'Manzana11!', '2005-12-06', '2023-11-29', 'Manzana@hotmail.com', 'https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/mango.jpg?itok=KiyDzhWy', 'M', 0, 'Cliente'),
(13, 'Zac', 'Zac', 'Megazucc11@', '2001-11-29', '2023-11-29', 'Zucc@hotmail.com', 'https://4.bp.blogspot.com/-GOOCS9LbwP8/Taz7HOWknfI/AAAAAAAAACs/V7sR0wpvMKM/s1600/Cute+Puppy+Dog.jpg', 'H', 1, 'Cliente'),
(14, 'Zarzar', 'Zack', 'Megazucc11@', '2001-11-05', '2023-11-29', 'Zuccquistukis@hotmail.com', 'https://4.bp.blogspot.com/-GOOCS9LbwP8/Taz7HOWknfI/AAAAAAAAACs/V7sR0wpvMKM/s1600/Cute+Puppy+Dog.jpg', 'H', 1, 'Vendedor'),
(15, 'Tas', 'Tas', 'Tazt@s11', '1989-05-30', '2023-11-29', 'mania@gmail.com', 'https://duckduckgo.com/?q=taz&t=ffab&iar=images&iax=images&ia=images&iai=http%3A%2F%2F1.bp.blogspot.com%2F-E23PqAbKj2E%2FTXBBgZZhYdI%2FAAAAAAAAB34%2FUPinShQOZ04%2Fs1600%2FLT%252B-%252BTaz%252B2%252Bcolor.JPG', 'H', 1, 'Cliente'),
(19, 'TasDos', 'Tasito', 'Tasmani@11', '2004-09-20', '2023-11-30', 'Tastas@gmail.com', 'https://duckduckgo.com/?q=taz&t=ffab&iar=images&iax=images&ia=images&iai=http%3A%2F%2F1.bp.blogspot.com%2F-E23PqAbKj2E%2FTXBBgZZhYdI%2FAAAAAAAAB34%2FUPinShQOZ04%2Fs1600%2FLT%252B-%252BTaz%252B2%252Bcolor.JPG', 'H', 1, 'Cliente'),
(20, 'Michael', 'Ted', 'Shimon@1', '2005-11-14', '2023-12-02', 'jakson@wahoo.com', 'no.jpg', 'H', 1, 'Vendedor');

-- --------------------------------------------------------

--
-- Table structure for table `videoproducto`
--

CREATE TABLE `videoproducto` (
  `ID_Producto` int(11) NOT NULL,
  `Video` varchar(400) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Stand-in structure for view `viewcotizacion`
-- (See below for the actual view)
--
CREATE TABLE `viewcotizacion` (
`ID_Mensaje` int(11)
,`Texto` varchar(400)
,`ID_Destinatario` int(11)
,`ID_Remitente` int(11)
,`Usuario` varchar(100)
,`ID_Producto` int(11)
,`Nombre` varchar(100)
,`Cantidad` int(11)
,`Precio` double
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_calificacionproducto`
-- (See below for the actual view)
--
CREATE TABLE `view_calificacionproducto` (
`ID_Producto` int(11)
,`Usuario` varchar(100)
,`Calificacion` int(11)
,`Comentario` varchar(400)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_carrito`
-- (See below for the actual view)
--
CREATE TABLE `view_carrito` (
`ID_Usuario` int(11)
,`ID_Producto` int(11)
,`Nombre` varchar(100)
,`Precio` double
,`Cantidad` int(11)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_compras`
-- (See below for the actual view)
--
CREATE TABLE `view_compras` (
`ID_Usuario` int(11)
,`ID_Compra` int(11)
,`Total` double
,`Fecha` datetime
,`ID_Metodopago` int(11)
,`ID_Producto` int(11)
,`Cantidad` int(11)
,`Precio` double
,`Nombre` varchar(100)
,`ID_Categoria` int(11)
,`Categoria` varchar(100)
,`Existencia` int(11)
,`Calificacion` double
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_listapublica`
-- (See below for the actual view)
--
CREATE TABLE `view_listapublica` (
`ID_Usuario` int(11)
,`ID_Lista` int(11)
,`Nombre` varchar(100)
,`Descripcion` varchar(400)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_paginaproducto`
-- (See below for the actual view)
--
CREATE TABLE `view_paginaproducto` (
`ID_Producto` int(11)
,`Nombre` varchar(100)
,`Precio` double
,`Cotizar` tinyint(4)
,`Descripcion` varchar(400)
,`Existencia` int(11)
,`Usuario` varchar(100)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_productocompracategoria`
-- (See below for the actual view)
--
CREATE TABLE `view_productocompracategoria` (
`ID_Compra` int(11)
,`ID_Producto` int(11)
,`Cantidad` int(11)
,`Precio` double
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_productolista`
-- (See below for the actual view)
--
CREATE TABLE `view_productolista` (
`ID_Lista` int(11)
,`ID_Producto` int(11)
,`Nombre` varchar(100)
,`Precio` double
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_productosaprobados`
-- (See below for the actual view)
--
CREATE TABLE `view_productosaprobados` (
`ID_Producto` int(11)
,`Nombre` varchar(100)
,`Precio` double
,`Existencia` int(11)
,`Cotizar` tinyint(4)
,`Vendedor` varchar(100)
,`ID_Categoria` int(11)
,`Categoria` varchar(100)
,`Calificacion` double
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_productosnoaprobados`
-- (See below for the actual view)
--
CREATE TABLE `view_productosnoaprobados` (
`ID_Producto` int(11)
,`Nombre` varchar(100)
,`Precio` double
,`Existencia` int(11)
,`Cotizar` tinyint(4)
,`Vendedor` varchar(100)
,`ID_Categoria` int(11)
,`Categoria` varchar(100)
,`Calificacion` double
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_usuariosclientes`
-- (See below for the actual view)
--
CREATE TABLE `view_usuariosclientes` (
`ID_Usuario` int(11)
,`Usuario` varchar(100)
,`Nombre` varchar(100)
,`Imagen` varchar(400)
,`FechaIngreso` date
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_ventas`
-- (See below for the actual view)
--
CREATE TABLE `view_ventas` (
`ID_Usuario` int(11)
,`ID_Compra` int(11)
,`Total` double
,`Fecha` datetime
,`ID_Metodopago` int(11)
,`ID_Producto` int(11)
,`Ventas` int(11)
,`Precio` double
,`Nombre` varchar(100)
,`ID_Categoria` int(11)
,`Categoria` varchar(100)
,`Existencia` int(11)
,`Calificacion` double
);

-- --------------------------------------------------------

--
-- Structure for view `viewcotizacion`
--
DROP TABLE IF EXISTS `viewcotizacion`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `viewcotizacion`  AS SELECT `c`.`ID_Mensaje` AS `ID_Mensaje`, `c`.`Texto` AS `Texto`, `c`.`ID_Destinatario` AS `ID_Destinatario`, `c`.`ID_Remitente` AS `ID_Remitente`, `u`.`Usuario` AS `Usuario`, `c`.`ID_Producto` AS `ID_Producto`, `p`.`Nombre` AS `Nombre`, `c`.`Cantidad` AS `Cantidad`, `c`.`Precio` AS `Precio` FROM ((`chat` `c` left join `usuario` `u` on(`c`.`ID_Remitente` = `u`.`ID_Usuario`)) left join `producto` `p` on(`c`.`ID_Producto` = `p`.`ID_Producto`)) ;

-- --------------------------------------------------------

--
-- Structure for view `view_calificacionproducto`
--
DROP TABLE IF EXISTS `view_calificacionproducto`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_calificacionproducto`  AS SELECT `c`.`ID_Producto` AS `ID_Producto`, `u`.`Usuario` AS `Usuario`, `c`.`Calificacion` AS `Calificacion`, `c`.`Comentario` AS `Comentario` FROM (`calificacion` `c` left join `usuario` `u` on(`c`.`ID_Usuario` = `u`.`ID_Usuario`)) ;

-- --------------------------------------------------------

--
-- Structure for view `view_carrito`
--
DROP TABLE IF EXISTS `view_carrito`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_carrito`  AS SELECT `c`.`ID_Usuario` AS `ID_Usuario`, `c`.`ID_Producto` AS `ID_Producto`, `p`.`Nombre` AS `Nombre`, `p`.`Precio` AS `Precio`, `c`.`Cantidad` AS `Cantidad` FROM (`carrito` `c` left join `producto` `p` on(`c`.`ID_Producto` = `p`.`ID_Producto`)) ;

-- --------------------------------------------------------

--
-- Structure for view `view_compras`
--
DROP TABLE IF EXISTS `view_compras`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_compras`  AS SELECT `c`.`ID_Usuario` AS `ID_Usuario`, `c`.`ID_Compra` AS `ID_Compra`, `c`.`Total` AS `Total`, `c`.`Fecha` AS `Fecha`, `c`.`ID_Metodopago` AS `ID_Metodopago`, `pc`.`ID_Producto` AS `ID_Producto`, `pc`.`Cantidad` AS `Cantidad`, `pc`.`Precio` AS `Precio`, `p`.`Nombre` AS `Nombre`, `p`.`ID_Categoria` AS `ID_Categoria`, `ca`.`Nombre` AS `Categoria`, `p`.`Existencia` AS `Existencia`, `promediocalificacion`(`pc`.`ID_Producto`) AS `Calificacion` FROM (((`compra` `c` left join `productocompra` `pc` on(`c`.`ID_Compra` = `pc`.`ID_Compra`)) left join `producto` `p` on(`pc`.`ID_Producto` = `p`.`ID_Producto`)) left join `categoria` `ca` on(`p`.`ID_Categoria` = `ca`.`ID_Categoria`)) ;

-- --------------------------------------------------------

--
-- Structure for view `view_listapublica`
--
DROP TABLE IF EXISTS `view_listapublica`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_listapublica`  AS SELECT `l`.`ID_Usuario` AS `ID_Usuario`, `l`.`ID_Lista` AS `ID_Lista`, `l`.`Nombre` AS `Nombre`, `l`.`Descripcion` AS `Descripcion` FROM `lista` AS `l` WHERE `l`.`Publica` = 1 ;

-- --------------------------------------------------------

--
-- Structure for view `view_paginaproducto`
--
DROP TABLE IF EXISTS `view_paginaproducto`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_paginaproducto`  AS SELECT `p`.`ID_Producto` AS `ID_Producto`, `p`.`Nombre` AS `Nombre`, `p`.`Precio` AS `Precio`, `p`.`Cotizar` AS `Cotizar`, `p`.`Descripcion` AS `Descripcion`, `p`.`Existencia` AS `Existencia`, `u`.`Usuario` AS `Usuario` FROM (`producto` `p` left join `usuario` `u` on(`p`.`ID_Usuario` = `u`.`ID_Usuario`)) ;

-- --------------------------------------------------------

--
-- Structure for view `view_productocompracategoria`
--
DROP TABLE IF EXISTS `view_productocompracategoria`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_productocompracategoria`  AS SELECT `pc`.`ID_Compra` AS `ID_Compra`, `pc`.`ID_Producto` AS `ID_Producto`, `pc`.`Cantidad` AS `Cantidad`, `pc`.`Precio` AS `Precio` FROM ((`productocompra` `pc` left join `producto` `p` on(`pc`.`ID_Producto` = `p`.`ID_Producto`)) left join `categoria` `c` on(`p`.`ID_Categoria` = `c`.`ID_Categoria`)) ;

-- --------------------------------------------------------

--
-- Structure for view `view_productolista`
--
DROP TABLE IF EXISTS `view_productolista`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_productolista`  AS SELECT `pl`.`ID_Lista` AS `ID_Lista`, `pl`.`ID_Producto` AS `ID_Producto`, `p`.`Nombre` AS `Nombre`, `p`.`Precio` AS `Precio` FROM (`productolista` `pl` left join `producto` `p` on(`pl`.`ID_Producto` = `p`.`ID_Producto`)) ;

-- --------------------------------------------------------

--
-- Structure for view `view_productosaprobados`
--
DROP TABLE IF EXISTS `view_productosaprobados`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_productosaprobados`  AS SELECT `p`.`ID_Producto` AS `ID_Producto`, `p`.`Nombre` AS `Nombre`, `p`.`Precio` AS `Precio`, `p`.`Existencia` AS `Existencia`, `p`.`Cotizar` AS `Cotizar`, `u`.`Nombre` AS `Vendedor`, `c`.`ID_Categoria` AS `ID_Categoria`, `c`.`Nombre` AS `Categoria`, `promediocalificacion`(`p`.`ID_Producto`) AS `Calificacion` FROM ((`producto` `p` left join `usuario` `u` on(`p`.`ID_Usuario` = `u`.`ID_Usuario`)) left join `categoria` `c` on(`p`.`ID_Categoria` = `c`.`ID_Categoria`)) WHERE `p`.`Aprobado` = 1 ;

-- --------------------------------------------------------

--
-- Structure for view `view_productosnoaprobados`
--
DROP TABLE IF EXISTS `view_productosnoaprobados`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_productosnoaprobados`  AS SELECT `p`.`ID_Producto` AS `ID_Producto`, `p`.`Nombre` AS `Nombre`, `p`.`Precio` AS `Precio`, `p`.`Existencia` AS `Existencia`, `p`.`Cotizar` AS `Cotizar`, `u`.`Nombre` AS `Vendedor`, `c`.`ID_Categoria` AS `ID_Categoria`, `c`.`Nombre` AS `Categoria`, `promediocalificacion`(`p`.`ID_Producto`) AS `Calificacion` FROM ((`producto` `p` left join `usuario` `u` on(`p`.`ID_Usuario` = `u`.`ID_Usuario`)) left join `categoria` `c` on(`p`.`ID_Categoria` = `c`.`ID_Categoria`)) WHERE `p`.`Aprobado` = 0 ;

-- --------------------------------------------------------

--
-- Structure for view `view_usuariosclientes`
--
DROP TABLE IF EXISTS `view_usuariosclientes`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_usuariosclientes`  AS SELECT `u`.`ID_Usuario` AS `ID_Usuario`, `u`.`Usuario` AS `Usuario`, `u`.`Nombre` AS `Nombre`, `u`.`Imagen` AS `Imagen`, `u`.`FechaIngreso` AS `FechaIngreso` FROM `usuario` AS `u` WHERE `u`.`Rol` = 1 ;

-- --------------------------------------------------------

--
-- Structure for view `view_ventas`
--
DROP TABLE IF EXISTS `view_ventas`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_ventas`  AS SELECT `p`.`ID_Usuario` AS `ID_Usuario`, `c`.`ID_Compra` AS `ID_Compra`, `c`.`Total` AS `Total`, `c`.`Fecha` AS `Fecha`, `c`.`ID_Metodopago` AS `ID_Metodopago`, `pc`.`ID_Producto` AS `ID_Producto`, `pc`.`Cantidad` AS `Ventas`, `pc`.`Precio` AS `Precio`, `p`.`Nombre` AS `Nombre`, `p`.`ID_Categoria` AS `ID_Categoria`, `ca`.`Nombre` AS `Categoria`, `p`.`Existencia` AS `Existencia`, `promediocalificacion`(`pc`.`ID_Producto`) AS `Calificacion` FROM (((`compra` `c` left join `productocompra` `pc` on(`c`.`ID_Compra` = `pc`.`ID_Compra`)) left join `producto` `p` on(`pc`.`ID_Producto` = `p`.`ID_Producto`)) left join `categoria` `ca` on(`p`.`ID_Categoria` = `ca`.`ID_Categoria`)) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `calificacion`
--
ALTER TABLE `calificacion`
  ADD PRIMARY KEY (`ID_Producto`,`ID_Usuario`),
  ADD KEY `ID_Usuario` (`ID_Usuario`);

--
-- Indexes for table `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`ID_Usuario`,`ID_Producto`),
  ADD KEY `ID_Producto` (`ID_Producto`);

--
-- Indexes for table `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`ID_Categoria`),
  ADD KEY `ID_Usuario` (`ID_Usuario`);

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`ID_Mensaje`),
  ADD KEY `FK_Destinatario` (`ID_Destinatario`),
  ADD KEY `FK_Remitente` (`ID_Remitente`),
  ADD KEY `FK_Producto` (`ID_Producto`);

--
-- Indexes for table `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`ID_Compra`),
  ADD KEY `ID_Usuario` (`ID_Usuario`),
  ADD KEY `ID_Metodopago` (`ID_Metodopago`);

--
-- Indexes for table `imagenproducto`
--
ALTER TABLE `imagenproducto`
  ADD PRIMARY KEY (`ID_Producto`);

--
-- Indexes for table `lista`
--
ALTER TABLE `lista`
  ADD PRIMARY KEY (`ID_Lista`),
  ADD KEY `ID_Usuario` (`ID_Usuario`);

--
-- Indexes for table `metodopago`
--
ALTER TABLE `metodopago`
  ADD PRIMARY KEY (`ID_Metodopago`);

--
-- Indexes for table `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`ID_Producto`),
  ADD KEY `ID_Categoria` (`ID_Categoria`);

--
-- Indexes for table `productocompra`
--
ALTER TABLE `productocompra`
  ADD PRIMARY KEY (`ID_Compra`,`ID_Producto`),
  ADD KEY `ID_Producto` (`ID_Producto`);

--
-- Indexes for table `productolista`
--
ALTER TABLE `productolista`
  ADD PRIMARY KEY (`ID_Lista`,`ID_Producto`),
  ADD KEY `ID_Producto` (`ID_Producto`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`ID_Usuario`),
  ADD UNIQUE KEY `Usuario` (`Usuario`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Indexes for table `videoproducto`
--
ALTER TABLE `videoproducto`
  ADD PRIMARY KEY (`ID_Producto`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categoria`
--
ALTER TABLE `categoria`
  MODIFY `ID_Categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `ID_Mensaje` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `compra`
--
ALTER TABLE `compra`
  MODIFY `ID_Compra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `lista`
--
ALTER TABLE `lista`
  MODIFY `ID_Lista` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `producto`
--
ALTER TABLE `producto`
  MODIFY `ID_Producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `ID_Usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `calificacion`
--
ALTER TABLE `calificacion`
  ADD CONSTRAINT `calificacion_ibfk_1` FOREIGN KEY (`ID_Producto`) REFERENCES `producto` (`ID_Producto`),
  ADD CONSTRAINT `calificacion_ibfk_2` FOREIGN KEY (`ID_Usuario`) REFERENCES `usuario` (`ID_Usuario`);

--
-- Constraints for table `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`ID_Usuario`) REFERENCES `usuario` (`ID_Usuario`),
  ADD CONSTRAINT `carrito_ibfk_2` FOREIGN KEY (`ID_Producto`) REFERENCES `producto` (`ID_Producto`);

--
-- Constraints for table `categoria`
--
ALTER TABLE `categoria`
  ADD CONSTRAINT `categoria_ibfk_1` FOREIGN KEY (`ID_Usuario`) REFERENCES `usuario` (`ID_Usuario`);

--
-- Constraints for table `chat`
--
ALTER TABLE `chat`
  ADD CONSTRAINT `FK_Destinatario` FOREIGN KEY (`ID_Destinatario`) REFERENCES `usuario` (`ID_Usuario`),
  ADD CONSTRAINT `FK_Producto` FOREIGN KEY (`ID_Producto`) REFERENCES `producto` (`ID_Producto`),
  ADD CONSTRAINT `FK_Remitente` FOREIGN KEY (`ID_Remitente`) REFERENCES `usuario` (`ID_Usuario`);

--
-- Constraints for table `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `compra_ibfk_1` FOREIGN KEY (`ID_Usuario`) REFERENCES `usuario` (`ID_Usuario`),
  ADD CONSTRAINT `compra_ibfk_2` FOREIGN KEY (`ID_Metodopago`) REFERENCES `metodopago` (`ID_Metodopago`);

--
-- Constraints for table `imagenproducto`
--
ALTER TABLE `imagenproducto`
  ADD CONSTRAINT `imagenproducto_ibfk_1` FOREIGN KEY (`ID_Producto`) REFERENCES `producto` (`ID_Producto`);

--
-- Constraints for table `lista`
--
ALTER TABLE `lista`
  ADD CONSTRAINT `lista_ibfk_1` FOREIGN KEY (`ID_Usuario`) REFERENCES `usuario` (`ID_Usuario`);

--
-- Constraints for table `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`ID_Categoria`) REFERENCES `categoria` (`ID_Categoria`);

--
-- Constraints for table `productocompra`
--
ALTER TABLE `productocompra`
  ADD CONSTRAINT `productocompra_ibfk_1` FOREIGN KEY (`ID_Compra`) REFERENCES `compra` (`ID_Compra`),
  ADD CONSTRAINT `productocompra_ibfk_2` FOREIGN KEY (`ID_Producto`) REFERENCES `producto` (`ID_Producto`);

--
-- Constraints for table `productolista`
--
ALTER TABLE `productolista`
  ADD CONSTRAINT `productolista_ibfk_1` FOREIGN KEY (`ID_Lista`) REFERENCES `lista` (`ID_Lista`),
  ADD CONSTRAINT `productolista_ibfk_2` FOREIGN KEY (`ID_Producto`) REFERENCES `producto` (`ID_Producto`);

--
-- Constraints for table `videoproducto`
--
ALTER TABLE `videoproducto`
  ADD CONSTRAINT `videoproducto_ibfk_1` FOREIGN KEY (`ID_Producto`) REFERENCES `producto` (`ID_Producto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
