CREATE TABLE payroll (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(60) not null,
    last_name VARCHAR(80) not null,
    id_number INTEGER not null,
    job_title VARCHAR(60),
    annual_salary INTEGER not null
);

INSERT INTO payroll ("first_name", "last_name", "id_number", "job_title", "annual_salary")
VALUES ('Jonny', 'Holupchinski', 1, 'Programmer', 65000),
('Mary', 'White', 56, 'Programmer', 85000),
('Aaron', 'Holupchinski', 4, 'Museum Guide', 45000);
