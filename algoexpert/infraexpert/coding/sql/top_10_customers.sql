/*
Given the order_table, write a query that returns the 10 customer_ids with the highest total amounts, sorted in descending order based on their total amounts.

The returned table should have two c olumns: customer_id and amount, where amount is the ntotal of each customer_ids amounts
*/

SELECT customer_id, SUM(amount) as amount
FROM order_table
GROUP BY customer_id
ORDER BY amount desc;
