\connect unleash_test;

create function unleash_notifications.unread_notifications_for_user(userId int)
    returns setof unleash_notifications.notifications as $$
        select *
        from unleash_notifications.notifications
        where
            user_table_id = userId and
            read = false
    $$ language sql stable;
