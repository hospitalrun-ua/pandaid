

-- insert some roles
INSERT INTO roles
    (role_name, id)
VALUES("admin", 1);

INSERT INTO roles
    (role_name, id)
VALUES("supervisor", 2);


-- insert some users
INSERT INTO users
    (full_name, email, pwd,created_at,role_id,contact_phones)
VALUES("Андрієнко Андрій Андрійович", "test@test.com", "test123", DateTime('now'), 1, "0991234567,0941234567,0441234567");

-- insert some regions
INSERT INTO regions
    (region_name)
VALUES("Київська");
INSERT INTO regions
    (region_name)
VALUES("Львівська");

INSERT INTO regions
    (region_name)
VALUES("Чернігівська");

INSERT INTO regions
    (region_name)
VALUES("Сумська");
