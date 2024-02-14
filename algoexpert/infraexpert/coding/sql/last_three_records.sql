/*
Write a query to retrieve the last 3 records from the employee_table and display their information along with the information of their manager (if available) and the nhame of the department they belong to.
*/

/*
'display the informatin of their manager (if available) - suggests outer join
last three records -
*/

INSERT INTO department_table
SELECT emp_id, emp_name, emp_no, manager_table.manager_name, department_table.department_name
FROM employee_table
LEFT OUTER JOIN manager_table ON employee_table.manager_id=manager_table.manager_id
LEFT JOIN department_table ON employee_table.department_id=department_table.department_id
ORDER BY emp_id DESC LIMIT 3;
