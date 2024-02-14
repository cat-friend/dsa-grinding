/*
Given the product_table, write a query that returns the products wit ha price greater than or equal to 50 and less than or equal to 100, sorted in ascending order based on their price
*/

SELECT * FROM product_table
    WHERE price >= 50 AND price <= 100
    ORDER BY price ASC;
