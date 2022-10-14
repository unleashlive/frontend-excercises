\connect unleash_test;

INSERT INTO unleash_notifications.users (login) VALUES
('test_user'),
('another_user');

INSERT INTO unleash_notifications.notifications (title, description, user_table_id) VALUES
('Model Completed', 'Model number 1231230929 was completed', 1),
('Streaming started', 'Streaming for device 1233123 has started', 1),
('Streaming finished', 'Streaming for device 1233123 has finished', 1);
