create schema if not exists "master";

create table master.users(
	id serial primary key,
	name varchar(100),
	is_admin boolean
);
INSERT INTO master.users (name, is_admin) VALUES ('Pak Anton', TRUE); 

create table master.vehicle_brand(
	id serial primary key, 
	name varchar(100) not null
);

create table master.vehicle_type(
	id serial primary key,
	name varchar(100) not null,
	brand_id int,
	constraint vehicle_type_brand_id_fkey foreign key (brand_id) references master.vehicle_brand(id) on delete cascade
);

create table master.vehicle_model(
	id serial primary key,
	name varchar(100) not null,
	type_id int,
	constraint vehicle_model_type_id_fkey foreign key (type_id) references master.vehicle_type(id) on delete cascade
);


create table master.vehicle_year(
	id serial primary key,
	year int
);

create table master.pricelist(
	id serial primary key,
	code varchar(100),
	price decimal,
	year_id int,
	model_id int,
	constraint pricelist_year_id_fkey foreign key (year_id) references master.vehicle_year(id) on delete cascade,
	constraint pricelist_type_model_id_fkey foreign key (model_id) references master.vehicle_model(id) on delete cascade
);

INSERT INTO master.vehicle_brand (name) VALUES ('BMW'); 
INSERT INTO master.vehicle_type (name, brand_id) VALUES ('car',1); 
INSERT INTO master.vehicle_model (name, type_id) VALUES ('Z4',3); 
INSERT INTO master.vehicle_year (year) VALUES (2021);
INSERT INTO master.pricelist (code, price, year_id, model_id) VALUES ('2XC45','150000000.0',2,3); 
