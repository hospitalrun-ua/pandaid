CREATE TABLE roles (
	id integer,
	role_name text
);

CREATE TABLE users (
	id integer PRIMARY KEY AUTOINCREMENT,
	full_name text,
	email text,
	pwd text,
	created_at date,
	role_id integer,
	organization_id text,
	contact_phones text
);

CREATE TABLE organizations (
	id integer PRIMARY KEY AUTOINCREMENT,
	created_at date,
	org_name text
);

CREATE TABLE beneficiaries (
	id integer PRIMARY KEY AUTOINCREMENT,
	created_at date,
	ben_name text,
	latitude float,
	longitude float,
	region_id integer
);

CREATE TABLE requests (
	id integer PRIMARY KEY AUTOINCREMENT,
	organization_id integer,
	benificiary_id integer,
	creator_id integer,
	created_at date,
	updated_at date
);

CREATE TABLE reqest_items (
	id integer PRIMARY KEY AUTOINCREMENT,
	request_id integer,
	item_name text,
	quantity integer
);

CREATE TABLE regions (
	id integer PRIMARY KEY AUTOINCREMENT,
	region_name text
);

