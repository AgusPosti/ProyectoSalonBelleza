-- BASE DE DATOS CREADA--
CREATE SCHEMA IF NOT EXISTS peluqueria_db DEFAULT CHARACTER SET utf8mb4;

-- USAMOS LA BASE DE DATOS--
USE peluqueria_db;

-- Tabla CLIENTES --
CREATE TABLE CLIENTES (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(100) UNIQUE,
    email VARCHAR(100) UNIQUE
);

-- Tabla EMPLEADOS --
CREATE TABLE EMPLEADOS (
    id_empleado INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    especialidad VARCHAR(100) NOT NULL
);

-- Tabla SERVICIOS --
CREATE TABLE SERVICIOS (
    id_servicio INT AUTO_INCREMENT PRIMARY KEY,
    nombre_servicio VARCHAR(120) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    duracion INT NOT NULL 
);

-- Tabla TURNOS --
CREATE TABLE TURNOS (
    id_turno INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    id_empleado INT NOT NULL,
    fecha_hora DATETIME NOT NULL,
    estado VARCHAR(30) NOT NULL,
    CONSTRAINT fk_turno_cliente FOREIGN KEY (id_cliente) REFERENCES CLIENTES(id_cliente),
    CONSTRAINT fk_turno_empleado FOREIGN KEY (id_empleado) REFERENCES EMPLEADOS(id_empleado)
);

-- Tabla TURNOS_SERVICIOS --
CREATE TABLE TURNOS_SERVICIOS (
    id_turno INT NOT NULL,
    id_servicio INT NOT NULL,
    PRIMARY KEY (id_turno, id_servicio),
    CONSTRAINT fk_ts_turno FOREIGN KEY (id_turno) REFERENCES TURNOS(id_turno),
    CONSTRAINT fk_ts_servicio FOREIGN KEY (id_servicio) REFERENCES SERVICIOS(id_servicio)
);
