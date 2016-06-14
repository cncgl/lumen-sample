# lumen-sample
lumen による SPA sample

## Prepare Database
- Clone this repo

- Create Database ``lumen_sample`` and user ``lumen_sample`` with password ``lumen_sample``

```
$ cp .env.example .env
```

## Install
- Create a secret code
```
$ ./artisan jwt:secret
```
- Create a migration table
```
$ ./artisan migrate:install
```
- Create tables
```
$ ./artisan migrate
```
- Create user data
```
$ ./artisan db:seed
```

## Development
```
$ cd public
$ php -S localhost:8080
```
another terminal
```
$ cd client
$ npm run build
$ cd build
$ ws -p 3000  # ws - npm i -g local-web-server
```
visit [http://localhost:3000](http://localhost:3000)

## License
[MIT](LICENSE)