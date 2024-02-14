/*
Given the employee_table and the department_table, which are related by their department_id, write a query tht returns the departments that have employees, sorted in descending order based on the naverage salary of their employees.

The returned table should have two columns: department_nname and average_salary, where average_salary is the average_salary of each department's employees
*/

/*
first find average of each department
then select for department name based on department id
*/

SELECT department_name, avg(salary) as average_salary
    FROM employee_table
    JOIN department_table ON employee_table.department_id=department_table.department_id
    GROUP BY employee_table.department_id
    ORDER BY average_salary DESC;
