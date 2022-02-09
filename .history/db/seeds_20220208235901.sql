INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Store Manager', 80000, 1),
    ('Salesperson', 60000, 1),
    ('Chief Engineer', 80000, 2),
    ('Engineer', 70000, 2),
    ('Chief Financial Officer', 90000, 3),
    ('Accountant', 60000, 3),
    ('Chief Legal Officer', 100000, 4),
    ('Legal Assistant', 70000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Jordan', "McGuire", 1, 1),
    ('Tyriq', "Wright", 2, null),
    ('Alyssia', 'Ross', 2, null),
    ('Bethany', 'Flores', 2, null),
    ('Denny', 'Blair', 3, 1),
    ('Meredith', 'Harwood', 4, null),
    ('Regan', 'Park', 4, null),
    ('Michael', 'Davis', 4, null),
    ('Roger', 'Penn', 4, null),
    ('Liliana', 'Pike', 5, 1),
    ('Carrie', 'Riggs', 6, null),
    ('Simon', 'Little', 6, null),
    ('Daniel', 'Trujillo', 6, null),
    ('Jared', 'Parsons', 7, 1),
    ('Christine', 'Gibbons', 8, null),
    ('Roberto', )



