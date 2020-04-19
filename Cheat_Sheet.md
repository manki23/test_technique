# Cheat Sheet
## Laravel Installation
### Install Composer
``` sh
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'e0012edf3e80b6978849f5eff0d4b4e4c79ff1609dd1e613307e16318854d24ae64f26d17af3ef0bf7cfb710ca74755a') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
mv composer.phar /usr/local/bin/composer
```
### Install Laravel
``` bash
composer global require "laravel/installer=~1.1"
PATH="/Users/myriam/.composer/vendor/bin:$PATH"
```
to fix ***RuntimeException The Zip PHP extension is not installed***
``` bash
brew update
brew install php@7.3
brew link php@7.3
brew link php@7.3 --force
```
finally do :
``` bash
composer global update
laravel new
```
### Configuration
...
## Basics
To start the server:  
``` bash
php artisan serve
```
To list all routes:  
``` bash
php artisan route:list
```
## Howto
### create model and migration:
``` bash
php artisan make:model Article -m
```

  __It creates two files:__  
    1. ```./app/Articles.php```  
    2. ```./database/migrations/2020_04_18_204521_create_articles_table.php```  
 ``` php
      public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title', 255)->unique();
            $table->string('author', 255);
            $table->timestamp('date');
            $table->text('content');
            $table->text('image');
        });
    }
```
### create seeder & factory tasks:
*A seeder is used to fill a database table.*
``` bash
php artisan make:seeder ArticleTableSeeder
```
__It creates one file:__ ```./database/seeds/ArticleTableSeeder.php```
that we fill like this:
```php
public function run()
    {
        factory(Article::class, 10)->create();
    }
```
Then do:
``` bash
php artisan make:factory ArticleFactory --model=Article
```
__It creates one file:__ ```./database/factories/ArticleFactory.php```
And fill it with:
```php
$factory->define(Article::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence(rand(5, 21), $asText = false),
        'author' => $faker->name(),
        'date' => $faker->dateTimeBetween('-10 years', 'now', null),
        'content' => $faker->paragraph($nbSentences = 3, $variableNbSentences = true),
        'image' => $faker->imageUrl($width = 640, $height = 480),
    ];
});

```
And in ***./database/seeds/DatabaseSeeder.php*** add:
``` php
public function run()
    {
        $this->call(ArticleTableSeeder::class);
    }
```
### launch migration and population:
Step to do the first time :  
- change ```.env``` like this:
  ```
  DB_CONNECTION=mysql
  DB_HOST=localhost
  DB_PORT=8889
  DB_DATABASE=blog
  DB_USERNAME=root
  DB_PASSWORD='root'
  DB_SOCKET=/Applications/MAMP/tmp/mysql/mysql.sock
  ```
- launch mamp server
- create ```blog``` database on *phpmyadmin*
``` bash
php artisan config:cache 
php artisan cache:clear 
php artisan migrate --seed
```
### create a controller:
``` bash
php artisan make:controller ArticleController --api --model=Article
```
NB: *Using the --api option excludes the create and edit methods.*  
__It creates one file:__ ```./Http/Controllers/ArticleController.php```
Add its routes in ```./routes/api.php``` with:
``` php
Route::apiResource('articles', 'ArticleController');
```
Use ``` php artisan route:list ``` to list all routes.  
***
## Useful links
- https://laravel.com/docs/4.2/installation
- https://laravel.sillo.org/une-api-avec-laravel-6/
- https://github.com/fzaninotto/Faker
