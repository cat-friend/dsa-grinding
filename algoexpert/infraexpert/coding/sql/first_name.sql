/*
Given the employee_table and the department_table below, which are related by their department_id, write a query that returns the Sales employees with a name beginning with B and a salary greater than $50k
*/

/*
LIKE B% to select names that start with B; salary > 50000
need to select only Sales
*/

SELECT * FROM employee_table
    WHERE name LIKE 'B%'
    AND department_id=1
    AND salary > 50000;

/*
not really programmatic. got lucky because 'Sales' is always id = 1;

best: run a query - get the department_di where  department_name = 'Sales', then find employee table where deaprtment_id = target_department_id
*/
