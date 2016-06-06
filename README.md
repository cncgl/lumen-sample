# lumen-sample
lumen による SPA sample

## Prepare Database
Create Database ``lumen_sample`` and user ``lumen_sample`` with password ``lumen_sample``

## Install
Create a secret code
```
$ ./artisan jwt:secret
```
Create a migration table
```
$ ./artisan migrate:install
```
Create tables
```
$ ./artisan migrate
```
Create user data
```
$ ./artisan db:seed
```

## Development
```
$ cd public
$ php -S localhost:8080
```

## License
[MIT](LICENSE)