** Unleashlive frontend challange **

There are 2 components in this repo.
One is for db and graphql backend.
Second one is frontend application.

***Backend***

To build and start graphql backend just execute
```docker-compose build && docker-compose up```

Then you will be able to access graphiql front for graphql testing on: `0.0.0.0:5555/graphiql`

There you can look for available queries and structure.
There are few queries exposed, for example:
`unreadNotificationsForUser(userId: !Int)` that allows you to get all unread notifications for given user.

Using graphiql you can test queries and mutations for this repo and also add notifications to underlaying database when working with frontend.


***Frontend***
To run current frontend just go into the unleash-started and run
```pnpm i && pnpm run start```
alternatively, when using npm you can also do just:
```npm i && npm run start```

That should get you started and running.

Excercise is quite clearly described in the application itself.


***Warnings***
For now backend can be tricky to work with, because there are CORS issues when running backend in docker.
That's why in current version of frontend excersise access to graphql is commented out.

