-- CREATE DATABASE jwt;

-- CREATE TABLE users(
--     user_id uuid PRIMARY KEY DEFAULT
--     uuid_generate_v4(),
--     user_name VARCHAR(255) NOT NULL,
--     user_email VARCHAR(255)
-- )


-- CREATE TABLE expenses(
--     id SERIAL PRIMARY KEY,
--     item VARCHAR(255),
--     user_name VARCHAR(50),
--     price INT,
--     budget INT,
--     balance INT,
--     purchase_date DATE
-- );

CREATE DATABASE jwtlogin;

CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT 
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

INSERT INTO users (user_name, user_email, user_password) VALUES ('henry', 'henri@gmail.com', 'kthl8822');