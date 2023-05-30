# jsn-test-task

## Api setup

The app requires PostgreSQL to be installed locally. Also you have to replace DB_PASSWORD variable in .env and "password" field in /api/db/config/config.json with your Postgres superuser password.

```bash
$ cd api
$ npm ci
$ npm run db:create
$ npm run db:migrate
$ npm run db:seed
```
## Client setup

```bash
$ cd client
$ npm ci
```

## Running the app

To run the app run following commands in two separate terminals.

To run the api:
```bash
$ cd api
$ npm run dev
```

To run the client:
```bash
$ cd client
$ npm run start
```

## Client

Client app will be available at http://localhost:3000/
