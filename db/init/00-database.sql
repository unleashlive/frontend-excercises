CREATE DATABASE unleash_test;
\connect unleash_test;
CREATE SCHEMA unleash_notifications;
CREATE TABLE unleash_notifications.users (
    id SERIAL PRIMARY KEY,
    login TEXT,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
COMMENT ON TABLE unleash_notifications.users IS
'Users table';
CREATE TABLE unleash_notifications.notifications (
    id SERIAL PRIMARY KEY,
    title TEXT,
    description TEXT,
    read BOOLEAN DEFAULT FALSE,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_table_id INTEGER NOT NULL REFERENCES unleash_notifications.users(id)
);
COMMENT ON TABLE unleash_notifications.notifications IS
'User notifications table';
