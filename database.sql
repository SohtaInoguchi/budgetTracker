-- CREATE DATABASE jwt;

-- CREATE TABLE users(
--     user_id uuid PRIMARY KEY DEFAULT
--     uuid_generate_v4(),
--     user_name VARCHAR(255) NOT NULL,
--     user_email VARCHAR(255)
-- )

CREATE DATABASE expense;

CREATE TABLE expenses(
    id SERIAL PRIMARY KEY,
    item VARCHAR(255),
    price INT,
    purchase_date DATE
)