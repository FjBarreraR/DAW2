create table cliente (
	id serial primary key,
	nombre varchar(100),
	correo_electronico varchar(200),
	contrasenya varchar(600)
);

create table pedido (
	id serial primary key,
	id_cliente int,
	precio numeric(5,2),
	fecha timestamp,
	constraint "fk_pedido_cliente" foreign key (id_cliente) references cliente(id)
);

create table producto (
	id serial primary key,
	tipo int default 0,
	descripcion varchar(200),
	color int default 0,
	precio numeric(5,2)
);

create table talla (
	id serial primary key,
	descripcion varchar(50)
);

create table pedido_producto (
	id serial primary key,
	id_pedido int,
	id_producto int,
	id_talla int,
	cantidad int,
	constraint "fk_pedido_pedido" foreign key (id_pedido) references pedido(id),
	constraint "fk_producto_producto" foreign key (id_producto) references producto(id),
	constraint "fk_talla_talla" foreign key (id_talla) references talla(id)
);

create table inventario(
	id serial primary key,
	id_producto int,
	id_talla int,
	cantidad int,
	constraint "fk_inventario_producto" foreign key (id_producto) references producto(id),
	constraint "fk_inventario_talla" foreign key (id_talla) references talla(id)
);
